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
  const Cleardata = () => {
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
      Cleardata();
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mt-20 flex justify-center border w-100 ml-130 rounded bg-blue-700 border-amber-50">
        <form action="" onSubmit={submitData} onReset={Cleardata}>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              className="border text-amber-50 border-blue-900 w-90 m-3 p-2 rounded"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Type Your Password"
              value={formData.password}
              onChange={handleChange}
              className="border text-amber-50 border-blue-900 w-90 m-3 p-2 rounded"
            />
          </div>
          <div className="flex justify-center gap-3 ">
            <button
              type="submit"
              className="bg-green-500 text-white border rounded p-2 w-25 border-none m-5 hover:cursor-pointer shadow-2xl "
            >
              Login
            </button>
            <button
              type="reset"
              className="bg-red-500 text-white border rounded p-2 w-25 border-none m-5 hover:cursor-pointer shadow-2xl "
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
