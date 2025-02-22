import home from '../assets/home.png'; 
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';
import QuestionHome from '../components/QuestionHome';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  const [selectedImage, setSelectedImage] = useState('Arian');

  return (
    <>
      <div
        className='bg-green-800 flex flex-col items-center justify-center relative'
        style={{
          height: "500px",
          overflow: 'hidden', 
        }}
      >
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${home})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0, 
          }}
        ></div>

        <div className="text-center text-white flex flex-col items-center w-full relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-1 text-green-500 animate__animated animate__fadeInLeft">
            Mortgages
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-8 font-bold text-green-500  animate__animated animate__fadeInLeft">
            made simple
          </h2>
        </div>

        <div className="mt-4 sm:absolute sm:bottom-10 sm:left-4  md:left-20 lg:left-36 relative z-10">
          <button className="bg-green-600 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-base sm:text-lg md:text-xl hover:bg-transparent transition-colors duration-300">
            Start my approval
          </button>
        </div>

        <div className="mt-4 sm:absolute sm:bottom-10 sm:right-4  md:right-10 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-white relative z-10">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="text-lg sm:text-xl md:text-2xl">4.6</span>
          <div className="w-16 sm:w-20 md:w-24 h-2 bg-gray-300 rounded-full">
            <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '92%' }}></div>
          </div>
          <span className="text-lg sm:text-xl md:text-2xl">| 3177 reviews</span>
        </div>
      </div>

      <div className="flex flex-wrap mt-5">
  <div className="hidden lg:block lg:w-1/12"></div>

  <div className="w-full lg:w-4/12">
    <div className="flex flex-col items-center">
      {selectedImage === 'Arian' && (
        <img
          className="w-[90%] max-w-[500px] h-[600px] rounded-2xl animate__animated animate__fadeIn"
          src="https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp"
          alt="Arian"
        />
      )}
      {selectedImage === 'Amanda' && (
        <img
          className="w-[90%] max-w-[500px] h-[600px] rounded-2xl animate__animated animate__fadeIn"
          src="https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp"
          alt="Amanda"
        />
      )}
      {selectedImage === 'Paul' && (
        <img
          className="w-[90%] max-w-[500px] h-[600px] rounded-2xl animate__animated animate__fadeIn"
          src="https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp"
          alt="Paul"
        />
      )}

      <div className="flex flex-row mt-3">
        <button
          className="border py-2 px-3 rounded-2xl hover:border-green-500 mx-2"
          onClick={() => setSelectedImage('Arian')}
        >
          Arian
        </button>
        <button
          className="border py-2 px-3 rounded-2xl hover:border-green-500 mx-2"
          onClick={() => setSelectedImage('Amanda')}
        >
          Amanda
        </button>
        <button
          className="border py-2 px-3 rounded-2xl hover:border-green-500 mx-2"
          onClick={() => setSelectedImage('Paul')}
        >
          Paul
        </button>
      </div>
    </div>
  </div>

  <div className="hidden lg:block lg:w-1/12"></div>

  <div className="w-full lg:w-5/12 flex items-center justify-center mt-5 lg:mt-0">
    <div className="flex flex-col items-center text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        Find out why
      </h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
        we’re better.
      </h1>

      <Link to={'/aboutus'}>
        <button className="border rounded-full px-6 py-3 text-white bg-green-800 hover:bg-green-900 transition-colors duration-300">
          See all our stories
        </button>
      </Link>

      <div className="mt-6 flex items-center justify-center space-x-2">
        <span className="text-lg font-semibold text-gray-700">⭐</span>
        <span className="text-lg font-semibold text-gray-700">Trustpilot</span>
        <span className="text-lg font-semibold text-green-600">Excellent</span>
        <span className="text-lg font-semibold text-gray-700">4.4 out of 5</span>
      </div>
    </div>
  </div>

  <div className="hidden lg:block lg:w-1/12"></div>
</div>
<div className='mt-5'>
  <QuestionHome/>
</div>
    </>
  );
};

export default Home;