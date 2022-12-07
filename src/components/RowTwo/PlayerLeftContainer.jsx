import React from "react";

import CurrentTrackImageContainer from "./PlayerLeft/CurrentTrackImageContainer";
import CurrentTrackInfoContainer from "./PlayerLeft/CurrentTrackInfoContainer";
import TrackUserButtonsContainer from "./PlayerLeft/TrackUserButtonsContainer";

import styles from "./PlayerLeftContainer.module.css";
const { wrapper } = styles;

const dummyData = [0, 1, 2, 3, 4, 5, 6];
const image =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU";

const PlayerLeftContainer = () => {
  return (
    <div className={wrapper}>
      <CurrentTrackImageContainer image={image} />
      <CurrentTrackInfoContainer  nameList={dummyData}/>
      <TrackUserButtonsContainer />
    </div>
  );
};

export default PlayerLeftContainer;