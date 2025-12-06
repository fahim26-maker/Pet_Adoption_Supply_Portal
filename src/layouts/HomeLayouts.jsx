import React from 'react';
import Banner from '../components/Banner';
import Home from '../pages/Home';
import Sections from '../components/Sections';

const HomeLayouts = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Home></Home>
                <Sections></Sections>
                
                
            </div>
        </div>
    );
};

export default HomeLayouts;