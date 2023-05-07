import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData()

    function deleteHandler(id){
        console.log(id)
        fetch(`http://localhost:5173/users/${id}`,{
            method:'DELETE',
            headers:{
                'content-type' : 'application.json'
            },
            body:JSON.stringify()
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
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
                            {user.name} - {user.email} <button onClick={()=>deleteHandler(user._id)}>X</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Users;