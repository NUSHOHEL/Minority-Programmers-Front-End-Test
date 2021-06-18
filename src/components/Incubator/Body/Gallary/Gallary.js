import React from 'react';
import './Gallary.css'
// import { Container, Col, Row } from 'react-bootstrap';

const Gallary = () => {
    return (
        <div className='Gallary-container'>
            
                <div className="Gallary-one">
                    <button>Advice a startup</button>
                </div>
                <div className="Gallary-tow">
                    <button >Join Minority Ventures Cohost</button>
                </div>
                <div className="Gallary-three">
                    <button>Help <code /> </button>
                </div>
            
        </div>
    );
};

export default Gallary;