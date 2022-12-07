import React from 'react'

import styles from './Icon.module.css';
const { wrapper } = styles;

const Icon = ({icon}) => {
  return (
    <span className={wrapper}>{icon}</span>
  )
}

export default Icon