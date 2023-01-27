import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { Link, useNavigate } from 'react-router-dom';
import usePopularTours from '../../hooks/usePopularTours';
import useSpecialTourDetails from '../../hooks/useSpecialToursDetails';

const PopularsTour = () => {


    const [popularTours, setPopularTours] = usePopularTours();

    const navigate = useNavigate()
    const explorePlace =(id) =>{
        navigate(`/explorePlace/${id}`)
        console.log(id);
    }

    // console.log(popularTours);


    return (
        <div className='mb-28 '>
            <h1 className='text-center font-bold text-4xl text-black my-10 '>   Most Popular Tours</h1>
            <div class="divider mb-8 mx-40 "></div>


            {/* here blog data mapping  */}

            <div className='mx-10 md:mx-20 lg:mx-40 mb-20  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  '>

                {
                    popularTours?.map(e => {

                        // const [Hotel_Price_Range, Hotel_image, Hotel_name, image, place, transport_image, transport_Name] = e;
                        // console.log(Hotel_image, Hotel_name, image, place, transport_image, transport_Name)
                        // console.log(e?.place);
                        return (
                            <div class="bg-[#E8F0FE] cursor-pointer card lg:w-[550px] mr-3 my-3   hover:shadow-lg">
                                <figure><img className='w-full h-60' src={e?.image} alt="Shoes" /></figure>
                                <div class="card-body">
                                    <p className='text-blue-500'>{e?.place}</p>
                                    <h2 class="card-title">
                                        {e?.place}
                                        <div class="badge badge-secondary">NEW</div>
                                    </h2>
                                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                                    <div class="card-actions justify-end">
                                        {/* <div class="badge badge-outline">Date</div> */}
                                        {/* <div class="badge badge-outline">Likes</div> */}
                                        {/* <Link  to="" className='btn '>Explore...</Link> */}
                                        <button onClick={()=>explorePlace(e?._id)} class="btn btn-md">Explore...</button>
                                        {/* /explorePlace */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

             
            </div>





        </div>
    );
};

export default PopularsTour;