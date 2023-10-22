import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
    LoginPage,
    RegisterPage,
    HomePage,
    ContactPage,
    AboutPage,
    PostingPage
} from '../pages'

const MainContent = () => {
    return (
        <>
            <Routes>
                <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
                <Route path='/' element={<HomePage></HomePage>}></Route>
                <Route path='/post' element={<PostingPage></PostingPage>}></Route>
                <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
                <Route path='/about' element={<AboutPage></AboutPage>}></Route>
            </Routes>
        </>
    )
}

export default MainContent