import React, { useState } from "react";

import { SISearchOutline,SICrossOutline } from "../../../../assets/SpotifyIcons";


import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [state, setState] = useState({
    value: "",
    isOpen: false,
  });

  const inputHandler = (e) => {
    
    e.preventDefault();
    if (e.target.value === "") {
      setState({ value: "", isOpen: false });
      return;
    }
    setState({ value: e.target.value, isOpen: true });
  };

  const closeHandler = (e) => {
    e.preventDefault();
    setState({ value: "", isOpen: false });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionOne}>
        <div className={styles.searchIcon}>
          <SISearchOutline />
        </div>
        <form className={styles.searchInput} onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search for songs or episodes"
            value={state.value}
            onChange={inputHandler}
          />
        </form>
      </div>

      <div className={styles.sectionTwo}>
        {state.isOpen && (
          <button className={styles.closeBtn} onClick={closeHandler}>
            <SICrossOutline />
          </button>
        )}
      </div>
    </section>
  );
};

export default SearchBar;
