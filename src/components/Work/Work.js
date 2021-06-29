import React from "react";
import classes from "./Work.module.css";
import { Link } from "react-router-dom";
import Inquizable from "../../images/inquizable.png";
import Weather from "../../images/WEATHER.png";
const Work = () => {
  return (
    <React.Fragment>
      <div className={classes.Work}>
        <div className={classes.Container}>
          <div className={classes.Title}>
            <h1>Recent work</h1>
          </div>
          <div className={classes.InsideWork}>
            <div>
              <h1>Inquizable</h1>
              <p>
                Test your knowledge Compete with your friends in a fun learning
                quiz game.
              </p>
              <Link to="/allwork/14">
                <p style={{ fontFamily: "bold" }}>
                  <span>&#10230;</span> Discover more
                </p>
              </Link>
            </div>
            <div>
              <img src={Inquizable}></img>
            </div>
          </div>

          <div className={classes.InsideWork}>
            <div>
              <h1>The Weather App</h1>
              <p>
                The Weather Forecast provide a national and local weather
                forecast for cities.
              </p>
              <Link to="/allwork/13">
                <p style={{ fontFamily: "bold" }}>
                  <span>&#10230;</span> Discover more
                </p>
              </Link>
            </div>
            <div>
              <img src={Weather}></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Work;
