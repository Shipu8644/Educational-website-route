import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';


const About = () => {
    return (
        <div>
            <div className='grid grid-cols-2 ml-8 mr-2'>

                <article className='p-10 ml-10'>
                    <h1 className='text-4xl font-mono uppercase mt-6 mb-4'>About the Institute of the best <span className='text-indigo-600 font-serif'>MKS&Tech</span> </h1>

                    <h2><span className='text-indigo-600 font-serif text-2xl '>MKS&Tech</span> is a world-leading centre of learning, teaching and research and the oldest institute in the English-speaking world.</h2>

                    <div className="blog p-4">
                        <div id='blog-organization' className=" mt-10">
                            <h1 className='text-2xl mb-2'>Organization of the institute</h1>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quis dolores, quam, deleniti asperiores dolor sapiente magni, nisi in provident ipsum nemo molestiae at quia tempora. Ipsum temporibus sapiente provident?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae distinctio quasi sed hic quidem sunt ea dolorum recusandae ab voluptates tempora quam aut, quaerat illo reiciendis iure porro dolore ipsum.
                        </div>

                        <div id="blog-factAndFigures" className=" mt-10">
                            <h1 className='text-2xl mb-2'>Fact and Figures</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus, expedita aspernatur aliquam accusamus molestiae! Nostrum pariatur possimus minus culpa, alias quam, a dolorum, doloribus quod quas magni accusamus eum?</p>
                            <div className='mt-10 '>

                                <MyLineChart></MyLineChart>
                            </div>
                        </div>

                        <div id="blog-people" className=" mt-10">
                            <h1 className='text-2xl mb-2'>People</h1>
                            <div className="images grid grid-cols-2">
                                <img className='h-48 w-100' src="https://media.istockphoto.com/photos/college-students-with-books-smiling-to-camera-over-grey-wall-picture-id1167992655?k=20&m=1167992655&s=612x612&w=0&h=zXHk2mrnzH2traDJAtVejJRXOfnEPxB7UHiYuhx0wuk=" alt="" />
                                <img className='h-48 w-100' src="https://scholarship-positions.com/wp-content/uploads/2017/01/Oxford-University-Undergraduate-Scholarships-for-International-Students-in-UK.jpg" alt="" />
                                <img className='h-48 w-100' src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                                <img className='h-48 w-100' src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                            </div>

                        </div>

                        <div id="blog-future" className=" mt-10">
                            <h1 className='text-2xl mb-2'>Future</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ea similique accusamus vero dolores suscipit et quos quisquam sit a at, recusandae, praesentium dolore repellat asperiores? Suscipit obcaecati soluta exercitationem placeat corrupti quasi expedita. Odit consequuntur laboriosam id deleniti rem nobis mollitia velit officia, error autem quia a earum perspiciatis voluptatem laudantium nisi recusandae ratione dicta est. Enim ut corporis numquam alias rem! Autem animi illo rerum asperiores libero eveniet eum incidunt at sint in sequi maxime accusantium ad enim provident adipisci, placeat iure a facere hic ullam porro, corporis odio delectus? Aut, veritatis at perferendis corporis aliquid suscipit voluptate!</p>
                        </div>
                        <div id="blog-career" className=" mt-10">
                            <h1 className='text-2xl mb-2'>Career</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti pariatur at voluptates aspernatur ullam. Beatae fugiat id enim quisquam ea minus voluptatem soluta quibusdam corporis ut asperiores, excepturi, non hic quo in doloremque! Enim at officiis nemo placeat dolorum quidem, nesciunt inventore optio provident architecto sit, numquam maiores accusamus rem! Magni ut amet natus omnis placeat, sapiente iste voluptatem explicabo beatae voluptate dolores maiores eius ullam enim, fugit atque dicta fugiat, inventore voluptates? Nam maiores velit tempora temporibus assumenda incidunt, fugiat repudiandae voluptate? Atque libero quasi modi! Nostrum exercitationem quidem officia ab, repudiandae voluptates rerum mollitia quae sit earum necessitatibus?</p>
                        </div>
                    </div>


                </article>


                <section className='ml-96 border-l-2 p-8 '>
                    <h1 className='text-2xl text-indigo-600'>About</h1>
                    <a href="#blog-organization" className="hover:text-white hover:bg-gray-900 hover:border-white rounded">Organization</a>
                    <br />
                    <hr className='border-1 mb-1' />

                    <a href="#blog-factAndFigures" className="hover:text-white hover:bg-gray-900 hover:border-white rounded ">Facts and Figures</a>
                    <br />
                    <hr className='border-1 mb-1' />
                    <a href="#blog-people" className="hover:text-white hover:bg-gray-900 hover:border-white rounded">People</a>
                    <br />
                    <hr className='border-1 mb-1' />
                    <a href="#blog-future" className="hover:text-white hover:bg-gray-900 hover:border-white rounded">Future</a>
                    <br />
                    <hr className='border-1 mb-1' />
                    <a href="#blog-career" className="hover:text-white hover:bg-gray-900 hover:border-white rounded">Career</a>

                </section>
            </div>

        </div>
    );
};

export default About;