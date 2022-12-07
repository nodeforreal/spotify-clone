import React from 'react'

import { SIPlay } from '../../../assets/SpotifyIcons';

import styles from './PlayerPlayButton.module.css';
const {playerPlayButton} = styles ;


const PlayerPlayButton = () => {

  return (
    <button className={playerPlayButton}>
      <SIPlay />
    </button>
  )
}

export default PlayerPlayButton;