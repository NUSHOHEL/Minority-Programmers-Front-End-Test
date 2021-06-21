import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseData from '../../../CourseData'
import FeatureCourse from '../FeatureCourse/FeatureCourse';
import Mycourse from '../Mycourse/Mycourse';
import './Body.css'

const Body = () => {
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
        <div className='course-body'>
            <div>
                <form action="" style={{textAlign:'center'}}>
                    <input type="text" style={{width:'25%',borderRadius:'10px'}} />
                    <button style={{margin:'25px 5px', padding:'1px 25px', borderRadius:'10px'}}>search</button>
                </form>
                <h1 className='ml-3'>My Course </h1>
                <Carousel
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    infinite={true}
                    responsive={responsive}>
                    {
                        CourseData.map((course,index) => <Mycourse course={course} key={index} />)
                    }
                </Carousel>
            </div>
            <div className='mt-5'>
            <h1 className='ml-3'>Feature Course </h1>
            <Carousel
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    infinite={true}
                    responsive={responsive}>
                    {
                        CourseData.map((course,index) => <FeatureCourse course={course} key={index} />)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Body;