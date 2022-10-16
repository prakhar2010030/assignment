import React from "react";
import "./framework.css";
import AI from "../../assets/Ai.svg";
import { framework } from "../../Constants/constants";
const FrameWork = () => {
  return (
    <>
      <div className="frameworkSection">
        <h1 className="mainHeading">
          AI <span className="highlight">framework</span>
        </h1>
        <div className="frameworkContent">
          <div className="text">
            {framework.map((description) => (
              <div className="innerText">
                <h1 className="heading">{description.title}</h1>
                <p className="textContent">{description.Description}</p>
              </div>
            ))}
          </div>
          <img src={AI} alt="AI" className="Ai"  />
        </div>
      </div>
      <div className="footer"></div>
    </>
  );
};

export default FrameWork;
