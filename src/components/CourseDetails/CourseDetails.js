import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import NotFound from '../NotFound/NotFound';

const CourseDetails = () => {
    // const { courseId } = useParams();
    // const [details, setDetails] = useState({});

    // useEffect(() => {
    //     fetch(`./courses.JSON/${courseId}`)
    //         .then(res => res.json())
    //         .then(data => setDetails(data))
    // }, [])
    // console.log(details);
    return (
        <div>
            <h1 className='text-3xl text-center'>Details URL is not available</h1>
            <br />
            <NotFound></NotFound>
        </div>
    );
};

export default CourseDetails;