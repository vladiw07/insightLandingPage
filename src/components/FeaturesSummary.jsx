import React from 'react';
import { FaChartBar, FaSearch, FaCog } from 'react-icons/fa';

function FeaturesSummary() {
  return (
    <section className="bg-white px-6 py-24 md:px-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full text-center">
          <div className="flex flex-col items-center gap-4">
            <FaChartBar className="text-4xl text-black" />
            <p className="font-semibold text-lg">Real-time analytics</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <FaSearch className="text-4xl text-black" />
            <p className="font-semibold text-lg">Advanced reporting</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <FaCog className="text-4xl text-black" />
            <p className="font-semibold text-lg">Customizable dashboards</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 max-w-2xl text-gray-800 italic text-xl leading-relaxed">
          “Insight has transformed the way we make data-driven decisions.”
          <p className="mt-3 text-base not-italic text-gray-600">
            – Mark, Founder of tech company
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSummary;
