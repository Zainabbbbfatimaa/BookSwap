import { useState } from "react";
import axios from "axios";
import "../styles/forms.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      alert(res.data.message);

      localStorage.setItem(
        "bookswapUser",
        JSON.stringify(res.data.user)
      );

      window.location.href = "/";
    } catch (error) {
      alert(
        error.response?.data?.message || "Login failed."
      );
    }
  };

  return (
    <div className="add-book-container">
        <div className="form-card">
        <h1>🔐 Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>
        <p
  style={{
    textAlign: "center",
    marginTop: "20px",
    color: "#666",
  }}
>
  Don't have an account?{" "}
  <a
    href="/register"
    style={{
      color: "#2563eb",
      fontWeight: "600",
      textDecoration: "none",
    }}
  >
    Register
  </a>
</p>
      </div>
    </div>
  );
}

export default Login;