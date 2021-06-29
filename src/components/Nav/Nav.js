import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <React.Fragment>
      <div className="Navbar">
        <div
          onClick={onToggle}
          className={
            toggle
              ? "change"
              : "navbar1" && "navbar2" && "navbar3" && "NavbarInside"
          }
        >
          <div className="navBar1"></div>
          <div className="navBar2"></div>
          <div className="navBar3"></div>
        </div>
        {toggle ? (
          <React.Fragment>
            <div className="NavShow">
              <div className="Linkss">
                <Link to="/Home">Home </Link>
                <Link to="/About">About</Link>
                <Link to="/allwork">All Work</Link>
                <Link to="/Contact">Contact</Link>
              </div>
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
};
export default Nav;
