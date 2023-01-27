import { getAuth } from 'firebase/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase';
import useSpecialTour from '../../hooks/useSpecialTour';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Registration = () => {
    // const [user] = getAuth(auth);

    const [tours, setTours] = useSpecialTour();
    const { id, place, image, details } = tours || {};

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const bkash = e.target.bkash.value;
        const address = e.target.address.value;
        const status = "pending"

        const SpecialBookingDetails = { name, email, bkash, address, status }

        console.log(SpecialBookingDetails)
        const url = `http://localhost:5000/SpecialBookingDetails`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(SpecialBookingDetails)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                toast("আপনার ডাটা গৃহীত হয়েছে");
                // toast("Registration completed")
                document.getElementById("myForm").reset();
            })

    }

    return (
        <div>
            <Navbar></Navbar>

            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal ">
                <div class="modal-box relative  bg-[#E8F0FE]">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='text-center '>
                        <h3 class="text-lg font-bold">Thank your sir</h3>
                        <p class="py-4">Please go to the dashboard and completed the payment process for your confirming registration</p>

                        <Link className='btn btn-sm  m-3' to="/dashboard">Dashboard</Link>
                        <Link className='btn btn-sm  m-3' to="/home">Home</Link>

                    </div>
                </div>
            </div>



            <div class=" text-white hero-overlay bg-opacity-20  py-32 hero min-h-screen bg-base-200 " style={{ backgroundImage: `url("https://travelvibe.net/wp-content/uploads/2021/03/Most-attractive-tourist-attraction-of-bangladesh-saint-martin-e1615271792566.jpg")` }}>
                <div class="hero-content  hero-overlay m-0 p-20 flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Registration Closes soon </h1>
                        <p class="py-6">{details} </p>


                        <h1 class="text-2xl pt-4 font-bold">Registration Last date : 29 : 01 : 2023</h1>
                        <p class="py-6">{details}</p>

                    </div>




                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#E8F0FE]">
                        <div class="card-body">
                            <div class="form-control">
                                <form id='myForm' className='text-black' onSubmit={handleSubmit} action="">
                                    <input type="text" placeholder="Name" name='name' class="input w-full   my-2 input-bordered" />
                                    <input type="text" placeholder="email" name='email' class="input my-2 w-full   input-bordered" />
                                    <input type="text" placeholder="Bkash Number" name='bkash' class="input my-2 w-full   input-bordered" />
                                    <input type="text" placeholder="Address" name='address' class="input my-2  w-full  input-bordered" />


                                    <button className='w-full' type="submit" ><label class="btn my-2 w-full  bg-green-400" for="my-modal-3" >Registration</label></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Registration;