import React from 'react';

import resourceAnimation from '../assets/ResourceAnimation.json';
import Lottie from 'lottie-react';
import { Typewriter } from 'react-simple-typewriter';

const CrowdFundResource = () => {
    const topics = [
        "Crowdfunding resources - Guides on setting up a successful campaign with examples and templates.",
        "Crowdfunding fees - Understanding platform fees, payment processing fees, and hidden costs.",
        "Crowdfunding safety tips - Ensuring your campaign and donors are secure.",
        "Crowdfunding tips - Proven strategies to boost donations and reach your goal faster.",
        "Hitting the press - How to gain media attention for your campaign.",
        "How to crowdfund - Step-by-step instructions for first-time fundraisers.",
        "Promoting your page on social media - Techniques to maximize reach and engagement."        
       
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-red-200 to-blue-300 py-12 px-6 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-extrabold mb-4">
                        Empower Your Crowdfunding Journey
                    </h1>
                    <p className="text-2xl text-blue-100">
                        Discover the best strategies, tips, and insights to ensure your campaign succeeds.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <Lottie animationData={resourceAnimation} className="w-full max-w-md mx-auto" />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold text-blue-400 mb-4">Key Topics:</h2>
                        <ul className="list-none text-blue-100 space-y-3 ">
                            {topics.map((topic, index) => (
                                <li key={index} className="text-lg font-medium bg-blue-400 p-3 rounded-lg shadow-md">
                                    <Typewriter
                                        words={[topic]}
                                        loop={0}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={150}
                                        deleteSpeed={70}
                                        delaySpeed={2500}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrowdFundResource;


