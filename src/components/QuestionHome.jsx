import React, { useState } from 'react';

const QuestionHome = () => {
  const [selectedTopic, setSelectedTopic] = useState('ourproducts');

  return (
    <>
    <div className="mt-5 p-5 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col mb-4 lg:mb-0 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Got questions?
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            We've got answers
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-0">
          <button className="bg-white text-green-800 border border-green-800 px-6 py-3 rounded-full hover:bg-green-800  transition-colors duration-300" onClick={()=>setSelectedTopic("ourproducts")}>
            Our Products
          </button>
          <button className="bg-white text-green-800 border border-green-800 px-6 py-3 rounded-full hover:bg-green-800  transition-colors duration-300"  onClick={()=>setSelectedTopic("calculators")}>
            Calculators
          </button>
          <button className="bg-white text-green-800 border border-green-800 px-6 py-3 rounded-full hover:bg-green-800  transition-colors duration-300"  onClick={()=>setSelectedTopic("guides")}>
            Guides & FAQs
          </button>
        </div>
      </div>

      {
        selectedTopic === 'ourproducts' && (
            <>
            <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <div className="w-full lg:w-3/12 bg-gray-100 p-5 rounded-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Buying your first home with Better
          </h1>
          <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
          </button>
          <img
            src="https://media.better.com/better-com/homepage/learning-center/first-home.webp"
            className="w-full mt-4 rounded-lg"
            alt="First Home"
            style={{ maxHeight: "150px", objectFit: "cover" }}
          />
        </div>

        <div className="w-full lg:w-8/12 bg-gray-100 rounded-lg p-5">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  One Day Mortgage<sup>1</sup>
                </h1>
                <p className="text-gray-700 mb-6">
                  Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup>
                </p>
              </div>
              <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
              </button>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp"
                alt="One Day Mortgage"
                className="rounded-lg"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-4">
      <div className="w-full lg:w-8/12 bg-gray-100 rounded-lg p-5">
          <div className="flex flex-col lg:flex-row h-full">
             <div className="lg:w-1/2 flex items-center justify-center">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
                alt="better-heloc"
                className="rounded-lg"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Better HELOC
                </h1>
                <p className="text-gray-700 mb-6">
                Introducing One Day HELOC™—your express lane to accessing cash from your home with our Home Equity Line of Credit. Once you complete your application tasks, you’ll get an approval decision in 24 hours, and your cash in 7 days.
                </p>
              </div>
              <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
              </button>
            </div>

           
          </div>
          
        </div>
        <div className="w-full lg:w-3/12 bg-gray-100 p-5 rounded-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Insurance           </h1>
          <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
          </button>
          <img
            src="https://media.better.com/better-com/homepage/learning-center/insurance.webp"
            className="w-full mt-4 rounded-lg"
            alt="First Home"
            style={{ maxHeight: "150px", objectFit: "cover" }}
          />
        </div>
      </div>
      </>
        )
      }
      
      {
        selectedTopic==='calculators' && (
            <>
             <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <div className="w-full lg:w-3/12 bg-gray-100 p-5 rounded-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mortgage calculator
          </h1>
          <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
          </button>
          <img
            src="https://media.better.com/better-com/homepage/learning-center/mortgage-calculator.webp"
            className="w-full mt-4 rounded-lg"
            alt="First Home"
            style={{ maxHeight: "150px", objectFit: "cover" }}
          />
        </div>

        <div className="w-full lg:w-8/12 bg-gray-100 rounded-lg p-5">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                affordability calculator
                </h1>
                <p className="text-gray-700 mb-6">
                Our home affordability calculator estimates the maximum home you can afford – including taxes, PMI, and real-time mortgage rates – based on your income, assets, and monthly debts. Enter your info to find out how much you can afford!
                </p>
              </div>
              <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
              </button>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/affordability-calculator.webp"
                alt="One Day Mortgage"
                className="rounded-lg"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-4">
      <div className="w-full lg:w-8/12 bg-gray-100 rounded-lg p-5">
          <div className="flex flex-col lg:flex-row h-full">
             <div className="lg:w-1/2 flex items-center justify-center">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/affordability-calculator.webp"
                alt="better-heloc"
                className="rounded-lg"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                   HELOC Calculator
                </h1>
                <p className="text-gray-700 mb-6">
                Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.
                </p>
              </div>
              <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
              </button>
            </div>

           
          </div>
          
        </div>
        <div className="w-full lg:w-3/12 bg-gray-100 p-5 rounded-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Fixed-rate loan comparison calculator           </h1>
          <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
          </button>
          <img
            src="https://media.better.com/better-com/homepage/learning-center/fixed-rate-calculator.webp"
            className="w-full mt-4 rounded-lg"
            alt="First Home"
            style={{ maxHeight: "150px", objectFit: "cover" }}
          />
        </div>
      </div>
            </>
        )
      }

      {
        selectedTopic === 'guides' && (
            <>
             <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <div className="w-full lg:w-3/12 bg-gray-100 p-5 rounded-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What is a good debt-to-income ratio for a home loan?
          </h1>
          <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
          </button>
          <img
            src="https://media.better.com/better-com/homepage/learning-center/good-dti.webp"
            className="w-full mt-4 rounded-lg"
            alt="First Home"
            style={{ maxHeight: "150px", objectFit: "cover" }}
          />
        </div>

        <div className="w-full lg:w-8/12 bg-gray-100 rounded-lg p-5">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left Section - Text and Button */}
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Buying a house without realtor
                </h1>
                <p className="text-gray-700 mb-6">
                Thinking about buying a house without a real estate agent? Read this first.
                </p>
              </div>
              <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
              </button>
            </div>

            {/* Right Section - Image */}
            <div className="lg:w-1/2 flex items-center justify-center">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/buy-house-without-realtor.webp"
                alt="One Day Mortgage"
                className="rounded-lg"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-4">
      <div className="w-full lg:w-8/12 bg-gray-100 rounded-lg p-5">
          <div className="flex flex-col lg:flex-row h-full">
             <div className="lg:w-1/2 flex items-center justify-center">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/loan-timeline.webp"
                alt="better-heloc"
                className="rounded-lg"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Timeline for homebuying process
                </h1>
                <p className="text-gray-700 mb-6">
                Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.                </p>
              </div>
              <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300 w-10 h-10 flex items-center justify-center">
                <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
              </button>
            </div>

           
          </div>
          
        </div>
        <div className="w-full lg:w-3/12 bg-gray-100 p-5 rounded-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Conventional loan requirements           </h1>
          <button className="p-2 border border-green-800 rounded-full hover:bg-green-800 hover:text-white transition-colors duration-300">
            <i className="fa-solid fa-arrow-right text-green-800 hover:text-white"></i>
          </button>
          <img
            src="https://media.better.com/better-com/homepage/learning-center/conventional-loan.webp"
            className="w-full mt-4 rounded-lg"
            alt="First Home"
            style={{ maxHeight: "150px", objectFit: "cover" }}
          />
        </div>
      </div>
            </>
        )
      }
    </div>
    </>
  );
};

export default QuestionHome;