import React, { useContext } from 'react';
import Banner from '../Header/Banner/Banner';
import { Helmet } from 'react-helmet';
import Countries from '../Countries/Countries';
import Book from '../BookSeat/Book';
import Turists from '../Tureists/Turists';
import { AuthContext } from '../../Providers/AuthProvider';
import Faq from '../Faq/Faq';
import Comp from '../AboutComp/Comp';


const Home = () => {

    const { loading } = useContext(AuthContext)
    return (
        <div>
            <Helmet>
                <title>Home - ExploreAsia</title>
            </Helmet>
            {
                loading ? <div className="flex justify-center items-center ">
                    <span className="loading text-[#63AB45] loading-bars loading-lg"></span>
                </div> : (
                    <>
                        <Banner></Banner>
                        <Countries></Countries>
                        <Comp></Comp>
                        <Book />
                        <Turists></Turists>
                        <Faq></Faq>
                    </>
                )
            }


        </div>
    );
};

export default Home;