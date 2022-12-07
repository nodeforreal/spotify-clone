import React, { createContext } from "react";

import HeadRow from "./HeadRow";
import CreatePlaylistTrackListRow from "./CreatePlaylistTrackListRow";

import styles from "./PagePlaylist.module.css";

export const Context = createContext({});

const PagePlaylist = (props) => {

  return (
    <Context.Provider value={{...props}}>
      <div className={`${styles.wrapper}`}>
        {props.children}
      </div>
    </Context.Provider>
  );
};

export default PagePlaylist;