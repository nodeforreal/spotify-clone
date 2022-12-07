import React from "react";

import PlayerLyricsButton from "./PlayerRight/PlayerLyricsButton";
import PlayerQueueButton from "./PlayerRight/PlayerQueueButton";
import PlayerDevicesButton from "./PlayerRight/PlayerDevicesButton";
import PlayerAudioVolumeButton from "./PlayerRight/PlayerAudioVolumeButton";
import PlayerAudioControlTrack from "./PlayerRight/PlayerAudioControlTrack";

import styles from "./PlayerRightWrapper.module.css";
const { playerRightWrapper, colOne, colTwo } = styles;

const PlayerRightWrapper = () => {
  return (
    <section id="player-right-wrapper" className={playerRightWrapper}>
      
      <div className={colOne}>
        <PlayerLyricsButton />
        <PlayerQueueButton />
        <PlayerDevicesButton />
      </div>

      <div className={colTwo}>
        <PlayerAudioVolumeButton />
        <PlayerAudioControlTrack />
      </div>
      
    </section>
  );
};

export default PlayerRightWrapper;
