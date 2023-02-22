import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glasses from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I am</span>
          <span>Name Last</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
            dignissimos eligendi est reprehenderit dolore cum .
          </span>
        </div>
        <button className="button i-button">Hire me!</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glasses}
          alt=""
        />
        <motion.div 
        initial = {{top: '-4%', left: '74%'}}
        whileInView = {{left: '68%'}}
        transition = {transition}
        className = 'floating-div'
        style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="web" txt2="Developer" />
        </motion.div>

        <div style={{ top: "18rem", left: "0rem" }} className = 'floating-div'>
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </div>

        {/* blur divs */}
        <div
          className="blur"
          style={{
            background: "rgb(238 210 255)",
          }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
