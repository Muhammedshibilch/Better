import React, { useState } from 'react';
import 'animate.css';

const Aboutus = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleThumbnailClick = () => {
    setShowVideo(true);
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen p-4'>
        <div className="text-center">
          <h1 className='text-2xl font-bold text-success animate__animated animate__fadeInUp'>Our mission</h1>
          <h1 className='text-3xl md:text-5xl mt-4 animate__animated animate__fadeInUp'>
            We’re making homeownership simpler, faster — <br className="hidden md:block" />
            and most importantly, more accessible for all <br className="hidden md:block" />
            Americans.
          </h1>
        </div>
      </div>
      <div className='mt-5 p-4'>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2  p-4">
            <h1 className='text-2xl font-bold '>The status quo is broken</h1>
            <p className='text-gray-600 mt-2'>
              The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
            </p>
            <button className='mt-3 bg-green-500 p-3 rounded-full hover:bg-green-800 text-white'>
              Read Vishal's story
            </button>
          </div>
          <div className="md:w-1/2  p-4">
            {showVideo ? (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/1KjYlLBM9j4?si=e8dLJAotSMw-n4Qj&amp;controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src="https://media.better.com/video/vishal-mission.jpg"
                alt="Video Thumbnail"
                onClick={handleThumbnailClick}
                className="w-full cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      <div className='bg-green-800 h-[400px] mt-3 flex justify-center items-center text-white'>
  <div className="text-center max-w-7xl px-4">
    <h1 className='text-2xl md:text-4xl font-bold mb-4 md:mb-6'>How we’re changing things</h1>
    <p className='text-base md:text-lg mb-3 md:mb-4'>
      Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers.
    </p>
    <p className='text-base md:text-lg'>
      That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
    </p>
  </div>
</div>

<div className="flex flex-col justify-center items-center mt-5">
  <h1 className='text-3xl font-semibold mb-4'>Backed by</h1>
  <div className='flex justify-center gap-20 mt-5 flex-col md:flex-row flex-wrap '>
    <img src="https://th.bing.com/th/id/OIP.xBPyvqtrLoTJTYwOjQ3y-gHaBQ?w=355&h=61&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-12' alt="SoftBank" />
    <img src="https://th.bing.com/th/id/OIP.50A9up208rAkGRmsRyjZrwHaHZ?w=1001&h=1000&rs=1&pid=ImgDetMain" className='h-12' alt="Ally" />
    <img src="https://cdn.antaranews.com/cache/1200x800/2024/02/05/Citi_Logo.jpg" className='h-12' alt="CFT" />
    <img src="https://th.bing.com/th/id/OIP.HjOOcORs86sAsHQuxIVTNAHaDN?w=342&h=151&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-12' alt="Pingan Bank" />
    <img src="https://th.bing.com/th/id/OIP.pd2sip6d0AqHhC2a6jarNwHaBp?w=283&h=77&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-12' alt="Goldman Sachs" />
    <img src="https://th.bing.com/th/id/OIP.UIALrvxQUDLKhOUCebAsqAHaEF?w=329&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='h-12' alt="KPCB" />
  </div>
</div>

<div className="flex flex-col justify-center items-center mt-5 relative">
  <h1 className="text-2xl md:text-3xl font-semibold mt-[50px] md:mt-[100px] mb-6 md:mb-8">Company timeline</h1>

  <div className="flex flex-col items-center relative w-full">
    <div className="absolute left-1/2 w-px h-20 bg-gray-400 transform -translate-x-1/2"></div>

    <div className="relative z-10">
      <button className="bg-green-600 text-white rounded-full px-6 md:px-8 py-2 mb-6 md:mb-8">2014</button>
    </div>

    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4">
      <p className="text-base md:text-lg">
        After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.
      </p>
    </div>
  </div>

  <div className="flex flex-col items-center relative mt-5 w-full">
    <div className="absolute left-1/2 w-px h-20 bg-gray-400 transform -translate-x-1/2"></div>

    <div className="relative z-10">
      <button className="bg-green-600 text-white rounded-full px-6 md:px-8 py-2 mb-6 md:mb-8">2015</button>
    </div>

    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4">
      <p className="text-base md:text-lg">
        Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).
      </p>
    </div>
  </div>

  <div className="flex flex-col items-center relative mt-5 w-full">
    <div className="absolute left-1/2 w-px h-20 bg-gray-400 transform -translate-x-1/2"></div>

    <div className="relative z-10">
      <button className="bg-green-600 text-white rounded-full px-6 md:px-8 py-2 mb-6 md:mb-8">2016</button>
    </div>

    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4">
      <p className="text-base md:text-lg">
        Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.
      </p>
    </div>
  </div>

  <div className="flex flex-col items-center relative mt-5 w-full">
    <div className="absolute left-1/2 w-px h-20 bg-gray-400 transform -translate-x-1/2"></div>

    <div className="relative z-10">
      <button className="bg-green-600 text-white rounded-full px-6 md:px-8 py-2 mb-6 md:mb-8">2017</button>
    </div>

    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4">
      <p className="text-base md:text-lg">
        Better expands into the real estate market with Better Real Estate.
      </p>
    </div>
  </div>

  <div className="flex flex-col items-center relative mt-5 w-full">
    <div className="absolute left-1/2 w-px h-20 bg-gray-400 transform -translate-x-1/2"></div>

    <div className="relative z-10">
      <button className="bg-green-600 text-white rounded-full px-6 md:px-8 py-2 mb-6 md:mb-8">2018</button>
    </div>

    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4">
      <p className="text-base md:text-lg">
        Better Mortgage partners with Ally Bank to build Ally powered by Better.
      </p>
    </div>
  </div>

  <div className="flex flex-col items-center relative mt-5 w-full">
    <div className="absolute left-1/2 w-px h-20 bg-gray-400 transform -translate-x-1/2"></div>

    <div className="relative z-10">
      <button className="bg-green-600 text-white rounded-full px-6 md:px-8 py-2 mb-6 md:mb-8">2019</button>
    </div>

    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4">
      <p className="text-base md:text-lg">
        Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.
      </p>
    </div>
  </div>

  <div className="flex flex-col items-center relative mt-5 w-full">
    <div className="absolute left-1/2 w-px h-20 bg-gray-400 transform -translate-x-1/2"></div>

    <div className="relative z-10">
      <button className="bg-green-600 text-white rounded-full px-6 md:px-8 py-2 mb-6 md:mb-8">2021</button>
    </div>

    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4">
      <p className="text-base md:text-lg">
        Better acquires Trussle — The UK’s most innovative online mortgage broker.
      </p>
    </div>
  </div>

  <div className="flex flex-col items-center relative mt-5 w-full">
    <div className="absolute left-1/2 w-px h-20 bg-gray-400 transform -translate-x-1/2"></div>

    <div className="relative z-10">
      <button className="bg-green-600 text-white rounded-full px-6 md:px-8 py-2 mb-6 md:mb-8">2022</button>
    </div>

    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4">
      <p className="text-base md:text-lg">
        Better Mortgage becomes the first fintech to fund $100B home loans entirely online.
      </p>
    </div>
  </div>

  <div className="flex flex-col items-center relative mt-5 w-full">
    <div className="absolute left-1/2 w-px h-20 bg-gray-400 transform -translate-x-1/2"></div>

    <div className="relative z-10">
      <button className="bg-green-600 text-white rounded-full px-6 md:px-8 py-2 mb-6 md:mb-8">2023</button>
    </div>

    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4">
      <p className="text-base md:text-lg">
        Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.
      </p>
    </div>
    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4 mt-2">
      <p className="text-base md:text-lg">
        Better Mortgage launches the fully digital 3-day HELOC².
      </p>
    </div>
    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4 mt-2">
      <p className="text-base md:text-lg">
        Better Mortgage launches One Day Verified Approval Letter.
      </p>
    </div>
  </div>

  <div className="flex flex-col items-center relative mt-5 w-full">
    <div className="absolute left-1/2 w-px h-20 bg-gray-400 transform -translate-x-1/2"></div>

    <div className="relative z-10">
      <button className="bg-green-600 text-white rounded-full px-6 md:px-8 py-2 mb-6 md:mb-8">Today</button>
    </div>

    <div className="relative z-10 text-center max-w-2xl px-4 bg-gray-200 rounded-3xl p-4">
      <p className="text-base md:text-lg">
        You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
      </p>
      <button className="bg-green-600 text-white rounded-full px-6 py-2 mt-3 hover:bg-green-700 transition duration-300">
        Get started
      </button>
    </div>
  </div>
</div>
    </>
  );
};

export default Aboutus;