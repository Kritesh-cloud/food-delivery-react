import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [userToken, setUserToken] = useState("");

  // Handle file input change
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!categoryName || !image) {
      setMessage("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append("category", categoryName);
    formData.append("image", image);

    try {
      setLoading(true);
      setMessage("");
      fetch("http://localhost:8080/admin/add-new-category", {
        method: "POST",
        headers: {
          Authorization: userToken,
        },
        body: formData,
      })
        .then((data) => console.log(data))
        .catch((error) => console.error(error));

      setMessage("Upload successful!");
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      setUserToken(`Bearer ${JSON.parse(localStorage.getItem("loginToken"))}`);
    }
  }, []);
  return (
    <div className="min-h-screen flex  bor">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <Typography
          variant="h5"
          className="text-[20px] font-semibold pb-4"
          sx={{ fontWeight: 600 }}
        >
          Upload Category
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Category Name:
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Image:
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-2 text-white rounded-lg ${
                loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("successful") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default AddCategory;
