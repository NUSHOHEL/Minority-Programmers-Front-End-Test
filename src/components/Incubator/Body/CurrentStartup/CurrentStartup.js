import React from 'react';
import { Link } from 'react-router-dom';
import './CurrentStartup.css';

import fakestartup from '../../../../FakeStartup';
import {  Row, Col, ProgressBar } from 'react-bootstrap';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CurrentStartup = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="startup-container">
            <Row>
                <Col sm={3} className='d-flex align-items-center justify-content-center'>
                    <div className='p-4 ml-4'>
                    <h1>Featured <br /> Startups</h1>
                    <p>Invest in the next billion dollar company today</p>
                    </div>
                </Col>
                <Col sm={9}>
                    <Carousel
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        infinite={true}
                        responsive={responsive}>
                        {
                            fakestartup.map(company => <div className='card m-3'>
                                <div className="p-3">
                                    <div className='d-flex justify-content-evenly align-items-center'>
                                        <img src={company.logo} style={{ width: '50px' }} alt="" />
                                        <p className='mt-3 ml-3'>{company.name}</p>
                                    </div>
                                    <p className='mt-3'>{company.detail}</p>
                                    <div className="d-flex justify-content-between mt-3">
                                        <p>Fund raise</p>
                                        <p>50% complete</p>
                                    </div>
                                    <p>{company.fund}</p>
                                    <ProgressBar variant="info" now={50} />
                                    <div className='d-flex justify-content-between mt-3'>
                                        <button className='btn btn-primary'><Link to='/startup-details' style={{color:'white'}}>Fund Startup</Link></button>
                                        <button className='btn btn-primary'><Link to='/startup-details' style={{color:'white'}}>Learn More</Link></button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </Carousel>

                </Col>
            </Row>
        </div>
    );
};

export default CurrentStartup;