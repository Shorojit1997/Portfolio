import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'
const LiteBox = ({ img_link,setToogle }) => {
    return (
        <div className='lite_box'>
            <div className='_card'>
                <div onClick={()=>setToogle(false)} className='close_btn'><AiOutlineClose/></div>
                <img className='lite_img' src={img_link} alt='img_' />
            </div>
        </div>
    );
};

export default LiteBox;