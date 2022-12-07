import React,{useState} from 'react';

import {SILikeOutline,SIHeartFill,SIPInP} from '../../../../assets/SpotifyIcons'
import styles from './TrackUserButtons.module.css';
const {trackUserButtons,userLikeButton,userPInPButton,userLike,userLiked} =styles

const TrackUserButtons = () => {
  const [isLiked,setIsLiked] = useState(false)
  return (
    <div className={trackUserButtons}>
      <button className={userLikeButton} onClick={()=>{setIsLiked(!isLiked)}}> 
        { isLiked ?
          <span className={userLike}>
            <SILikeOutline />  
          </span>
          :
          <span className={userLiked}>
            <SIHeartFill />
          </span>
        }
      </button>
      <button className={userPInPButton}>
        <SIPInP />
      </button>
    </div>
  )
}

export default TrackUserButtons;