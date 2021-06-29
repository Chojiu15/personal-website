import React from "react";
import classes from "./About.module.css";
const About = () => {
  return (
    <React.Fragment>
      <div className={classes.About}>
        <div className={classes.Container}>
          <div className={classes.AboutInside}>
            <p>
              I am a Full Stack web developer based in Berlin. I am always
              interested in a new challenge where I can integrate a logical
              reasoning and a visual appealing aspect. Armed with a deep sense
              of responsibility and possessing very high levels of enthusiasm to
              give my 110% for any endeavour. I help my clients to expand their
              businesses by using digital innovation, unique design and creative
              solutions to create bespoke websites tailored to fit their
              requirements.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default About;
