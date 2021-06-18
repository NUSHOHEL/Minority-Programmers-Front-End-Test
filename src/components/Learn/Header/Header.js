import React from 'react';
import headerbg from '../../../images/LearnHeader.png'
import './Header.css'

const LearnHeader = () => {
    return (
        <div className='learnHeader'>
            <div className="learnHeader-img">
                <img src={headerbg} alt="" />
            </div>
            <div className="learnHeader-text">
                <h1>Learn high in demand <br />
                    IT Skills & Get Crypto</h1>
                    <p>powered by KoinStreet</p>
            </div>
        </div>
    );
};

export default LearnHeader;