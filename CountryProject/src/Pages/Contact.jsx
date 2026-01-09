import { useState } from "react";

export const Contact = () => {
  const [formdata, setformdata] = useState({
    fullname: "",
    email: "",
    number: "",
    message:""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };
  const handleclearform = () => {
    setformdata({
      fullname: "",
      email: "",
      number: "",
      message:""
    });
  };

  const handleSubmt = (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(formdata);
      handleclearform();
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div>
        <div className="flex items-center justify-center mt-10  border w-[460px] h-[450px] ml-[450px] rounded-[10px]">
          <form action="" onSubmit={handleSubmt} onReset={handleclearform}>
            <div className="flex gap-5 mt-18 ">
              <label htmlFor="fullname" className="text-[18px]">
                FullName :
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Enter your Name"
                className="border p-2 rounded-[5px] mb-1 w-[260px] "
                value={formdata.fullname}
                onChange={handlechange}
                required
              />
            </div>
            <div className="flex gap-5 mt-5">
              <label htmlFor="email" className="text-[18px]">
                Email :
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
                className="border p-2 rounded-[5px] mb-1 w-[260px] ml-8"
                value={formdata.email}
                onChange={handlechange}
                required
              />
            </div>
            <div className="flex gap-5 mt-5">
              <label htmlFor="number" className="text-[18px]">
                Phone :
              </label>
              <input
                type="text"
                name="number"
                id="number"
                placeholder="Enter your Phone Number"
                className="border p-2 rounded-[5px] mb-1 w-[260px] ml-6"
                value={formdata.number}
                onChange={handlechange}
                required
              />
            </div>
            <div className="flex gap-10">
              <p>message</p>
              <textarea
                name="message"
                id="message"
                rows="1"
                className="border p-8 mt-2.5"
                autoComplete="false"
                onChange={handlechange}
                value={formdata.message}
              ></textarea>
            </div>
            <div className="flex gap-2 mb-10">
              <button
                type="submit"
                disabled={isLoading}
                className="border p-2 rounded-[7px] mt-8 bg-blue-500 text-amber-50 hover:bg-blue-700 shadow hover:transition-transform"
              >
                {isLoading ? "Submitting..." : "Submit Data"}
              </button>

              <button
                type="reset"
                className="border p-2 rounded-[7px] mt-8 bg-blue-500 text-amber-50 hover:bg-blue-700 shadow hover:transition-transform"
              >
                Reset Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
