import React from 'react'
import { FaCommentDots, FaPhoneFlip, FaMailchimp } from 'react-icons/fa6'

const ContactPage = () => {
    return (
        <div className='d-flex justify-content-center flex'>
            <div className='content p-2 '>
                <div>
                    <FaPhoneFlip></FaPhoneFlip>
                </div>
                <h5>By Phone</h5>
                <p>North Carolina</p>
                <p>08423951234</p>
                <p>international: </p>
                <p>0348193534913</p>
            </div>

            <div className='content p-2 '>
                <div>
                    <FaMailchimp></FaMailchimp>
                </div>
                <h5>Email</h5>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Proin fringilla lacus
                    eget mauris laoreet ultricies. In sit
                    amet metus lacus. Nam sem odio, euismod
                    et vestibulum vel, sodales in purus.</p>
                <p>08423951234</p>
                <p>international: </p>
                <p>0348193534913</p>
            </div>

            <div className='content p-2 '>
                <div>
                    <FaCommentDots></FaCommentDots>
                </div>
                <h5>Chat</h5>
                <p>North Carolina</p>
                <p>08423951234</p>
                <p>international: </p>
                <p>0348193534913</p>
            </div>
        </div>
    )
}

export default ContactPage