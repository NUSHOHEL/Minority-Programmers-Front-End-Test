import React from 'react';
import { Link } from 'react-router-dom';
import './CustomHome.css'
// import Homepagebanner from '../../images/Homepagebanner.gif';

const CustomeHome = () => {
    return (
        <div className='customhome'>
            <div>
                <h1>Blockchain</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi libero nisi ad eveniet. Ad iure labore dolores eveniet animi totam modi, fuga commodi nihil itaque quia architecto aliquid obcaecati omnis.</p>
                <button> <Link to='/incubator'>Invest Now</Link> </button>
                <button> <Link to='/learn'>Learn More</Link></button>
            </div>
        </div>
    );
};

export default CustomeHome;