import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import { FaBars, FaHome, FaChartBar, FaBox, FaSignOutAlt } from "react-icons/fa";
import { BsDash } from "react-icons/bs";
import { GrSystem } from "react-icons/gr";

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate authentication (replace with real logic)
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", justifyContent: "center" }}>
      <h1>Login</h1>
      <input type="text" placeholder="Username" style={{ marginBottom: "10px", padding: "10px" }} />
      <input type="password" placeholder="Password" style={{ marginBottom: "20px", padding: "10px" }} />
      <button onClick={handleLogin} style={{ padding: "10px 20px" }}>Login</button>
    </div>
  );
}

function App({ isAuthenticated, setIsAuthenticated }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  const menuItems = [
    { name: "Dashboard", icon: <GrSystem />, route: "/dashboard" },
    { name: "Start Sell", icon: <FaHome />, route: "/start-sell" },
    { name: "Order Report", icon: <FaChartBar />, route: "/order-report" },
    { name: "Product Report", icon: <FaBox />, route: "/product-report" },
    { name: "Add Product", icon: <FaBox />, route: "/add-product" },
    { name: "Logout", icon: <FaSignOutAlt />, route: "/logout", action: handleLogout },
  ];

  if (!isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="dashboard">
      <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
        {isSidebarOpen ? <h2>Billing System</h2> : <img src="https://via.placeholder.com/50" alt="Company Logo" className="company-logo" />}
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} onClick={() => item.action ? item.action() : navigate(item.route)}>
              {item.icon}
              {isSidebarOpen && <span>{item.name}</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        <header>
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <h1>Admin Dashboard</h1>
        </header>
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/start-sell" element={<StartSell />} />
            <Route path="/order-report" element={<OrderReport />} />
            <Route path="/product-report" element={<ProductReport />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", backgroundColor: "darkcyan" }}>
      Welcome to the Admin Dashboard
    </div>
  );
}

function StartSell() {
  return <div style={{ backgroundColor: "#f0f8ff", padding: "20px", height: "80vh" }}>Start Sell Page</div>;
}

function OrderReport() {
  return <div style={{ backgroundColor: "#b0c4de", padding: "20px", height: "80vh" }}>Order Report Page</div>;
}

function ProductReport() {
  return <div style={{ backgroundColor: "#add8e6", padding: "20px", height: "80vh" }}>Product Report Page</div>;
}

function AddProduct() {
  return <div style={{ backgroundColor: "orange", padding: "20px", height: "80vh" }}>Add Product Page</div>;
}

function Logout() {
  return <div style={{ backgroundColor: "darkred", padding: "20px", height: "80vh" }}>You have been logged out!</div>;
}

export default function Root() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/*" element={<App isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
}
