import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-text'>
            <h1>invest directly into <br /> minority invention</h1>
            <button className='btn btn-primary'>View Startups</button>
            </div>
        </div>
    );
};

export default Header;