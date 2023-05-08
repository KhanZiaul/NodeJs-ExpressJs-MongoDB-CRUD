import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>Users</h2>
            <p>Total user : {users.length}</p>
            {
                users?.map(user => {
                    return (
                        <div key={user._id}>
                            <p>{user.name} - {user.email} <button>X</button></p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;