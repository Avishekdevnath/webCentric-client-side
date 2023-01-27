// import logo from './logo.svg';
import './App.css';
// import Navbar from './Component/Shared/Navbar';
import Contact from './Component/Contact/Contact';
// import Footer from './Component/Shared/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import Forum from './Component/Forum/Forum';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Gallery from './Component/Gallery/Gallery';
import SignIn from './Component/Authentication/SignIn';
import SignUp from './Component/Authentication/SignUp';
import Dashboard from './Component/Dashboard/Dashboard';
import Profile from './Component/Dashboard/Profile';
import AllUser from './Component/Dashboard/AllUser';
import AllHotel from './Component/Dashboard/AllHotel';
import AllHotelBookingDetails from './Component/Dashboard/AllHotelBookingDetails';
import AllReview from './Component/Dashboard/AllReview';
import AddHotel from './Component/Dashboard/AddHotel';
import BookedHotel from './Component/Dashboard/BookedHotel';

function App() {
  

  
  const router = createBrowserRouter([
    {path:"/" , element: <Home></Home>},
    {path:"home" , element: <Home></Home>},
    {path:"contact" , element: <Contact></Contact>},
    {path:"forum" , element: <Forum></Forum>},
    {path:"about" , element: <About></About>},
    {path:"gallery" , element: <Gallery></Gallery>},
    {path:"services" , element: <Services></Services>},
    {path:"signUp" , element: <SignUp></SignUp>},
    {path:"signIn" , element: <SignIn></SignIn>},
    {
      path:"dashboard" , 
      element: <Dashboard></Dashboard>,
      children:[
        /* Profile router for all user, admin, hotel owner etc */
        {path:"/dashboard" , element: <Profile></Profile>},
        {path:"/dashboard/profile" , element: <Profile></Profile>},

        
        /* here routes for Admin */
        {path:"/dashboard/AllUser" , element: <AllUser></AllUser>},
        {path:"/dashboard/AllHotel" , element: <AllHotel></AllHotel>},
        {path:"/dashboard/AllHotelBookingDetails" , element: <AllHotelBookingDetails></AllHotelBookingDetails>},
        {path:"/dashboard/AllReview" , element: <AllReview></AllReview>},


        /* here routes for Hotel owner */
        {path:"/dashboard/addHotel" , element: <AddHotel></AddHotel>},
      
      
        /* here routes for normal user or tourist */
        {path:"/dashboard/BookedHotel" , element: <BookedHotel></BookedHotel>},
        
      ]
    },
  ])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
