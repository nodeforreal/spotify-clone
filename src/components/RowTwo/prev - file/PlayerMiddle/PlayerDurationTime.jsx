import React from 'react';

import styles from './PlayerDurationTime.module.css';
const {playerDurationTime} = styles;

const PlayerDurationTime = ({time}) => {

  
  return (
    <span className={playerDurationTime}>
      {time}
    </span>
  )
}

export default PlayerDurationTime;