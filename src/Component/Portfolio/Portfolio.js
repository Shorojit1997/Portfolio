import React from 'react';
import Topk from './tok.JPG'
import Rthome from './rt.JPG'

import './Portfolio.css'
import CardItem from './CardItem'


const items=[
    {
        name:'Topk',
        live:'https://getbootstrap.com/docs/5.1/components/modal/',
        git:'',
        description:'Topk10 is a most popular Betting sites.This is the full complete website with attractive admin panel. That are the running in production. ',
        img_link:Topk
    },
    {
        name:'RT100',
        live:'',
        git:'',
        description:'Topk10 is a most popular Betting sites.This is the full complete website with attractive admin panel. That are the running in production. ',
        img_link:Rthome
    },
    {
        name:'Topk',
        live:'',
        git:'',
        description:'Topk10 is a most popular Betting sites.This is the full complete website with attractive admin panel. That are the running in production. ',
        img_link:Topk
    },
    {
        name:'Topk',
        live:'',
        git:'',
        description:'Topk10 is a most popular Betting sites.This is the full complete website with attractive admin panel. That are the running in production. ',
        img_link:Topk
    }
]

const Portfolio = () => {
    return (
        <div className='container' id='protfolio'>
            <div className='mx-auto pt-5 fw-bold fs-1 w-100'>PROJECTS</div>
            <div className='mx-auto portfolio_header'>Check Out My Latest Projects.</div>
            <div className='row m-0 p-0 mt-5 mb-5'>
                {
                    items.map((item,index)=>{
                        return(
                            <CardItem
                            key={index+99}
                            name={item.name}
                            live={item.live}
                            git={item.git}
                            description={item.description}
                            img_link={item.img_link}
                            />
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Portfolio;