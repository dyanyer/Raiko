import { useState } from "react";
import api from "../utils/axios";
import { useAuth } from "../contexts/AuthContext";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post("/login", { email, password });
      const { token } = response.data;

      // Call the login function from AuthContext
      login(token, { email });
      setLoading(false);
      return { success: true };
    } catch (err) {
      setError("Invalid credentials. Please try again.");
      setLoading(false);
      return { success: false };
    }
  };

  return { handleLogin, error, loading };
};

export default useLogin;
