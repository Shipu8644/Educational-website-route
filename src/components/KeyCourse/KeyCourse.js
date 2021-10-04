import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
const KeyCourse = (props) => {
    const { name, price, img, id } = props.keyCourse;
    const element = <FontAwesomeIcon icon={faBookOpen} />
    const history = useHistory();

    const handleDetails = () => {
        history.push(`/course/${id}`)
    }

    return (
        <div className='text-center bg-white rounded-lg p-2'>
            <img className='block ml-auto mr-auto w-96 h-48' src={img} alt="" />
            <h2>{name}</h2>
            <h3>${price}</h3>
            <br />
            <button onClick={handleDetails} className='text-white bg-blue-900 rounded-lg font-mono text-xl p-2'>{element} Details</button>
        </div>
    );
};

export default KeyCourse;