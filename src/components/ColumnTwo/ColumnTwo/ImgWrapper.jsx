import React from 'react'

import styles from './ImgWrapper.module.css';
let image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU'
const ImgWrapper = ({wrapperClass ,children}) => {
  return (
    <div className={`${styles.wrapper} ${wrapperClass}`}>
      <img src={image} alt="" />
      {children}
    </div>
  )
}

export default ImgWrapper;