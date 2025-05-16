import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("");
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState("");
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
    if (!name) {
      setNameErr("Please type your name");
      isValid = false;
    } else {
      setNameErr("");
    }
    if (!password) {
      setPasswordErr("Please type your password");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordErr("Password must be at least 8 characters");
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordErr("Password must contain at least one uppercase letter");
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      setPasswordErr("Password must contain at least one number");
      isValid = false;
    } else {
      setPasswordErr("");
    }
    if (isValid) {
      alert("Submitted");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen from-[#e0f7ff] to-[#ffffff]">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl px-8 py-10">
        <div className=" text-center mb-8">
          <div className="inline-block bg-[#0275a6] text-white text-xl font-bold py-2 px-6 rounded-full mb-4">
            Saynex
          </div>
          <h2 className="text-2xl font-semibold text-[#1a1a68]">
            Sign up in seconds and start chatting!
          </h2>
          <p className="text-sm text-gray-500">
            It's free to join — enjoy chatting instantly!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-black mb-1 translate-y-3 bg-white w-26 m-auto">
              Email Address
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailErr("");
              }}
              type="email"
              placeholder="you@saynex.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {emailErr && <p className="text-red-500 text-sm">{emailErr}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-black mb-1 translate-y-3 bg-white w-26 m-auto">
              Full Name
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
                setNameErr("");
              }}
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {nameErr && <p className="text-red-500 text-sm">{nameErr}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-black mb-1 translate-y-3 bg-white w-26 m-auto">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordErr("");
              }}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {passwordErr && (
              <p className="text-red-500 text-sm">{passwordErr}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0275a6] to-[#025e87] text-white py-2 rounded-full font-semibold hover:opacity-90 transition duration-300"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/" className="text-[#0275a6] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp
