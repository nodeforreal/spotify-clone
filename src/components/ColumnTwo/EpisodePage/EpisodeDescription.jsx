import React from 'react'
import DescriptionBox from '../ShowPage/DescriptionBox';
import AllEpisodeButton from './AllEpisodeButton';

import styles from './EpisodeDescription.module.css';

let string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae accusamus sit hic beatae, enim animi autem expedita ipsum quas distinctio dignissimos reprehenderit, molestias atque aliquid! Perferendis delectus error ex cum?"

const EpisodeDescription = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Episode Description</h1>
      <DescriptionBox descText={string} wrapperClass={styles.descBox}/>
      <AllEpisodeButton />
    </div>
  )
}

export default EpisodeDescription