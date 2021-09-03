import React from 'react';
import Typicals from './Typicals'
import Resume from './Resume.pdf'

const ParticleText = () => {
    return (
        <div className='text_div'>
            <h4 className='hello'>Hello!</h4>
            <h2 className='name'>I'm Shorojit Kumar Sarkar</h2>
            <Typicals/>

            <div className='d-flex justify-content-center'>
                <a href={Resume} className='btn  btn-outline-warning  m-1  '>My Work</a>
                <a href={Resume} className='btn  btn-warning  m-1 text-light '>Resume</a>
            </div>
            
        </div>
    );
};

export default ParticleText;