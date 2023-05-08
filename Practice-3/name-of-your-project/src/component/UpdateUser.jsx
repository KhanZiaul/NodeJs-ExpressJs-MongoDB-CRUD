import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    const user = useLoaderData()

    function formHandler(event) {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email }
        console.log(user)
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