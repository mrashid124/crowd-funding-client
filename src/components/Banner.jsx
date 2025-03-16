import React from 'react';

import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    document.title = "Home | CrowdFunding";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={800}
        emulateTouch
      >
        {/* Slide 1 */}
        <div
          className="relative w-full h-[60vh] sm:h-[80vh] lg:h-[100vh] bg-cover bg-center"
          style={{ backgroundImage: "url(https://i.ibb.co/wrpfwRYC/Needy-Hand.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="flex justify-center items-center h-full text-white px-6" data-aos="fade-up">
            <div className="text-center max-w-md">
              <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-white">
                Empower Dreams, Transform Lives
              </h1>
              <p className="mb-4 text-white text-lg">
                Every small act of kindness brings hope. Join us in making a difference today.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className="relative w-full h-[60vh] sm:h-[80vh] lg:h-[100vh] bg-cover bg-center"
          style={{ backgroundImage: "url(https://i.ibb.co/cccYHV8H/child-Education.jpg)" }}
        
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="flex justify-center items-center h-full text-white px-6" data-aos="fade-up">
            <div className="text-center max-w-md">
              <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-white">
                Support Children’s Health & Education
              </h1>
              <p className="mb-4 text-white text-lg">
                Your generosity can provide education, healthcare, and a brighter future for children in need.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div
          className="relative w-full h-[60vh] sm:h-[80vh] lg:h-[100vh] bg-cover bg-center"
          style={{ backgroundImage: "url(https://i.ibb.co/Nd9NqWVX/generation.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="flex justify-center items-center h-full text-white px-6" data-aos="fade-up">
            <div className="text-center max-w-md">
              <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-white">
                Empower the Next Generation
              </h1>
              <p className="mb-4 text-white text-lg">
                Support young individuals in achieving their dreams and making a lasting impact in society.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div
          className="relative w-full h-[60vh] sm:h-[80vh] lg:h-[100vh] bg-cover bg-center"
          style={{ backgroundImage: "url(https://i.ibb.co/GQk8PCjb/Flood2.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="flex justify-center items-center h-full text-white px-6" data-aos="fade-up">
            <div className="text-center max-w-md">
              <h1 className="mb-4 text-3xl sm:text-4xl font-bold text-white">
                Clean Water, Healthy Lives
              </h1>
              <p className="mb-4 text-white text-lg">
                Join us in raising funds to provide clean and safe drinking water for communities in need.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

