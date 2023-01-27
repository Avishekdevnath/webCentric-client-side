import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import useForum from '../../hooks/useForum';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Forum = () => {
    const [messages, setMessages] = useForum([]);
    const [user] = useAuthState(auth);
    const people = user?.email;
    // console.log(user.email);


    const handleSubmit = (e) => {
        
        const comment = e.target.comment.value;
        const peopleNew =  user? user.email : "unknown person" ;
        const message = { comment, peopleNew };
        // console.log(comment);

        const url = `http://localhost:5000/messages`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            e.target.comment.value = ''

            e.preventDefault();
            

    }


    return (
        <div>
            <Navbar ></Navbar>
            <div className='py-14'></div>

            {/* Forum section code start here  */}
            <div className='h-[500px] overflow-y-scroll w-4/5 mb-30 p-5 mx-auto border-solid border-4 border-black bg-[#E8F0FE]'>



                {/* user comment  */}
                <div class="chat chat-start">
                    {/* <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img alt='' src="https://placeimg.com/192/192/people" />
                        </div>
                    </div> */}
                    <div className='user-comment chat-bubble'>
                        <p><b>Niloy</b></p>
                        <p>It was said that you would, destroy the Sith, not join them.</p>
                    </div>
                </div>

            {
                messages?.map( message => 

                    
                    <div class="chat chat-start">
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img alt='' src="https://i.ibb.co/WsLP2Fx/user.jpg" />
                        </div>
                    </div>
                    <div className='user-comment chat-bubble'>
                        <p><b className='break-all'>{message.people}</b></p>
                        <p>{message.comment}</p>
                    </div>
                </div>

                )
            }


            </div>
            <div className='w-4/5 my-5 mx-auto'>
                <form onSubmit={handleSubmit} className=''>
                    <input className='w-full bg-[#E8F0FE] md:w-3/4 lg:w-3/4 h-14 border-solid border-2 border-black rounded-md pl-3 ' placeholder='Please, If you have any questions, you can write here !!! ' type="text" name="comment" id="" />
                    <button type='submit' className='w-full my-3 md:w-1/5 md:ml-7 lg:w-1/5 btn h-14 lg:ml-14'  >Post</button>
                </form>
            </div>

            <div className='py-16'></div>
            <Footer></Footer>
        </div>
    );
};

export default Forum;