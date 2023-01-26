import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>


            <div class="pt-16 md:pt-20 lg:pt-[70px] drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div class="drawer-side ">

                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu bg-[#E8F0FE] text-black p-4 w-80  text-base-content">
                        
                        
                        
                        
                        <div className='mx-auto '>
                            <div class="avatar ml-4">
                                <div class="w-24 md:w-32 lg:w-40  mt-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img alt='' src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='text-center text-xl font-bold text-black '>GhuraGhuri</h1>
                                <p className='text-center  text-black font-bold'>abcd@gmail.com</p>
                            </div>
                        </div>





                        <li> <Link to="/dashboard/profile">My profile</Link> </li>
                        <li> <Link to="/dashboard/AllUser">All Users</Link> </li>
                        <li> <Link to="/dashboard/AllHotel">All Hotel</Link> </li>
                        <li> <Link to="/dashboard/AllHotelBookingDetails">All Hotel Booking Details</Link> </li>
                        <li> <Link to="/dashboard/AllReview">All Review</Link> </li>
                        <li> <Link to="/dashboard/addHotel">Add Hotel</Link> </li>
                        <li> <Link to="/dashboard/BookedHotel">Booked Hotel</Link> </li>
                        <hr />
                        <li><Link to="/home" className="btn text-white mt-2 ">Go to Home</Link></li>
                    </ul>

                </div>
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Dashboard;