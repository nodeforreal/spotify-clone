import React from "react";

import SplitterLine from "./SplitterLine";
import styles from "./PageEndLine.module.css";

const PageEndLine = ({lineClass}) => {
  return <SplitterLine lineClass={`${styles.line} ${lineClass}`}/>
};

export default PageEndLine;
