import React from 'react'
import {NavLink} from 'react-router-dom';

import PlayButton from '../../Buttons/PlayButton';

import styles from './TopResultCard.module.css';

const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU'

const TopResultCard = ({}) => {
  return (
    <div className={styles.wrapper}>
      <NavLink to='/album' className={styles.cardNavLink}></NavLink>
      <PlayButton btnClass={styles.playBtn}/>
      <div className={styles.imgWrapper}>
        <img src={img} alt="" />
      </div>
      <div className={styles.titleSection}>
        <h1 className={styles.trackTitle}>{'Athiru Kathe Athiru Kathe Athiru Kathe'}</h1>
        <div className={styles.secBottom}>
          <span className={styles.artistTitle}>
            <NavLink to='/artist'>{'Gowri Lexmi'}</NavLink>
          </span>
          <span className={styles.coverType}>
            {'Album'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default TopResultCard