import React from 'react';

import UserTopGenresSliderContainer from '../SearchPage/UserTopGenresSliderContainer';
import BrowseAllContainer from '../SearchPage/BrowseAllContainer';
import PageEndLine from "../ColumnTwo/PageEndLine";

import styles from "./SearchPage.module.css";

const SearchPage = () => {
  return (
    <section className={styles.wrapper}>
      <UserTopGenresSliderContainer />
      <BrowseAllContainer />
      <PageEndLine lineClass={styles.lineClass}/>
    </section>
  )
}

export default SearchPage