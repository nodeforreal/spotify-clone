import React from "react";

import styles from "./OptionButton.module.css";

const OptionButton = ({ labelText, isCurrentPath,clickHandler }) => {
  console.log("option btn render");
  return (
    <button
      className={`${styles.wrapper} ${isCurrentPath ? styles.active : ""}`}
     onClick={clickHandler}
    >
      {labelText}
    </button>
  );
};

export default React.memo(
  OptionButton,
  (prevProp, currentProp) =>
    prevProp.isCurrentPath === currentProp.isCurrentPath
);
// export default OptionButton
