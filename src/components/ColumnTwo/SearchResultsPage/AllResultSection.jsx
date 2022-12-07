import React from "react";

import TopResultsSection from "./TopResultsSection";
import ResultLibraryShelves from "./ResultLibraryShelves";

import styles from "./AllResultSection.module.css";

const AllResultSection = () => {
  return (
    <div className={styles.wrapper}>
      <TopResultsSection />
      <ResultLibraryShelves />
    </div>
  );
};

export default AllResultSection;
