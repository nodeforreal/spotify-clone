import React from "react";
import { Link } from "react-router-dom";

import CardLogo from "./Card/CardLogo";
import CardTitle from "./Card/CardTitle";
import EpisodeCount from "./Card/EpisodeCount";

import { SIEpisode } from "../../../assets/SpotifyIcons";

import styles from "./LikedEpisodesCard.module.css";

const LikedEpisodesCard = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/recommendation-card" className={styles.link}></Link>
      <CardLogo
        child={<SIEpisode svgStyle={{ fill: "#1ed760" }} />}
        componentStyle={{ backgroundColor: "#006450", borderRadius: "6px" }}
      />
      <CardTitle titleText={"Daily mix"} />
      <EpisodeCount episodeCount={2} />
    </div>
  );
};

export default LikedEpisodesCard;
