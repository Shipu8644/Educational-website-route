import React from 'react';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useCourses();

    return (
        <div>
            <h1 className='text-3xl text-center uppercase font-serif mt-7'>All  -<span className='text-indigo-600'>Courses</span></h1>
            <div className='grid grid-cols-4 gap-10 p-8 m-4 bg-indigo-100'>
                {courses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)}
            </div>
        </div>

    );
};

export default Courses;