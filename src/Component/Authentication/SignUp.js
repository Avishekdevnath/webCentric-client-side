import React from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const SignUp = () => {
    const [loginData, setLoginData] = useState({});
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword (auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // const navigate = useNavigate();
    let signInError;

    console.log("In sign up page");
    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (user || gUser) {
        console.log(user);
       
    }
    // if(loading | gLoading){
    //     return <LoadingSpiner></LoadingSpiner>
    // }


    const onSubmit = async data => {
        // console.log(data);        
        // console.log(register);
        await createUserWithEmailAndPassword (data.email, data.password);

        
        // const userEmail = data.email;
        // const userPassword = data.password;
        
        // console.log(user)
        const userObject = {

            email:data.email,
            name:data.name,
            password:data.password,
            role:'user'
        }

        console.log(userObject);
        setLoginData(userObject);

        // const field = e.target.name;
        // const value = e.target.value;
        // const newLoginData = { ...loginData };
        // newLoginData[field] = value;
        // setLoginData(newLoginData);
        



        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userObject)
        })


            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("form submitted successfully")
                }
            })
        // e.preventDefault();

        // navigate('/home');
        // toast('অ্যাকাউন্ট তৈরি করা হয়েছে');

        // const googleLogin = await signInWithGoogle(data.email);
        // await updateProfile({ displayName: data.name });
        // console.log('update done');

    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/61pMzz0/marian-lake-darran-mountain-range-new-zealand.jpg")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="px-5 pt-24 mb-10">
                        <h1 className="mb-5  text-5xl text-[#E8F0FE] font-bold">Sign Up</h1>
                       

                        <form onSubmit={handleSubmit(onSubmit)} action="" className='w-60 card bg-[#E8F0FE] first: p-8   lg:w-full md:w-96  '>
                            <div className='flex my-4 lg:flex-row  flex-col'>
                                <input placeholder='Enter Name ' type="name " name="name" id="" className='w-full mb-4 lg:mb-0 bg-[#E8F0FE] py-4 border  border-solid outline-none mr-2  border-black pl-3 bg-transparent text-black ' />
                                {/* <input placeholder='Enter Email ' type="email " name="email" id="" className='w-full bg-[#E8F0FE]  py-4 border  border-solid outline-none  lg:ml-2 border-black pl-3 bg-transparent text-black ' /> */}
                            </div>
                            
                            <input placeholder='Enter Address ' type="text " name="phone" id="" className='w-full bg-[#E8F0FE] mt-4 py-4 border  border-solid outline-none border-black pl-3 bg-transparent text-black ' /><br />
                            <div className='flex mb-4 lg:flex-row  flex-col'>
                                <input placeholder='Enter Password ' type="password " name="password" className='w-full mb-4 lg:mb-0 bg-[#E8F0FE]  mr-2  py-4 border  border-solid outline-none border-black pl-3 bg-transparent text-black ' id="" />
                                <input placeholder='Confirm Password ' type="password " name="password" className='w-full  bg-[#E8F0FE]  lg:ml-2 py-4 border  border-solid outline-none border-black pl-3 bg-transparent text-black ' id="" />
                            </div>

                            <button className='btn w-full text-[#E8F0FE]'  type="submit">Sign Up</button>
                            <input  onClick={() => signInWithGoogle()} className='btn bg-green-600 my-4 w-full text-[#E8F0FE]' type="submit" value="Sign In With Google" />
                            <p className='text-black'>Have An Account? please <Link className="cursor-pointer underline text-blue-600" to="/signIn">sign In</Link></p>
                        </form>

                    </div>
                </div>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default SignUp;