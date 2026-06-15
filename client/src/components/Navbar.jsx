import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import "../styles/navbar.css";

function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("bookswapUser");

    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          <FaBookOpen className="logo-icon" />
          <span>BookSwap</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/browse">Browse</Link>
          <Link to="/add-book">List Book</Link>
          <Link to="/my-books">My Books</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/about">About</Link>
          {!currentUser && <Link to="/register">Register</Link>}
      

          {currentUser && (
  <>
    <span
      style={{
  marginLeft: "18px",
  padding: "8px 14px",
  borderRadius: "30px",
  background: "linear-gradient(90deg, #dbeafe, #eff6ff)",
  color: "#2563eb",
  fontWeight: "700",
  fontSize: "0.95rem",
  boxShadow: "0 4px 12px rgba(37,99,235,0.1)",
}}
    >
      Hi, {currentUser.fullName.split(" ")[0]} 👋
    </span>

    <button
  onClick={() => {
  const confirmLogout = window.confirm(
    "Are you sure you want to log out?"
  );

  if (confirmLogout) {
    localStorage.removeItem("bookswapUser");
    window.location.href = "/register";
  }
}}
  style={{
    background: "none",
    border: "none",
    color: "#ef4444",
    fontWeight: "600",
    cursor: "pointer",
    marginLeft: "12px",
    fontSize: "16px",
  }}
>
  Logout
</button>

  </>
)}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;