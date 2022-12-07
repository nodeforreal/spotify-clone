import React from "react";

import styles from "./ScrollWrapper.module.css";

const ScrollWrapper = ({
  _children,
  scrollType,
  scrollWrapperClass,
  contentWrapperClass,
}) => {
  return (
    <div
      className={`${scrollWrapperClass} ${styles.wrapper} ${
        scrollType === "vertical" && styles.verticalScroll
      } ${scrollType === "horizontal" && styles.horizontalScroll}`}
    >
      <div className={`${styles.contentWrapper} ${contentWrapperClass}`}>{_children}</div>
    </div>
  );
};

export default ScrollWrapper;
