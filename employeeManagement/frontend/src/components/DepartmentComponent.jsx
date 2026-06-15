import React, { useState, useEffect } from 'react';
import DepartmentService from '../services/DepartmentService';

function DepartmentComponent() {
    // ── Add form ──────────────────────────────────────────
    const [newName, setNewName]     = useState('');
    const [addMsg, setAddMsg]       = useState({ text: '', ok: true });

    // ── Search form ───────────────────────────────────────
    const [searchName, setSearchName]     = useState('');
    const [suggestions, setSuggestions]   = useState([]);
    const [searchResult, setSearchResult] = useState(null);
    const [searchMsg, setSearchMsg]       = useState('');
    const [empCount, setEmpCount]         = useState(null);

    // ── Departments list (for suggestions) ────────────────
    const [allDepts, setAllDepts] = useState([]);

    useEffect(() => {
        DepartmentService.getAll()
            .then(res => setAllDepts(res.data))
            .catch(() => setAllDepts([]));
    }, []);

    // ── Add ───────────────────────────────────────────────
    const handleAdd = async (e) => {
        e.preventDefault();
        const trimmed = newName.trim();
        if (!trimmed) { setAddMsg({ text: 'Please enter a department name.', ok: false }); return; }

        try {
            const res = await DepartmentService.create({ name: trimmed });
            setAddMsg({ text: `Department "${res.data.name}" created (id ${res.data.id}).`, ok: true });
            setNewName('');
            setAllDepts(prev => [...prev, res.data]);
        } catch (err) {
            const msg = err.response?.data?.error || 'Error creating department.';
            setAddMsg({ text: msg, ok: false });
        }
    };

    // ── Search (shared by button click and suggestion pick) ─
    const runSearch = async (name) => {
        setSearchMsg('');
        setSearchResult(null);
        setEmpCount(null);
        setSuggestions([]);
        try {
            const res = await DepartmentService.findByName(name);
            const dept = res.data;
            setSearchResult(dept);
            const countRes = await DepartmentService.countEmployees(dept.id);
            setEmpCount(countRes.data.employeeCount);
        } catch (err) {
            setSearchMsg(err.response?.status === 404 ? 'Department not found.' : 'Search error.');
        }
    };

    const handleSearchInput = (e) => {
        const val = e.target.value;
        setSearchName(val);
        setSuggestions(
            val.trim()
                ? allDepts.filter(d => d.name.toLowerCase().includes(val.toLowerCase()))
                : []
        );
    };

    const pickSuggestion = (name) => {
        setSearchName(name);
        runSearch(name);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const trimmed = searchName.trim();
        if (!trimmed) { setSearchMsg('Please enter a name to search.'); return; }
        runSearch(trimmed);
    };

    return (
        <div className="container">
            <h2 className="page-title mt-4">Departments</h2>

            {/* ── Add Department ─────────────────────────── */}
            <div className="card mb-4">
                <div className="card-header">Add Department</div>
                <div className="card-body">
                    <form onSubmit={handleAdd}>
                        <div className="d-flex gap-2">
                            <input
                                className="form-control"
                                placeholder="Department name"
                                value={newName}
                                onChange={e => setNewName(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </form>
                    {addMsg.text && (
                        <p className={addMsg.ok ? 'msg-success' : 'msg-error'}>{addMsg.text}</p>
                    )}
                </div>
            </div>

            {/* ── Find Department ────────────────────────── */}
            <div className="card">
                <div className="card-header">Find Department</div>
                <div className="card-body">
                    <form onSubmit={handleSearchSubmit}>
                        <div className="d-flex gap-2">
                            <input
                                className="form-control"
                                placeholder="Search by name"
                                value={searchName}
                                onChange={handleSearchInput}
                                autoComplete="off"
                            />
                            <button
                                type="submit"
                                className={`btn ${searchName.trim() ? 'btn-primary' : 'btn-secondary'}`}
                            >Find</button>
                        </div>
                    </form>

                    {suggestions.length > 0 && (
                        <div className="suggestions-box mt-1">
                            {suggestions.map(dept => (
                                <div
                                    key={dept.id}
                                    className="suggestion-item"
                                    onClick={() => pickSuggestion(dept.name)}
                                >
                                    {dept.name}
                                </div>
                            ))}
                        </div>
                    )}

                    {searchMsg && <p className="msg-error mt-2">{searchMsg}</p>}

                    {searchResult && (
                        <div className="mt-3">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td style={{ color: '#f97316', width: '35%', fontWeight: 600 }}>ID</td>
                                        <td style={{ color: '#1e293b' }}>{searchResult.id}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ color: '#f97316', fontWeight: 600 }}>Name</td>
                                        <td style={{ color: '#1e293b' }}>{searchResult.name}</td>
                                    </tr>
                                    {empCount !== null && (
                                        <tr>
                                            <td style={{ color: '#f97316', fontWeight: 600 }}>Employees</td>
                                            <td style={{ color: '#1e293b' }}>{empCount}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DepartmentComponent;