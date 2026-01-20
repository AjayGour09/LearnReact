import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="pt-15">
        <h2 className="flex items-center justify-center text-2xl text-pink-600">
          SignUp Page
        </h2>
        <div className="flex justify-center mt-5">
          <div className="border w-[500px] h-[400px] rounded-[10px]">
            <div>
              <label htmlFor="Username">UserName</label>
              <input
                type="text"
                name="Username"
                id="Username"
                className="border"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="border" />
            </div>
            <div>
              <label htmlFor="number">Phone</label>
              <input
                type="number"
                name="number"
                id="number"
                className="border"
              />
            </div>
            <div>
              <label htmlFor="password">Passwod</label>
              <input
                type="password"
                name="passwod"
                id="password"
                className="border"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="border"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
