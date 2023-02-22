import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("email");
  };

  return (
    <div className="container-cont">
      <div className="auth-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="email@email.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />
          <button type="submit">Log In</button>
        </form>
        <button className="link-btn">ADon't have an account? Register here</button>
      </div>
    </div>
  );
};

export default Login;
