import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import niloy from '../../asset/Images/niloy.png'
import avishek from '../../asset/Images/avishek.png'
import suparna from '../../asset/Images/suparna.png'
const About = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/B3fRsR7/united-states-capitol-washington-dc.jpg")` }}>
                <div className="hero-overlay bg-opacity-24"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="px-5">
                        <h1 className="mb-5 text-5xl font-bold text-[#E8F0FE]">About</h1>
                        <p className="text-justify tracking-wide mb-5 text-[#E8F0FE] text-xl md:text-2xl lg:text-3x"><span className='text-4xl font-bold'>B</span>angladesh is a beautiful country with some beautiful tourist places.
                            Here foreign peoples also come to visit these places.
                            Our motive is to make tourism easier for tourists all over the world. We want to give them a better travel experience through our Travel & Tourism web App <span className='text-3xl font-bold px-2'>(Ghuraghuri)</span>
                        </p>
                    </div>
                </div>
            </div>





            <h1 className='text-center font-bold text-4xl text-black pt-20 '>Get To Know Our Talented Members</h1>
            <div class="divider mb-8 mx-40 "></div>


            <div class="hero my-10 py-5 lg:max-h-screen min-h-screen bg-[#E8F0FE] ">
                <div class="hero-content flex-col lg:flex-row g">
                    <img alt=" " src={avishek} class= "bg-[#E8F0FE] lg:w-80 rounded-lg shadow-2xl" />
                    <div className="px-10 sm:pl-52">
                        <h1 class="text-3xl font-bold">Our Team Leader </h1>
                        <h1 class="text-2xl font-bold">Avishek Devnath </h1>
                        <p class="py-3">Back-end developer & Researcher.</p>
                        <p class="py-3">Hi, I'm Avishek Devnath. I'm a CSE student. I have
                            learned and practiced MERN Stack Development. I'm a quick learner and I love to learn and apply new things. I always enjoy teamwork.</p>
                        <button class="btn ">Explore...</button>
                    </div>
                </div>
            </div>





            <div class="hero my-10 py-5 lg:max-h-screen min-h-screen bg-[#E8F0FE] ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img alt=" " src={niloy} class="lg:w-80 bg-[#E8F0FE] rounded-lg shadow-2xl" />
                    <div className="px-10  sm:pl-52">
                        <h1 class="text-3xl font-bold">Our Team Member </h1>
                        <h1 class="text-2xl font-bold">Niloy dey</h1>
                        <p class="py-3">Front-end developer & UI/UX designer</p>
                        <p class="py-3">Hi, I'm Niloy dey. I'm a CSE student. I have
                            learned and practiced MERN Stack Development. I'm a quick learner and I love to learn and apply new things. I always enjoy teamwork.</p>
                        <button class="btn ">Explore...</button>
                    </div>
                </div>
            </div>




            <div class="hero my-10 py-5 lg:max-h-screen min-h-screen bg-[#E8F0FE]">
                <div class="hero-content flex-col lg:flex-row">
                    <img alt=" " src={suparna} class="lg:w-80 -[#E8F0FE] rounded-lg shadow-2xl" />
                    <div className="px-10  sm:pl-52">
                        <h1 class="text-3xl font-bold">Our Team Member </h1>
                        <h1 class="text-2xl font-bold">Suparna Dhar Aoishee </h1>
                        <p class="py-3">Front-end developer & Data Analyst</p>
                        <p class="py-3">Hi, I'm Suparna Dhar Aoishee. I'm a CSE student. I have
                            learned and practiced MERN Stack Development. I'm a quick learner and I love to learn and apply new things. I always enjoy teamwork.</p>
                        <button class="btn ">Explore...</button>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default About;