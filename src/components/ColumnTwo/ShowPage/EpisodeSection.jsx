import React from 'react';

import EpisodePlaylist from '../EpisodePlaylist/EpisodePlaylist'
import styles from './EpisodeSection.module.css'

const EpisodeSection = ({wrapperClass}) => {
  return (
    <div className={`${styles.wrapper} ${wrapperClass}`}>
      <h1 className={styles.title}>Episodes</h1>
      <EpisodePlaylist onlyEpisodeTitle={true}/>
    </div>
  )
}

export default EpisodeSection