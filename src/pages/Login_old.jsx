// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [emailErr, setEmailErr] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordErr, setPasswordErr] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let isValid = true;
//     if (!email) {
//       setEmailErr("Please type your Email");
//       isValid = false;
//     } else {
//       setEmailErr("");
//     }
//     if (!password) {
//       setPasswordErr("Please type your password");
//       isValid = false;
//     } else if (password.length < 8) {
//       setPasswordErr("Password must be at least 8 characters");
//       isValid = false;
//     } else {
//       setPasswordErr("");
//     }
//     if (isValid) {
//       alert("Welcome");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen ">
//       <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl px-8 py-10">
//         <div className="text-center mb-8">
//           <div className="inline-block bg-[#0275a6] text-white text-xl font-bold py-2 px-6 rounded-full mb-4">
//             Saynex
//           </div>
//           <h2 className="text-2xl font-semibold text-[#1a1a68]">
//             Welcome Back
//           </h2>
//           <p className="text-sm text-gray-500">
//             Login to your account to continue
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-xs font-bold text-black mb-1 translate-y-3 bg-white w-26 m-auto">
//               Email Address
//             </label>
//             <input
//               onChange={(e) => {
//                 setEmail(e.target.value);
//                 setEmailErr("");
//               }}
//               type="email"
//               placeholder="your@saynex.com"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {emailErr && (
//               <p className="text-red-500 text-sm mt-1">{emailErr}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-xs font-bold text-black mb-1 translate-y-3 bg-white w-26 m-auto">
//               Password
//             </label>
//             <input
//               onChange={(e) => {
//                 setPassword(e.target.value);
//                 setPasswordErr("");
//               }}
//               type="password"
//               placeholder="••••••••"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             {passwordErr && (
//               <p className="text-red-500 text-sm mt-1">{passwordErr}</p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-[#0275a6] to-[#025e87] text-white py-2 rounded-full font-semibold hover:opacity-90 transition duration-300"
//           >
//             Log in
//           </button>
//         </form>

//         <p className="text-sm text-center text-gray-500 mt-6">
//           Forgot password?{" "}
//           <Link to="/forgotpassword" className="text-[#0275a6] hover:underline">
//             Reset
//           </Link>
//         </p>
//         <p className="text-sm text-center text-gray-500 mt-6">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-[#0275a6] hover:underline">
//             Sign up
//           </Link>
//         </p>
//         <p className="flex flex-col text-sm text-center text-gray-500 mt-6">
//           <Link to='/home' className="text-[#0275a6] hover:underline">Home Page</Link>
//           <Link to='/resetpassword' className="text-[#0275a6] hover:underline">Change Password</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
