import React,{useEffect} from 'react'

import styles from './RowWrapper.module.css';

const TrackListBgHandler = () => {
  useEffect(() => {
    let handleSelection = (e) => {
      console.log(e.target);
      const getAllTrackList = document.querySelectorAll("." + styles.wrapper);
  
      getAllTrackList.forEach((row) => {
        if (row === e.target) {
          if (row.classList.contains(styles.changeBgOne)) {
            row.classList.add(styles.changeBgTwo);
            row.classList.remove(styles.changeBgOne);
          } else {
            row.classList.add(styles.changeBgOne);
            row.classList.remove(styles.changeBgTwo);
          }
        } else {
          row.classList.remove(styles.changeBgOne);
          row.classList.remove(styles.changeBgTwo);
        }
      });
    }
    
    document.addEventListener('mousedown',handleSelection)
    return () => {
      document.removeEventListener('mousedown',handleSelection)
    }
  }, [])
  
  return (
    <div></div>
  )
}

export default TrackListBgHandler