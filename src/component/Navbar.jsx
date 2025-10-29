import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { useEffect } from "react";
 useEffect(() => {
document.title = "Flowers Home"} , [document.body])
const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 👈 حالة لتحديد لو الشاشة موبايل

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser && savedUser.username) {
      setCurrentUser(savedUser.username);
    }

    // ✅ نتابع تغير حجم الشاشة
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/login");
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#FFF0F5",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/landing"
          style={{ textDecoration: "none", color: "#C2185B" }}
        >
          Flowers Home
        </Link>
      </h1>

      {/* 👇 يظهر فقط في الموبايل */}
      {isMobile && (
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <span style={{ display: "block", width: "25px", height: "3px", backgroundColor: "#C2185B" }}></span>
          <span style={{ display: "block", width: "25px", height: "3px", backgroundColor: "#C2185B" }}></span>
          <span style={{ display: "block", width: "25px", height: "3px", backgroundColor: "#C2185B" }}></span>
        </div>
      )}

      <ul
        className={menuOpen ? "show" : ""}
        style={{
          display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/home"
            style={{ textDecoration: "none", color: "#C2185B", fontWeight: "bold" }}
            onMouseEnter={(e) => (e.target.style.color = "#D81B60")}
            onMouseLeave={(e) => (e.target.style.color = "#C2185B")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        {currentUser ? (
          <>
            <li style={{ color: "#C2185B", fontWeight: "bold" }}>👋 Hello, {currentUser}</li>
            <li>
              <button
                onClick={handleLogout}
                style={{
                  background: "transparent",
                  border: "1px solid #C2185B",
                  color: "#C2185B",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#F8BBD0")}
                onMouseLeave={(e) => (e.target.style.background = "transparent")}
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#C2185B" }}
                onMouseEnter={(e) => (e.target.style.color = "#D81B60")}
                onMouseLeave={(e) => (e.target.style.color = "#C2185B")}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "#C2185B" }}
                onMouseEnter={(e) => (e.target.style.color = "#D81B60")}
                onMouseLeave={(e) => (e.target.style.color = "#C2185B")}
                onClick={() => setMenuOpen(false)}
              >
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

