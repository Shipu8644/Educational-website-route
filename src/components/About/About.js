import React from 'react';

const About = () => {
    return (
        <div>
            <div className='grid grid-cols-2 m-8'>

                <article className='p-8 ml-10'>
                    <h1 className='text-4xl font-mono uppercase mt-6 mb-4'>About the Institute of the best <span className='text-indigo-600 font-serif'>MKS&Tech</span> </h1>

                    <h2><span className='text-indigo-600 font-serif text-2xl '>MKS&Tech</span> is a world-leading centre of learning, teaching and research and the oldest institute in the English-speaking world.</h2>

                    <div className="blog p-8">
                        <div id='blog-organization' className=" mt-10">
                            <h1 className='text-2xl mb-2'>Organization of the institute</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis dolores, quam, deleniti asperiores dolor sapiente magni, nisi in provident ipsum nemo molestiae at quia tempora. Ipsum temporibus sapiente provident?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae distinctio quasi sed hic quidem sunt ea dolorum recusandae ab voluptates tempora quam aut, quaerat illo reiciendis iure porro dolore ipsum.
                        </div>

                        <div id="blog-factAndFigures" className=" mt-10">
                            <h1 className='text-2xl mb-2'>Fact and Figures</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus, expedita aspernatur aliquam accusamus molestiae! Nostrum pariatur possimus minus culpa, alias quam, a dolorum, doloribus quod quas magni accusamus eum?</p>
                            <div>


                            </div>
                        </div>
                    </div>


                </article>


                <section className='ml-96 border-l-2 p-8 '>
                    <h1 className='text-2xl'>About</h1>
                    <a href="#blog-organization">Organization</a>
                    <br />
                    <a href="#blog-2">Facts and Figures</a>
                    <br />
                    <a href="#blog-3">People</a>
                    <br />
                    <a href="#blog-4">Future</a>
                    <br />
                    <a href="#blog5">Career</a>

                </section>
            </div>

        </div>
    );
};

export default About;