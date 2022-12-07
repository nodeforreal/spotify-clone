import React from 'react'

import styles from './UserProfile.module.css';
const { wrapper } = styles;

const UserProfile = ({image}) => {
  return (
    <div className={wrapper}>
        <img src={image} alt="" />
    </div>
  )
}

export default UserProfile;