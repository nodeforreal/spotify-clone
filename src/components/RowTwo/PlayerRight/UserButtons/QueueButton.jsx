import React from "react";
import { useNavigate,useLocation } from "react-router-dom";

import { SIQueue } from "../../../../assets/SpotifyIcons";

import styles from "./QueueButton.module.css";
const { btn,active } = styles;

const QueueButton = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation()

  const clickHandler = () => {
    if(pathname !== '/queue'){
      navigate("/queue");
    }else{
      navigate(-1)
    }
  };

  const isActive =()=>{
    return pathname === '/queue'
  }

  return (
    <button className={`${btn} ${isActive() && active}`} onClick={clickHandler}>
      <SIQueue />
    </button>
  );
};

export default QueueButton;
