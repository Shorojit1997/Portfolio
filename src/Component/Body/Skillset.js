import React from 'react';
import './Intro.css'
const style1={height:'.4rem',marginBottom:'15px'};

const Skillset = () => {
    return (
        <div className='row m-0 p-3 text_col'>
            <div className='col-sm-12 col-lg-6 align-item-center mb-5'>
                <div className='card card-body'>
                    <h3 className='text-decoration-underline '>Profile</h3>
                    <p className='text-start fs-5 '><b>Name:</b>  Shorojit Kumar Sarkar</p>
                    <p className='text-start fs-5 m-0'><b>Education:</b></p>
                    <p className='text-start fs-6 fw-bold m-0'>Bachelor of Computer Science &amp; Engineering (CSE)</p>
                    <p className='text-start fs-6 mt-0'>Bangabandhu Sheikh Mujibur Rahman Science &amp; Technology University</p>
                    <p className='text-start fs-5 m-0'><b>Location:</b></p>
                    <p className='text-start fs-6 fw-bold mt-0'>Gopalganj Sadar, Gopalganj-8100</p>

                    <p className='text-start fs-5 m-0'><b>Nationality:</b></p>
                    <p className='text-start fs-6 fw-bold m-0'>Bangladesh</p>


                </div>

            </div>
            <div className='col-sm-12 col-lg-6'>
            <h3 className='text-decoration-underline text-warning'>My Skillset</h3>
                <div className='row m-0 p-0 d-flex'>
                    <p className='col-6 text-start fs-5 mb-0 text-black'><b>HTML:</b></p>
                    <p className='col-6 text-end fs-6 mb-0 '>90%</p>
                </div>
                <div className="progress" style={style1}>
                    <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


                <div className='row m-0 p-0 d-flex'>
                    <p className='col-6 text-start fs-5 mb-0 text-black'><b>CSS:</b></p>
                    <p className='col-6 text-end fs-6 mb-0 '>80%</p>
                </div>
                <div className="progress" style={style1} >
                    <div className="progress-bar bg-info progress-bar-striped" role="progressbar" style={{ width: "80%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className='row m-0 p-0 d-flex'>
                    <p className='col-6 text-start fs-5 mb-0 text-black'><b>JavaScript :</b></p>
                    <p className='col-6 text-end fs-6 mb-0 '>78%</p>
                </div>
                <div className="progress" style={style1}>
                    <div className="progress-bar bg-green progress-bar-striped" role="progressbar" style={{ width: "78%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className='row m-0 p-0 d-flex'>
                    <p className='col-6 text-start fs-5 mb-0 text-black'><b>JQuery:</b></p>
                    <p className='col-6 text-end fs-6 mb-0 '>60%</p>
                </div>
                <div className="progress " style={style1}>
                    <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{ width: "60%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className='row m-0 p-0 d-flex'>
                    <p className='col-6 text-start fs-5 mb-0 text-black'><b>ReactJs:</b></p>
                    <p className='col-6 text-end fs-6 mb-0 '>86%</p>
                </div>
                <div className="progress" style={style1}>
                    <div className="progress-bar bg-danger progress-bar-striped" role="progressbar" style={{ width: "86%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className='row m-0 p-0 d-flex'>
                    <p className='col-6 text-start fs-5 mb-0 text-black'><b>NodeJs:</b></p>
                    <p className='col-6 text-end fs-6 mb-0 '>75%</p>
                </div>
                <div className="progress" style={style1}>
                    <div className="progress-bar bg-warning progress-bar-striped" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className='row m-0 p-0 d-flex'>
                    <p className='col-6 text-start fs-5 mb-0 text-black'><b>ExpressJs:</b></p>
                    <p className='col-6 text-end fs-6 mb-0 '>85%</p>
                </div>
                <div className="progress" style={style1}>
                    <div className="progress-bar bg-info progress-bar-striped" role="progressbar" style={{ width: "85%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <div className='row m-0 p-0 d-flex'>
                    <p className='col-6 text-start fs-5 mb-0 text-black'><b>Mongobd:</b></p>
                    <p className='col-6 text-end fs-6 mb-0 '>90%</p>
                </div>
                <div className="progress" style={style1}>
                    <div className="progress-bar bg-success progress-bar-striped" role="progressbar" style={{ width: "90%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

               
            </div>
        </div>
    );
};

export default Skillset;