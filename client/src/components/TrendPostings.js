import React from 'react'
import { FaArrowTrendUp, FaClone } from 'react-icons/fa6'

const TrendPostings = () => {
    return (
        <div className='trend-container p-3'>
            <div className='trend-post'>
                <FaArrowTrendUp />
                Trend on Pedia
            </div>
            <div className='trend-content'>
                <div className='trend-row mb-1'>
                    <div className='trend-items'>
                        <p>user name</p>
                        <h6>posting title</h6>
                        <p>date</p>
                    </div>
                    <div className='trend-items'>
                        <p>user name</p>
                        <h6>posting title</h6>
                        <p>date</p>
                    </div>
                    <div className='trend-items'>
                        <p>user name</p>
                        <h6>posting title</h6>
                        <p>date</p>
                    </div>
                </div>
                <div className='trend-row mb-1'>
                    <div className='trend-items'>
                        <p>user name</p>
                        <h6>posting title</h6>
                        <p>date</p>
                    </div>
                    <div className='trend-items'>
                        <p>user name</p>
                        <h6>posting title</h6>
                        <p>date</p>
                    </div>
                    <div className='trend-items'>
                        <p>user name</p>
                        <h6>posting title</h6>
                        <p>date</p>
                    </div>
                </div>
            </div>
            <div className='trend-post mb-4'>
                <FaClone />
                Related content
            </div>
            <div className='row ms-4'>
                <div className='col-8 items'>
                    <p>user name</p>
                    <h6>posting title</h6>
                    <p>sub content</p>
                    <p>date</p>
                </div>
                <div className='col-8 items'>
                    <p>user name</p>
                    <h6>posting title</h6>
                    <p>sub content</p>
                    <p>date</p>
                </div>
                <div className='col-8 items'>
                    <p>user name</p>
                    <h6>posting title</h6>
                    <p>sub content</p>
                    <p>date</p>
                </div>
                <div className='col-8 items'>
                    <p>user name</p>
                    <h6>posting title</h6>
                    <p>sub content</p>
                    <p>date</p>
                </div>
            </div>
        </div>
    )
}

export default TrendPostings