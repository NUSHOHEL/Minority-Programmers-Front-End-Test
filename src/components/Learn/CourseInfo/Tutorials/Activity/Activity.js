import React from 'react';
import ReactPlayer from 'react-player'
import { faArrowLeft, faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../../Sidebar/Sidebar';
import tutorialdata from '../../../../../TutorialData';
import { useParams } from 'react-router-dom';

const Activity = () => {
    const {name}=useParams();
    console.log(name)
    const videos= tutorialdata.find(activity=> activity.id === name)
    console.log(videos)
    const vd = videos.activity.find(vdo=>vdo.id === name)
    console.log(vd)
    return (
        <div  className="courseinfo">
            <div className='side-bar'>
                <Sidebar/>
            </div>
            <div className='course-progress'>
                <div className='module'>
                <div >
                
                    <ReactPlayer url={vd.video} width='100%' height='400px' />
            
                </div>
                <div style={{margin:'20px auto',color:'white'}}>
                                <div className='d-flex justify-content-between'>
                                <span className="ml-3"  > <FontAwesomeIcon icon={faArrowLeft}/></span>
                                    <span  className="mr-3"  > <FontAwesomeIcon icon={faArrowRight}/> </span>
                                </div>
                                <div className="video-description">
                                <h3>{vd.name}</h3>
                                <p> <FontAwesomeIcon icon={faClock}/> 12 minute </p>
                                <h3>Header</h3>
                                <p>{vd.details}</p>
                                <h3>Header</h3>
                                <p>{vd.details} </p>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default Activity;