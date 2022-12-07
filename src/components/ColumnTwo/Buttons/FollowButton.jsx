import React,{useState} from 'react'

import styles from './FollowButton.module.css';

const FollowButton = ({isFollowed}) => {
  const [state,setState] = useState(isFollowed)
  return (
    <button className={`${styles.btn} ${state ? styles.followingState : ''}`} onClick={()=>setState(!state)}>
      {state ?  'Following' : 'Follow'}
    </button>
  )
}

export default FollowButton ;