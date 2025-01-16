import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

const PaymentUnsuccess = () => {
  const navigate = useNavigate();

  const handleRetryPayment = () => {
    navigate("/cart"); // Adjust this route to match your checkout page
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flexcol">
      <div>
        <Navigation />
      </div>
      <div>
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="max-w-2xl w-full px-6 py-12 bg-white rounded-lg shadow-lg text-center">
            <div className="mb-6">
              <div className="flex justify-center items-center bg-red-100 rounded-full w-24 h-24 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m9-5a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Payment Failed
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              We’re sorry, but your payment couldn’t be processed. Please check
              your payment details and try again.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleRetryPayment}
                className="px-6 py-3 bg-orange-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
              >
                Retry Payment
              </button>
              <button
                onClick={handleBackToHome}
                className="px-6 py-3 bg-gray-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-gray-600 transition-colors"
              >
                Back to Home
              </button>
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

export default PaymentUnsuccess;
