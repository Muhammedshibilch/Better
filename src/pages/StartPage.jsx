import React from 'react';

const StartPage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen p-6">
      <div className="text-center mb-8">
        <h1 className="text-black text-4xl md:text-5xl font-bold mb-4">Hi, I'm Betsy!</h1>
        <h1 className="text-black text-4xl md:text-5xl font-bold">What can I help you with?</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:border-green-700 transition-shadow duration-300">
          <span className="text-xl font-semibold">Buying a home</span>
        </button>
        <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <span className="text-xl font-semibold">Refinance my mortgage</span>
        </button>
        <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <span className="text-xl font-semibold">Get cash from my home</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-green-600">$100B</h2>
          <p className="text-gray-700">home loans funded entirely online</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-green-600">400K</h2>
          <p className="text-gray-700">Customers who chose a Better Mortgage</p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg shadow-md w-full max-w-2xl text-center mb-12">
        <h2 className="text-xl font-semibold mb-4">After a few questions, you'll unlock:</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-center">
            <span className="text-gray-700">Custom mortgage rates</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-gray-700">Exclusive offers</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-gray-700">A personalized dashboard</span>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default StartPage;