import React from 'react';

const FeatureCourse = ({course}) => {
    return (
        <div>
            
            <div className='card m-3'>
        <div className='p-3'>
            <div className="text-right">
                <p>Earn $30</p>
            </div>
            <div>
                <h1>{course.name}</h1>
                <h6>{course.intro}</h6>
            </div>
            <div className='text-center'>
            <button className='btn btn-primary'>Learn</button>
            </div>
            <div className='text-right'>
            <h5>{course.module}</h5>
            </div>
            <div class="progress" style={{height:'5px'}}>
                <div class="progress-bar" role="progressbar" style={{width:'50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="text-center">
            <p>{course.parcentage}</p>
            </div>
        </div>

    </div>
        </div>
    );
};

export default FeatureCourse;