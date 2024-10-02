import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Sign-Up Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        {/* Centered YourChoice */}
        <div className="text-center mb-8">
          <p className="text-3xl font-thin text-gray-500 mb-2">
            Make your account on
          </p>
          <div className="border rounded bg-slate-300">
            <span className="text-5xl font-bold">Your</span>
            <span className="text-5xl font-bold text-blue-400"> Choice</span>
          </div>
        </div>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="First Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded"
        >
          Sign Up
        </button>

        {/* Sign In Link */}
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
