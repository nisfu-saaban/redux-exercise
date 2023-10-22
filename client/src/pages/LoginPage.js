import React from 'react'


const LoginPage = () => {

    return (

        <div className="container d-flex justify-content-center align-items-center vh-100 ">
            <div className="col-6 shadow-lg p-5 login-bg">
                <div className="card-body">
                    <h5 className="card-title mb-3">Login</h5>
                    <form>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control shadow" id="staticEmail" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control shadow" id="inputPassword" />
                            </div>
                        </div>
                        <div className='d-flex'>
                            <button type="submit" className="btn btn-dark btn-large shadow-lg">Login</button>
                            <a href='#' className='ms-auto mt-3 link-underline-light'>Register</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage