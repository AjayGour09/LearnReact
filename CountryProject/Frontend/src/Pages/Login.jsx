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
    <div className="min-h-screen flex items-center justify-center px-4 md:px-8">
      <form
        onSubmit={submitData}
        onReset={clearData}
        className="w-full max-w-md bg-blue-700 border border-amber-50 rounded-lg p-6 shadow-lg"
      >
        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-blue-900 text-amber-50 w-full p-3 rounded mb-4 bg-transparent"
          />
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Type Your Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="border border-blue-900 text-amber-50 w-full p-3 rounded mb-4 bg-transparent"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
          <button
            type="submit"
            className="bg-green-500 text-white rounded p-2 w-full md:w-auto shadow-lg hover:bg-green-600"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <button
            type="reset"
            className="bg-red-500 text-white rounded p-2 w-full md:w-auto shadow-lg hover:bg-red-600"
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
