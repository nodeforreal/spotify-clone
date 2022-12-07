import React, { useEffect } from "react";
import scrollScript from "./scrollScript";
import styles from "./CustomScrollBar.module.css";

const { track, thumb } = styles;

const CustomScrollBar = ({
  wrapperClassName,
  contentClassName,
  trackClassName,
  thumbClassName,
}) => {
  useEffect(() => {
    scrollScript(
      wrapperClassName,
      contentClassName,
      trackClassName,
      thumbClassName
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={track + " " + trackClassName}>
      <div className={thumb + " " + thumbClassName}></div>
    </section>
  );
};

export default CustomScrollBar;
