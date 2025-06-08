import React from "react";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-xl text-gray-700">Page Not Found</p>
        <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
