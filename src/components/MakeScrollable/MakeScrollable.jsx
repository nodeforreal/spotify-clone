import React from "react";

import ScrollBar from "./ScrollBar/ScrollBar";
import ScrollWrapper from "./ScrollWrapper/ScrollWrapper";

import styles from "./MakeScrollable.module.css";


const MakeScrollable = ({
  scrollWrapperClass,
  makeScrollableStyle,
  contentWrapperClass,
  scrollType,
  children,
}) => {
  return (
    <section className={styles.wrapper} style={{ ...makeScrollableStyle }}>
      <ScrollBar
        scrollWrapperClass={scrollWrapperClass}
        contentWrapperClass={contentWrapperClass}
      />
      <ScrollWrapper
        _children={children}
        scrollWrapperClass={scrollWrapperClass}
        contentWrapperClass={contentWrapperClass}
        scrollType={scrollType}
      />
    </section>
  );
};

export default MakeScrollable;
