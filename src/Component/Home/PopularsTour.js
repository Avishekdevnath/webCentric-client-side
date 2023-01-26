import React from 'react';
import Carousel from 'react-multi-carousel';

const PopularsTour = () => {

    return (
        <div className='mb-28 '>
            <h1 className='text-center font-bold text-4xl text-black my-10 '>   Most Popular Tours</h1>
            <div class="divider mb-8 mx-40 "></div>


            {/* here blog data mapping  */}

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





        </div>
    );
};

export default PopularsTour;