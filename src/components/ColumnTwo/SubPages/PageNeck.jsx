import React, { useContext } from "react";
import { Context } from "./SubPage";

import PlayButton from "../../Buttons/PlayButton";
import OptionButton from "../Buttons/OptionButton";
import LikeButton from "../../Buttons/LikeButton";
import FollowButton from "../Buttons/FollowButton";

import styles from "./PageNeck.module.css";

const PageNeck = () => {
  const { showPlayBtn, showLikeBtn, showOptionBtn, showFollowBtn ,showEpisodeAddBtn} =
    useContext(Context);
  return (
    <div className={styles.wrapper}>
      <div className={styles.sectionOne}>
        {showPlayBtn && <PlayButton btnClass={styles.playBtn} />}
        {showLikeBtn && (
          <LikeButton btnClass={styles.likeBtn} isLiked={true} btnType="like" />
        )}
        {showEpisodeAddBtn && (
          <LikeButton btnClass={styles.likeBtn} isLiked={true} btnType="episode" />
        )}
        {showFollowBtn && <FollowButton />}
      </div>
      <div className={styles.sectionTwo}>
        {showOptionBtn && <OptionButton btnClass={styles.optionBtn} />}
      </div>
    </div>
  );
};

export default PageNeck;
