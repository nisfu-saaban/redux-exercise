import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { loginResult } = useSelector(state => state.UserReducer)

    const logout = () => {
        localStorage.clear()
        !loginResult
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid nav-bg">
                    <Link class="navbar-brand logo-company" to="/">Pedia</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/post">Posting</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                        {
                            loginResult ? (
                                <div>
                                    <a className='nav-link' onClick={() => logout()} ></a>
                                </div>) : (
                                <div className="ms-auto sign">
                                    <Link to='/login' className='nav-link'>Login</Link>
                                    <Link to='register' className='nav-link'>register</Link>
                                </div>
                            )
                        }

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar