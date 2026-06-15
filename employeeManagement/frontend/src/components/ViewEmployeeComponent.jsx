import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ViewEmployeeComponent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        EmployeeService.getById(id).then(res => setEmployee(res.data));
    }, [id]);

    if (!employee) {
        return <div className="container mt-4" style={{ color: '#64748b' }}>Loading…</div>;
    }

    const rows = [
        ['Employee ID', employee.id],
        ['First Name', employee.firstName],
        ['Last Name', employee.lastName],
        ['Email', employee.emailId],
        ['Department', employee.department ? employee.department.name : '—'],
    ];

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-4">
                        <div className="card-header">Employee Details</div>
                        <div className="card-body">
                            <table className="table mb-3">
                                <tbody>
                                    {rows.map(([label, value]) => (
                                        <tr key={label}>
                                            <td style={{ color: '#f97316', width: '40%', fontWeight: 600 }}>{label}</td>
                                            <td style={{ color: '#1e293b' }}>{value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="action-btns">
                                <button
                                    className="btn btn-success"
                                    onClick={() => navigate(`/update-employee/${id}`)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => navigate('/employees')}
                                >
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewEmployeeComponent;