import React,{useContext} from "react";
import { Context } from "./PagePlaylist";

import RowWrapper from "./RowWrapper";
import IndexPart from "./IndexPart";
import TitleAndArtists from "./TitleAndArtists";
import AlbumLink from "./AlbumLink";
import TrackDetail from "./TrackDetail";
import Others  from "./Others";

import styles from "./PlaylistTrackListRow.module.css";

const PlaylistTrackListRow = ( ) => {
  const {gridClass,trackTypeClass,dateAddedClass} = useContext(Context)
  return (
    <>
      <RowWrapper
        wrapperClass={gridClass}
      >
        <IndexPart isNum={true}/>
        <TitleAndArtists  isArtistListNeed={true} isImageNeed={true} />
        <AlbumLink wrapperClass={trackTypeClass}/>
        <TrackDetail wrapperClass={dateAddedClass}/>
        <Others />
      </RowWrapper>
    </>
  );
};

export default PlaylistTrackListRow;
