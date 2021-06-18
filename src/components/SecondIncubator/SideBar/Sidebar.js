import React from 'react';
import mask from '../../../images/Mask Group.png'

const Sidebar = () => {
    return (
        <div className='container mt-2'>
            <h6 className='border-bottom p-3 mb-5'>Funded 17th February 2015</h6>
            <div style={{ lineHeight: '0', padding: '10px' }}>
                <p><small>Website</small></p>
                <p> <a href="https://mongoswap.com">mongoswap.com</a> </p>
            </div>
            <div style={{ lineHeight: '0', padding: '10px' }}>
                <p><small>Location</small></p>
                <p>San Francisco, California</p>
            </div>
            <div style={{ lineHeight: '0', padding: '10px',borderBottom:'3px solid #eee'}}>
                <p><small>Team Size</small></p>
                <p>100-500 people</p>
            </div>
          <div className='mt-3'>
          <h5>Meet the team</h5>
            <div style={{ display:'flex',alignItems: 'center'}}>
                <img src={mask} alt="" style={{ width: '40px' }} />
                <span style={{ lineHeight: '0',marginTop:'20px' }}>
                    <p>Edmund Kitan</p>
                    <p><small>Founder</small></p>
                </span>
            </div>
            <div style={{ display:'flex',alignItems: 'center' }}>
                <img src={mask} alt="" style={{ width: '40px' }} />
                <span style={{ lineHeight: '0',marginTop:'20px' }}>
                    <p>Edmund Kitan</p>
                    <p><small>Founder</small></p>
                </span>
            </div>
            <div style={{ display:'flex',alignItems: 'center',}}>
                <img src={mask} alt="" style={{ width: '40px' }} />
                <span style={{ lineHeight: '0',marginTop:'20px' }}>
                    <p>Edmund Kitan</p>
                    <p><small>Founder</small></p>
                </span>
            </div>
            <div style={{ display:'flex',alignItems: 'center',}}>
                <img src={mask} alt="" style={{ width: '40px' }} />
                <span style={{ lineHeight: '0',marginTop:'20px' }}>
                    <p>Edmund Kitan</p>
                    <p><small>Founder</small></p>
                </span>
            </div>
          </div>
        </div>
    );
};

export default Sidebar;