import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const ForgotPassword = () => {
  const userInfo = useSelector((state) => state.userData.user);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
  });
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, userData.email)
      .then(() => {
        toast.success("Sent reset link email!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        if (error.code === "auth/missing-email") {
          toast.error("Please enter your email!");
        }
        if (error.code === "auth/invalid-email") {
          toast.error("Please enter your Valid Email!");
        }
      });
  };
  if (userInfo) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br px-4">
      <ToastContainer position="top-right" theme="light" />
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl px-8 py-10">
        <h2 className="text-2xl font-bold text-center text-[#1a1a68] mb-6">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-600 text-center mb-4">
          Enter your email and we'll send you a reset link. 
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="input"
              className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
            >
              Email Address:
            </label>
            <input
              id="email"
              type="email"
              value={userData.email}
              onChange={(e) => {
                setUserData((user) => ({ ...user, email: e.target.value }));
              }}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0275a6] to-[#025e87] text-white py-2 rounded-full font-semibold hover:opacity-90 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Remember your password?
          <Link to="/login" className="text-[#0275a6] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
