import React from 'react';
import { Link } from 'react-router-dom';

const Coffes = ({ coffe }) => {

    const { _id, name, chef, price, photo } = coffe

    function deleteHandler(id) {
        console.log(id)
        fetch(`http://localhost:2000/coffes/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

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
                <Link to={`/detailsCoffe/${_id}`}>
                    <button className="btn ">Details</button>
                </Link>
                <Link to={`/updateCoffe/${_id}`}>
                    <button className="btn">Edit</button>
                </Link>
                <button onClick={() => deleteHandler(_id)} className="btn">Delete</button>
            </div>
        </div>
    );
};

export default Coffes;