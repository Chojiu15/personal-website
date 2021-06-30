import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../../Data.json";
import classes from "./SingleWork.module.css";
import No from "../No/No";
const SingleWork = () => {
  const { id } = useParams();
  const newId = jsonData.data[`${id - 1}`];
  console.log(newId);
  if (newId) {
    console.log("Hey");
  } else {
    return <No />;
  }
  return (
    <React.Fragment>
      <div className={classes.SplitedWork}>
        <div className={classes.Container}>
          <div className={classes.SplitedWorkInside}>
                       <img src={`../${newId.img}`}></img>
          </div>
          <div className={classes.SplitedWorkDescription}>
            <div>
              <small>Description :</small>
              <p>{newId.description}</p>
            </div>
            <div>
              <small>Github :</small>
              <a href={newId.GitHub}>{newId.GitHub}</a>
            </div>

            <div>
              <small>Live :</small>
              <a href={newId.Website}>{newId.Website}</a>
            </div>

            <div>
              <small>Stack :</small>
              <p>{newId.Stack}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SingleWork;
