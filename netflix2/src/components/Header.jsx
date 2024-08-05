import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <div className="container py-0 px-8 flex items-center justify-between absolute w-screen">
      <div className="logo">
        <img src={logo} alt="logo" className="h-20" />
      </div>
      <button
        onClick={() => navigate(props.login ? "/login" : "/signup")}
        className="py-2 px-4 bg-[#e50914] border-none text-white cursor-pointer rounded font-bold text-base"
      >
        {props.login ? "Log In" : "Sign in"}
      </button>
    </div>
  );
};

export default Header;
