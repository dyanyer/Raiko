import React from "react";
import Mainlogo from "../../components/Mainlogo";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-accent border-white border p-8 rounded-2xl shadow-md shadow-white pb-12">
        <div className="text-center mb-8">
          <Mainlogo />
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-white font-bold"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-4 border-2 text-white border-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-b-cyan-200 transition duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-white font-bold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-4 border-2 text-white border-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-b-cyan-200 transition duration-200"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <input
                id="remember"
                type="checkbox"
                className="w-5 h-5 border-2 border-cyan-500 rounded-full bg-gray-50 focus:ring-2 focus:ring-cyan-500"
              />
              <label htmlFor="remember" className="text-sm text-white">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="text-sm text-cyan-600 hover:underline font-semibold"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-lightBlue text-white rounded-lg font-bold text-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyn-300 transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
