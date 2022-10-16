import React from "react";
import "./navbar.css";
import { Nav } from "../../Constants/constants";
const Navbar = () => {
  return (
    <nav className="navbar">
      {Nav.map((item) => (
        <>
          <div  className="navItem">
            <item.icon />
            <span>{item.title}</span>
          </div>
          {item.title === "Docs" && (
            <span
              style={{
                height: "20px",
                borderRight: " 2px solid #363A44",
              }}
            >
              {" "}
            </span>
          )}
        </>
      ))}
    </nav>
  );
};

export default Navbar;
