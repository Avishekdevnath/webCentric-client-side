import React, { useState } from 'react';
// import CountUp from 'react-countup/build/CountUp';
import CountUp from "react-countup";
import ReactVisibilitySensor from 'react-visibility-sensor';
import { FaUserCheck } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
const OverView = () => {
    const [viewPortEntered, setViewPortEntered] = useState(false);

    return (
        <div className="pt-4 pb-8 mb-4 px-8 overViewStyle bg-[#E8F0FE] ">
      <h2 className="text-center text-black  text-4xl font-bold uppercase py-5">
        overview
      </h2>
      <div className="cards grid grid-cols-1 lg:grid-cols-3 gap-4 md:mx-28">
        <div className="card w-[90%] mx-auto p-5 items-center">
          <figure>
            <FaUserCheck className="text-[100px] text-center"></FaUserCheck>
          </figure>
          <div className="card-body text-center">
            <h1 className="text-5xl font-bold">
              <CountUp start={viewPortEntered ? null : 0} end={500} suffix="+">
                {({ countUpRef }) => (
                  <ReactVisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h2 className="card-title text-center">Registered Users</h2>
          </div>
        </div>

        <div className="card w-[90%] mx-auto p-5 items-center">
          <figure>
            <GiNotebook className="text-[100px] text-center"></GiNotebook>
          </figure>
          <div className="card-body text-center">
            <h1 className="text-5xl font-bold">
              <CountUp start={viewPortEntered ? null : 0} end={400} suffix="+">
                {({ countUpRef }) => (
                  <ReactVisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h2 className="card-title text-center">Services Given</h2>
          </div>
        </div>

        <div className="card w-[90%] mx-auto p-5 items-center   ">
          <figure>
            <MdQuiz className="text-[100px] text-center"></MdQuiz>
          </figure>
          <div className="card-body text-center">
            <h1 className="text-5xl font-bold">
              <CountUp start={viewPortEntered ? null : 0} end={300} suffix="+">
                {({ countUpRef }) => (
                  <ReactVisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setViewPortEntered(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </ReactVisibilitySensor>
                )}
              </CountUp>
            </h1>
            <h2 className="card-title text-center">User Review</h2>
          </div>
        </div>
      </div>
    </div>
    );
};

export default OverView;