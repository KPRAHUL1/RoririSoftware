import React from 'react';

const InternshipRegistrationForm = () => {
  return (
    <div className="min-h-screen  flex items-center lg:p-10 p-5 justify-center font-sans mb-5">
      <div className=" w-full flex flex-col lg:flex-row  rounded-xl  overflow-hidden lg:p-5">
        <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center ">
          <h2 className="text-green-600 text-lg font-semibold mb-2">Contact Us</h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Get in touch with us <br/>today
          </h1>
          <p className="text-gray-600 text-lg">
            Reach out to explore endless possibilities with Ronri Software Solutions!
          </p>
        </div>

        <div className="lg:w-1/2 p-8 sm:p-12 bg-green-50 flex flex-col justify-center rounded-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-8">
            Registration <span className="text-gray-900">for Internship</span>
          </h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 border cursor-target border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition duration-200 bg-white text-gray-800"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition duration-200 bg-white text-gray-800"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition duration-200 bg-white text-gray-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Program"
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition duration-200 bg-white text-gray-800"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Qualifications"
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition duration-200 bg-white text-gray-800"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="College Name"
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition duration-200 bg-white text-gray-800"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Year"
                  className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition duration-200 bg-white text-gray-800"
                />
              </div>
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-4 border border-green-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition duration-200 bg-white text-gray-800 resize-y"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white font-bold rounded-full shadow-md hover:bg-green-700 transition duration-300 flex items-center justify-center space-x-2"
              >
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InternshipRegistrationForm;
