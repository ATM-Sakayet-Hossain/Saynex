import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErr("Please enter your email");
      setSuccessMsg("");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailErr("Please enter a valid email");
      setSuccessMsg("");
    } else {
      setEmailErr("");
      setSuccessMsg("If this email is registered, a reset link has been sent.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl px-8 py-10">
        <h2 className="text-2xl font-bold text-center text-[#1a1a68] mb-6">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Enter your email and we'll send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-black mb-1 translate-y-3 bg-white w-26 m-auto">
              Email Address
            </label>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailErr("");
              }}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {emailErr && (
              <p className="text-red-500 text-sm mt-1">{emailErr}</p>
            )}
          </div>

          <button
            type="submit"
            path="/resetpassword"
            className="w-full bg-gradient-to-r from-[#0275a6] to-[#025e87] text-white py-2 rounded-full font-semibold hover:opacity-90 transition duration-300"
          >
            Send Reset Link
          </button>

          {successMsg && (
            <p className="text-green-600 text-sm text-center mt-4">
              {successMsg}
            </p>
          )}
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Remember your password?{" "}
          <Link to="/" className="text-[#0275a6] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
