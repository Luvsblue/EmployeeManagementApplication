import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const ListEmployeeComponent = () => {
    const [employeeArray, setEmployeeArray] = useState([]);

    useEffect(() => {
        getAllEmployee();
    }, []);

    const getAllEmployee = async () => {
        try {
            const response = await EmployeeService.getAllEmployee();
            setEmployeeArray(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteEmployee = async (id) => {
        try {
            await EmployeeService.deleteEmployee(id);
            getAllEmployee();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container'>
            <Link to="/add-employee" className='btn btn-primary mb-2 mt-3'>Add Employee</Link>
            <h2 className='text-center mb-4'>List Employee</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeArray.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <Link to={`/add-employee/${employee.id}`} className='btn btn-info me-2'>Update</Link>
                                <button onClick={() => deleteEmployee(employee.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployeeComponent;
