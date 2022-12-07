import React, { useState } from "react";

import styles from "./DescriptionBox.module.css";

const DescriptionBox = ({ descText, wrapperClass }) => {
  const [state, setState] = useState({ isInfinite: false, stringCount: 200 });
  return (
    <p className={`${styles.descText} ${wrapperClass}`}>
      {descText.slice(0, state.stringCount)}
      <span
        className={styles.toggleBtn}
        onClick={() => {
          setState({
            isInfinite: !state.isInfinite,
            stringCount: !state.isInfinite ? descText.length : 200,
          });
        }}
      >
        {state.isInfinite ? "...see less" : "...see more"}
      </span>
    </p>
  );
};

export default DescriptionBox;
