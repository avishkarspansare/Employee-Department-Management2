import axios from 'axios';

const BASE = process.env.REACT_APP_EMPLOYEE_API_BASE_URL;

const EmployeeService = {
    getAll:       ()           => axios.get(BASE),
    getById:      (id)         => axios.get(`${BASE}/${id}`),
    create:       (employee)   => axios.post(BASE, employee),
    update:       (id, employee) => axios.put(`${BASE}/${id}`, employee),
    remove:       (id)         => axios.delete(`${BASE}/${id}`),
};

export default EmployeeService;
