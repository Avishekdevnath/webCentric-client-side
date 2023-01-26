import React from 'react';
import logo from '../../asset/Images/nav-logo.png'
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import useUser from '../../hooks/useUser';
const Navbar = () => {
    const admin = '';
    const logout = () => {
        signOut(auth);
    }
    
    const [user] = useAuthState(auth);
    console.log(user)
    const [person] = useUser();
    console.log(person?.role)
    const personRole = person?.role;
    console.log("Hello Navbar")
    
    let check = false
    if(personRole == 'farmer' )
    {
         check = true;
    }
    
    const menuContent = <>
       
            <li className='hover-bordered'><Link to="/" >Home</Link></li>
            <li className='hover-bordered'><Link to="/services" >Services</Link></li>
            <li className='hover-bordered'><Link to="/gallery" >Gallery</Link></li>
            <li className='hover-bordered'><Link to="/about" >About</Link></li>
            <li className='hover-bordered'><Link to="/forum" >Forum</Link></li>
            {/* <li className='hover-bordered'><Link to="/signUp" >SignUp</Link></li> */}
           


        {/* single route Dropdown content */}
            {/* <li tabindex="0">
                <Link className="">
                    Parent
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                </Link>
                <ul className="p-2 bg-white">
                    <li><Link to="">Submenu 1</Link></li>
                    <li><Link to="">Submenu 2</Link></li>
                    <li><Link to="">Submenu 2</Link></li>
                    <li><Link to="">Submenu 2</Link></li>
                </ul>
            </li> */}


            


        <li className='hover-bordered'><Link to="/contact">Contact</Link></li>
        
            
        {user && <li className='hover-bordered'> <Link to="/dashboard">Dashboard</Link></li>}
        

        {/* {
            personRole=='admin' &&    <li><NavLink to="/admin">এডমিন</NavLink></li> 
        } */}
        {/* {
            personRole=='admin' &&    <li><NavLink to="/dashboard"> ড্যাশবোর্ড</NavLink></li>
        }
        {
            personRole=='admin' &&    <li><NavLink to="/farmerDashboard">কৃষক</NavLink></li>
        }

        {
            personRole=='farmer' &&    <li><NavLink to="/farmerDashboard">কৃষক</NavLink></li>
        }  */}

        {/* <li><NavLink to="/admin">এডমিন</NavLink></li>  */}
        {/* <li><NavLink to="/farmerDashboard">কৃষক</NavLink></li> */}
        
        
        {user ? <li className='hover-bordered'> <Link onClick={logout} to="/">Sign Out</Link></li> : <li className='hover-bordered'> <Link to="/signIn">Sign In</Link></li> }

        {/* {

            personRole=='user'  && <li><button class="btn btn-accent"><Link to="/FarmerRequest"> কৃষক হোন</Link></button></li>  
        }
        
        {

        personRole=='admin'  && <li><button class="btn btn-accent"><Link to="/FarmerRequest"> কৃষক হোন</Link></button></li>  
        } */}

    </>




    return (
        <div className="navbar lg:px-20 bg-[#E8F0FE] fixed z-50 text-black font-bold  ">
            <div className="navbar-start">
                <div className="dropdown">
                    {/* One button used for two work (dropdown and dashboard) */}
                    <label for="my-drawer-2" tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#E8F0FE] text-black rounded-box w-32">
                        {menuContent}
                    </ul>
                    
                </div>
                <Link to= "/home"className='w-60 cursor-pointer '><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal  px-1">
                    {menuContent}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;