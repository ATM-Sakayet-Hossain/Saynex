import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState("")
  // const [emailErr, setEmailErr] = useState("")
  // const [name, setName] = useState("")
  // const [nameErr, setNameErr] = useState("")
  // const [password, setPassword] = useState("")
  // const [passwordErr, setPasswordErr] = useState("")

  // const handelSubmit = (e) => {
    
  //   e.prevantDefult();
  //   let isValid = true;
  //   if (!email) {
  //     setEmailErr("Please type your name");
  //     isValid = false;
  //   } else {
  //     setEmailErr("")
  //   }
  //   if (!name) {
  //     setNameErr("Please type your name");
  //     isValid = false;
  //   } else {
  //     setNameErr("")
  //   }
  //   if (!name) {
  //     setPasswordErr("Please type your name");
  //     isValid = false;
  //   } else {
  //     setPasswordErr("")
  //   }
  //   if (isValid) {
  //     alert("Submitted");
  //   }
  // }



  return (
    <div className="flex items-center justify-center min-h-screen from-[#e0f7ff] to-[#ffffff]">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl px-8 py-10">
        <div className="text-center mb-8">
          <div className="inline-block bg-[#0275a6] text-white text-xl font-bold py-2 px-6 rounded-full mb-4">
            Saynex
          </div>
          <h2 className="text-2xl font-semibold text-[#1a1a68]">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-500">
            Login to your account to continue
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-black mb-1 translate-y-3 bg-white w-26 m-auto">
              Email Address
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-black mb-1 translate-y-3 bg-white w-26 m-auto">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0275a6] to-[#025e87] text-white py-2 rounded-full font-semibold hover:opacity-90 transition duration-300"
          >
            Log in
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?
          <Link to="/signup" className="text-[#0275a6] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;