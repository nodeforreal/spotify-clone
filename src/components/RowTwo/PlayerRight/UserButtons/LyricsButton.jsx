import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { SILyrics } from "../../../../assets/SpotifyIcons";

import styles from "./LyricsButton.module.css";
const { btn, active } = styles;

const LyricsButton = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const clickHandler = () => {
    if(pathname !== '/lyrics'){
      navigate("/lyrics");
    }else{
      navigate(-1)
    }
    
  };

  const isActive = () => {
    return pathname === "/lyrics";
  };
  return (
    <button className={`${btn} ${isActive() && active}`} onClick={clickHandler}>
      <SILyrics />
    </button>
  );
};

export default LyricsButton;
