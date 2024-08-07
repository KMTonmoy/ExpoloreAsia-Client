import React from 'react';
import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";
const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Helmet>
                <meta charSet="utf-8" />
                <title>ExploreAsia || 404</title>

            </Helmet>
            <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">Oops! The page you're looking for does not exist.</p>
            <Link to="/" className="text-blue-500 hover:underline">Go back to home</Link>
        </div>
    );
};

export default Error;
