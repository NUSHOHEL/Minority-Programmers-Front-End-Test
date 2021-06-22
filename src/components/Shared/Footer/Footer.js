import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
   
    return (
        <div className= {`sticky-bottom ${styles.footer}`}>
            <p><small>Copyright © Minority Programmers Association 2021</small></p>
            
        </div>
    );
};

export default Footer;