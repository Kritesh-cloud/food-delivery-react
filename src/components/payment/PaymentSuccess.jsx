import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

const PaymentSuccess = () => {
  const navigate = useNavigate();

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
              <div className="flex justify-center items-center bg-green-100 rounded-full w-24 h-24 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m0 9a9 9 0 110-18 9 9 0 010 18z"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Payment Successful!
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Thank you for your order. Your payment was processed successfully.
              You’ll receive an order confirmation shortly.
            </p>
            <button
              onClick={handleBackToHome}
              className="px-6 py-3 bg-orange-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentSuccess;
