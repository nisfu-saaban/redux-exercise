import React from 'react'
import { FaRegNoteSticky } from 'react-icons/fa6'

const Hiro = () => {
    return (
        <div className='hiro-container'>
            <div className='d-flex'>
                <div className='col-6 hiro'>
                    <h1>Stay Courious.</h1>
                    <h4>Discover stories, thinking, and expertise <br />
                        from writers on any topic.</h4>
                    <button className='btn btn-dark btn-lg rounded-pill'>Start reading</button>
                </div>

                <div className='col-6 hiro-bg '></div>
            </div>
        </div>
    )
}

export default Hiro