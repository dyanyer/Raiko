import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api";
import Mainlogo from "../../components/Mainlogo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", { email, password });
      localStorage.setItem("token", response.data.access_token);
      navigate("/dashboard"); // Redirect after successful login
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-accent border-white border p-8 rounded-2xl shadow-md shadow-white pb-12">
        <div className="text-center">
          <Mainlogo />
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-white font-bold"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-4 border-2 text-white border-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-b-cyan-200 transition duration-200"
              required
            />
          </div>

          {error && <div className="text-red-500">{error}</div>}

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
