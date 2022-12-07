import React from 'react';
import {NavLink} from  'react-router-dom'
import styles from './AlbumLink.module.css';
// `${} ${}`
const AlbumLink = ({wrapperClass}) => {
  return (
    <div className={`${styles.wrapper} ${wrapperClass}`} style={{fontSize:'22px'}}>
      <span className={styles.albumNavLink}>
      <NavLink to={'/album/3t23boe73'}>{'Navigate to album'}</NavLink>
      </span>
    </div>
  )
}

export default AlbumLink;