import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const clearData = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const submitData = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(formData);
      clearData();
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Welcome Back
        </h2>

        <form onSubmit={submitData} onReset={clearData} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-400 border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 rounded-lg transition duration-300 disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>

            <button
              type="reset"
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 rounded-lg transition duration-300"
            >
              Clear
            </button>
          </div>
        </form>

        {/* Optional Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?
          <span className="text-cyan-400 cursor-pointer hover:underline ml-1">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
