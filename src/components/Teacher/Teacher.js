import React from 'react';

const Teacher = (props) => {
    const { name, age, gender, followers, img } = props.teacher;
    return (
        <div>
            <div className='grid grid-cols-6 gap-5 mb-4 bg-indigo-100 align-middle border-blue-900 border-2 rounded-lg'>
                <div >
                    <img className='w-50 h-20 rounded ' src={img} alt="" />
                </div>

                <h1 className='pt-5'>Name: {name}</h1>
                <h1 className='pt-5'>Age: {age}</h1>
                <h1 className='pt-5'>Gender: {gender}</h1>
                <h1 className='pt-5'>Popularity: {followers}</h1>

            </div>
        </div>

    );
};

export default Teacher;