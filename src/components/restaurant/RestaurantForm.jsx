import React, { useState } from "react";

const RestaurantForm = ({ onSubmit, initialData, isCreate }) => {
  const [formData, setFormData] = useState({
    name: isCreate ? "" : initialData?.name || "",
    description: isCreate ? "" : initialData?.description || "",
    address: isCreate ? "" : initialData?.address || "",
    contactNumber: isCreate ? "" : initialData?.contactNumber || "",
    email: isCreate ? "" : initialData?.email || "",
    openingTime: isCreate ? "" : initialData?.openingTime || "",
    closingTime: isCreate ? "" : initialData?.closingTime || "",
    icon: null,
    background: null,
    gallery: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "gallery") {
      setFormData({ ...formData, gallery: [...files].slice(0, 6) });
    } else {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        {initialData ? "Update Restaurant" : "Create Restaurant"}
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Text Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-orange-300"
              rows="3"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Opening Time</label>
            <input
              type="time"
              name="openingTime"
              value={formData.openingTime}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-orange-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Closing Time</label>
            <input
              type="time"
              name="closingTime"
              value={formData.closingTime}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg p-2 focus:ring focus:ring-orange-300"
              required
            />
          </div>
        </div>

        {/* File Uploads */}
        <div>
          <label className="block text-gray-600">Restaurant Icon</label>
          <input
            type="file"
            name="icon"
            onChange={handleFileChange}
            className="block w-full text-gray-600"
            accept="image/*"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Background Image</label>
          <input
            type="file"
            name="background"
            onChange={handleFileChange}
            className="block w-full text-gray-600"
            accept="image/*"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">
            Gallery (up to 6 images)
          </label>
          <input
            type="file"
            name="gallery"
            multiple
            onChange={handleFileChange}
            className="block w-full text-gray-600"
            accept="image/*"
          />
          {formData.gallery.length > 0 && (
            <p className="text-sm text-gray-500 mt-1">
              Selected: {formData.gallery.length} image(s)
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition duration-300"
        >
          {!isCreate ? "Update Restaurant" : "Create Restaurant"}
        </button>
      </form>
    </div>
  );
};

export default RestaurantForm;
