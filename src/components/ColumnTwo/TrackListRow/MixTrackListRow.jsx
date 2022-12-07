import React,{useContext} from "react";
import {Context} from './PagePlaylist' ;

import RowWrapper from "./RowWrapper";
import IndexPart from "./IndexPart";
import TitleAndArtists from "./TitleAndArtists";
import AlbumLink from "./AlbumLink";
import Others  from "./Others";

import styles from "./MixTrackListRow.module.css";

const MixTrackListRow = ({ wrapperClass }) => {
  const {gridClass, albumLinkClass} = useContext(Context)
  return (
    <>
      <RowWrapper
        wrapperClass={`${styles.rowWrapper} ${gridClass}`}
      >
        <IndexPart isNum={true}/>
        <TitleAndArtists isArtistListNeed={true} isImageNeed={true} />
        <AlbumLink wrapperClass={albumLinkClass}/>
        <Others />
      </RowWrapper>
    </>
  );
};

export default MixTrackListRow;
