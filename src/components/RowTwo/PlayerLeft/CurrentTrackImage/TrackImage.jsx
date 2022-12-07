import React from "react";
import { Link } from "react-router-dom";

import ExpanderToggleButton from "../../../Buttons/ExpanderToggleButton";
import { SIArrow } from "../../../../assets/SpotifyIcons";

import styles from "./TrackImage.module.css";
const { wrapper, onHover } = styles;

const TrackImage = ({ image ,clickHandler}) => {


  return (
    <div className={wrapper}>
      <Link to={"/track"}>
        <img src={image} alt="" />
      </Link>
      <div className={onHover}>
        <ExpanderToggleButton
          icon={<SIArrow />}
          btnType={"expand"}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
};

export default TrackImage;
