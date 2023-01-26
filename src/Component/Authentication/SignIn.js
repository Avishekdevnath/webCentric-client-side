import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

const SignIn = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle (auth)
    const { register, formState: { errors }, handleSubmit } = useForm ();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // useEffect( () =>{
    //     if (user || gUser) {
    //         navigate(from, { replace: true });
    //     }
    // }, [user || gUser , from, navigate])

    if (user || gUser) {
        navigate('/home');
    }

    
    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/g6XZYFw/inside-view-huge-breaking-wave-sea-mentawai-islands-indonesia.jpg")` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="px-5">
                        <h1 className="mb-5 text-4xl font-bold  text-[#E8F0FE]">Sign In</h1>
                        {/* <p className="text-justify tracking-wide mb-5 text-xl md:text-2xl lg:text-3x"><span className='text-4xl font-bold'>B</span>angladesh is a beautiful country with some beautiful tourist places.
                            Here foreign peoples also come to visit these places.
                            Our motive is to make tourism easier for tourists all over the world. We want to give them a better travel experience through our Travel & Tourism web App <span className='text-3xl font-bold px-2'>(Ghuraghuri)</span>
                        </p> */}
                        
                        <form onSubmit={handleSubmit(onSubmit)} action="" className='card bg-[#E8F0FE] p-8 '>
                            <input className='w-full mt-2 py-4 border bg-[#E8F0FE]  border-solid outline-none border-black pl-3 bg-transparent text-black ' placeholder='Enter Email ' type="email " name="email" id="" /><br />
                            <input className='w-full   mb-4 py-4 border bg-[#E8F0FE]  border-solid outline-none border-black pl-3 bg-transparent text-black ' placeholder='Enter Password ' type="password " name="password" id="" />
                            {/* <button className='btn w-full text-[#E8F0FE]'>Sign In</button> */}
                            <input className='btn w-full text-[#E8F0FE]' type="submit" value="Sign In" />
                            <input  onClick={() => signInWithGoogle()} className='btn bg-green-600 my-4 w-full text-[#E8F0FE]' type="submit" value="Sign In With Google" />
                            <p className='text-black'>If you don't have an account? please <Link className="cursor-pointer underline text-blue-600 " to="/signUp">sign Up</Link></p>
                        </form>
                    </div> 
                </div>
            </div>            
            <Footer></Footer>
            
        </div>
    );
};

export default SignIn;