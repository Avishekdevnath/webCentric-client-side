import React, { useRef } from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import emailjs from '@emailjs/browser';
// import background1 from '../../asset/Images/contact-page-img-1.jpg'
// import background2 from '../../asset/Images/contact-page-img-2.jpg'
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_dit06tf', 'template_laseqgq', form.current, 'WkOtsx8FXnqT0efdN')
            .then((result) => {
                console.log(result.text);
                alert('Your message has been sent. Thanks for contacting with us.');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (

        <div className=''>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/m5Zt0F3/contact-page-img-2.jpg")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hey!!</h1>
                        <p className="mb-5 text-xl md:text-2xl lg:text-3x">Do you want to talk to us?</p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>
        
            {/* <a href="https://ibb.co/GR6QTMR"><img src="https://i.ibb.co/tDGpX2D/full-shot-travel-concept-with-landmarks.jpg" alt="full-shot-travel-concept-with-landmarks" border="0"></a><br /><a target='_blank' href='https://whatsmyscreenresolution.com/'>what is my screen dimension</a><br /> */}

            <div className='py-20 flex justify-center items-center'>
                <form ref={form} onSubmit={sendEmail} className='w-9/12 '>
                <div className='mx-auto items-center'>
                    <div className='w-full m-3'>
                        <input name="f_name" className='p-5 bg-[#E8F0FE]   my-4 border-solid border-2 border-black w-full  lg:w-[525px] ' placeholder="First  Name"   type="text" />      
                        <input name="l_name" className='p-5  bg-[#E8F0FE]   border-solid border-2 border-black w-full lg:w-[525px]  lg:ml-16 ' placeholder="Last Name"  type="text" />      
                    </div>
                    <div className='w-full m-3'>
                        <input name="email" className='p-5  bg-[#E8F0FE]   border-solid border-2 border-black w-full lg:w-[525px]  my-4' placeholder="Email" type="text" />      
                        <input name="mobile" className='p-5  bg-[#E8F0FE]  border-solid border-2 border-black w-full lg:w-[525px]  lg:ml-16  ' placeholder="Mobile" type="text" />      
                    </div>

                    <div className='w-full'>
                        <input  name="address" className='p-5  bg-[#E8F0FE]  border-solid border-2 border-black w-full lg:w-[1118px]  m-3' placeholder="Address" type="text" /> <br />
                        <input  name="subject" className='p-5  bg-[#E8F0FE]  border-solid border-2 border-black w-full lg:w-[1118px]  m-3' placeholder="Subject" type="text" /> <br />
                        <textarea  name="message" className=' bg-[#E8F0FE] p-5 border-solid border-2 border-black   w-full lg:w-[1118px]  m-3' placeholder="Message"  id="" cols="30" rows="10"></textarea>
                    </div>


                    </div>

                
                    <div className='text-center  px-3'>
                        <button type="submit" value="Send" className="btn    text-white hover:text-white">Contact</button>
                    </div>
                </form>
                
            </div> 
            <Footer></Footer>
        </div>
    );
};

export default Contact;