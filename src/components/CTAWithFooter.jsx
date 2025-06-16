import React from 'react';

function CTAWithFooter() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 text-center">
      
      {/* Call to Action */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Start your 14-day free trial
      </h2>
      
      <form className="flex w-full max-w-md mx-auto mb-16">
  <input
    type="email"
    placeholder="Enter your email"
    className="flex-grow px-4 py-3 border border-black border-r-0 rounded-l-full focus:outline-none"
  />
  <button
    type="submit"
    className="px-6 py-3 bg-black text-white font-medium rounded-r-full hover:bg-gray-900 transition-all duration-300 ease-in-out"
  >
    Start Trial
  </button>
</form>


      {/* Footer Links */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-600 mb-4">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500">&copy; 2025 Insight</p>
    </section>
  );
}

export default CTAWithFooter;
