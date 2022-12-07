import React from 'react'

import styles from './HeadName.module.css';

const HeadName = ({coverTypeText}) => {
  return (
    <h2 className={styles.title}>{coverTypeText}</h2>
  )
}

export default HeadName;