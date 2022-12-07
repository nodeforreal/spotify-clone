import React from "react";

import TrackImage from "./CurrentTrackImage/TrackImage";

import styles from "./CurrentTrackImageContainer.module.css";
const { wrapper } = styles;

const CurrentTrackImageContainer = ({image}) => {

  // get root Element
  const r = document.querySelector(":root");
  const rs = getComputedStyle(r);

  const expandHandler = () => {
    r.style.setProperty(
      "--col-one_track-image_height",
      rs.getPropertyValue("--col-one-width")
    );
    r.style.setProperty("--col-one_collapse_display", "block");
    r.style.setProperty("--row-two_track-image_display", "none");
  };
  return (
    <div className={wrapper}>
      <TrackImage clickHandler={expandHandler} image={image} />
    </div>
  );
};

export default CurrentTrackImageContainer;
