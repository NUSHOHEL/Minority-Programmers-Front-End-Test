import React from 'react';
import './Tutorials.css'
import tutorialdata from '../../../../TutorialData';
import Sidebar from '../Sidebar/Sidebar';
import { Link, useParams } from 'react-router-dom';



const Tutorials = () => {
    const {id}=useParams();
    console.log(id)
    const weeklyActivity= tutorialdata.find(activity=> activity.id === id)
    return (
        <div className="courseinfo">
            <div className='side-bar'>
                <Sidebar />
            </div>
            <div className='course-progress'>
                <div className='module'>
                <div className='tutorial-header'>
                    <div className="p-5">
                        <div>
                            <h1>{weeklyActivity.name}</h1>
                            <p>Progress</p>
                        </div>
                        <div className="text-center lh-1">
                            <p>10/10</p>
                            <progress max="100" value="100" style={{ width: '600px', height: '5px', backgroundImage: 'linear-gradient(90deg,#FF3684, #FFC203)' }}></progress>
                            <p>100% Completed</p>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        weeklyActivity.activity.map(tutorial => <div className="tutorial-card">
                            <div className='d-flex align-items-center m-3 '>
                                <img src={tutorial.img} alt="" style={{ width: '100px' }} />
                                <h4 className='ml-4'> <Link to={`/video/${tutorial.id}`}>{tutorial.name}</Link> </h4>
                            </div> 
                            <p className='p-2'>Completed</p>
                        </div>)
                    }

                </div>
                </div>
            </div>
        </div>
    );
};

export default Tutorials;