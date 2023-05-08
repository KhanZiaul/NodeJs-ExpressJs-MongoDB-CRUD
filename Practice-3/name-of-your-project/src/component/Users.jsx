import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loaderUsers = useLoaderData()
    const [users,setUsers] = useState(loaderUsers)
    function deleteHandler(id) {
        console.log(id)
        fetch(`http://localhost:7000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Delete Successfully')
                    const filterUser = users?.filter(user => user._id !== id)
                    setUsers(filterUser)
                }
            })
    }

    return (
        <div>
            <h2>Users</h2>
            <p>Total user : {users.length}</p>
            {
                users?.map(user => {
                    return (
                        <div key={user._id}>
                            <p>{user.name} - {user.email} <button onClick={() => deleteHandler(user._id)}>X</button></p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;