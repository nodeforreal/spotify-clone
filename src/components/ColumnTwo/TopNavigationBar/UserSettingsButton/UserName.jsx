import React from 'react'


import styles from './UserName.module.css';
const { text } = styles;

const UserName = ({name}) => {
  return (
    <span className={text}>{name}</span>
  )
}

export default UserName