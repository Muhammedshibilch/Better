import React, { useState } from 'react';
import { FaCheckCircle, FaChartLine, FaCalculator } from "react-icons/fa"; //

const Calculator = () => {
  const [homePrice, setHomePrice] = useState("");
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const calculateMonthlyPayment = () => {
    const principal = homePrice * (1 - downPaymentPercent / 100);
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    return monthlyPayment.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <>
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-h-full mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mortgage Calculator</h1>
      <p className="text-gray-700 mb-8">
        Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Home Price</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Monthly Payment</label>
          <div className="p-2 bg-white border border-gray-300 rounded-lg">
            {calculateMonthlyPayment()}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Down Payment (%)</label>
          <input
            type="number"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Net Income</label>
          <div className="p-2 bg-white border border-gray-300 rounded-lg">
            ${(homePrice * (downPaymentPercent / 100)).toLocaleString()}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Interest Rate (%)</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Length of Loan (years)</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      <div className="mt-8">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
          Get Pre-Approved
        </button>
      </div>
    </div>

    <hr className='mt-5 w-[80%] mx-auto ' />
    <div className="flex flex-col px-6 md:px-12 lg:px-24 mt-5">
  <h1 className="text-black font-semibold text-3xl mb-4">
    How does a mortgage calculator help me?
  </h1>
  <p className="text-gray-700">
    When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.
  </p>
</div>
<hr className='mt-5 w-[80%] mx-auto ' />
<div className="flex flex-col px-6 md:px-12 lg:px-24 mt-5">
  <h1 className="text-black font-semibold text-3xl mb-4">How much monthly mortgage payment can I afford?</h1>
  <p className="text-gray-700">
    Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.
  </p>
  <p className="text-gray-700 mt-1">
    Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.
  </p>

  <div className="flex justify-center items-center flex-col mt-3">
    <h1 className="text-xl font-semibold mb-2">Formula for calculating your debt-to-income (DTI) ratio:</h1>
    <img
      src="https://media.better.com/better-com/mortgage-calculator/dti-formula.jpg"
      alt="DTI Formula"
      className="w-full md:w-3/4 lg:w-1/2"
    />
  </div>

  <div className="flex justify-center items-center flex-col mt-5">
    <h1 className="text-xl font-semibold mb-2">Here’s an example of what calculating your DTI might look like:</h1>
    <img
      src="https://media.better.com/better-com/mortgage-calculator/dti-example.jpg"
      alt="DTI Example"
      className="w-full md:w-3/4 lg:w-1/2"
    />
  </div>
</div>


<hr className='mt-5 w-[80%] mx-auto ' />
<div className="flex flex-col px-6 md:px-12 lg:px-24 mt-5">
  <h1 className="text-black font-semibold text-3xl mb-4">
  How to calculate monthly mortgage payments?
  </h1>
  <p className="text-gray-700">Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>
  <h1 className="text-black font-semibold text-2xl mb-4 mt-4">Formula for calculating monthly mortgage payments</h1>
  <p className="text-gray-700">The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p>
  <div className="flex flex-col justify-center px-6 md:px-12 lg:px-24 mt-5">
  {/* Formula Image */}
  <img
    src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-formula.jpg"
    alt="Monthly Mortgage Payments Formula"
    className="w-full md:w-3/4 lg:w-2/3 mb-6"
  />

  {/* Description */}
  <p className="text-gray-700 mb-4">Where:</p>

  {/* Bullet Points */}
  <ul className="list-disc list-inside text-gray-700 space-y-2">
    <li>
      <strong>M</strong> is monthly mortgage payments
    </li>
    <li>
      <strong>P</strong> is the principal loan amount (the amount you borrow)
    </li>
    <li>
      <strong>r</strong> is the monthly interest rate
      <p className="text-sm text-gray-600 ml-5">
        (annual interest rate divided by 12 and expressed as a decimal)
      </p>
    </li>
    <li>
      <strong>n</strong> is the total number of payments in months
      <p className="text-sm text-gray-600 ml-5">
        For example: for a 30-year loan, n = 30×12 = 360 months
      </p>
    </li>
  </ul>

  {/* Example Section */}
  <div className="mt-6 text-gray-700">
    <p>
      <strong>For example:</strong> if the annual interest rate is 5%, the monthly rate would be 0.05/12 = .00417, or .417%
    </p>
  </div>
  <p className="text-gray-700 mb-4 mt-5">Here’s a simple example:</p>
  <img src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-example.jpg"     className="w-full md:w-3/4 lg:w-2/3 mb-6"
 alt="" />

</div>
<p className='text-gray-700'>This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>
</div>
<hr className='mt-5 w-[80%] mx-auto ' />

<div className="flex flex-col px-6 md:px-12 lg:px-24 mt-5">
  <h1 className="text-black font-semibold text-3xl mb-4">
  How to use this mortgage calculator?
  </h1>
  <p className="text-gray-700">Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.</p>
  <p className="text-gray-700 mt-2">Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.</p>
  <p className="text-gray-700 mt-2">The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator.</p>
  <p className="text-gray-700 mt-2">Fun fact: Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.</p>
  <h1 className="text-black font-semibold text-3xl mb-4 mt-3">
  Do you know your property tax rate?  </h1>
  <p className="text-gray-700">While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from Forbes breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:</p>
</div>

<hr className='mt-5 w-[80%] mx-auto ' />

<div className="flex flex-col px-6 md:px-12 lg:px-24 mt-5">
  <h1 className="text-black font-bold text-3xl mb-4">
  How is Better’s mortgage calculator different?
  </h1>
  <h1 className="text-black font-semibold  text-2xl mb-4">
  This mortgage calculator shows your payments with taxes and insurance
  </h1>
  <p className="text-gray-700">
  The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.
  </p>
  <p className="text-gray-700 mt-2">Your lender will usually require you to have homeowners insurance while you're settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that's been damaged or destroyed.</p>
  <p className="text-gray-700 mt-2">Here's an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.</p>
  <h1 className="text-black font-semibold  text-2xl mb-4 mt-3">
  This mortgage calculator shows your mortgage costs with PMI

  </h1>
  <p className="text-gray-700">PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.</p>
  <p className="text-gray-700 mt-2">Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn’t risen above 10% since 1989.</p>
  <p className="text-gray-700 mt-2">PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you've accumulated at least 20% home equity.</p>
  <h1 className="text-black font-semibold  text-2xl mb-4 mt-3">
  This mortgage calculator includes HOA fees
  </h1>
  <p className="text-gray-700">Homeowners association (“HOA”) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they’re an essential factor to consider when calculating your mortgage costs.</p>
  <p className="text-gray-700 mt-2">Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It's important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as ‘special assessments’ to cover unexpected expenses from time to time.</p>
</div>
<hr className='mt-5 w-[80%] mx-auto ' />

    <div className="flex flex-col px-6 md:px-12 lg:px-24 mt-5">
      <h1 className="text-black font-semibold text-3xl mb-4">
      How to reduce your monthly mortgage payments?
      </h1>
      <p className="text-gray-700 mt-2">The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.</p>

      <h1 className="text-black font-semibold text-2xl mb-4 mt-3">
      Extend the length of your mortgage
      </h1>
      <p className="text-gray-700 mt-2">The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, ‘extending the length of your mortgage’ is known as ‘increasing your loan term’.) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.</p>
      <h1 className="text-black font-semibold text-2xl mb-4 mt-3">
      Increase your down payment      </h1>
      <p className="text-gray-700 mt-2">The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you’re able to put at least 20% of the home price towards your down payment, you’ll be able to avoid PMI (private mortgage insurance). Even if you can’t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.</p>
      <h1 className="text-black font-semibold text-2xl mb-4 mt-3">
      Get a lower interest rate      </h1>
      <p className="text-gray-700 mt-2">Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your loan-to-value ratio (LTV).</p>
      <p className="text-gray-700 mt-2">Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.</p>
      <p className="text-gray-700 mt-2">If you think you may sell or refinance the home in the first 5-10 years of the mortgage, you could consider an adjustable-rate mortgage (ARM). An ARM offers a lower fixed interest rate for a set introductory period—typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won’t keep the mortgage for long.</p>
      <p className="text-gray-700 mt-2">If you’re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your debt-to-income ratio (DTI), lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.</p>

    </div>

    <hr className='mt-5 w-[80%] mx-auto ' />

    <div className="flex flex-col px-6 md:px-12 lg:px-24 mt-5">
      <h1 className="text-black font-semibold text-3xl mb-4">
      How much home can I afford?
      </h1>
      <p className="text-gray-700">Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our home affordability calculator. This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.</p>
    </div>

    <hr className='mt-5 w-[80%] mx-auto ' />

<div className="flex flex-col px-6 md:px-12 lg:px-24 mt-5">
  <h1 className="text-black font-semibold text-3xl mb-4">
  Next steps to buying a house
  </h1>
  <p className="text-gray-700">There are 8 steps to buying a house and by using this calculator you’ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).</p>
  <p className="text-gray-700 mt-2">The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn’t impact your credit score. It’s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you’ll be offered.</p>
  <p className="text-gray-700 mt-2">If you’re ready to buy a home now, our definitive home buying checklist can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you’ll be able to show sellers and real estate agents that you mean business—giving you an edge over homebuyers that don’t have this kind of proof that they’re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you’ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.**</p>
</div>

<hr className='mt-5 w-[80%] mx-auto ' />
<div className="flex flex-col px-6 md:px-12 lg:px-24 mt-5">
  <h1 className="text-black font-semibold text-3xl mb-8">More resources</h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FaCheckCircle className="text-green-600 text-2xl mr-3" /> {/* Icon */}
        <h2 className="text-xl font-semibold">Get pre-approved</h2>
      </div>
      <p className="text-gray-700 mb-4">
        See how much you can borrow and get pre-approved for a mortgage.
      </p>
      <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
        Get Started
      </button>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FaChartLine className="text-green-600 text-2xl mr-3" /> {/* Icon */}
        <h2 className="text-xl font-semibold">See today's rates</h2>
      </div>
      <p className="text-gray-700 mb-4">
        Check the latest mortgage rates available in your area.
      </p>
      <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
        Check Rates
      </button>
    </div>

    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <FaCalculator className="text-green-600 text-2xl mr-3" /> {/* Icon */}
        <h2 className="text-xl font-semibold">Find your max budget</h2>
      </div>
      <p className="text-gray-700 mb-4">
        Discover your maximum homebuying budget with our tools.
      </p>
      <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
        Calculate Budget
      </button>
    </div>
  </div>

  <p className="text-gray-600 text-sm mt-6">
    *See Better Real Estate discount terms and conditions. The average lifetime savings estimate is based on a comparison of the Freddie Mac Primary Mortgage Market Survey's (PwHS) 30-year fixed-rate mortgage product with Better Mortgages' own offered rate for a comparable mortgage product between Jan 20 - Dec 30. PwHS is based on conventional, conforming fully-amortizing home purchase loans for borrowers with a loan-to-value of 80 percent and with excellent credit. Better Mortgages' offered rate is based on pricing output for a 30-year fixed-rate mortgage product with a 30-day lock period for a single-family, owner-occupied residential property and a borrower with excellent (XoO FCC) credit and a loan-to-value ratio of 80 percent. Individual savings could vary based on current market rates, property type, loan amount, loan-to-value, credit score, debt-to-income ratio, and other variables.
  </p>
</div>

    </>
  );
};

export default Calculator;