import React from 'react'
import LikeButton from '../../Buttons/LikeButton';
import OptionButton from '../Buttons/OptionButton';

import styles from './Others.module.css';

const Others = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.likeBtnWrapper}>
        <LikeButton btnType={'like'} btnClass={styles.likeBtn} isLiked= {false}/>
      </div>
      <div className={styles.durationTime}>{'3.00'}</div>
      <div className={styles.optionBtnWrapper}>
        <OptionButton btnClass={styles.optionBtn} />
      </div>
    </div>
  )
}

export default Others