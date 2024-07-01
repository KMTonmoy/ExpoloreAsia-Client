import React, { useContext, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-fade';

import { Helmet } from 'react-helmet';
import { AuthContext } from '../../Providers/AuthProvider';

const About = () => {
    const { loading } = useContext(AuthContext)
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className='mt-20'>
            <Helmet>
                <title>About - ExploreAsia</title>
            </Helmet>

            {loading ?
                <div className="flex justify-center items-center ">
                    <span className="loading text-[#63AB45] loading-bars loading-lg"></span>
                </div>
                :
                <div className="container mx-auto px-2 md:px-0 py-12">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-4xl font-bold text-center mb-8">Discover Asia with ExploreAsia</h1>
                        <p className="text-lg text-gray-700 mb-6">
                            At ExploreAsia, we are passionate about providing immersive travel experiences across the diverse landscapes and cultures of Asia. Our mission is to inspire travelers to explore, discover, and connect with the rich heritage and natural beauty of this vibrant continent.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            From the bustling streets of Tokyo to the serene beaches of Bali, each destination offers a unique blend of history, culture, and adventure. Whether you're seeking culinary delights, cultural encounters, or outdoor adventures, ExploreAsia has something for every type of traveler.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Our team of experienced travel experts is dedicated to creating tailor-made itineraries that cater to your interests and preferences. Whether you're planning a solo adventure, a family vacation, or a romantic getaway, we'll ensure that every aspect of your journey is seamless and unforgettable.
                        </p>
                        <p className="text-lg text-gray-700 mb-6">
                            Join us on a journey of discovery and exploration as we uncover the hidden gems and iconic landmarks of Asia. Let ExploreAsia be your guide to the wonders of this enchanting continent, where every adventure is an opportunity to create lifelong memories.
                        </p>
                    </div>
                </div>
            }

            <div className='mt-20'>
                <div className="swiper-container container mx-auto py-12" style={{ overflowX: 'hidden' }}>
                    <h1 className="text-4xl font-bold text-center mb-10">Meet Our Team Members</h1>
                    <div className="swiper-wrapper">
                        <div className='swiper-slide flex justify-center items-center'>
                            <div className="text-center">

                                <div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src="https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/business-man-500x341-1.jpg" />
                                    </div>
                                </div>

                            
                                <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
                                <p className="text-lg text-gray-600">Founder & CEO</p>
                            </div>
                        </div>
                        <div className="swiper-slide flex justify-center items-center">
                            <div className="text-center">

                                <div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRpd6qhti0UA0H_rpz6ddDXcNTT9a5Abmru5NpYdkVBA&s" />
                                    </div>
                                </div>

                                <h1 className="text-2xl font-bold text-gray-800">Jane Smith</h1>
                                <p className="text-lg text-gray-600">Chief Operating Officer</p>
                            </div>
                        </div>
                        <div className="swiper-slide flex justify-center items-center">
                            <div className="text-center">

                                <div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src="https://media.northwest.education/wp-content/uploads/2022/02/05162943/pexels-tima-miroshnichenko-5717512-680x380.jpg" />
                                    </div>
                                </div>


                                <h1 className="text-2xl font-bold text-gray-800">Lina Rose</h1>
                                <p className="text-lg text-gray-600">Marketing Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
