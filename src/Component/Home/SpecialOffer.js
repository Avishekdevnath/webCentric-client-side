import React from 'react';
import { Link } from 'react-router-dom';

const SpecialOffer = () => {
    return (
        <div>

            <div class="hero my-10 py-5 lg:max-h-screen min-h-screen bg-[#E8F0FE] ">
                <div class="hero-content flex-col lg:flex-row">
                    <img alt=""  src="https://i.ibb.co/rF7H8Mt/waterfall-clean-tourist-blue-flow-asian.jpg" class="lg:w-98 rounded-lg shadow-2xl" />
                    <div className="px-10  sm:pl-24">
                    <h1 class="text-5xl font-bold">Special Tour Package!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/services" ><button class="btn ">Book Now</button></Link>
                    </div>
                </div>
            </div>

            {/* <div class="hero lg:max-h-screen min-h-screen   py-24 bg-slate-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img className='lg:w-96 ' alt='' src="" class="max-w-lg h-96 rounded-lg shadow-2xl" />
                    <div className='md:pl-32 lg:pl-10 '>
                        <h1 class="text-5xl font-bold">Special Tour Package!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/services" ><button class="btn ">Book Now</button></Link>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default SpecialOffer;