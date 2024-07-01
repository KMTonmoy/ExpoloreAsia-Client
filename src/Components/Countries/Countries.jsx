import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://backend-rust-beta.vercel.app/con')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
            });
    }, []);

    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto px-8">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8">
                        <Typewriter
                            words={['Explore Our Featured Countries']}
                            loop={true}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                        {countries.map(country => (
                            <div key={country.id} className="border rounded-lg overflow-hidden shadow-md hover:cursor-pointer">
                                <img src={country.image} className="w-full h-64 object-cover" alt={country.name} />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{country.name}</h3>
                                    <ul className="list-disc pl-4">
                                        {country.places.map(place => (
                                            <li key={place}>{place}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Countries;
