import React from 'react'

import styles from './CardDescription.module.css';

const CardDescription = ({descText}) => {
  return (
    <div className={styles.text}>{descText}</div>
  )
}

export default CardDescription