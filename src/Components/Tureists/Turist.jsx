import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Turist = ({ data }) => {
    const { _id, image, tourists_spot_name, country_Name, location, description, average_cost, seasonality } = data;

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className=" mx-auto bg-white rounded-lg overflow-hidden shadow-md capitalize">
            <img className="w-full h-56 object-cover" src={image} alt={tourists_spot_name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{tourists_spot_name}</div>
                {description.length > 20 ? (
                    <div>
                        {expanded ? (
                            <p className="text-gray-700 text-base">{description}</p>
                        ) : (
                            <div>
                                <p className="text-gray-700 text-base">{`${description.slice(0, 40)}...`}</p>
                                <button onClick={toggleExpanded} className="text-blue-500 hover:underline">Read More</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="text-gray-700 text-base">{description}</p>
                )}
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{country_Name}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{location}</span>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Average Cost: ${average_cost}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Seasonality: {seasonality}</span>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link to={`/details/${_id}`} className="inline-block  bg-[#63AB45] text-white px-4 py-2 rounded-full">View Details</Link>
            </div>
        </div>
    );
};

export default Turist;
