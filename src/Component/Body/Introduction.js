import React from 'react';
import mypic from './mypic.png'
import './Intro.css'

const Introduction = () => {
    return (
        <div className='row mt-5 mb-5 m-0 p-0'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
                <img className='img_style' src={mypic} alt='Shorojit_Image' />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 d-flex-row align-items-center'>
                <p className='p_text'>Software Engineer who loves to transform ideas into reality using code. I am passionate about using Javascript and Animation Libraries to create awesome user experiences.
                </p>
                <br/>
                <p className='p_text'>
                    With over two years of experience developing web applications using the latest front-end and back-end technologies.
                </p>
                <br/>
                <p className='p_text'>
                    Motivated designer and developer with experience creating custom websites with ReactJs, Redux, React Hooks, NodeJs, ExpressJs, Mongobd, JavaScript, HTML5, and CSS3. Strong collaboration skills and proven history of application development.
                </p>
            </div>
        </div>
    );
};

export default Introduction;