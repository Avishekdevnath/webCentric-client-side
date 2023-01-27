import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import { useEffect, useState } from "react";
import useSpecialTour from '../../hooks/useSpecialTour';

// ...
const SpecialOffer = () => {

    const [tours, setTours] = useSpecialTour();
   
const {id, place, image, details} = tours || {} ;
// console.log(place, image, id);

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        let difference = +new Date(`10/01/${year}`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 2000)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    // ...

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });
    // ...
    return (
        <div>

            <div class="hero my-10 py-5 lg:max-h-screen min-h-screen bg-[#E8F0FE] ">
                <div class="hero-content flex-col lg:flex-row">
                    <img alt="" src={image} class="  h-[500px] w-80 md:w-[500px] lg:w-[500px] rounded-lg shadow-2xl" />
                    <div className="px-10  sm:pl-24">
                        <h1 class="text-4xl font-bold">Special Tour Package   <span className='text-green-400'>{place}</span></h1>
                        <h1 class="text-2xl pt-4 font-bold">Registration Last date : 29 : 01 : 2023</h1>
                        <p class="py-6">{details}</p>

                        <div className='text-2xl font-bold py-4  text-red-500'>
                            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                        </div>


                        <Link to="/registration" ><button class="btn ">Book Now</button></Link>




                    </div>
                </div>
            </div>

           

        </div>
    );
};

export default SpecialOffer;