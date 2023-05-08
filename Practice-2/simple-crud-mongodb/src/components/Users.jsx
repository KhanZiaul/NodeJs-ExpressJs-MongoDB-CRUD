import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()

    function deleteHandler(id) {
        console.log(id)
        fetch(`http://localhost:4000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('delete successfully')
                }
            })
    }
    return (
        <div>
            <h2>Users</h2>
            <p>Total users : {users.length}</p>
            {
                users.map(user => {
                    return (
                        <div key={user._id}>
                            {user.name} - {user.email} <button onClick={() => deleteHandler(user._id)}>X</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;