import React from 'react';
import './CourseInfo.css'
import { useState } from 'react';
import duration from '../../../../CourseDuration';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import mask from '../../../../images/Mask Group.png'
import tutorialdata from '../../../../TutorialData';
import Tutorials from '../Tutorials/Tutorials';



const CourseInfo = () => {
    const [resume, setResume]= useState(false)
    return (
        <div className="courseinfo">
            <div className='side-bar'>
                <p style={{padding:'0 25px',margin:'30px auto',cursor:'pointer'}} onClick={() => setResume(!resume)}  ><FontAwesomeIcon icon={faArrowLeft}/> Courses</p>
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
            <div className='course-progress'>
                <div className='module'>
                <div  style={{ display: resume ? 'none' : 'block' }}>
                <div className="module-header">
                    <div style={{height:'200px',width:'200px'}}>
                    <CircularProgressbarWithChildren value={75}>
                        <img src={mask} alt="" style={{width:'150px'}} />
                    </CircularProgressbarWithChildren>
                    </div>
                    <div className="ml-4">
                        <h1>Welcome back <br /> Shot</h1>
                        <p>75% Completed</p>
                        <button className='btn btn-primary' onClick={() => setResume(!resume)}>Resume</button>
                    </div>
                    </div>
                    <div className='modules-list'>
                        <ul>
                            <li>
                                Modules
                            </li>
                            <li>
                                Calendar
                            </li>
                            <li>
                                Messages
                            </li>
                        </ul>
                        {
                                tutorialdata.map(module => <div className="single-module">
                                    <div className='module-card'>
                                    <p className='text-right m-2'>Completed</p>
                                    <div>
                                        <h3>{module.name}</h3>
                                        <progress max="100" value="100" style={{width:'300px',height:'3px'}}></progress>
                                        <p>100% Completed</p>
                                    </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
                <div  style={{ display: resume ? 'block' : 'none' }} >
                         <Tutorials/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;