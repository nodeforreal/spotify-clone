import React from "react";

import styles from "./EpisodeCount.module.css";
const { text } = styles;

const EpisodeCount = ({ episodeCount }) => {
  return <div className={text}>{episodeCount} episodes</div>;
};

export default EpisodeCount;
