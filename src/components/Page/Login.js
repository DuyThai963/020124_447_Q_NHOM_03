import { Link } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Thêm logic xác thực đăng nhập
  };

  return (
    <div className="login">
      <div className="login__container">
        <h1>Đăng Nhập</h1>
        <form onSubmit={handleSubmit}>
          <h5>Username</h5>
          <input
            type="text"
            name="username"
            className="input-login-username"
            value={formData.username}
            onChange={handleChange}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            className="input-login-password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" className="login__signInButton">
            Đăng Nhập
          </button>
        </form>
        <Link
          to="/sign-up"
          className="login__registerButton"
          style={{ color: "rgb(48, 123, 244)" }}
        >
          Tạo tài khoản mới
        </Link>
      </div>
    </div>
  );
};

export default Login;
