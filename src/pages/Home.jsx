import React from 'react';
import Banner from '../components/Banner';
import RunningCaimpaign from '../components/RunningCaimpaign';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

const Home = () => {
    return (
       
        <div className="">
            <Banner></Banner>
            <RunningCaimpaign></RunningCaimpaign>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;