import React, { createContext } from "react";

import PageHeadContainer from "./PageHeadContainer";
import PageNeck from "./PageNeck";

import styles from "./SubPage.module.css";

const Context = createContext({});

const SubPage = (props) => {
  return (
    <Context.Provider value={{ ...props }}>
      <div className={styles.wrapper}>
        <PageHeadContainer />
        <div className={styles.bodyWrapper}>
          <PageNeck />
          {props.children}
        </div>
      </div>
    </Context.Provider>
  );
};

export { Context };
export default SubPage;
