import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const user = useLoaderData()
    return (
        <div>
           <p>{user?.name}</p> 
           <p>{user?.email}</p> 
            
        </div>
    );
};

export default UpdateUser;