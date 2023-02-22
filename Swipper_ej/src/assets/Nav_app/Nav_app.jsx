import React, { useState } from "react";
import { MenuData } from "../data/MenuData";
import "./Nav_app.css";
const Nav_app = () => {
  const [check, setCheck] = useState(false);

  return (
    <nav className="navbarItems">
      <h1 className="logo">
        React <i className="fab fa-react"></i>
      </h1>
      <div
        className="menu-icons"
        onClick={()=>setCheck(!check)}
      >
        <i className={check ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={check ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title} <i className={item.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav_app;
