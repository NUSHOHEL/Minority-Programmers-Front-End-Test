import React from 'react';
import duration from '../../../../CourseDuration';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    return (
        <div>
            <p style={{padding:'0 25px',margin:'30px auto',cursor:'pointer'}} ><FontAwesomeIcon icon={faArrowLeft}/> Courses</p>
                    <div className='ml-5'>
                        <h2>Intro to Blockchain</h2>
                    {
                    duration.map(period => <div>
                        <h3>{period.week}</h3>
                        <p>{period.module1}</p>
                        <p>{period.module2}</p>
                        <p>{period.module3}</p>
                    </div>)
                     }
                    </div>
                   
        </div>
    );
};

export default Sidebar;