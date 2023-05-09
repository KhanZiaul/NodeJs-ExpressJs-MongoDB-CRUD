import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffe = () => {

    const updateCoffe = useLoaderData()

    const { _id , name, chef, supplier, taste, price, details, photo } = updateCoffe;

    function formHandler(event) {
        event.preventDefault()

        const name = event.target.name.value;
        const chef = event.target.chef.value;
        const supplier = event.target.supplier.value;
        const taste = event.target.taste.value;
        const price = event.target.price.value;
        const details = event.target.details.value;
        const photo = event.target.photo.value;

        const coffeUpdated = { name, chef, supplier, taste, price, details, photo }
        
        fetch(`http://localhost:2000/coffes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeUpdated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        event.target.reset()
    }

    return (


        <div className='bg-slate-200 p-8'>

            <h2 className='text-5xl text-center my-8'>Update Coffe</h2>

            <form onSubmit={formHandler}>

                <div className="md:flex gap-5">
                    <div className="mb-7 w-1/2">
                        <label>
                            <input type="text" placeholder="Enter coffee name" name="name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="mb-7 w-1/2">
                        <label >
                            <input type="text" placeholder="Enter coffee chef" name="chef" defaultValue={chef} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-5">

                    <div className=" mb-7 w-1/2">
                        <label>
                            <input defaultValue={supplier} type="text" placeholder="Enter coffee supplier" name="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="mb-7 w-1/2">
                        <label >
                            <input type="text" placeholder="Enter coffee taste" name="taste" defaultValue={taste} className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="md:flex gap-5">
                    <div className="mb-7 w-1/2">
                        <label >
                            <input type="text" placeholder="Enter coffee price" defaultValue={price} name="price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="mb-7 w-1/2">
                        <label >
                            <input type="text" placeholder="Enter coffee details" name="details" defaultValue={details} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-7">
                    <label >
                        <input type="text" placeholder="Enter photo URL" defaultValue={photo} name="photo" className="input input-bordered w-full" />
                    </label>
                </div>

                <input className="w-full btn my-5" type="Submit" value="UPDATE COFFE" />
            </form>
        </div>
    );
};

export default UpdateCoffe;