import React from 'react'
import {NavLink} from 'react-router-dom'

import styles from './Tags.module.css';
let tags = ["Science", "Mystery", "Comedy", "English", "Story"];

const Tags = () => {
  return (
    <div className={styles.tagsWrapper}>
      {tags.map((name, index) => {
        return (
          <NavLink to="/genre/3783722" key={index} className={styles.tagNav}>
            {name}
          </NavLink>
        );
      })}
    </div>
  );
};


export default Tags