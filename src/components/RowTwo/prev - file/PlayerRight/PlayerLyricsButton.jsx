import React from "react";
import { Link } from "react-router-dom";

import useMatch from "../../../hooks/useMatchPath";
import { SILyrics } from "../../../assets/SpotifyIcons";

import styles from "./PlayerLyricsButton.module.css";
const { lyricsButton, activeButton } = styles;

const PlayerLyricsButton = () => {
  const { isMatch } = useMatch('/lyrics');

  const clickHandler =()=>{
    if(isMatch){
      window.history.back()
    }

  }

  return (
    <Link
      to="/lyrics"
      className={isMatch ? `${activeButton} ${lyricsButton}` : lyricsButton}
      onClick={clickHandler}
    >
      <SILyrics />
    </Link>
  );
};

export default PlayerLyricsButton;
