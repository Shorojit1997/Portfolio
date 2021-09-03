import React from 'react';
import './Footer.css'
import {ImLocation} from 'react-icons/im'
import{AiFillMail,AiFillFacebook,AiFillGithub} from 'react-icons/ai'
import {IoMdCall} from 'react-icons/io' 
import {GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {
    return (
        <div className='_footer' id='contact'>
            <div className='card card_size'>
                <div className='mx-auto pt-5 fw-bold fs-1 w-100'>CONTACT</div>
                <div className='row m-0 p-3 mb-4'>

                    <div className='col-md-6 col-sm-12 align-items-center justify-content-center'>
                        <h3 className='w-100 fs-3 fw-bold mt-3 mb-5 text-decoration-underline'>Send A Message</h3>
                        <input className="form-control mt-2" type="text" placeholder="Name" aria-label="default input example" />
                        <input className="form-control mt-2" type="text" placeholder="Enter your email..." aria-label="default input example" />
                        <div className="form-floating">
                            <textarea className="form-control mt-2" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                            <label htmlFor="floatingTextarea2">Message</label>
                        </div>

                    </div>

                    <div className='col-md-6 col-sm-12 align-items-center justify-content-center'>
                        <h3 className='w-100 fs-3 fw-bold mt-3 mb-5 text-decoration-underline'>Get In Tough</h3>
                        <div className='d-flex align-items-center'>
                            <p className='text-warning fs-4 fw-bold ms-3 me-3'><ImLocation/></p>
                            <p className='fs-5 fw-bold text-start w-100 text-secondary'>Gopalganj Sadar, Gopalganj-8100</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <p className='text-warning fs-4 fw-bold ms-3 me-3'><IoMdCall/></p>
                            <p className='fs-5 fw-bold text-start w-100 text-secondary'>+880-1712198111</p>
                        </div>
                        <div className='d-flex align-items-center '>
                            <p className='text-warning fs-4 fw-bold ms-3 me-3'><AiFillMail/></p>
                            <p className='fs-5 fw-bold text-start w-75 text-secondary'>shorojitsarkar1997@gmail.com</p>
                        </div>
                        <div className='hori_line'></div>
                        <div className='d-flex align-items-center mt-5'>
                            <a href='https://web.facebook.com/profile.php?id=100010271899204' target='_blank' rel="noreferrer" className='social_link'><AiFillFacebook/></a>
                            <a href='https://www.linkedin.com/in/sagor-sarkar-6130b2146/' target='_blank' rel="noreferrer" className='social_link'><GrLinkedinOption/></a>
                            <a href='https://github.com/Shorojit1997' className='social_link' target='_blank' rel="noreferrer"><AiFillGithub/></a>
                          
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Footer;