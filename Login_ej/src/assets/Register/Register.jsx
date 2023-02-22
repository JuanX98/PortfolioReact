import React, { useState } from "react";
import "../Login/Login.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("email");
  };
  return (
    <div className="container-cont">
      <div className="auth-form-container">
        <form onSubmit={handleSubmit} className = "register-form">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            placeholder="pedro lopez perez"
            id="name"
            name="name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="email@email.com"
            id="email"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <input
            value={pass}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          />

          <button type="submit">Log In</button>
        </form>
        <button className="link-btn">Login Here</button>
      </div>
    </div>
  );
};

export default Register;
