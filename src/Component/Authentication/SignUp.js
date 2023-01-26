import React from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link , useNavigate} from 'react-router-dom';
import auth from '../../firebase';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const SignUp = () => {

      
    const [loginData, setLoginData] = useState({});
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
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
        console.log(data);        
        // console.log(register);
        await createUserWithEmailAndPassword(data.email, data.password);

        
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

        navigate('/home');
        // toast('অ্যাকাউন্ট তৈরি করা হয়েছে');

        const googleLogin = await signInWithGoogle(data.email);
        await updateProfile({ displayName: data.name });
        console.log('update done');

    }

 

    // console.log("In sign up page");
    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    // if (user || gUser) {
    //     console.log(user);

    // }
    // // if(loading | gLoading){
    // //     return <LoadingSpiner></LoadingSpiner>
    // // }


    
    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/61pMzz0/marian-lake-darran-mountain-range-new-zealand.jpg")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="px-5 pt-24 mb-10">
                        <h1 className="mb-5  text-5xl text-[#E8F0FE] font-bold">Sign Up</h1>

                        <div className="card lg:w-96 bg-[#E8F0FE] p-4 text-black">
                            <form onSubmit={handleSubmit(onSubmit)}  >
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Name"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter Email"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    </label>
                                </div>


                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        className="input input-bordered w-full max-w-xs"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    </label>
                                </div>


                                {signInError}



                                <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
                            </form>
                            <p><small>All ready have an Account <Link className='text-primary' to="/signIn"> SignIn</Link></small></p>
                            <div className="divider">or</div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-outline"
                            >SIGN IN WITH GOOGLE</button>
                        </div>
                    </div>
                </div >

            </div>




            <Footer></Footer>
        </div>
    );
};

export default SignUp;