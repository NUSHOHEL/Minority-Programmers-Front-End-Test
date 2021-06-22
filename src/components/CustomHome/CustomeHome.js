import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CustomHome.module.css'
import Lottie from 'react-lottie';
import animationData from './animationdata.json'

const CustomeHome = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid'
        }
      };
    return (
       <div className='container'>
            <div className='row' >
            <div className={`col-sm ${styles.header}`}>
                
                <div>
                <h1>Professional <br /> Investment <br /> and Blockchain</h1>
                <p>Experience smart, customized, low-cost payment solutions for your growing business.</p>
                <button> <Link to='/incubator' style={{color:'white'}}>Get Started</Link> </button>
                <button> <Link to='/learn' style={{color:'white'}}>Learn More</Link></button>
                </div>
                
            </div>
            <div className={`col-sm order-1 ${styles.header}`}>
            <Lottie options={defaultOptions}
              height={500}
              width={400}
              />
              
            </div>
           
            
        </div>
       </div>
    );
};

export default CustomeHome;