import React from 'react';

const Profile = () => {
    return (
        <div>
            <div class="card bg-[#E8F0FE] text-black w-96 md:w-[700px]  lg:w-[700px] text-xl shadow-xl">
                <div class="card-body ">
                    <div className='flex items-center justify-between'>
                        <h1 className='text-center font-bold text-4xl text-black my-3 '> Details </h1>
                        <button className='btn btn-sm '>Edit</button>
                    </div>
                    <hr className='' />
                    <div className='grid grid-cols-2'>
                        <div>
                            <p>Name </p>
                            <p>Email</p>
                            <p>Address</p>
                            <p>Phone number</p>
                        </div>

                        <div>
                            <p>GhuraGhuri </p>
                            <p>abcd@gmail.com</p>
                            <p>N/A</p>
                            <p>N/A</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Profile;