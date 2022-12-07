import React from 'react'

import styles from './Title.module.css';

const Title = ({}) => {
  return (
    <div className={styles.titleSec}>
        <div className={styles.titleEllipsis}>
          <span className={styles.titleText}>
            {"Title from spotify api kaliyamoo"}
          </span>
        </div>
      </div>
  )
}

export default Title