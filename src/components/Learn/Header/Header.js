import React from 'react';
import headerbg from '../../../images/LearnHeader.png'
import styles from './Header.module.css'

const LearnHeader = () => {
    return (
        <div className={styles.header}>
           <div className='row'>
           <div className={`col-md ${styles.headerImage}`}>
                <img src={headerbg} alt="" />
            </div>
           
            <div className={`col-md order-sm-1 order-md-2 ${styles.headerText}`}>
            
                <div>
                <h1>Learn high in demand <br />
                    IT Skills & Get Crypto</h1>
                    <p>powered by <span>KoinStreet</span></p>
                </div>
                
            </div>
           </div>
        </div>
    );
};

export default LearnHeader;