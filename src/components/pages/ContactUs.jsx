import React from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

const ContactUs = () => {
  return (
    <div className="flexcol">
      <div>
        <Navigation />
      </div>
      <div>
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl w-full px-6 py-12 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg text-center mb-8">
              Have questions or need help? Reach out to us, and we'll be happy
              to assist you!
            </p>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-orange-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-2">
                📍 Address: 123 Foodie Street, Culinary City, FL 12345
              </p>
              <p className="text-gray-600 mb-2">📞 Phone: +1 (234) 567-890</p>
              <p className="text-gray-600">
                📧 Email: support@khajakart.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
