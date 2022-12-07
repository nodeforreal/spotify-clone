import React from 'react'
import PlayButton from '../../Buttons/PlayButton';

import styles from './ImagePlayButton.module.css';
const img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4Ej3sddJTqtqN48tLwfcukxY-e70Aev4Dw&usqp=CAU'

const ImagePlayButton = ({wrapperClass,playBtnClass}) => {
  return (
    <div className={`${styles.wrapper} ${wrapperClass}`}>
      <img src={img} alt="" />
      <PlayButton btnClass={`${styles.playBtn} ${playBtnClass}`}/>
    </div>
  )
}

export default ImagePlayButton;