import React from 'react';
import Banner from '../components/Banner';
import Home from '../pages/Home';

const HomeLayouts = () => {
    return (
        <div>
            <div>
                <Home></Home>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default HomeLayouts;