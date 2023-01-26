import React from 'react';

const Faq = () => {
    return (
        <div>
            <div class="hero max-h-screen my-20 " Style="background-image: url(https://i.ibb.co/ssX0bWt/question-mark-background.jpg);">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md py-10">
                        <h1 class="mb-5 text-5xl font-bold text-[#E8F0FE]">FAQ</h1>

                        <div class="collapse collapse-arrow border mb-3">
                            <input type="checkbox" />
                            <div class="collapse-title  text-[#E8F0FE]  text-xl font-medium">
                                Question -1
                            </div>
                            <div class="collapse-content text-[#E8F0FE] ">
                                <p>Ans 1</p>
                            </div>
                        </div>


                        <div class="collapse collapse-arrow border">
                            <input type="checkbox" />
                            <div class="collapse-title text-xl text-[#E8F0FE] font-medium">
                                Question -2
                            </div>
                            <div class="collapse-content text-[#E8F0FE]">
                                <p>Ans -2</p>
                            </div>
                        </div>


                        



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;