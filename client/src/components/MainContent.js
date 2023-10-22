import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage, RegisterPage, HomePage, ContactPage } from '../pages'

const MainContent = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
                <Route path='/' element={<HomePage></HomePage>}></Route>
                <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
            </Routes>
        </>
    )
}

export default MainContent