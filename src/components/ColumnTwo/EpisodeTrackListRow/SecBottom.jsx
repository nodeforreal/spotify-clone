import React from 'react'
import PlayButton from '../../Buttons/PlayButton';
import LikeButton from '../../Buttons/LikeButton';
import LinkCopyButton from '../Buttons/LinkCopyButton';

import styles from './SecBottom.module.css';

const SecBottom = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.secLeft}>
        <PlayButton btnClass={styles.playBtn}/>
        <div className={styles.rowInfo}>
          <span className={styles.relMonth}>{'May 16'}</span>
          <span className={styles.episodeDuration}>{'1 min 52sec left'}</span>
        </div>
      </div>
      <div className={styles.secRight}>
        <div className={styles.linkBtnWrapper}>
          <LinkCopyButton btnClass={styles.linkCopyBtn}/>
        </div>
        <div className={styles.likeBtnWrapper}>
        <LikeButton btnType='episode' btnClass={styles.likeBtn}/>
        </div>
      </div>
    </div>
  )
}

export default SecBottom