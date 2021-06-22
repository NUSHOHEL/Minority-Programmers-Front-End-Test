import React from 'react';
import './CourseInfo.css'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import mask from '../../../../images/Mask Group.png'
import tutorialdata from '../../../../TutorialData';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';



const CourseInfo = () => {
    

    const handlemodule=(id)=>{
        console.log(id)
        const week= tutorialdata.find(data=> data.id === id)
        console.log(week)
    }
    return (
        <div className="courseinfo"> 
            <div className='side-bar'>
                <Sidebar/>
            </div>
            <div className='course-progress'>
                <div className='module'>
                <div>
                <div className="module-header">
                    <div style={{height:'200px',width:'200px'}}>
                    <CircularProgressbarWithChildren value={75}>
                        <img src={mask} alt="" style={{width:'150px'}} />
                    </CircularProgressbarWithChildren>
                    </div>
                    <div className="ml-4">
                        <h1>Welcome back <br /> Shot</h1>
                        <p>75% Completed</p>
                        <button className='btn btn-primary'>Resume</button>
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
                                tutorialdata.map((module,index) => <div key={index} className="single-module">
                                    <div className='module-card'>
                                    <p className='text-right m-2'>Completed</p>
                                    <div>
                                        <h3 className='module-title' onClick={()=>handlemodule(module.id)}>
                                           <Link to={`/weeks/${module.id}`}> {module.name}</Link>
                                        </h3>
                                        <progress max="100" value="100" style={{width:'300px',height:'3px'}}></progress>
                                        <p>100% Completed</p>
                                    </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;