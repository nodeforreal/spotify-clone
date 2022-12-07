import React from 'react'

import {SISoundOne,SISoundTwo,SISoundThree} from '../../../../assets/SpotifyIcons';

import styles from "./VolumeStateIcon.module.css";
const { icon } = styles;

const VolumeStateIcon = () => {
  return (
    <div className={icon}>
        <SISoundThree />
    </div>
  )
}

export default VolumeStateIcon