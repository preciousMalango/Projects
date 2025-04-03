import React from 'react'
import './Footer.css'
import { FaFacebook } from 'react-icons/fa6'
import { CgInstagram } from 'react-icons/cg'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="contacts">
                    <div>Contact Us</div>
                    <p>0994506032</p>
                    <p>0894079775</p>
                </div>
                <div className="about">
                    <div>About Us</div>
                    <p>We supply food of your choice.</p>
                </div>

                <div className="socials">
                    <div>Follow Us</div>
                    <div className='icons'>
                        <div><FaFacebook style={{ fontSize: "24px" }} /></div>
                        <div><CgInstagram style={{ fontSize: "24px" }} /></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer