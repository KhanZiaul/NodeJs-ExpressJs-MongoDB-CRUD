import { useLoaderData } from 'react-router-dom';

const DetailsCoffe = () => {

    const coffeDetails = useLoaderData()
    const { name, chef, supplier, taste, price, details, photo } = coffeDetails;

    return (
        <div>
            <h2 className='text-5xl text-center my-8'>Details Coffe</h2>

            <div className='flex gap-5 w-1/2 mx-auto my-8 shadow-lg p-5'>
                <div>
                    <img src={photo} alt="" />
                </div>
                <div>
                    <p className='mb-3'><span className='font-bold'>Name</span> :  {name}</p>
                    <p className='mb-3'><span className='font-bold'>Chef</span> : {chef}</p>
                    <p className='mb-3'><span className='font-bold'>Supplier</span> : {supplier}</p>
                    <p className='mb-3'><span className='font-bold'>Taste</span> : {taste}</p>
                    <p className='mb-3'><span className='font-bold'>Price</span> : {price}</p>
                    <p className='mb-3'><span className='font-bold'>Details</span> : {details}</p>
                </div>
            </div>

        </div>
    );
};

export default DetailsCoffe;