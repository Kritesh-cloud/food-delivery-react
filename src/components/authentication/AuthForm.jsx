import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const AuthForm = ({ isSignUp, toggelShowFrom, toggelSignInUp }) => {
  /*
  const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  */
  const [formData, setFormData] = useState({
    name: "",
    email: "aakriti@gmail.com",
    password: "password",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (isSignUp && !formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      tempErrors.email = "Invalid email format";
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6)
      tempErrors.password = "Password must be at least 6 characters long";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
      const endPoint = isSignUp
        ? "http://localhost:8080/signUp"
        : "http://localhost:8080/signIn";
      axios
        .post(endPoint, formData, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          localStorage.setItem("loginToken", JSON.stringify(res.data.token));
          if (isSignUp) {
            toggelSignInUp();
          } else {
            toggelShowFrom();
          }
        })
        .catch((err) => {
          console.log("err in auth", err);
        })
        .finally();
    }
  };

  return (
    <div className="flex bg-gray-100 relative rounded">
      <div
        className="absolute top-3 right-3 bor cursor-pointer"
        onClick={() => toggelShowFrom()}
      >
        <CloseIcon />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96 bor"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 p-2 w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`mt-1 p-2 w-full border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <div className="bor flex justify-center text-[#4a4a4a] text-[14px] pt-3 ">
          <div
            className="hover:underline cursor-pointer"
            onClick={() => toggelSignInUp()}
          >
            {isSignUp ? "Already have an account?" : "Create new account"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
