import React from "react";
import logo from "../Images/live-chat.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }

  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <span className="welcome-badge">Live now</span>
      <b className="welcome-heading">Hi, {userData.data.name}</b>
      <p className="welcome-copy">
        Dive into your chats, discover active people, and keep every message
        flowing in one elegant space.
      </p>
    </div>
  );
}

export default Welcome;
