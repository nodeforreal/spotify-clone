import React from 'react';

import TrackImage from './PlayerLeft/TrackImage';
import TrackInfo from './PlayerLeft/TrackInfo';
import TrackUserButtons from './PlayerLeft/TrackUserButtons';

import styles from './PlayerLeftWrapper.module.css';
const {playerLeftWrapper,colOne,colTwo} = styles;

const PlayerLeftWrapper = () => {

  return (
    <section id='player-left-wrapper' className={playerLeftWrapper}>
      <div className={colOne}>
        <TrackImage />
        <TrackInfo />
      </div>
      <div className={colTwo}>
        <TrackUserButtons />
      </div>
    </section>
  )
}

export default PlayerLeftWrapper;