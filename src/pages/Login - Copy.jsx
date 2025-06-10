import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { GoLock } from "react-icons/go";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let isValid = true;
      if (!email) {
        setEmailErr("Please type your Email");
        isValid = false;
      } else {
        setEmailErr("");
      }
      if (!password) {
        setPasswordErr("Please type your password");
        isValid = false;
      } else if (password.length < 8) {
        setPasswordErr("Password must be at least 8 characters");
        isValid = false;
      } else {
        setPasswordErr("");
      }
      if (isValid) {
        alert("Welcome");
      }
    };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-lg px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="flex items-center space-x-5 justify-center">
          <h2 className="text-4xl font-bold text-blue-400">Saynex</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mt-5">
          <div className="flex items-center justify-start gap-25">
            <label
            className="font-semibold text-sm text-gray-600 block"
            for="login"
          >
            E-mail
          </label>
          {emailErr && (
              <p className="text-red-500 text-sm">{emailErr}</p>
            )}
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full ">
            <BsPerson />
            <input
            onChange={(e) => {
                setEmail(e.target.value);
                setEmailErr("");
              }}
              className="pl-2 text-sm w-full outline-none"
              type="text"
              id="login"
              placeholder="Type your email address"
            />
          </div>
          <div className="flex items-center justify-start gap-17">
            <label
            className="font-semibold text-sm text-gray-600 pb-1 block"
            for="password"
          >
            Password
          </label>
          {passwordErr && (
              <p className="text-red-500 text-sm mt-1">{passwordErr}</p>
            )}
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full">
            <GoLock />
            <input
            onChange={(e) => {
                setPassword(e.target.value);
                setPasswordErr("");
              }}
              className="pl-2 text-sm w-full outline-none"
              type="password"
              id="password"
              placeholder="••••••••"
            />
            <MdOutlineRemoveRedEye />
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <label
            for="remember-me"
            className="text-sm text-gray-900 cursor-pointer gap-1 flex items-center"
          >
            <input type="checkbox" id="remember-me" />
            Remember me
          </label>
          <Link
            to="/forgotpassword"
            className="text-xs font-display font-semibold text-gray-500 hover:text-gray-600 cursor-pointer"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <button
            className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            type="submit"
          >
            Log in
          </button>
          <div className="flex justify-center w-full items-center">
            <button className="flex items-center justify-center gap-2 py-2 px-4 bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
              <img src="/google.png" alt="" className="w-5 " />
              <span className="text-lg text-white font-semibold ">
                Sign in with Google
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          <Link
            to="/signup"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or sign up
          </Link>
          <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
