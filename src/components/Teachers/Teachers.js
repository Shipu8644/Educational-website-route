import React from 'react';
import useTeachers from '../../hooks/useTeachers';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useTeachers();
    console.log(teachers);
    return (
        <div>
            <h1 className='text-3xl text-center font-serif font-bold text-indigo-600 '>Our Teachers</h1>
            <div className='p-4 ml-20 mr-15'>
                {
                    teachers.map(teacher => <Teacher teacher={teacher}></Teacher>)
                }
            </div>
        </div>

    );
};

export default Teachers;