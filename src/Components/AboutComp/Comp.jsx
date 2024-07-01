import React from 'react';

const Comp = () => {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <img src="https://gaviaspreview.com/wp/gowilds/wp-content/uploads/2023/02/image-20.jpg" className="md:w-1/2 rounded-lg shadow-lg mb-8 lg:mb-0" alt="Adventure" />
                    <div className="lg:w-1/2 lg:pl-16">
                        <h1 className="text-lg md:text-4xl lg:text-5xl font-bold mb-4  ">Experience the Best of Adventure & Travel</h1>
                        <div className="mb-6">
                            <h2 className="text-lg md:text-2xl font-semibold mb-2 ">Safety First, Always</h2>
                            <p className="">We prioritize your safety and well-being in all our adventures. Explore with confidence knowing that your safety is our top priority.</p>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-lg md:text-2xl font-semibold mb-2 ">Affordable Prices & Friendly Service</h2>
                            <p className="">Discover amazing destinations at budget-friendly prices. Our friendly staff are here to assist you every step of the way, ensuring you have a memorable experience.</p>
                        </div>
                        <div>
                            <h2 className="text-lg md:text-2xl font-semibold mb-2 ">Trusted Travel Guides</h2>
                            <p className="">Our experienced guides are passionate about travel and committed to providing you with the best insights and recommendations. Trust us to make your adventure unforgettable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comp;
