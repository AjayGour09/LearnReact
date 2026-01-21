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

  const ClearForm = () => {
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
      ClearForm();
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="pt-15">
        <h2 className="flex items-center justify-center text-2xl text-pink-600">
          SignUp Page
        </h2>

        <div className="flex justify-center mt-5">
          <form onSubmit={handleSubmit} onReset={ClearForm}>
            <div className="border w-[500px] h-[470px] rounded-[10px] bg-green-900">

              {message && (
                <p className="text-center text-white mt-3">{message}</p>
              )}

              <div className="mt-5">
                <input
                  type="text"
                  name="Username"
                  placeholder="UserName"
                  value={formData.Username}
                  onChange={handleChange}
                  className="border w-110 m-3 h-10 rounded p-5 border-green-700 text-amber-50"
                  required
                />
              </div>

              <input type="email" name="email" placeholder="Email"
                value={formData.email} onChange={handleChange}
                className="border w-110 m-3 h-10 rounded p-5 border-green-700 text-amber-50"
                required />

              <input type="number" name="number" placeholder="Phone"
                value={formData.number} onChange={handleChange}
                className="border w-110 m-3 h-10 rounded p-5 border-green-700 text-amber-50"
                required />

              <input type="password" name="password" placeholder="Password"
                value={formData.password} onChange={handleChange}
                className="border w-110 m-3 h-10 rounded p-5 border-green-700 text-amber-50"
                required />

              <input type="password" name="confirmPassword" placeholder="Confirm Password"
                value={formData.confirmPassword} onChange={handleChange}
                className="border w-110 m-3 h-10 rounded p-5 border-green-700 text-amber-50"
                required />

              <div className="flex justify-center gap-7 mt-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="border-none w-25 bg-blue-400 text-white p-2 rounded"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>

                <button
                  type="reset"
                  className="border-none w-25 bg-red-600 text-white p-2 rounded"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
