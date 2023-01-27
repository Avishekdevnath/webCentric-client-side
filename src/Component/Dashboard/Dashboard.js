import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    console.log(user);
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
                    <ul class="menu bg-[#E8F0FE] text-black p-4 w-80  ">
                        
                        
                        
                        
                        <div className='mx-auto '>
                            <div class="avatar ml-4">
                                <div class="w-24 md:w-32 lg:w-40  mt-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img alt='' src={user?.photoURL} />
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='text-center text-xl font-bold text-black '>{user?.displayName}</h1>
                                <p className='text-center  text-black font-bold'>{user?.email}</p>
                            </div>
                        </div>





                        <li> <Link to="/dashboard/profile">My profile</Link> </li>
                        <li> <Link to="/dashboard/AllUser">All Users</Link> </li>
                        <li> <Link to="/dashboard/AllHotel">All Hotel</Link> </li>
                        <li> <Link to="/dashboard/AllHotelBookingDetails">All Hotel Booking Details</Link> </li>
                        <li> <Link to="/dashboard/AllReview">All Review</Link> </li>
                        <li> <Link to="/dashboard/addHotel">Add Hotel</Link> </li>
                        <li> <Link to="/dashboard/BookedHotel">Booked Hotel</Link> </li>
                        <li> <Link to="/dashboard/specialTours">Special Tour</Link> </li>
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