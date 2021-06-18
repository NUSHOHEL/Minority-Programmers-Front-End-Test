import React from 'react';
// import leftarrow from '../../images/Arrow left.png'
import logo from '../../images/Frame 313.png'
import { ProgressBar } from 'react-bootstrap';
// import fakestartup from '../../FakeStartup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './SecondIncubator.css'
import Sidebar from './SideBar/Sidebar';
import AboutStartup from './AboutStartup/AboutStartup';
import Suggestion from './Suggestion/Suggestion';

const SecondIncubator = () => {

    return (
        <div className='wrapper' >

            <div className='top-header '>

                <div><FontAwesomeIcon icon={faArrowLeft}style={{width:'40px', height:'40px',backgroundColor:'#eee',borderRadius:'50%'}}/></div>
                <div className='d-flex align-items-center'> 
                    <img src={logo} alt="" style={{width:'40px',height:'40px'}} />
                    <p>Mangoswap</p>
                </div>
                <div>
                    <span className='d-flex justify-content-around mt-3'style={{lineHeight:'0'}}>
                    <p>fund raises</p>
                    <p>50% completed</p>
                    </span>
                    <h6 style={{lineHeight:'1'}}>$200,000/$400,000</h6>
                </div>
                <span><ProgressBar now={50}/></span>
                <span><button className='btn btn-primary' >Fund Startup</button></span>

            </div>
            <div className="side-info">
                <Sidebar/>
            </div>
            <div className='details'>
    
                <AboutStartup/>

            </div>
            <div className='suggestion'>
               <Suggestion/>
            </div>
        </div>
    );
};

export default SecondIncubator;