import React from 'react'

import {SIThreeDot} from '../../../assets/SpotifyIcons'
import styles from './OptionButton.module.css';

const OptionButton = ({btnClass}) => {

  return (
    <button className={`${btnClass} ${styles.btn}`} >
      <SIThreeDot />
    </button>
  )
}

export default OptionButton