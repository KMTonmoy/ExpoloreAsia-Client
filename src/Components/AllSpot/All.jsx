import React from 'react';
import Turists from '../Tureists/Turists';
import { Helmet } from 'react-helmet';

const All = () => {
    return (
        <div  className='mx-5'>
            <Helmet>
                <title>All-Tourists-Spot </title>
            </Helmet>
           
            <Turists />
        </div>
    );
};

export default All;