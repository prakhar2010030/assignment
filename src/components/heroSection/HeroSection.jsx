import React from "react";
import "./heroSection.css";
import logo from "../../assets/logo.svg";
import email from "../../assets/Email.svg";
import Button from "@mui/material/Button";
import FrameWork from "../frameWorkSection/FrameWork";

const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div className="logoSection">
          <img src={logo} alt="logo" height={50} />
          <Button variant="contained" className="btn">
            Talk To Us
          </Button>
        </div>
        <div className="emailSection">
          <div>
            <h1>Grow your Business</h1>
            <h1>with Email Automation</h1>
          </div>
          <img src={email} alt="" className="emailImage"/>
          <Button variant="contained" className="btn">
            Get Started
          </Button>
        </div>

        <FrameWork />
      </div>
    </>
  );
};

export default HeroSection;
