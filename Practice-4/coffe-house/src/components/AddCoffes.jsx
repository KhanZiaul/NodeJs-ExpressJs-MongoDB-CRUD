const AddCoffes = () => {
    return (
        <div className='bg-slate-200 p-8'>
            <h2 className='text-5xl text-center my-6'>Add Coffes</h2>
            <form className="grid grid-cols-2">

                <div className="form-control mb-7">
                        <label className="input-group">
                            <span>Name</span>
                            <input  type="text" placeholder="Enter coffee name" name="coffe" className="input input-bordered w-full" />
                        </label>
                </div>
                
                <div className="form-control">
                        <label className="input-group">
                            <span>Chef</span>
                            <input  type="text" placeholder="Enter coffee chef" name="chef" className="input input-bordered w-full" />
                        </label>
                </div>
                
                <div className="form-control">
                        <label className="input-group">
                            <span>Supplier</span>
                            <input  type="text" placeholder="Enter coffee supplier" name="supplier"  className="input input-bordered w-full" />
                        </label>
                </div>
                
                <div className="form-control">
                        <label className="input-group">
                            <span>Name</span>
                            <input  type="text" placeholder="Enter coffee chef" name="chef-name"  className="input input-bordered w-full" />
                        </label>
                </div>
                
                <div className="form-control">
                        <label className="input-group">
                            <span>Name</span>
                            <input  type="text" placeholder="Enter coffee chef" name="chef-name"  className="input input-bordered w-full" />
                        </label>
                </div>
                
                <div className="form-control">
                        <label className="input-group">
                            <span>Name</span>
                            <input  type="text" placeholder="Enter coffee chef" name="chef-name"  className="input input-bordered w-full" />
                        </label>
                </div>

            </form>
        </div>
    );
};

export default AddCoffes;