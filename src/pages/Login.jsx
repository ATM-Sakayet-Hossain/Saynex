import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { GoLock } from "react-icons/go";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { loggedUser } from "../../store/slices/authSlice";

const Login = () => {
  const userInfo = useSelector((state) => state.userData.user);
  const navigate = useNavigate();
  const disptch = useDispatch();
  const [isShow, setIsShow] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((res) => {
        if (!res.user.emailVerified) {
          toast.error("Please verify your Email!");
        } else {
          toast.success("Login Successfull");
          setTimeout(() => {
            disptch(loggedUser(res.user));
            navigate("/");
          }, 2000);
        }
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          toast.error("Please type a Valid Email!");
        }
        if (error.code === "auth/missing-password") {
          toast.error("Please type your Password!");
        }
        if (error.code === "auth/invalid-credential") {
          toast.error("Your Email/Password is Rong!");
        }
      });
  };

  if (userInfo) {
    return <Navigate to="/" />;
  }


  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer position="top-right" theme="light" />
      <div className="w-full max-w-lg px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div className="flex items-center space-x-5 justify-center">
          <h2 className="text-4xl font-bold text-blue-400">Saynex</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mt-5">
            <div className="flex items-center justify-start gap-25">
              <label
                className="font-semibold text-sm text-gray-600 block"
                htmlFor="login"
              >
                E-mail
              </label>
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full ">
              <BsPerson />
              <input
                onChange={(e) => {
                  setUserData((prev) => ({ ...prev, email: e.target.value }));
                }}
                className="pl-2 text-sm w-full outline-none"
                type="text"
                id="login"
                value={userData.email}
                placeholder="Type your email address"
              />
            </div>
            <div className="flex items-center justify-start gap-17">
              <label
                className="font-semibold text-sm text-gray-600 pb-1 block"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full">
              <GoLock />
              <input
                onChange={(e) =>
                  setUserData((Prev) => ({ ...Prev, password: e.target.value }))
                }
                className="pl-2 text-sm w-full outline-none"
                type={isShow ? "password" : "text"}
                id="password"
                value={userData.password}
                placeholder="••••••••"
              />
              {isShow ? (
                <IoEyeOffOutline onClick={() => setIsShow(false)} />
              ) : (
                <IoEyeOutline onClick={() => setIsShow(true)} />
              )}
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label
              htmlFor="remember-me"
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
