import React from 'react';

import styles from './PlayerSongProgressTrack.module.css';
const {songProgressTrack,innerProgressBar,durationDragCircle} = styles;

const PlayerSongProgressTrack = () => {

  return (
    <section className={songProgressTrack}>
      <div className={innerProgressBar}></div>
      <span className={durationDragCircle}></span>
    </section>
  )
}

export default PlayerSongProgressTrack;