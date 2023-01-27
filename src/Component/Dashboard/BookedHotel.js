import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import useTopHotelBooking from '../../hooks/useTopHotelBooking';

const BookedHotel = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;
    const [topTours, settopSpecialTours] = useTopHotelBooking()
    const [topallOrders, setTopAllOrders] = useState([]);
    // console.log(specialTours);

    return (
        <div class="overflow-x-auto pt-10 h-full w-full">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Image</th>
                        <th>Name/Email</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>payment status</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        topTours?.map((data, index) => {
                            // console.log(data);
                            const { name, email, address } = data;
                            // console.log(name, address);
                            return (
                                <tr className='text-black'>
                                    <td>{index + 1} </td>

                                    <td>
                                        <div class="flex items-center space-x-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle w-12 h-12">
                                                    <img src={user?.photoURL} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{address}</td>

                                    <th><button class="btn btn-sm  bg-green-100 text-black hover:text-white">Pending</button></th>
                                </tr>
                            )

                        }

                        )}
                </tbody>
            </table>
        </div >
    );
};

export default BookedHotel;