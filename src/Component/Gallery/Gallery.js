import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Gallery = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div
                className=" hero min-h-screen "
                style={{
                    backgroundImage: `url("https://i.ibb.co/tDGpX2D/full-shot-travel-concept-with-landmarks.jpg?fbclid=IwAR06cRJ2s0Kx4eR2Bsqi5gdchJ2U0XrD0O0bi5sMES6HzB8nZ5DZ0II7yGw")`,
                }}
            >
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hey Guys!!</h1>
                        <p className="mb-5 font-bold text-xl md:text-2xl lg:text-3x">
                        Choose Your Destination?
                        </p>
                        {/* <button className="btn btn-primary">Get Started</button> */}
                    </div>
                </div>
            </div>

            
            <div className=" my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto w-10/12	 " >
                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs ">
                    <figure className=" w-100">
                        <img
                            src="https://images.unsplash.com/photo-1642179335770-82d5ffc4b439?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmdhbWF0aXxlbnwwfHwwfHw%3D&w=1000&q=80"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>

                    <h1 class="absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Rangamati
                    </h1>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs ">
                    <figure>
                        <img
                            src="https://live.staticflickr.com/65535/48530509381_c7eb7d3d24_b.jpg "
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                    <h1 class="absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Lalbagh
                    </h1>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                    <figure>
                        <img
                            src="https://pathfriend-bd.com/wp-content/uploads/2019/08/Overnight-Srimangal.jpg"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                    <h1 class="absolute text-4xl font-bold  text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Srimangal
                    </h1>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                    <figure>
                        <img
                            src="https://lh5.googleusercontent.com/p/AF1QipNq_eV1IvJNOsTzRNTNEGr1GrdscJ-6-CbA_9y4=w1080-k-no"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                    <h1 class="absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Bandarban
                    </h1>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                    <figure>
                        <img
                            src="https://i.pinimg.com/originals/3b/90/02/3b90026e4d5a8a1650dbd7dbb932426d.jpg"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                    <h1 class="absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Jafhlang
                    </h1>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                    <figure>
                        <img
                            src="https://dhakato.com/wp-content/uploads/2020/02/dhaka_to_coxs_bazar.jpg"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                    <h1 class="absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        Cox'sBazar
                    </h1>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs ">
                    <figure>
                        <img
                            src="http://www.travelmate.com.bd/wp-content/uploads/2019/06/Tanguar-Haor-Sunamganj-1024x683.jpg"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                    <h1 class="absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        TangaurHaor
                    </h1>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                    <figure>
                        <img
                            src="https://live.staticflickr.com/65535/7707182500_947e915528_b.jpg"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                    <h1 class="absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        AhsanManzil
                    </h1>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                    <figure>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/%E0%A6%B8%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%97%E0%A6%BE%E0%A6%81%E0%A6%93_%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BE%E0%A6%AE_%E0%A6%A8%E0%A6%97%E0%A6%B0_%E0%A6%AA%E0%A7%81%E0%A6%B0%E0%A6%BE%E0%A6%A4%E0%A6%A8_%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%AA%E0%A6%A8%E0%A6%BE-2.jpg/800px-%E0%A6%B8%E0%A7%8B%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A6%97%E0%A6%BE%E0%A6%81%E0%A6%93_%E0%A6%AA%E0%A6%BE%E0%A6%A8%E0%A6%BE%E0%A6%AE_%E0%A6%A8%E0%A6%97%E0%A6%B0_%E0%A6%AA%E0%A7%81%E0%A6%B0%E0%A6%BE%E0%A6%A4%E0%A6%A8_%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%AA%E0%A6%A8%E0%A6%BE-2.jpg"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                    <h1 class="absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        PanamNagar
                    </h1>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                    <figure>
                        <img
                            src="https://placeimg.com/400/225/arch"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                    <figure>
                        <img
                            src="https://placeimg.com/400/225/arch"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                    <figure>
                        <img
                            src="https://placeimg.com/400/225/arch"
                            class="max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                            alt="Shoes"
                        />
                    </figure>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Gallery;