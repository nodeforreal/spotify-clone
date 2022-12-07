import styles from "./SplitterLine.module.css";

const SplitterLine = ({lineClass}) => {
  return <hr className={`${styles.line} ${lineClass}`}/>;
};

export default SplitterLine;
