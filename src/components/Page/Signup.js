import { Link } from "react-router-dom";
import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Thêm logic xác thực hoặc gửi dữ liệu
    console.log(formData);
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <h1>Đăng Ký</h1>
        <form onSubmit={handleSubmit}>
          <h5>Username</h5>
          <input
            type="text"
            name="username"
            className="input-signup-username"
            value={formData.username}
            onChange={handleChange}
          />
          <h5>Email</h5>
          <input
            type="text"
            name="email"
            className="input-signup-username"
            value={formData.email}
            onChange={handleChange}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            className="input-signup-password"
            value={formData.password}
            onChange={handleChange}
          />
          <h5>Confirm Password</h5>
          <input
            type="password"
            name="confirmPassword"
            className="input-signup-password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit" className="signup__signInButton">
            Đăng Ký
          </button>
        </form>
        <Link
          to="/login"
          className="signup__registerButton"
          style={{ color: "rgb(48, 123, 244)" }}
        >
          Đã có tài khoản?
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
