import React from "react";
import { Link } from "react-router-dom";
import ExpanderToggleButton from "../Buttons/ExpanderToggleButton";

import styles from "./CurrentTrackPosterContainer.module.css";
const { wrapper, toggleBtn } = styles;

const CurrentTrackPosterContainer = ({ image }) => {
  const r = document.querySelector(":root");

  const collapseHandler = () => {
    r.style.setProperty("--col-one_track-image_height", 0);
    r.style.setProperty("--col-one_collapse_display", "none");
    r.style.setProperty("--row-two_track-image_display", "block");
  };

  return (
    <div className={wrapper}>
      <Link to={"/track"}>
        <img src={image} alt="" />
      </Link>
      <div className={toggleBtn}>
        <ExpanderToggleButton
          btnType={"collapse"}
          clickHandler={collapseHandler}
        />
      </div>
    </div>
  );
};

export default CurrentTrackPosterContainer;
