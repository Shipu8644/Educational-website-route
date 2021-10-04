import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
const Course = (props) => {
    const { name, price, img, id } = props.course;
    const element = <FontAwesomeIcon icon={faBookOpen} />
    return (
        <div className='text-center bg-white rounded-lg p-2'>
            <img className='block ml-auto mr-auto w-96 h-48 ' src={img} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <br />
            <NavLink to={`/course/${id}`}>
                <button className='text-white bg-blue-900 rounded-lg font-mono text-xl p-2'>{element} Details</button>
            </NavLink>

        </div>
    );
};

export default Course;