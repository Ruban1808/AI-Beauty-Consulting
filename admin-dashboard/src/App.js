import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BeautyConsult from "./pages/BeautyConsult";
import VirtualTryOn from "./pages/VirtualTryOn";
import AdminLogin from "./pages/AdminLogin";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Chatbot from "./components/Chatbot";
import "./App.css";

// Protected Route for Admin
const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("adminToken");
  return isAuthenticated ? element : <Navigate to="/" />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Admin Login Route */}
          <Route path="/" element={<AdminLogin />} />
          
          {/* Protected Routes (Require Authentication) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                element={
                  <>
                    <Sidebar />
                    <div className="main-content">
                      <Navbar />
                      <Dashboard />
                    </div>
                    <Chatbot />
                  </>
                }
              />
            }
          />
          <Route
            path="/beauty-consult"
            element={
              <ProtectedRoute
                element={
                  <>
                    <Sidebar />
                    <div className="main-content">
                      <Navbar />
                      <BeautyConsult />
                    </div>
                    <Chatbot />
                  </>
                }
              />
            }
          />
          <Route
            path="/vr-tryon"
            element={
              <ProtectedRoute
                element={
                  <>
                    <Sidebar />
                    <div className="main-content">
                      <Navbar />
                      <VirtualTryOn />
                    </div>
                    <Chatbot />
                  </>
                }
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
