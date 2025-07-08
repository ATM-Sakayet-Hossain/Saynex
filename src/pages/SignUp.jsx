import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userData.user);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const auth = getAuth();
  const db = getDatabase();

  const handleSubmit = (e) => {
    // console.log(userData);
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: userData.fullName,
          photoURL: "/default.webp",
        })
          .then(() => {
            sendEmailVerification(auth.currentUser).then(() => {
              set(ref(db, "users/" + auth.currentUser.uid), {
                username: auth.currentUser.displayName,
                email: auth.currentUser.email,
                profile_picture: auth.currentUser.photoURL,
              });
              toast.success(
                "Registration Successfull, Please verify your Email"
              );
              setTimeout(() => {
                navigate("/login");
              }, 1000);
            });
          })
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          toast.error("Please type a Valid Email!");
        }
        if (error.code === "auth/missing-email") {
          toast.error("Please type your Email!");
        }
        if (error.code === "auth/missing-password") {
          toast.error("Please type your Password!");
        }
        if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters!");
        }
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already exist!");
        }
      });
  };
  if (userInfo) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex items-center justify-center min-h-screen from-[#e0f7ff] to-[#ffffff]">
      <ToastContainer position="top-right" theme="light" />
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
          <div className="input flex flex-col static">
            <label
              htmlFor="input"
              className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
            >
              Email Address:
            </label>
            <input
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              placeholder="you@saynex.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="input flex flex-col static">
            <label
              htmlFor="input"
              className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
            >
              Full Name:
            </label>
            <input
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  fullName: e.target.value,
                }))
              }
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="input flex flex-col static">
            <label
              htmlFor="input"
              className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
            >
              Password:
            </label>
            <input
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0275a6] to-[#025e87] text-white py-2 rounded-full font-semibold hover:opacity-90 transition duration-300"
          >
            Sign up
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?
          <Link to="/login" className="text-[#0275a6] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
