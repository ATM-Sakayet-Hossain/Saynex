// Profile.jsx
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state.userData.user);
  console.log("userData in Profile:", userData);
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <img
          src={userData?.photoURL || "/Profile.jpg"}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-400 shadow mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-blue-700 mb-1">
          {userData?.displayName || "User Name"}
        </h2>
        <div className="w-full flex flex-col gap-2 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Email:</span>
            <span className="font-medium">{userData?.email || "User Email"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone:</span>
            <span className="font-medium">{userData?.phoneNumber || "+880 0961300000"}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">CreatedAt:</span>
            <span className="font-medium">{userData?.createdAt || "null"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
