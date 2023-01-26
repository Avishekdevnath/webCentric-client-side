import React from 'react';
import { Link } from 'react-router-dom';

const TopDestination = () => {
    return (

        <div >
            <h1 className='text-center font-bold text-4xl text-black my-10 '>Top Destination</h1>
            <div class="divider mb-8 mx-40 "></div>
            <div className=" my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-10/12	 " >
                <div class="card cursor-pointer card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs ">
                    <figure className=" w-100">
                        <img
                            src="https://images.unsplash.com/photo-1642179335770-82d5ffc4b439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmdhbWF0aXxlbnwwfHwwfHw%3D&w=1000&q=80"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>

                    <h1 class="absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Rangamati
                    </h1>
                </div>


                <div class="card cursor-pointer card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs ">
                    <figure>
                        <img
                            src="https://live.staticflickr.com/65535/48530509381_c7eb7d3d24_b.jpg "
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                    <h1 class="absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Lalbagh
                    </h1>
                </div>

                <div class="card cursor-pointer card-compact w-96 max-w-xs  lg:max-w-xs md:w-[675px] bg-red-500 shadow-xl relative overflow-hidden bg-no-repeat bg-cover ">
                    <figure>
                        <img
                            src="https://pathfriend-bd.com/wp-content/uploads/2019/08/Overnight-Srimangal.jpg"
                            class="max-w-xs  lg:max-w-xs md:w-full hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                    <h1 class="absolute text-4xl font-bold  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Srimangal
                    </h1>
                </div>

                



            </div>

            <div className='flex justify-between mx-32 mt-0 pt-0'>
                <div></div>
                <Link to="/gallery" class="btn btn-link capitalize">Explore Destination</Link>
            </div>

        </div>
    );
};

export default TopDestination;