import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import useSpecialTour from '../../hooks/useSpecialTour';
import useSpecialTourDetails from '../../hooks/useSpecialToursDetails';

const SpecialTours = () => {

    const [user] = useAuthState(auth);
    const email = user?.email;
    const [specialTours, setSpecialTours, selectedTours, setSelectedTours] = useSpecialTourDetails()
    const [allOrders, setAllOrders] = useState([]);
    // console.log(specialTours);

    // const selectedOrders = specialTours?.map(e => { 
    //     if(email==e.email)
    //     {
    //         // setAllOrders(e)
    //         // return e; 
    //     }
    // })
    const selectedOrders = specialTours?.filter(order => {
        // console.log(order.userEmail)
        if (order.email === email) {
            return order;
        }
    })
    console.log(selectedOrders)
    const handleUpdatedStatus = (data) => {
        // const comment = e.target.comment.value;
        // const peopleNew = user?.email;

        // const message = { comment, people };

        // console.log(comment);
        const url = `http://localhost:5000/mail`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        // e.target.comment.value = ''

        // e.preventDefault();



        alert('updated');
        const url_R = `http://localhost:5000/SpecialBookingDetails/${data._id}`;
        const updatedStatus = 'confirmed';
        const updatedFarmer = { status: updatedStatus }
        fetch(url_R, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFarmer)
        })


    }

    const sendConfirmation = e => {

        // const comment = e.target.comment.value;
        // const peopleNew =  user?.email ;

        // const message = { comment, people };

        // // console.log(comment);
        // const url = `http://localhost:5000/mail`;
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'

        //     },
        //     body: JSON.stringify(message)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        //     e.target.comment.value = ''

        //     e.preventDefault();

    }
    const updatedStatus = _id => {
        return (
            <>
                <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                <div class="modal ">
                    <div class="modal-box relative  bg-[#E8F0FE]">
                        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div className='text-center '>
                            <h3 class="text-lg font-bold">Enter Your Amount</h3>
                            <form action='' >
                                <input type="text" placeholder='Enter your amount' className='w-full p-3 '></input>
                                <button className='btn bg-green-400 my-4' onClick={() => handleUpdatedStatus(_id)} >Confirm payment</button>
                            </form>
                            {/* <p class="py-4">Please go to the dashboard and completed the payment process for your confirming registration</p> */}

                        </div>
                    </div>
                </div>
            </>
        )
    }




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

                        selectedOrders?.map((data, index) => {
                            // console.log(data);
                            const { _id, name, email, address, status } = data;
                            // console.log(name, address);
                            return (
                                <tr className='text-black'>

                                    <td>{index + 1} </td>

                                    <td>
                                        <div class="flex items-center space-x-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle w-12 h-12">
                                                    <img src={data?.photoURL} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{address}</td>

                                    <td><button className='w-full' type="submit" ><label class="btn btn-sm  bg-green-100 text-black hover:text-white" for="my-modal-3" onClick={() => handleUpdatedStatus(data)} > {data.status}</label></button>  </td>
                                    {/* <th><button class="btn btn-sm  bg-red-100 text-black hover:text-white"
                                        onclick={() => handleDelete(o._id)}
                                    >Delete</button></th> */}
                                    {/* <th>
                                        <button class="btn btn-sm  bg-green-100 text-black hover:text-white"
                                            onClick={() => handleUpdatedStatus(data._id)}
                                        >{data.status}</button>
                                    </th> */}
                                    {/* <th><button ></button></th> */}
                                </tr>
                            )

                        }

                        )}
                </tbody>
            </table>
        </div >

    );
};

export default SpecialTours;