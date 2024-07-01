import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const Banner = () => {

    return (
        <div className="carousel w-full h-[650px]">
            <div id="slide1" className="carousel-item relative w-full h-[650px]">
                <img src="https://www.exploreworldwide.com/medialibraries/explore/explore-media/destinations/asia/asia-header.jpg?ext=.jpg&width=1920&height=500&mode=crop&format=webp&quality=80&v=201704211129" className="w-full h-[650px]" alt="Slide 1" />
                <div className="absolute flex flex-col justify-center items-center text-center top-1/2 left-0 right-0 transform -translate-y-1/2">
                    <h1 className="animate__animated animate__fadeInDown text-white text-3xl md:text-7xl font-bold mb-4">Discover Asia with ExploreAsia</h1>
                    <p className="animate__animated animate__fadeInDown text-white text-xl md:text-2xl mb-8">Experience the Beauty and Rich Culture of Asia</p>
                    <Link
                        to={'/'}
                        className="animate__animated animate__fadeInDown btn text-white rounded-xl h-[60px] bg-[#63AB45] border-none font-[400] text-xl hover:bg-white hover:text-black"
                        style={{ transition: 'background-color 0.8s, color 0.8s' }}
                    >
                        Explore Destinations
                    </Link>
                </div>

                <div className="absolute flex justify-center gap-2 items-center transform -translate-y-1/2 left-5 right-5 top-[90%] md:top-[80%]">
                    <a href="#slide3" className="btn btn-circle text-black">❮</a>
                    <a href="#slide2" className="btn btn-circle text-black">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full h-[650px]">
                <img src="https://pathfriend-bd.com/wp-content/uploads/2019/10/Buddhist-Heritage-in-Bangladesh.gif" className="w-full h-[650px]" alt="Slide 2" />
                <div className="absolute flex flex-col justify-center items-center text-center top-1/2 left-0 right-0 transform -translate-y-1/2">
                    <h1 className="animate__animated animate__fadeInDown text-white text-3xl md:text-7xl font-bold mb-4">Explore Cultural Heritage</h1>
                    <p className="animate__animated animate__fadeInDown text-white text-xl md:text-2xl mb-8">Immerse Yourself in the Rich History and Traditions of Asia</p>
                    <Link
                        to={'/'}
                        className="animate__animated animate__fadeInDown btn text-white rounded-xl h-[60px] bg-[#63AB45] border-none font-[400] text-xl hover:bg-white hover:text-black"
                        style={{ transition: 'background-color 0.8s, color 0.8s' }}
                    >
                        Learn More
                    </Link>
                </div>

                <div className="absolute flex justify-center gap-2 items-center transform -translate-y-1/2 left-5 right-5 top-[90%] md:top-[80%]">
                    <a href="#slide1" className="btn btn-circle text-black">❮</a>
                    <a href="#slide3" className="btn btn-circle text-black">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full h-[650px]">
                <img src="https://images2.goabroad.com/image/upload/images2/program_content/nHahASXmgudycGeHMT2ga2u60W3u2IBId12BXi5f.jpg" className="w-full h-[650px]" alt="Slide 3" />
                <div className="absolute flex flex-col justify-center items-center text-center top-1/2 left-0 right-0 transform -translate-y-1/2">
                    <h1 className="animate__animated animate__fadeInDown text-white text-3xl md:text-7xl font-bold mb-4">Adventure Awaits</h1>
                    <p className="animate__animated animate__fadeInDown text-white text-xl md:text-2xl mb-8">Discover Exciting Adventures Across Asia's Diverse Landscapes</p>
                    <Link
                        to={'/'}
                        className="animate__animated animate__fadeInDown btn text-white rounded-xl h-[60px] bg-[#63AB45] border-none font-[400] text-xl hover:bg-white hover:text-black"
                        style={{ transition: 'background-color 0.8s, color 0.8s' }}
                    >
                        Explore Adventures
                    </Link>
                </div>

                <div className="absolute flex justify-center gap-2 items-center transform -translate-y-1/2 left-5 right-5 top-[90%] md:top-[80%]">
                    <a href="#slide2" className="btn btn-circle text-black">❮</a>
                    <a href="#slide1" className="btn btn-circle text-black">❯</a>
                </div>
            </div>

       
        </div>
    );
};

export default Banner;
