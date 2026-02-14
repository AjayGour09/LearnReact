import { useState } from "react";
import axios from "axios";

export const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    number: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClearForm = () => {
    setFormData({
      fullname: "",
      email: "",
      number: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");

    try {
      const res = await axios.post(
        "http://localhost:4500/api/contact",
        formData
      );

      setResponseMessage(res.data.message);
      handleClearForm();
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
  <div className="min-h-screen flex justify-center pt-24 bg-gradient-to-br from-green-900 via-green-800 to-black px-4">

    <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
      
      <h2 className="text-3xl font-semibold text-center text-white mb-6">
        Contact Us
      </h2>

      {responseMessage && (
        <p className="text-center text-sm text-green-300 mb-4">
          {responseMessage}
        </p>
      )}

      <form onSubmit={handleSubmit} onReset={handleClearForm} className="space-y-5">

        {/* Full Name */}
        <div>
          <label className="block text-sm text-gray-200 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            placeholder="John Doe"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-200 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm text-gray-200 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="number"
            placeholder="+91 9876543210"
            value={formData.number}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm text-gray-200 mb-1">
            Your Message
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your query here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>

          <button
            type="reset"
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg transition duration-300"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  </div>
);

};
