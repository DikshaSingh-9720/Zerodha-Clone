import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Menu.css";

export const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setMenuOpen(false); // Close menu on link click
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(!!token);

    if (!token) {
      toast.error("Please login first!");
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    toast.success("Logged out successfully!");
   setTimeout(() => {
    window.location.href = "/login";
  }, 1000); // 1-second delay
  }

  return (
    <>
      <ToastContainer />
      <div className="menu-container">
        <div className="menu-header">
          <img src="logo (3).png" alt="logo" style={{ width: "50px" }} />
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>

        <ul className={`menu-list ${menuOpen ? "open" : ""}`}>
          {["Dashboards", "Orders", "Holdings", "Positions", "Funds", "Apps", "Logout"].map((item, index) => (
            <li key={item}>
              {item === "Logout" ? (
                <p
                  onClick={handleLogout}
                  className="menu"
                  style={{ cursor: "pointer", margin: 0 }}
                >
                  Logout
                </p>
              ) : (
                <Link
                  to={index === 0 ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => handleMenuClick(index)}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p className={selectedMenu === index ? "menu selected" : "menu"}>
                    {item}
                  </p>
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="profile" onClick={() => setMenuOpen(false)}>
          <div className="avatar">ZU</div>
        </div>
      </div>
    </>
  );
};
