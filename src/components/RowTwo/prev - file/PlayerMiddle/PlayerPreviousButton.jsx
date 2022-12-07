import React from 'react'

import {SIPrevious} from '../../../assets/SpotifyIcons';

import styles from './PlayerPreviousButton.module.css';
const {playerPreviousButton} = styles;

const PlayerPreviousButton = () =>{

  return (
    <button className={playerPreviousButton}>
      <SIPrevious />
    </button>
  )
}

export default PlayerPreviousButton;