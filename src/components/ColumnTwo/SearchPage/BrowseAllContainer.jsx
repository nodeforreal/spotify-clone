import React from "react";

import Cards from "./BrowseAll/Cards";

import styles from "./BrowseAllContainer.module.css";
const { wrapper, head } = styles;

const cardList = [0,1,2,3,4,5,6,7,8,9,10,12,12,0,1,2,3,4,5,6,7,8,9,10,12,12]

const BrowseAllContainer = () => {
  return (
    <div className={wrapper}>
      <h2 className={head}>{"Browse all"}</h2>
      <Cards cardList={cardList}/>
    </div>
  );
};

export default BrowseAllContainer;
