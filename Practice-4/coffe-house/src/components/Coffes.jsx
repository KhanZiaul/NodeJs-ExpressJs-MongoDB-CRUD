import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Coffes = ({ coffe }) => {

    const { _id, name, chef, price, photo } = coffe

    function deleteHandler(id) {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:2000/coffes/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }

    return (
        <div className='flex items-center justify-between shadow-2xl p-5'>
            <div>
                <img src={photo} alt="" />
            </div>
            <div>
                <p className='mb-3'><span className='font-bold'>Name</span> :  {name}</p>
                <p className='mb-3'><span className='font-bold'>Chef</span> : {chef}</p>
                <p className='mb-3'><span className='font-bold'>Price</span> : {price}</p>
            </div>
            <div className="btn-group btn-group-vertical gap-3">
                <Link to={`/detailsCoffe/${_id}`}>
                    <button className="btn ">Details</button>
                </Link>
                <Link to={`/updateCoffe/${_id}`}>
                    <button className="btn">Edit</button>
                </Link>
                <button onClick={() => deleteHandler(_id)} className="btn">Delete</button>
            </div>
        </div>
    );
};

export default Coffes;