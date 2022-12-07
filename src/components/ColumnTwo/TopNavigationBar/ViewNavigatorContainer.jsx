import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import NavButton from "./ViewNavigator/NavButton";

import styles from "./ViewNavigatorContainer.module.css";
const { wrapper } = styles;

const ViewNavigatorContainer = () => {

  const navigate = useNavigate();
  const isDisabled = useRef({
    forward: false,
    backward: false,
  });

  const historyLength = window.history.length;
  const currentHistoryIndex = window.history.state.idx;
  const storage = window.sessionStorage;

  let initHistoryLength = 0;

  if (storage.getItem("init-history-length") === null) {
    storage.setItem("init-history-length", historyLength);
    initHistoryLength =
      historyLength - parseInt(storage.getItem("init-history-length"));
  } else {
    initHistoryLength =
      historyLength - parseInt(storage.getItem("init-history-length"));
  }

  if (currentHistoryIndex === 0) {
    isDisabled.current = {
      forward: false,
      backward: true,
    };
  }

  if (currentHistoryIndex === initHistoryLength) {
    isDisabled.current = {
      forward: true,
      backward: false,
    };
  } else if (
    currentHistoryIndex > 0 &&
    currentHistoryIndex < initHistoryLength + 1
  ) {
    isDisabled.current = {
      forward: false,
      backward: false,
    };
  }

  if (currentHistoryIndex === 0 && initHistoryLength === 0) {
    isDisabled.current = {
      forward: true,
      backward: true,
    };
  }
  
  const nextView = () => {
    navigate(1);
  };

  const prevView = () => {
    navigate(-1);
  };

  return (
    <div className={wrapper}>
      <NavButton
        btnType={"backward"}
        clickHandler={prevView}
        isDisabled={isDisabled.current.backward}
      />
      <NavButton
        key={currentHistoryIndex}
        btnType={"forward"}
        clickHandler={nextView}
        isDisabled={isDisabled.current.forward}
      />
    </div>
  );
};

export default ViewNavigatorContainer;
