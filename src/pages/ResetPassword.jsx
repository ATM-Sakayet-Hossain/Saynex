import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Please fill in all fields");
      setMessage("");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setMessage("");
      return;
    }

    // এখানে API call বা Firebase resetPassword logic যাবে
    setError("");
    setMessage("Password has been reset successfully!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-semibold text-center text-[#1a1a68] mb-4">
          Reset Your Password
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-2">{error}</p>
        )}
        {message && (
          <p className="text-green-600 text-sm text-center mb-2">{message}</p>
        )}

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-black mb-1 translate-y-3 bg-white w-26 m-auto">
              New Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter new password"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-black mb-1 translate-y-3 bg-white w-26 m-auto">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-type your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0275a6] to-[#025e87] text-white py-2 rounded-full font-semibold hover:opacity-90 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
