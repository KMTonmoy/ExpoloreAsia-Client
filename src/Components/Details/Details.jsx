import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData();

    return (
        <div className='flex justify-center items-center h-screen'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ExploreAsia || Details</title>
            </Helmet>
            <div className="container mx-auto p-10 capitalize">
                <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <img src={data.image} alt={data.tourists_spot_name} className="md:w-1/2 object-cover" />
                    <div className="p-8 md:w-1/2">
                        <h1 className="text-2xl font-bold mb-4">{data.tourists_spot_name}</h1>
                        <ul className="text-gray-700">
                            <li><strong>Country:</strong> {data.country_Name}</li>
                            <li><strong>Location:</strong> {data.location}</li>
                            <li><strong>Description:</strong> {data.description}</li>
                            <li><strong>Average Cost:</strong> {data.average_cost}</li>
                            <li><strong>Seasonality:</strong> {data.seasonality}</li>
                            <li><strong>Travel Time:</strong> {data.travel_time} Day</li>
                            <li><strong>Total Visitors Per Year:</strong> {data.totaVisitorsPerYear}</li>

                        </ul>
                        <Link to={'/contact'} >
                            <button className="mt-10 bg-[#63AB45] text-white font-bold py-2 px-4 rounded">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
