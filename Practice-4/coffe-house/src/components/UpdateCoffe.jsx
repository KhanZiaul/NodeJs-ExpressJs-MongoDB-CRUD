import React from 'react';

const UpdateCoffe = () => {

    function formHandler(event) {
        event.preventDefault()
    }

    return (

        // <form >
        //     <input type="text" className='border-2'/>
        // </form>

        <div className='bg-slate-200 p-8'>

            <h2 className='text-5xl text-center my-8'>Update Coffe</h2>

            <form onSubmit={formHandler}>

                <div className="md:flex gap-5">
                    <div className="mb-7 w-1/2">
                        <label>
                            <input type="text" placeholder="Enter coffee name" name="coffe" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="mb-7 w-1/2">
                        <label >
                            <input type="text" placeholder="Enter coffee chef" name="chef" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex gap-5">

                    <div className=" mb-7 w-1/2">
                        <label>
                            <input type="text" placeholder="Enter coffee supplier" name="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="mb-7 w-1/2">
                        <label >
                            <input type="text" placeholder="Enter coffee taste" name="taste" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <div className="md:flex gap-5">
                    <div className="mb-7 w-1/2">
                        <label >
                            <input type="text" placeholder="Enter coffee category" name="category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="mb-7 w-1/2">
                        <label >
                            <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-7">
                    <label >
                        <input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered w-full" />
                    </label>
                </div>

                <input className="w-full btn my-5" type="Submit" value="UPDATE COFFE" />
            </form>
        </div>
    );
};

export default UpdateCoffe;