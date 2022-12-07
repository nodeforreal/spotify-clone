import React from "react";

import PlayerLeftContainer from './RowTwo/PlayerLeftContainer';
import PlayerMidContainer from "./RowTwo/PlayerMidContainer";
import PlayerRightContainer from "./RowTwo/PlayerRightContainer";


import styles from "./RowTwo.module.css";
const { wrapper } = styles;

const RowTwo = () => {
  return <section id={wrapper}>
    <PlayerLeftContainer />
    <PlayerMidContainer />
    <PlayerRightContainer />
  </section>;
};

export default RowTwo;
