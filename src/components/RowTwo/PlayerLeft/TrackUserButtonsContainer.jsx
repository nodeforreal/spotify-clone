import React from "react";

import LikeButton from "../../Buttons/LikeButton";
import TrackPinPModeButton from "./TrackButtons/TrackPinPModeButton";

import styles from "./TrackUserButtonsContainer.module.css";
const { wrapper,likeBtn } = styles;

const TrackUserButtonsContainer = () => {

  return (
    <div className={wrapper}>
      <LikeButton btnClass={likeBtn} isLiked={false} btnType={'like'}/>
      <TrackPinPModeButton />
    </div>
  );
};

export default TrackUserButtonsContainer;
