import React from 'react'

import { SIArrowUp,SIArrowDown } from '../../../../assets/SpotifyIcons';
import styles from './Arrow.module.css';
const { icon } = styles;

const Arrow = ({isOpened}) => {
  return (
    <span className={icon} >
        {isOpened ? <SIArrowUp/> : <SIArrowDown/> }
    </span>
  )
}

export default Arrow