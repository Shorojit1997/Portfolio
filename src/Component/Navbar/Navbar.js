import React from 'react';
import './Navbar.css'
import { Link } from 'react-scroll'
// import { AiFillDatabase } from 'react-icons/ai';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg sticky-top">
            <div className="container-fluid">
                {/* <a className="navbar-brand ms-1 border border-1 rounded ps-2 pe-2" href="#home"><h4 className='fw-bold text_color'>SHOROJIT SARKAR</h4></a> */}
                <Link activeClass="active" className="navbar-brand ms-1 border border-1 rounded ps-2 pe-2" to="home" spy={true}  smooth={false} duration={600} ><h4 className='fw-bold text_color'>SHOROJIT SARKAR</h4></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link me-3 fw-bold" to="home" spy={true}  smooth={false} duration={600} >HOME</Link>
                        </li>
                        <li classn="nav-item">
                            <Link activeClass="active" className="nav-link me-3 fw-bold" to="about" spy={true}  smooth={false} duration={600} >ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" className="nav-link me-3 fw-bold" to="protfolio" spy={true}  smooth={false} duration={600} >PROJECT</Link>
                        </li>
                        <li className="nav-item">
                        <Link activeClass="active" className="nav-link me-3 fw-bold" to="protfolio" spy={true}  smooth={false} duration={600} >BLOG</Link>
                        </li>
                        <li className="nav-item">
                        <Link activeClass="active" className="nav-link me-3 fw-bold" to="contact" spy={true}  smooth={false} duration={600} >CONTACT</Link>
                           
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;