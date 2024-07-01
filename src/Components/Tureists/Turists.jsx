import React, { useEffect, useState } from 'react';
import Turist from './Turist';

const Turists = () => {
    const [datas, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://backend-rust-beta.vercel.app/country')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                // console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='flex justify-center '>
            <div>
                <h2 className="text-4xl font-bold mb-10 mt-10 text-center underline">Explore Our Places</h2>
                <div className='md:grid-cols-3 grid-cols-1 grid gap-5'>
                    {loading ? (

                        <div className="flex items-center justify-center h-64">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-500"></div>
                        </div>
                    ) : (
                        datas.map(data => <div className='mt20' key={data._id}> <Turist data={data} /> </div>)
                    )}
                </div>
            </div>
        </div>
    );
};

export default Turists;