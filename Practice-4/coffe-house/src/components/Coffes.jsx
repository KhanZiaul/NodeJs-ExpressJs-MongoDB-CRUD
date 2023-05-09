import React from 'react';

const Coffes = ({ coffe }) => {
    const { name, chef, supplier, taste, price, details, photo } = coffe
    return (
        <div className='flex items-center justify-between shadow-2xl p-5'>
            <div>
                <img src={photo} alt="" />
            </div>
            <div>
                <p className='mb-3'><span className='font-bold'>Name</span> :  {name}</p>
                <p className='mb-3'><span className='font-bold'>Chef</span> : {chef}</p>
                <p className='mb-3'><span className='font-bold'>Price</span> : {price}</p>
            </div>
            <div className="btn-group btn-group-vertical gap-3">
                <button className="btn ">Details</button>
                <button className="btn">Edit</button>
                <button className="btn">Delete</button>
            </div>
        </div>
    );
};

export default Coffes;