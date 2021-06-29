import React from "react";
import classes from "./Work.module.css";
import { Link } from "react-router-dom";
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
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/651d2286-2b49-43a0-94f6-e77b6e093e4e/inquiyable.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210628T155207Z&X-Amz-Expires=86400&X-Amz-Signature=960e3e4711fab930a2c349264227c15ced5bedee3d30364b17f8225dfe7ff955&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22inquiyable.png%22"></img>
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
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/47ebe6b7-7023-49c9-8d40-f880f06b1d53/Weather.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210628T154354Z&X-Amz-Expires=86400&X-Amz-Signature=d9870de153a654bb6741c63f15832cc2182f28d977e903cf721c30e7ddc323ce&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Weather.png%22"></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Work;
