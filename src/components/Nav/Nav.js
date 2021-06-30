import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

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
                <Link
                  onClick={() => {
                    setToggle(false);
                  }}
                  to="/Home"
                >
                  Home
                </Link>
                <Link
                  onClick={() => {
                    setToggle(false);
                  }}
                  to="/About"
                >
                  About
                </Link>
                <Link
                  onClick={() => {
                    setToggle(false);
                  }}
                  to="/allwork"
                >
                  All Work
                </Link>
                <Link
                  onClick={() => {
                    setToggle(false);
                  }}
                  to="/Contact"
                >
                  Contact
                </Link>
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
