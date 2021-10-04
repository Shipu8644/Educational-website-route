import React from 'react';

const Teacher = (props) => {
    const { name, age, gender, followers, img } = props.teacher;
    return (
        <div>
            {/* <div className='grid grid-cols-6 gap-5 mb-4 bg-indigo-100 align-middle border-blue-900 border-2 rounded-lg'>
                <div >
                    <img className='w-50 h-20 rounded ' src={img} alt="" />
                </div>

                <h1 >Name: {name}</h1>
                <h1 >Age: {age}</h1>
                <h1 >Gender: {gender}</h1>
                <h1 >Popularity: {followers}</h1>

            </div> */}

            <div className="flex items-center p-4 bg-white border-2 
            border-gray-200 rounded-lg  dark:bg-gray-800 w-2/3 ml-48 mt-4 mb-4 shadow-xl">
                <img alt="food" className="w-1/3  rounded-md border-2 border-gray-300 " src={img} />
                <div id="body" className="flex flex-col ml-5">
                    <h4 id="name" className="text-xl font-semibold mb-2">{name}</h4>
                    <p>Department of Computer Science and Engineering</p>
                    <h4 className=' text-sm'>Gender: {gender}</h4>
                    <p className="text-sm">Age: {age}</p>
                    <p className="text-sm">Follower: {followers}</p>

                </div>
            </div>
        </div>

    );
};

export default Teacher;