import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import usePopularTours from '../../hooks/usePopularTours';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const ExplorePlace = () => {
    // const [Hotel_Price_Range, Hotel_image, Hotel_name, image, place, transport_image, transport_Name] = e;
    // console.log(Hotel_Price_Range, Hotel_image, Hotel_name, image, place, transport_image, transport_Name);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { id } = useParams();

    const [popularTours, setPopularTours] = usePopularTours();
    // console.log(popularTours)
    // const [products] = useProduct([]);
    const clickedProduct = popularTours?.find(pt => pt?._id === id);
    // console.log(clickedProduct);
    const { place, image, Hotel_name, Hotel_image, Hotel_Price_Range, transport_image, transport_Name } = clickedProduct || {};

    // console.log(Hotel_Price_Range, Hotel_image, Hotel_name, image, place, transport_image, transport_Name);

    return (
        <div className='bg-[#E8F0FE]'>
            <Navbar></Navbar>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img alt=" " src={image} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">{place}</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/bookingTopPlaces" class="btn btn-primary">Book Now</Link>
                    </div>
                </div>

            </div>


            <div className='grid grid-cols-2 mx-20  my-20 '>
                <div class="card  lg:w-[550px] mr-3 my-3  shadow-xl">
                    <figure><img className='h-[300px] w-full' src={Hotel_image} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title"> Hotel Name : 
                              {Hotel_name}
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Number:67557096840986</div>
                            <div class="badge badge-outline">Address: chittagong</div>
                        </div>
                    </div>
                </div>



                <div class="card  lg:w-[550px] mr-3 my-3  shadow-xl">
                    <figure><img className='h-[300px] w-full' src={transport_image} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Transport Name:
                            {transport_Name}
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Number:67557096840986</div>
                            <div class="badge badge-outline">Address: chittagong</div>
                        </div>
                    </div>
                </div>


            </div>
<Footer></Footer>

        </div>

    );
};

export default ExplorePlace;