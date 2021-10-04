import React, { useState } from 'react';
import useCourses from '../../hooks/useCourses';
import KeyCourse from '../KeyCourse/KeyCourse';

const Home = () => {
    const [keyCourses, setkeyCourses] = useCourses();
    console.log(keyCourses);

    return (
        <div>

            <section>
                <div className='grid grid-cols-2 gap-6 mt-10 ml-10'>
                    <div className='p-4 ml-4'>
                        <h1 className='text-4xl uppercase text-center '> THE WORLD’S BEST EDUCATION IN OUR Institute </h1>
                        <br />
                        <h2 className='text-2xl font-serif'>Why would you choose our institute name <span className='text-indigo-600 font-serif'>MKS&Tech</span> and some key factor will be described here shortly</h2>
                        <br />
                        <p className='font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus accusantium, ratione aliquid est distinctio quasi vero exercitationem tenetur dolorem ipsam eius at qui quis quidem porro autem inventore quia eos.</p>
                    </div>
                    <div className='ml-5'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pW1uVUg5wXM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

            </section>

            <section>
                <div className='mt-20'>
                    <h1 className='text-center text-4xl uppercase mb-3'>Some key <span className='text-indigo-600'>Courses</span></h1>
                </div>
                <div className='grid grid-cols-4 gap-10 p-8 m-4 bg-indigo-100'>
                    {
                        keyCourses.slice(0, 4).map(keyCourse => <KeyCourse
                            key={keyCourse.id}
                            keyCourse={keyCourse}

                        >

                        </KeyCourse>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Home;