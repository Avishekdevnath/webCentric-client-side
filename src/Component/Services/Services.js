import React from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
// import image from '../../asset/Images/search.png'
import useData from '../../hooks/useData';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
const Services = () => {

    const [data, setData] = useData();
    const [district, setDistrict] = useState();
    const [place, setPlace] = useState();
    const [hospitals, setHospitals] = useState();
    const [hotels, setHotels] = useState();
    const [police, setPolice] = useState();
    const [touristspots, setTouristSpots] = useState();
    const [transports, setTransports] = useState();

    // console.log(data[0]);
    // console.log(data)
    const { register, handleSubmit } = useForm();
    const handleSearch = (e) => {
        console.log("hello")
        // console.log(district)
        console.log(data)
        const Myplace = data.map(e => {
            // console.log(e.place)
            // console.log(district)
            if (e?.place?.toLowerCase() === district?.toLowerCase()) {
                console.log(e)
                setPlace(e);
                console.log(place)
                setHospitals(place?.Hospitals)
                setHotels(place?.Hotels)
                setPolice(place?.police)
                setTouristSpots(place?.setTouristSpot)
                setTransports(place?.Transports)

                // { place.hospitals && console.log(hospitals)}
                // { place.hotels && console.log(hotels)}
                // { place.police && console.log(police)}
                // { place.touristspots && console.log(touristspots)}
                // { place.transports && console.log(transports)}

            }
        })

        console.log(Myplace)
        // const comment = e.target.comment.value;
        // const peopleNew =  user? user.email : "unknown person" ;
        // const message = { comment, peopleNew };
        // console.log(comment);

        // const url = `http://localhost:5000/messages`;
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
        // e.target.comment.value = ''

        e.preventDefault();


    }
    const handleDistrict = (e) => {
        // console.log(e.target.value)
        setDistrict(e.target.value)
    }
    console.log(touristspots)
    return (
        <div>
            <Navbar></Navbar>

            {/* lg:h-[600px] md:h-[450px] h-[300px] */}
            <div className="hero  min-h-screen mb-20 " style={{ backgroundImage: `url("https://i.ibb.co/hR2nBFx/decoration-blue-sky-white-clouds-parks-space-landscape-mountains.jpg")` }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="px-5 pt-24 mb-10">
                        <h1 className="mb-5  text-4xl text-[#E8F0FE] font-bold">Find Your Destination</h1>

                        {/* Searching option design start here  */}


                        <div className="card mt-24 text-black card-compact  bg-[#E8F0FE] shadow-xl">
                            <div className="card-body ">


                                <form onSubmit={handleSearch} className='py-8 grid lg:grid-cols-2 md:grid-cols-3 grid-col-1 gap-3' >

                                    <select onChange={e => { handleDistrict(e) }} name="dis" id="district" className="select select-bordered w-32 md:w-40 lg:w-80">
                                        <option disabled selected>Select District</option>
                                        <option value="dhaka">Dhaka</option>
                                        <option value="chattogram">Chattogram</option>
                                        <option value="sylhet">Sylhet</option>
                                        <option value="cox's bazar">Cox's bazar</option>
                                        <option value="rangamati">Rangamati</option>
                                        <option value="saint martin">Saint martin</option>
                                        <option value="bandarban">Bandarban</option>
                                    </select>

                                    <button type="submit" className='btn w-full'>Search Your Destination</button>

                                </form>



                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/* tour services card code start here  */}



            {place &&
                <div>
                    <h1 className='text-center font-bold text-4xl text-black my-10 '>   Your Selected District </h1>
                    <div className="divider mb-8 mx-40 "></div>
                    <div class="">
                        <img src={place.image} class="mx-auto object-cover h-48 w-96 " />
                    </div>
                    <h1 className=' text-3xl text-black text-center'>{place.place}</h1>

                    <div className='mx-10 md:mx-20 lg:mx-40 mb-20'>
                        <h1 className='font-bold text-2xl text-black text-start'>Tourist Spots</h1>
                        <hr className='mb-5' />

                        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  '>
                            {place &&
                                place.Torist_Spots?.map(e => {
                                    const { Address, Close_Time, Name, Open_Time, image } = e;
                                    console.log(Address)
                                    return (
                                        <div>
                                            <div className="bg-[#E8F0FE] cursor-pointer card lg:w-[550px] mr-3 my-3   hover:shadow-lg">
                                                <figure><img className='w-full h-60' src={image} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <p className='text-blue-500 text-2xl text-black text-bold'>{Name}</p>
                                                    <h2 className="card-title">
                                                        
                                                        <div className="text-md text-xl">Address: <span className='text-md'>{Address}</span></div>
                                                    </h2>
                                                    
                                                    <div className="card-actions justify-start">
                                                        <div className="badge badge-outline">Opening time: {Open_Time}</div>
                                                        <div className="badge badge-outline">Closing time: {Close_Time} </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                                )}

                        </div>
                    </div>
                    <div className='mx-10 md:mx-20 lg:mx-40 mb-20'>
                        <h1 className='font-bold text-2xl text-black text-start'>Hospitals</h1>
                        <hr className='mb-5' />

                        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  '>
                            {place &&
                                place?.Hospitals?.map(e => {
                                    const { Address, Get_Direction, Name, Phone, image } = e;
                                    console.log(Address)
                                    return (
                                        <div>
                                            <div className="bg-[#E8F0FE] cursor-pointer card lg:w-[550px] mr-3 my-3   hover:shadow-lg">
                                                <figure><img className='w-full h-60' src={image} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <p className='text-blue-500 text-2xl text-black'>{Name}</p>
                                                    <h2 className="card-title ">
                                                        
                                                        <div className="">Address: <span>{Address}</span></div>
                                                    </h2>
                                                    <h2 className="card-title">
                                                        
                                                        <div className=" ">Map Link: <a href={Get_Direction}></a> Map Link</div>
                                                    </h2>
                                                   
                                                    <div className="card-actions justify-start">
                                                        <div className="badge badge-outline">Phone: {Phone}</div>
                                                        {/* <div className="badge badge-outline">Likes</div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }
                                )}



                        </div>
                    </div>
                </div>



            }






            <Footer></Footer>

        </div>
    );
};

export default Services;