import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Forum = () => {

    const handleSubmit =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const comment = e.target.comment.value;
        // console.log(name, comment);
        const review = {name, comment};
        // console.log(review);


         const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })


    }

    /* 
        1. image er jaigai email er 2 digit or image 
        2. user name
        3. user comment 
        4. ami dekar sunder er jonno onnk golo  message create korchi 
           tue 1 ta reke baki 2 ta delete kore dis

    */
    return (
        <div>
            <Navbar ></Navbar>
            <div className='py-14'></div>

            {/* Forum section code start here  */}
            <div className='h-[500px] overflow-y-scroll w-4/5 mb-30 p-5 mx-auto border-solid border-4 border-black bg-[#E8F0FE]'>



                {/* user comment  */}
                <div class="chat chat-start">
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img alt='' src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className='user-comment chat-bubble'>
                        <p><b>Niloy</b></p>
                        <p>It was said that you would, destroy the Sith, not join them.</p>
                    </div>
                </div>
              

                <div class="chat chat-start">
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img alt='' src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className='user-comment chat-bubble'>
                        <p><b>Suparna</b></p>
                        <p>It was said that you would, destroy the Sith, not join them.</p>
                    </div>
                </div>
              


                <div class="chat chat-start">
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img alt='' src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                    <div className='user-comment chat-bubble'>
                        <p><b>Avishek</b></p>
                        <p>It was said that you would, destroy the Sith, not join them.</p>
                    </div>
                </div>
              









            </div>
            <div className='w-4/5 my-5 mx-auto'>
                <form className='' action="">
                    <input className='w-full bg-[#E8F0FE] md:w-3/4 lg:w-3/4 h-14 border-solid border-2 border-black rounded-md pl-3 ' placeholder='Please, If you have any questions, you can write here !!! ' type="text" name="user-problem" id="" />
                    <button className='w-full my-3 md:w-1/5 md:ml-7 lg:w-1/5 btn h-14 lg:ml-14'>Post</button>
                </form>
            </div>

            <div className='py-16'></div>
            <Footer></Footer>
        </div>
    );
};

export default Forum;