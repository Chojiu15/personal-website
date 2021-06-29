/*Import */
import React, { useRef, useContext } from "react";
import classes from "./Showcase.module.css";
import { ScrollContext } from "../Context/Scroll";
import Nav from "../Nav/Nav";
/*App*/
const Showcase = () => {
  const { myRef } = useContext(ScrollContext);
  const ScrollTo = () => {
    window.scrollTo({
      behavior: "smooth",
      top: myRef.current.offsetTop + 1025,
    });
  };

  return (
    <React.Fragment>
      <div className={classes.Showcase}>
        <Nav />
        <div className={classes.Name}>
          <div className={classes.Container}>
            <div>
              <h1>Joey Ammar</h1>
              <p>Full Stack Web Developer</p>
            </div>
          </div>
        </div>
        <div onClick={ScrollTo} ref={myRef} className={classes.Empty}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 172 172"
              style={{ fill: "#000000" }}
            >
              <g
                fill="none"
                fillrule="nonzero"
                stroke="none"
                strokewidth="1"
                strokelinecap="butt"
                strokelinejoin="miter"
                strokemiterlimit="10"
                strokedasharray=""
                strokedashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ "mix-blend-mode": "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                  <path d="M78.83333,7.16667v129h-21.5l28.66667,28.66667l28.66667,-28.66667h-21.5v-129z"></path>
                </g>
              </g>
            </svg>{" "}
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Showcase;
