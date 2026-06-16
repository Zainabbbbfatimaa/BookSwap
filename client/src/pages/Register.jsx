import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
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
  "https://bookswap-9ry5.onrender.com/api/users/register",
  formData
);

      alert(res.data.message);
      window.location.href = "/login";

      // Save user locally
      localStorage.setItem(
        "bookswapUser",
        JSON.stringify(res.data.user)
      );

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      alert(
        error.response?.data?.message || "Registration failed."
      );
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    fontSize: "16px",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#2563eb",
            marginBottom: "30px",
            fontSize: "40px",
            fontWeight: "700",
          }}
        >
          👤 Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button
            type="submit"
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              border: "none",
              borderRadius: "10px",
              padding: "14px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Register
          </button>
        </form>
        <p
  style={{
    textAlign: "center",
    marginTop: "20px",
    color: "#666",
  }}
>
  Already have an account?{" "}
  <a
    href="/login"
    style={{
      color: "#2563eb",
      fontWeight: "600",
      textDecoration: "none",
    }}
  >
    Login
  </a>
</p>
      </div>
    </div>
  );
}

export default Register;