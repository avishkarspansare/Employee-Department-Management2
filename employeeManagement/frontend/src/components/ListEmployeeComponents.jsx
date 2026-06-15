import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ListEmployeeComponents() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getAll().then(res => setEmployees(res.data));
    }, []);

    const deleteEmployee = (id) => {
        if (!window.confirm('Delete this employee?')) return;
        EmployeeService.remove(id).then(() =>
            setEmployees(prev => prev.filter(e => e.id !== id))
        );
    };

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="page-title mb-0">Employees</h2>
                <button className="btn btn-primary" onClick={() => navigate('/add-employee')}>
                    + Add Employee
                </button>
            </div>

            <div className="card">
                <table className="table table-bordered mb-0">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length === 0 ? (
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center', color: '#94a3b8', padding: '2rem' }}>
                                    No employees found. Add one to get started.
                                </td>
                            </tr>
                        ) : employees.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.lastName}</td>
                                <td>{emp.emailId}</td>
                                <td>{emp.department ? emp.department.name : '—'}</td>
                                <td>
                                    <div className="action-btns">
                                        <button
                                            className="btn btn-info"
                                            onClick={() => navigate(`/view-employee/${emp.id}`)}
                                        >View</button>
                                        <button
                                            className="btn btn-success"
                                            onClick={() => navigate(`/update-employee/${emp.id}`)}
                                        >Edit</button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteEmployee(emp.id)}
                                        >Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListEmployeeComponents;