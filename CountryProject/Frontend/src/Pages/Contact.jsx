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
    <div className="flex justify-center px-4 ">
      <div
        className="
          flex items-center justify-center
          mt-26 md:mt-20 m lg:mt-27
          bg-green-900 border border-pink-500 rounded-[10px]
          w-full md:w-[500px] lg:w-[460px] 
          h-auto lg:h-[450px]
        "
      >
        <form
          onSubmit={handleSubmit}
          onReset={handleClearForm}
          className="w-full"
        >
          {responseMessage && (
            <p className="text-center text-white mt-3 ">
              {responseMessage}
            </p>
          )}

          {/* Inputs */}
          <input
            type="text"
            name="fullname"
            placeholder="Enter your Name"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="
              border p-2 mt-5
              w-[90%] md:w-[420px] lg:w-[400px]
              mx-auto block
              border-pink-500 bg-transparent text-pink-50 rounded
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              border p-2 mt-5
              w-[90%] md:w-[420px] lg:w-[400px] 
              mx-auto block
              border-pink-500 bg-transparent text-pink-50 rounded
            "
          />

          <input
            type="text"
            name="number"
            placeholder="Enter your Phone Number"
            value={formData.number}
            onChange={handleChange}
            required
            className="
              border p-2 mt-5
              w-[90%] md:w-[420px] lg:w-[400px]
              mx-auto block
              border-pink-500 bg-transparent text-pink-50 rounded
            "
          />

          <textarea
            name="message"
            placeholder="Write Your Query Here.."
            value={formData.message}
            onChange={handleChange}
            required
            className="
              border p-2 mt-5
              w-[90%] md:w-[420px] lg:w-[400px]
              h-28
              mx-auto block
              border-pink-500 bg-transparent text-pink-50 rounded
            "
          />

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-500 text-white p-2 rounded w-[90%] md:w-auto mx-auto"
            >
              {isLoading ? "Submitting..." : "Submit Data"}
            </button>

            <button
              type="reset"
              className="bg-red-500 text-white p-2 rounded w-[90%] md:w-auto mx-auto"
            >
              Reset Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
