import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();
        if (firstName && lastName && email) {
            const employeeData = { firstName, lastName, email };
            const saveOrUpdate = id ? EmployeeService.updateEmployee(id, employeeData) : EmployeeService.saveEmployee(employeeData);
            saveOrUpdate.then(() => navigate("/employee")).catch(error => console.log(error));
        } else {
            alert("Please fill in all fields.");
        }
    }

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(id).then(res => {
                const { firstName, lastName, email } = res.data;
                setFirstName(firstName);
                setLastName(lastName);
                setEmail(email);
            }).catch(error => console.log(error));
        }
    }, [id]);

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>{id ? "Update Employee" : "Add Employee"}</h2>
                    <div className='card-body'>
                        <form>
                            <input className='form-control mb-2' value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder='Enter First Name' />
                            <input className='form-control mb-2' value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder='Enter Last Name' />
                            <input className='form-control mb-2' value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' />
                            <button onClick={(e) => saveEmployee(e)} className='btn btn-success'>Save</button>
                            <Link to={"/employee"} className='btn btn-danger ms-2'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent;
