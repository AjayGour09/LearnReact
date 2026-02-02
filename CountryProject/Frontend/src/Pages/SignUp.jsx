import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const clearForm = () => {
    setFormData({
      Username: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:4500/auth/signup",
        formData,
        { withCredentials: true }
      );

      setMessage(res.data.message);
      clearForm();
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-10 bg-gray-100">
      
      <h2 className="text-2xl md:text-3xl text-pink-600 font-bold mb-6">
        SignUp Page
      </h2>

      <form onSubmit={handleSubmit} onReset={clearForm} className="w-full max-w-md">
        <div className="bg-green-900 rounded-lg p-6 border border-green-700 shadow-lg">

          {message && (
            <p className="text-center text-white mb-4">{message}</p>
          )}

          {/* Username */}
          <input
            type="text"
            name="Username"
            placeholder="UserName"
            value={formData.Username}
            onChange={handleChange}
            required
            className="w-full mb-3 p-3 rounded border border-green-700 text-amber-50 bg-transparent"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-3 p-3 rounded border border-green-700 text-amber-50 bg-transparent"
          />

          {/* Phone */}
          <input
            type="number"
            name="number"
            placeholder="Phone"
            value={formData.number}
            onChange={handleChange}
            required
            className="w-full mb-3 p-3 rounded border border-green-700 text-amber-50 bg-transparent"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full mb-3 p-3 rounded border border-green-700 text-amber-50 bg-transparent"
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full mb-3 p-3 rounded border border-green-700 text-amber-50 bg-transparent"
          />

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto bg-blue-400 text-white rounded p-2 shadow hover:bg-blue-500"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>

            <button
              type="reset"
              className="w-full md:w-auto bg-red-600 text-white rounded p-2 shadow hover:bg-red-700"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
