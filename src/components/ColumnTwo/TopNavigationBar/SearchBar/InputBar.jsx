import React from "react";

import styles from "./InputBar.module.css";
const { input } = styles;

const InputBar = ({ value, inputHandler }) => {
  return (
    <>
      <input
        className={input}
        type="text"
        placeholder="Artists,songs, or podcasts"
        value={value}
        onChange={inputHandler}
      />
    </>
  );
};

export default InputBar;
