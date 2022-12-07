import React from 'react'

import SingleTrackRow from '../Row/SingleTrackRow'
import styles from './FindByRecommend.module.css';

const FindByRecommend = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Recommended</h2>
      <p className={styles.desc}>Based on what's in this playlist</p>
      <div className={styles.recommended}>
      <SingleTrackRow />
      <SingleTrackRow />
      <SingleTrackRow />
      <SingleTrackRow />
      <SingleTrackRow />
      <SingleTrackRow />
      <SingleTrackRow />
      <SingleTrackRow />
      </div>
    </div>
  )
}

export default FindByRecommend;