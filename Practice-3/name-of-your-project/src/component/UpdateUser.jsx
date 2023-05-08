import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const user = useLoaderData()

    function formHandler(event) {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updateUser = { name, email }
        console.log(updateUser)
        fetch(`http://localhost:7000/users/${user._id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
         
        event.target.reset()
    }
    return (
        <div>
            <h2>Update User</h2>
            <form onSubmit={formHandler}>
                <input type="text" name='name' placeholder='name' defaultValue={user?.name} required />
                <br /> <br />
                <input type="email" name='email' placeholder='email' defaultValue={user?.email} required />
                <br /> <br />
                <input type="submit" value='update user' required />
            </form>

        </div>
    );
};

export default UpdateUser;