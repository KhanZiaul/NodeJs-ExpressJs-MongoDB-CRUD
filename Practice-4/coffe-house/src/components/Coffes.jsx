import React from 'react';

const Coffes = ({ coffe }) => {
    const { name, chef, supplier, taste, price, details, photo } = coffe
    return (
        <div>
            <div>
                <img src={photo} alt="" />
            </div>
            <div>
                <p>{name}</p>
                <p>{chef}</p>
                <p>{price}</p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Coffes;