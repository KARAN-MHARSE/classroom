import React, { useReducer, useState } from "react";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../Redux/reducers/userSlicer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useNavigation } from "react-router-dom";

function SignIn() {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  // console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // console.log(useNavigate());
    e.preventDefault();
    dispatch(signInStart());
    const res = await fetch(
      "https://classroom-1-mlxm.onrender.com/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    if (data.success) {
      dispatch(signInSuccess(data.user));
      alert("login succesfully");
      navigate("/");
    } else {
      dispatch(signInFailure());
      alert("something went wrong");
    }
    console.log(data);
  };

  return (
    <div className="flex h-[90vh]">
      {/* Left div */}
      <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-6">
          Log in to your account🤘
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col space-y-4"
        >
          <label className="text-lightText font-semibold" htmlFor="email">
            Your Email
          </label>
          <input
            className="bg-darkGray px-4 py-2 font-semibold outline-none border-2 border-lightText rounded-lg"
            placeholder="Enter your email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <label className="text-lightText font-semibold" htmlFor="password">
            Enter password
          </label>
          <input
            className="bg-darkGray px-4 py-2 font-semibold outline-none border-2 border-lightText rounded-lg"
            placeholder="Enter your password"
            type="password"
            id="password"
            onChange={handleChange}
          />
          <button className="bg-brightBlue text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
      {/* Right div */}
      <div className="hidden lg:block relative w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://img.freepik.com/premium-photo/robot-head-with-brain-it-blue-background_841014-1783.jpg"
          alt="Login Illustration"
        />
      </div>
    </div>
  );
}

export default SignIn;
