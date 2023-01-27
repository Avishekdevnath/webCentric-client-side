import React from 'react';

const Faq = () => {
    return (
      <div>
        <div
          class="hero max-h-screen my-20 "
          Style="background-image: url(https://i.ibb.co/ssX0bWt/question-mark-background.jpg);"
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md py-10">
              <h1 class="mb-5 text-5xl font-bold text-[#E8F0FE]">FAQ</h1>

              <div class="collapse collapse-arrow border mb-3">
                <input type="checkbox" />
                <div class="collapse-title  text-[#E8F0FE]  text-xl font-medium">
                  Which is the most visited place in Bangladesh?
                </div>
                <div class="collapse-content text-[#E8F0FE] ">
                  <p>
                    The Saint Martin's Island is one of the most visited
                    tourist's spots in Bangladesh. The only coral island in
                    Bangladesh is about 8 km in length and rarely more than 1 km
                    wide. It is about 10 km (6 mi) south-west of the southern
                    tip of the Cox's Bazaar-Teknaf peninsula.
                  </p>
                </div>
              </div>

              <div class="collapse collapse-arrow border">
                <input type="checkbox" />
                <div class="collapse-title text-xl text-[#E8F0FE] font-medium">
                  What are the 4 tourist services and attractions?
                </div>
                <div class="collapse-content text-[#E8F0FE]">
                  <p>
                    There are 4 different types of attractions in the travel and
                    tourism industry. These are purpose built attractions,
                    natural attractions, events and heritage attractions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Faq;