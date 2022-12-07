import React from 'react'

import SearchBar from './SearchBar';

import styles from './FindBySearch.module.css'

const FindBySearch = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Let's find something for your playlist</h2>
      <SearchBar />
    </div>
  )
}

export default FindBySearch;