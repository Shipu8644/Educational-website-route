import React from 'react';

const Teacher = (props) => {
    const { name, age, gender, followers, img } = props.teacher;

    return (
        <div>

            <div className="flex items-center p-4 bg-white border-2 
            border-gray-200 rounded-lg  dark:bg-gray-800 w-2/3 ml-48 mt-4 mb-4 shadow-xl">
                <img alt="food" className="w-1/3  rounded-md border-2 border-gray-300 " src={img} />
                <div id="body" className="flex flex-col ml-5">
                    <h4 id="name" className="text-xl font-semibold mb-2">{name}</h4>
                    <p>Department of Computer Science and Engineering</p>
                    <h4 className=' text-sm'>Gender: {gender}</h4>
                    <p className="text-sm">Age: {age}</p>
                    <p className="text-sm">Follower: {followers}</p>
                    <div className='flex gap-5 items-end ml-96'>
                        <a className='justify-items-end inline-block' href="#"><i className="fab fa-instagram-square text-gray-900
                     text-3xl "></i></a>

                        <a className='justify-items-end inline-block 
                     ' href="#"><i className="fab fa-facebook text-blue-600
                     text-3xl"></i></a>

                        <a className='justify-items-end inline-block' href="#"><i className="fab fa-linkedin text-blue-600
                     text-3xl"></i></a>
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Teacher;