import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Mylist = () => {
    const [touristSpots, setTouristSpots] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetchTouristSpots();
    }, []);

    const fetchTouristSpots = async () => {
        try {
            const response = await fetch('https://backend-rust-beta.vercel.app/country');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            const userTouristSpots = data.filter(spot => spot.uid === user.uid);
            setTouristSpots(userTouristSpots);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const handleDelete = async (_id) => {
        try {
            const response = await fetch(`https://backend-rust-beta.vercel.app/country/${_id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete tourist spot');
            }
            const data = await response.json();
            if (data.deletedCount > 0) {
                setTouristSpots(touristSpots.filter(spot => spot._id !== _id));
                Swal.fire(
                    'Deleted!',
                    'Your tourist spot has been deleted.',
                    'success'
                );
            }
        } catch (error) {
            console.error('Error deleting tourist spot:', error);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <Helmet>
                <title>My Tourist Spots List</title>
            </Helmet>
            <h1 className="text-3xl font-bold my-8 text-center">My Tourist Spots</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className='flex justify-center'>
                    {touristSpots.length === 0 ? (
                        <div className='flex justify-center items-center flex-col'>
                            <p className='text-2xl'>No tourist spots found. Add a new one!</p>
                            <Link to="/add" className="btn bg-[#63AB45] text-white mt-4">Add Tourist Spot</Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {touristSpots.map(spot => (
                                <div key={spot._id} className="card w-full md:w-96 bg-base-100 shadow-xl py-5">
                                    <figure>
                                        <img src={spot.image} alt={spot.tourists_spot_name} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{spot.tourists_spot_name}</h2>
                                        <p>{spot.description}</p>
                                        <div className="card-actions justify-end mt-5">
                                            <Link to={`/update/${spot._id}`} className="btn bg-[#63AB45] text-white">Update</Link>
                                            <button onClick={() => handleDelete(spot._id)} className="btn bg-red-500 text-white">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Mylist;
