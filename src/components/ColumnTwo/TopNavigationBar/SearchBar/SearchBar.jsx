import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

import { SISearchOutline } from "../../../../assets/SpotifyIcons";
import CloseButton from "./CloseButton";
import InputBar from "./InputBar";

import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    value: "",
    isOpen: false,
  });

  const inputHandler = (e) => {
    e.preventDefault();
    
    navigate(`/search/${e.currentTarget.value}`,{replace:true})

    if (e.currentTarget.value === "") {
      setState({ value: "", isOpen: false });
      return;
    }
    setState({ value: e.currentTarget.value, isOpen: true });
  };

  const closeHandler = (e) => {
    e.preventDefault();
    setState({ value: "", isOpen: false });
    navigate(`/search/${e.currentTarget.value}`,{replace:true})
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
          <InputBar value={state.value} inputHandler={inputHandler} />
        </form>
      </div>

      <div className={styles.sectionTwo}>
        {state.isOpen && <CloseButton closeHandler={closeHandler} />}
      </div>
    </section>
  );
};

export default SearchBar;
