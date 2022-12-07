import React,{useState} from "react";

import { SIDevices } from "../../../../assets/SpotifyIcons";
import ToolTip from "./ConnectDeviceToolTip/ToolTip";

import styles from "./QueueButton.module.css";

const { btn } = styles;

const QueueButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button className={btn} onClick={()=>{setIsOpen(!isOpen)}}>
      <SIDevices />
      {isOpen && <ToolTip />}
    </button>
  );
};

export default QueueButton;
