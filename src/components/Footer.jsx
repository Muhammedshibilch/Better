import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-success">Better</h2>
            <p className="text-gray-700">
              Better is a family of companies serving all your homeownership needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-success">Better Mortgage</h3>
            <p className="text-gray-700">
              We can't wait to say "Welcome home." Apply 100% online, with expert customer support.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-success">Better Real Estate</h3>
            <p className="text-gray-700">
              Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-success">Better Cover</h3>
            <p className="text-gray-700">
              Shop, bundle, and save on insurance coverage for home, auto, life, and more.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-success">Better Inspect</h3>
            <p className="text-gray-700">
              Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-success">Better Settlement Services</h3>
            <p className="text-gray-700">
              Get transparent rates when you shop for title insurance all in one convenient place.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="text-gray-700">
              <li>Home affordability calculator</li>
              <li>Mortgage calculator</li>
              <li>Free mortgage calculator</li>
              <li>Mortgage calculator with taxes</li>
              <li>Mortgage calculator with PMI</li>
              <li>Rent vs buy calculator</li>
              <li>HELOC payment calculator</li>
              <li>HELOC vs cash-out refinance calculator</li>
              <li>Buy a home</li>
              <li>Sell a home</li>
              <li>Get home inspection</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="text-gray-700">
              <li>About Us</li>
              <li>Careers</li>
              <li>Media</li>
              <li>Partner With Us</li>
              <li>Learning center</li>
              <li>FAQs</li>
              <li>Investor Relations</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <ul className="text-gray-700">
              <li>hello@better.com</li>
              <li>415-523-8837</li>
              <li>FAQ</li>
              <li>Glossary</li>
              <li>Legal</li>
              <li>NMLS Consumer Access</li>
              <li>Terms of Use</li>
              <li>Disclosures & Licensing</li>
              <li>Affiliated Business</li>
              <li>Browser Disclaimer</li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="text-center text-gray-700">
          <p>© 2024 Better. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;