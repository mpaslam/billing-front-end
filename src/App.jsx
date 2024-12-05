import React, { useState } from "react";
import "./App.css";
import { FaBars, FaHome, FaChartBar, FaBox, FaSignOutAlt } from "react-icons/fa";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { name: "Start Sell", icon: <FaHome />, action: () => alert("Start Sell clicked!") },
    { name: "Order Report", icon: <FaChartBar />, action: () => alert("Order Report clicked!") },
    { name: "Product Report", icon: <FaBox />, action: () => alert("Product Report clicked!") },
    { name: "Add Product", icon: <FaBox />, action: () => alert("Add Product clicked!") },
    { name: "Logout", icon: <FaSignOutAlt />, action: () => alert("Logout clicked!") },
  ];

  return (
    <div className="dashboard">
      <div className={`sidebar ${isSidebarOpen ? "open" : "collapsed"}`}>
        {isSidebarOpen ? (
          <h2>Billing System</h2>
        ) : (
          <img
            src="https://via.placeholder.com/50" // Replace with your company logo URL
            alt="Company Logo"
            className="company-logo"
          />
        )}
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} onClick={item.action}>
              {item.icon}
              {isSidebarOpen && <span>{item.name}</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
          <h1>Admin Dashboard</h1>
          {/* <div className="user-info">Kaushal Kishore</div> */}
        </header>
        <div className="content">
          {/* <div className="buttons">
            {menuItems.map((item, index) => (
              <button key={index} className="dashboard-button" onClick={item.action}>
                {item.icon} {item.name}
              </button>
            ))}
          </div> */}
          <div className="image-section">
            <img
              src="https://cdn.pixabay.com/photo/2022/09/18/07/41/logo-7462411_1280.png" // Replace with your image URL
              alt="Dashboard Illustration"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
