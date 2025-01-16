import React from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <div className="flexcol">
      <div>
        <Navigation />
      </div>
      <div>
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
              About Us
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Welcome to{" "}
              <span className="font-semibold text-orange-500">
              Khaja Kart
              </span>
              , your go-to destination for delicious meals delivered to your
              doorstep. We are passionate about connecting people with their
              favorite food and helping restaurants reach a wider audience.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At FoodieExpress, we believe in providing an exceptional dining
              experience, whether you're craving comfort food, gourmet dishes,
              or quick bites. With our user-friendly platform and dedicated
              delivery team, we ensure that your meals are always fresh and on
              time.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-6 text-gray-600 text-lg leading-relaxed space-y-2">
              <li>Wide variety of restaurants and cuisines.</li>
              <li>Fast and reliable delivery service.</li>
              <li>Easy-to-use platform for ordering food.</li>
              <li>Secure payment options for peace of mind.</li>
            </ul>
            <div className="text-center mt-8">
              <img
                src="https://source.unsplash.com/800x400/?food,delivery"
                alt="Delicious food"
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mt-6 text-center">
              We’re here to make your life easier and tastier. Thank you for
              choosing{" "}
              <span className="font-semibold text-orange-500">
                FoodieExpress
              </span>
              !
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
