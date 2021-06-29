import React from "react";
import classes from "./More.module.css";
import { Link } from "react-router-dom";

const MoreWork = () => {
  return (
    <React.Fragment>
      <div className={classes.MoreWork}>
        <div className={classes.Container}>
          <div className={classes.Title}>
            <h1>More Work</h1>
          </div>
          <div className={classes.MoreWorkInside}>
            <div>
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2f386663-94b3-443c-ae9d-218feab49817/Big_Sur_Safari_Mockup_%28Drag_and_drop_Update%29_%28Community%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210628T095134Z&X-Amz-Expires=86400&X-Amz-Signature=e6714336fe89235a5ce1c41b807f92d4bbbdf88aec2134ef8ddd25d1711a943e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Big_Sur_Safari_Mockup_%28Drag_and_drop_Update%29_%28Community%29.png%22"></img>
              <h1>Hacker news</h1>
              <p>
                Hacker News is a social news website focusing on computer
                science and entrepreneurship.
              </p>
            </div>
            <div>
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7e7c5e5-06e9-4dd4-bda8-4c9acb78d7cf/SpaceX.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210628T151204Z&X-Amz-Expires=86400&X-Amz-Signature=7b7ca2eaea2da094cf878b6bc25bba0fceb58db65bfe62e7c260a178455af671&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22SpaceX.png%22"></img>
              <h1>Space X</h1>
              <p>
                Space Exploration Technologies Corp. is an American aerospace
                manufacturer.
              </p>
            </div>
            <div>
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0604d876-78a6-44bf-a5b8-a4514e053c1b/MYBURGER.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210628T151636Z&X-Amz-Expires=86400&X-Amz-Signature=380ca3e041bb87c73c1ec83db259ad9099d9dc989a0e7335d3296a9f644bbb52&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22MYBURGER.png%22"></img>
              <h1>My Burger App</h1>
              <p>
                My burger is application that allows people to add and remove
                ingredients in order to create a burger.
              </p>
            </div>
          </div>
          <Link to="/allwork">
            <div className={classes.Discover}>
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
                  filerule="nonzero"
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
                    <path d="M131.81067,51.54401c-2.33302,0.00061 -4.43306,1.41473 -5.31096,3.57628c-0.8779,2.16155 -0.3586,4.6395 1.31331,6.26668l18.87969,18.87969h-135.22604c-2.06765,-0.02924 -3.99087,1.05709 -5.03322,2.843c-1.04236,1.78592 -1.04236,3.99474 0,5.78066c1.04236,1.78592 2.96558,2.87225 5.03322,2.843h135.22604l-18.87969,18.87969c-1.49778,1.43802 -2.10113,3.5734 -1.57735,5.5826c0.52378,2.0092 2.09284,3.57826 4.10204,4.10204c2.0092,0.52378 4.14458,-0.07957 5.5826,-1.57735l28.16276,-28.16276c1.41918,-1.08154 2.25398,-2.76211 2.25837,-4.54643c0.00439,-1.78431 -0.82213,-3.46898 -2.23597,-4.55748c-0.01117,-0.0075 -0.02237,-0.01497 -0.03359,-0.02239l-28.15157,-28.15156c-1.07942,-1.10959 -2.56163,-1.73559 -4.10964,-1.73568z"></path>
                  </g>
                </g>
              </svg>
              <p>See All Work</p>
            </div>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MoreWork;
