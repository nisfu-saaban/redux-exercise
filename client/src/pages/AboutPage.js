import React from 'react'

const AboutPage = () => {
    return (
        <div className='about-container p-3'>
            <div className='about'>
                <h6>Nisfu Saaban</h6>
                <p>Jl Pelita Bima NTB</p>
                <a href='https://github.com/nisfu-saaban'>github link</a>
                <p>Software enginer</p>
            </div>
            <div className='study'>

                <h5>Study</h5>
                <ul className='list-group'>
                    <li className='list-group-item'>Madrasah Ibtidaiyah Kota Bima</li>
                    <li className='list-group-item'>MTSN 1 Kota Bima</li>
                    <li className='list-group-item'>SMAN 2 Kota Bima</li>
                </ul>
            </div>

            <div className='organization'>

                <h5>Organization</h5>
                <ul className='list-group'>
                    <li className='list-group-item'>ITC</li>
                </ul>
            </div>

            <div className='experience'>

                <h5>Experience</h5>
                <ul className='list-group'>
                    <li className='list-group-item'>Design Grafis</li>
                    <li className='list-group-item'>Android native kotlin</li>

                </ul>
            </div>

        </div>
    )
}

export default AboutPage