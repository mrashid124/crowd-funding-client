import React from 'react';
import Banner from '../components/Banner';
import RunningCaimpaign from '../components/RunningCaimpaign';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import CrowdFundResource from '../components/CrowdFundResource';

const Home = () => {
    return (
       
        <div className="">
            <Banner></Banner>
            <RunningCaimpaign></RunningCaimpaign>
            <AboutUs></AboutUs>
            <CrowdFundResource></CrowdFundResource>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;