import React, { useState } from "react";

import {
  SILikeOutline,
  SILikeFill,
  SIAddCircleOutline,
  SIAddedTickFill,
} from "../../assets/SpotifyIcons";

import styles from "./LikeButton.module.css";

const LikeButton = ({ btnClass, isLiked, btnType }) => {

  const [state, setState] = useState(isLiked);

  const clickHandler = () => {
    setState(!state);
  };

  const songLikeIcon = state ? <SILikeFill /> : <SILikeOutline />
  const episodeLikeIcon = state ? <SIAddedTickFill /> : <SIAddCircleOutline />;

  return (
    <button
      className={`${styles.btn} ${btnClass} ${
        state ? styles.afterLike : styles.beforeLike
      } ${state && styles.afterLike}`}
      onClick={clickHandler}
    >

      {btnType === "like" && songLikeIcon}
      {btnType === "episode" && episodeLikeIcon}

    </button>
  );
};

export default LikeButton;
