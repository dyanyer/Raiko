import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Sidebar from "./components/Sidebar";
import Transaction from "./pages/Transactions/Transaction";
import Users from "./pages/Users/Users";
import Reports from "./pages/Reports/Reports";
import Feedback from "./pages/Feedbacks/Feedback";
import Layout from "./layouts/Layout";

// Protected route wrapper for authenticated users
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />; // Redirect to login if no user
};

// Main layout that includes the Sidebar and main content area
// const Layout = ({ children }) => {
//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar with fixed width */}
//       <Sidebar />
//       {/* Main content area with padding to avoid overlap with sidebar */}
//       <div className="flex-grow p-6 pl-72">
//         {" "}
//         {/* 72px is the width of the sidebar */}
//         {children}
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Login route, no sidebar here */}
          <Route path="/login" element={<Login />} />

          {/* Admin Dashboard Route with Sidebar on the left */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout>
                  <AdminDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactions"
            element={
              <ProtectedRoute>
                <Layout>
                  <Transaction />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Layout>
                  <Users />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/Reports"
            element={
              <ProtectedRoute>
                <Layout>
                  <Reports />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/Feedbacks"
            element={
              <ProtectedRoute>
                <Layout>
                  <Feedback />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/Settings"
            element={
              <ProtectedRoute>
                <Layout>
                  <AdminDashboard />
                </Layout>
              </ProtectedRoute>
            }
          />

          {/* Default catch-all route (redirects to login) */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
