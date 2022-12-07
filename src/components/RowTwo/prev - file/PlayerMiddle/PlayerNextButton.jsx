import React from 'react';

import { SINext } from '../../../assets/SpotifyIcons';

import styles from './PlayerNextButton.module.css';
const { playerNextButton } = styles;

const PlayerNextButton = () => {

  return (
    <button className={playerNextButton}>
      <SINext />
    </button>
  )
}

export default PlayerNextButton;