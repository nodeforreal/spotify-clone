import React from "react";
import { Link } from "react-router-dom";

import useMatch from "../../../hooks/useMatchPath";
import { SIQueue } from "../../../assets/SpotifyIcons";

import styles from "./PlayerQueueButton.module.css";
const { queueButton, activeButton } = styles;

const PlayerQueueButton = () => {

  const { isMatch } = useMatch('/queue');
  const clickHandler=()=>{
    if(isMatch){
      window.history.back()
    }
  }
  return (
    <Link
      to="/queue"
      className={isMatch ? `${activeButton} ${queueButton}` : queueButton}
      onClick={clickHandler}
    >
      <SIQueue />
    </Link>
  );
};

export default PlayerQueueButton;
