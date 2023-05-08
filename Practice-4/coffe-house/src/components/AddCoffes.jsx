const AddCoffes = () => {
    return (
        <div className='bg-slate-200 p-8'>
            <h2 className='text-5xl text-center my-8'>Add Coffes</h2>
            <form >
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-control mb-7">
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee name" name="coffe" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control mb-7">
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee chef" name="chef" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control mb-7">
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee supplier" name="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control mb-7">
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee taste" name="taste" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control mb-7">
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee category" name="category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control mb-7">
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control mb-7">
                        <label className="input-group">
                            <input type="text" placeholder="Enter photo URL" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
            </form>
            <input className="btn btn-active w-full my-5" type="Submit" value="ADD USER" />
        </div>
    );
};

export default AddCoffes;