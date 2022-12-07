import React from 'react';
import { Link } from 'react-router-dom';

import styles from './TrackInfo.module.css';
const {trackInfoWrapper,trackTitle,trackAuthor,rowOne,rowTwo} = styles;

const TrackInfo = () => {

  return (
    <div className={trackInfoWrapper}>

      <span className={rowOne}>
        <Link to='/album/kali' className={trackTitle}>
          Lorem ipsum dolor sit amet consectetur 
        </Link>
      </span>

      <span className={rowTwo}>
         <Link to='/author/kali' className={trackAuthor}>
          Lorem  
        </Link>,
        <Link to='/author/kali' className={trackAuthor}>
          Lorem ipsum  
        </Link>,
        <Link to='/author/kali' className={trackAuthor}>
          Lorem ipsum dolor sit amet consectetur 
        </Link>,
        <Link to='/author/kali' className={trackAuthor}>
          Lorem ipsum dolor sit amet consectetur 
        </Link>
      </span>
    </div>
  )
}

export default TrackInfo