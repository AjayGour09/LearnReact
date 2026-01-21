import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    Username: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(formData);
      ClearForm();
    } catch (error) {
      console.log(error.message);
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
          <form action="" onSubmit={handleSubmit} onReset={ClearForm}>
            <div className="border w-[500px] h-[440px] rounded-[10px] bg-green-900">
              <div className="mt-5">
                <input
                  type="text"
                  name="Username"
                  id="Username"
                  placeholder="UserName"
                  value={formData.Username}
                  onChange={handleChange}
                  className="border w-110 m-3 h-10 rounded p-5 border-green-700 text-amber-50 "
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border w-110 m-3 h-10 rounded p-5 border-green-700 text-amber-50 "
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  name="number"
                  id="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="border w-110 m-3 h-10 rounded p-5 border-green-700 text-amber-50 "
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="border w-110 m-3 h-10 rounded p-5 border-green-700 text-amber-50 "
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Your Password"
                  className="border w-110 m-3 h-10 rounded p-5 border-green-700 text-amber-50 "
                  required
                />
              </div>
              <div className="flex justify-center gap-7 mt-3">
                <button
                  type="submit"
                  className="border-none w-25 bg-blue-400 text-amber-50 p-2 rounded shadow hover:cursor-pointer"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  className="border-none w-25 bg-red-600 text-amber-50 p-2 rounded shadow hover:cursor-pointer"
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
