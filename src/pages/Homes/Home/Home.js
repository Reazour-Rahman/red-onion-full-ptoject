import React from 'react';
import Lunch from '../../Shared/Categories/Category/Lunch';
import HeaderCategory from '../../Shared/Header/HeaderCategory';
import Banner from '../Banner/Banner';
import GoodWill from '../GoodWill/GoodWill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HeaderCategory></HeaderCategory>
            <Lunch></Lunch>
            <GoodWill></GoodWill>
        </div>
    );
};

export default Home;