import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { loggedUser } from "../../store/slices/authSlice";
import { getDatabase, ref, update } from "firebase/database";

const Profile = () => {
  const auth = getAuth();
  const db = getDatabase();
  const userData = useSelector((state) => state.userData.user);
  const [isEdit, setIsEdit] = useState(false);
  const disptch = useDispatch();
  const [editData, setEditData] = useState({
    photoURL: "",
    displayName: "",
  });

  const handelupdate = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: editData.displayName || userData.displayName,
      photoURL: editData.photoURL || userData.photoURL,
    })
      .then(() => {
        // Profile updated successfully!
        disptch(loggedUser(auth.currentUser));
        update(ref(db, "users/" + userData.uid), {
          username: editData.displayName || userData.displayName,
          profile_picture: editData.photoURL || userData.photoURL,
          
        });
        setIsEdit(false);
        window.location.reload();
      })
      .catch((error) => {
        // An error occurred
        toast.error(error);
      });
  };
  window.addEventListener("mousedown", (e) => {
    if (isEdit && !e.target.closest(".bg-white")) {
      setIsEdit(false);
    }
  });
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
      <ToastContainer position="top-right" theme="light" />
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
            <span className="font-medium">
              {userData?.email || "User Email"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Phone:</span>
            <span className="font-medium">
              {userData?.phoneNumber || "+880 0961300000"}
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={() => setIsEdit(true)}
            className="text-center py-3 px-6 text-black hover:text-white hover:bg-blue-400 text-xl font-semibold font-workSans rounded-sm gap-3 transition-all cursor-pointer"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div>
        {isEdit && (
          <div className="fixed inset-0 bg-[#0000ff72] flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex flex-col items-center mb-4">
                <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
                <img
                  src={userData?.photoURL || "/Profile.jpg"}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-blue-400 shadow mb-4 object-cover"
                />
              </div>
              <div className="input flex flex-col static">
                <label
                  htmlFor="input"
                  className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                >
                  Profile Picture URL:
                </label>
                <input
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      photoURL: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="https://example.com/profile.jpg"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="input flex flex-col static mb-4">
                <label
                  htmlFor="input"
                  className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
                >
                  Update Name:
                </label>
                <input
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      displayName: e.target.value,
                    }))
                  }
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex gap-2 justify-between">
                <button
                  onClick={handelupdate}
                  className="w-full bg-green-400 text-center py-3 px-6 text-black hover:text-white hover:bg-blue-400 text-xl font-semibold font-workSans rounded-sm gap-3 transition-all cursor-pointer"
                >
                  Update
                </button>
                <button
                  onClick={() => setIsEdit(false)}
                  className="w-full bg-red-400 text-center py-3 px-6 text-black hover:text-white hover:bg-blue-400 text-xl font-semibold font-workSans rounded-sm gap-3 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
