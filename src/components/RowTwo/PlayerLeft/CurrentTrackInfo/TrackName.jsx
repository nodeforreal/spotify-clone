import React from "react";
import { Link } from "react-router-dom";

import styles from "./TrackName.module.css";
const { text } = styles;

const TrackName = ({ name }) => {
  return (
    <Link className={text} to={"/title"}>
      {name}
    </Link>
  );
};

export default TrackName;
