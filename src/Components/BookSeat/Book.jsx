import React from 'react';
import { Bounce, Fade } from "react-awesome-reveal";

const Book = () => {
    return (
        <div className="bg-gray-900 my-5">

            <div className="hero h-[400px] mt-20" style={{ backgroundImage: 'url(https://letsgoawandering.com/wp-content/uploads/2021/09/Travel-Planning-Depositphotos-25-Straight.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-white">
                    <div className="text-center md:text-left md:px-56" data-aos="fade-right">
                        <Bounce cascade>

                            <h1 className="mb-5 text-5xl font-bold">Plan Your Next Adventure</h1>
                        </Bounce>
                        <p className="text-xl mb-8">Explore breathtaking destinations, find great deals on accommodations, and book your flights effortlessly with our travel platform.</p>
                        <button className="btn text-white rounded-sm bg-[#63AB45] border-none font-semibold text-xl hover:bg-white hover:text-black">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;
