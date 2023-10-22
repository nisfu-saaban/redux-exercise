import React, { useState } from 'react'
import { register } from '../axios/userAxios';
import { useDispatch, useSelector } from 'react-redux'

import { Link } from "react-router-dom";

const RegisterPage = () => {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })

    const dispatch = useDispatch();

    const submitRegister = (form) => {
        dispatch(register(form))
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100 ">
                <div className="col-6 shadow-lg p-5 login-bg">
                    <div className="card-body">
                        <h5 className="card-title mb-3">Register</h5>
                        <form>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Username</label>
                                <div className="col-sm-10">
                                    <input
                                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                                        type="text" className="form-control shadow" id="staticEmail" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        type="email" className="form-control shadow" id="staticEmail" />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input
                                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        type="password" className="form-control shadow" id="inputPassword" />
                                </div>
                            </div>
                            <div className='d-flex'>
                                <Link
                                    onClick={() => submitRegister()}
                                    to='/' type="submit" className="btn btn-dark btn-large shadow-lg">Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterPage