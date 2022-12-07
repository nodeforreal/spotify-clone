import React from 'react'

import styles from './LoaderView.module.css';

const LoaderView = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <div className={styles.dot}></div>
      </div>
    </div>
  )
}

export default LoaderView