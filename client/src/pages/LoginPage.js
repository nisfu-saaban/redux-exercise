import React, { useState } from 'react'
import { login } from '../axios/userAxios';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom";

const LoginPage = () => {

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const dispatch = useDispatch();

    const { loginResult } = useSelector(state => state.UserReducer)

    const submitLogin = (form) => {
        dispatch(login(form))
    }

    return (

        <div className="container d-flex justify-content-center align-items-center vh-100 ">
            <div className="col-6 shadow-lg p-5 login-bg">
                <div className="card-body">
                    <h5 className="card-title mb-3">Login</h5>
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
                            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    type="password" name='password' className="form-control shadow" id="inputPassword" />
                            </div>
                        </div>
                        <div className='d-flex'>
                            <Link
                                onClick={() => submitLogin()}
                                to={'/'} type="submit" className="btn btn-dark btn-large shadow-lg">Login</Link>
                            <Link to='/register' className='ms-auto mt-3 link-underline-light'>Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage