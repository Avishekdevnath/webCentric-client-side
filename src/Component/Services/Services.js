import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import image from '../../asset/Images/search.png'
const Services = () => {
    return (
        <div>
            <Navbar></Navbar>

{/* lg:h-[600px] md:h-[450px] h-[300px] */}
            <div className="hero  min-h-screen mb-20 " style={{ backgroundImage: `url("https://i.ibb.co/hR2nBFx/decoration-blue-sky-white-clouds-parks-space-landscape-mountains.jpg")` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="px-5 pt-24 mb-10">
                        <h1 className="mb-5  text-4xl text-[#E8F0FE] font-bold">Find Your Destination</h1>

                        {/* Searching option design start here  */}

                        <div class="card text-black card-compact  bg-[#E8F0FE] shadow-xl">
                            <div class="card-body">

                                <div className='py-8 grid lg:grid-cols-3 md:grid-cols-3 grid-col-1 gap-3'>

                                    <div className='first-div flex items-center'>
                                        <p className='font-bold '>Date</p>
                                        <select class="select select-bordered w-32 md:w-40 lg:w-80">
                                            <option disabled selected>Select your tour date</option>
                                            <option>Han Solo</option>
                                            <option>Greedo</option>
                                        </select>
                                    </div>

                                    <div className='second-div flex items-center '>
                                        <p className='font-bold mr-2'>District</p>
                                        <select class="select select-bordered w-32 md:w-40 lg:w-80">
                                            <option disabled selected>Select District</option>
                                            <option>Dhaka</option>
                                            <option>Chattogram</option>
                                            <option>Sylhet</option>
                                            <option>Cox's bazar</option>
                                            <option>Rangamatise</option>
                                            <option>Sent martin</option>
                                        </select>
                                    </div>

                                    <div className='third-div flex items-center'>
                                        <p className='font-bold '>Area</p>
                                        <select class="select select-bordered w-32 md:w-40 lg:w-80">
                                            <option disabled selected>Select Visiting Area</option>
                                            <option>Han Solo</option>
                                            <option>Greedo</option>
                                        </select>
                                    </div>
                                </div>



                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/* tour services card code start here  */}
            <h1 className='text-center font-bold text-4xl text-black my-10 '>   Most Popular Tours</h1>
            <div class="divider mb-8 mx-40 "></div>



            <div className='mx-10 md:mx-20 lg:mx-40 mb-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  '>
                <div class="bg-[#E8F0FE] cursor-pointer card lg:w-[550px] mr-3 my-3   hover:shadow-lg">
                    <figure><img className='w-full h-60' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='text-blue-500'>Category</p>
                        <h2 class="card-title">
                            Title
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-start">
                            <div class="badge badge-outline">Date</div>
                            <div class="badge badge-outline">Likes</div>
                        </div>
                    </div>
                </div>


                <div class="bg-[#E8F0FE] cursor-pointer card lg:w-[550px] mr-3 my-3   hover:shadow-lg">
                    <figure><img className='w-full h-60' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='text-blue-500'>Category</p>
                        <h2 class="card-title">
                            Title
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-start">
                            <div class="badge badge-outline">Date</div>
                            <div class="badge badge-outline">Likes</div>
                        </div>
                    </div>
                </div>




                <div class="bg-[#E8F0FE] cursor-pointer card lg:w-[550px] mr-3 my-3   hover:shadow-lg">
                    <figure><img className='w-full h-60' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='text-blue-500'>Category</p>
                        <h2 class="card-title">
                            Title
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-start">
                            <div class="badge badge-outline">Date</div>
                            <div class="badge badge-outline">Likes</div>
                        </div>
                    </div>
                </div>



                <div class="bg-[#E8F0FE]  cursor-pointer card lg:w-[550px] mr-3 my-3   hover:shadow-lg">
                    <figure><img className='w-full h-60' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div class="card-body">
                        <p className='text-blue-500'>Category</p>
                        <h2 class="card-title">
                            Title
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-start">
                            <div class="badge badge-outline">Date</div>
                            <div class="badge badge-outline">Likes</div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer></Footer>

        </div>
    );
};

export default Services;