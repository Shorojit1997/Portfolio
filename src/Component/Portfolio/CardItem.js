import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
import LiteBox from './LiteBox';
import './Portfolio.css'

const Portfolio = ({ img_link, description, git, live, name }) => {
    const [toogle, setToogle] = useState(false);
    return (
        <div className='col-lg-4 col-md-6 col-sm-6 mb-4'>
            {
                toogle ?
                    <div className='position-relative'>
                        <LiteBox
                            img_link={ img_link}
                            setToogle={setToogle}
                        />
                    </div> : null
            }
            <div className='card shadow'>
                <img onClick={()=>{setToogle(true)}} className='card-img-top ' src={img_link} alt='topk10' />
                <h5 className="card-title text-start ps-3 pt-3 pb-0">{name}</h5>
                <div className='card-body'>
                    <p className='text-start mb-0 '>{description}</p>

                    <div className='d-flex mb-5'>
                        <a href={`${git}`} alt={`img${git}`} className='icon_text'> <AiFillGithub /></a>
                        <a href={`${live}`} alt={`img${live}`} className='icon_text'> <FiExternalLink /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;