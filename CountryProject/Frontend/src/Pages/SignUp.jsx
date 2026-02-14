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
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black px-4">
    
    <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

      <h2 className="text-3xl font-semibold text-center text-white mb-6">
        Create Account
      </h2>

      {message && (
        <p className="text-center text-sm text-purple-300 mb-4">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} onReset={clearForm} className="space-y-4">

        {/* Username */}
        <input
          type="text"
          name="Username"
          placeholder="Username"
          value={formData.Username}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        {/* Phone */}
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        {/* Buttons */}
        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition duration-300 disabled:opacity-50"
          >
            {isLoading ? "Creating..." : "Sign Up"}
          </button>

          <button
            type="reset"
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 rounded-lg transition duration-300"
          >
            Reset
          </button>
        </div>

      </form>
    </div>
  </div>
);

};

export default SignUp;
