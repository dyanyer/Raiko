import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
