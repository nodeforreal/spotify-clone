import React from 'react'
import styles from "./TrackDetail.module.css";

const TrackDetail = ({isHover,wrapperClass}) => {
  return (
    <div className={`${styles.wrapper} ${wrapperClass}`}>
      <span className={`${styles.text} ${isHover ? styles.hoverText : ''}`}>
        {'12,00,000'}
      </span>
    </div>
  )
}

export default TrackDetail