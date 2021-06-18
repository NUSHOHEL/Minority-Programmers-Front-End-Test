import React from 'react';
import './FirstIncubator.css'
// import NavBar from '../Shared/Navbar';
import CurrentStartup from './Body/CurrentStartup/CurrentStartup';
import Header from './Header/Header';
import Gallary from './Body/Gallary/Gallary';
import CommingStartup from './Body/ComingStartup/CommingStartup';
const FirstIncubator = () => {
    return (
        <div className='incubator-container'>
            <Header/>
            <CurrentStartup/>
            <Gallary/>
            <CommingStartup/>
        </div>
    );
};

export default FirstIncubator;