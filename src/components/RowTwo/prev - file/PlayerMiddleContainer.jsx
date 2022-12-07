import React from "react";

import PlayerShuffleButton from "./PlayerMiddle/PlayerShuffleButton";
import PlayerPreviousButton from "./PlayerMiddle/PlayerPreviousButton";
import PlayButton from "../Buttons/PlayButton";
import PlayerNextButton from "./PlayerMiddle/PlayerNextButton";
import PlayerLoopButton from "./PlayerMiddle/PlayerLoopButton";

import PlayerDurationTime from "./PlayerMiddle/PlayerDurationTime";
import PlayerSongProgressTrack from "./PlayerMiddle/PlayerSongProgressTrack";

import styles from "./PlayerMiddleContainer.module.css";
const { playerMiddleWrapper, rowOne, rowTwo , playerPlayBtn} = styles;

const PlayerMiddleContainer = () => {
  return (
    <section id="player-middle-wrapper" className={playerMiddleWrapper}>
      <div className={rowOne}>
        <PlayerShuffleButton />
        <PlayerPreviousButton />

        <PlayButton
          hoverEffect={true}
          btnStyle={{
            width: "32px",
            height: "32px",
            background: "#fff",
          }}
          svgStyle={{ width: "14px", height: "14px" }}
        />
        <PlayerNextButton />
        <PlayerLoopButton />
      </div>

      <div className={rowTwo}>
        <PlayerDurationTime time={"00.00"} />
        <PlayerSongProgressTrack />
        <PlayerDurationTime time={"4.60"} />
      </div>
    </section>
  );
};

export default PlayerMiddleContainer;
