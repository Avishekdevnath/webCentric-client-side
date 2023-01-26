import React from 'react';

const AllUser = () => {
    return (
        <div>
            <div>
            <div className=' '>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full ">
                        <thead>
                            <tr>
                                <th>serial</th>
                                {/* <th>Image</th> */}
                                <th>User Name</th>
                                <th>User email</th>
                                {/* <th>Address</th> */}
                                <th>Contact Number</th>
                                {/* <th>NID Number</th> */}
                                {/* <th>Delete</th> */}
                                {/* <th>Status</th> */}
                            </tr>
                        </thead>
                        {/* <tbody>
                            {
                                requests.map((o, index) =>
                                    <tr>
                                        <th>{index + 1} </th>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src={o.photo} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{o.name}</td>
                                        <td>{o.email}</td>
                                        <td>{o.address}</td>
                                        <td>{o.bikashNumber}</td>
                                        <td>{o.nidNumber}</td>
                                        <th><button class="btn btn-sm  bg-red-100 text-black hover:text-white"
                                            onclick={() => handleDelete(o._id)}
                                        >Delete</button></th>
                                        <th>
                                            <button class="btn btn-sm  bg-green-100 text-black hover:text-white"
                                                onClick={() => handleUpdatedStatus(o._id)}
                                            >{o.status}</button>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody> */}
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllUser;