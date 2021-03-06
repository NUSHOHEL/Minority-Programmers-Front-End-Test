import React from 'react';
import { Row,Col } from 'react-bootstrap';
import './CommingStartup.css'
import fakestartup from '../../../../FakeStartup';
import { Link } from 'react-router-dom';
import './CommingStartup.css'
import { useState } from 'react';


const CommingStartup = () => {
    const [commingStartup, setCommingStartup]=useState(fakestartup);
    const [visible, setVisible]=useState(7);

    console.log(visible)
    const handleData=()=>{
        setVisible(visible +5)
    }
    return (
             <div className='mt-5 p-5'>
             <Row>
          <Col sm={3}>
           <div className="mt-5">
           <h1>Upcoming Startup</h1>
            <p>These visionary companies and disruptors are on their journey to change the world.</p>
           </div>
          </Col>
          {
               commingStartup.slice(0,visible).map(company=><Col sm={3} >
                <div className='card mt-3'>
                <div className='p-2'>
                    <div className='d-flex align-items-center'>
                        <img src={company.logo} alt="" />
                        <p>{company.name}</p>
                    </div>
                    <p>{company.detail}</p>
                    <div className='d-flex justify-content-between'>
                        <p>Fund raise</p>
                        <p>50% complete</p>
                    </div>
                    <p>{company.fund}</p>
                    <progress value='50'max='100' style={{width:'100%'}}  />
                    <div className='d-flex justify-content-between mt-3'>
                        <button className='btn btn-primary'> <Link to='/incubator'style={{color:'white'}}>Fund Startup</Link> </button>
                        <button className='btn btn-primary'><Link to='/incubator' style={{color:'white'}}>Learn More</Link></button>
                    </div>
                </div>
                </div>
            </Col>)
          }
      </Row>
      <div className="mt-3 text-center">
          <button className='btn btn-primary' onClick={handleData}>Load More</button>
      </div>
      </div>

    );
};

export default CommingStartup;