import React,{useContext} from "react";
import { Context } from "./PagePlaylist";

import RowWrapper from "./RowWrapper";
import IndexPart from "./IndexPart";
import TitleAndArtists from "./TitleAndArtists";
import AlbumLink from "./AlbumLink";
import TrackDetail from "./TrackDetail";
import Others from "./Others";

import styles from './CreatePlaylistTrackListRow.module.css';


const CreatePlaylistTrackListRow = ({isImageNeed}) => {
  const {gridClass,trackTypeClass,relDateClass,dateAddedClass} = useContext(Context)
  return (
    <>
      <RowWrapper wrapperClass={`${true && styles.changeGrid} ${gridClass}`}>
        <IndexPart />
        <TitleAndArtists isImageNeed={isImageNeed}  isArtistListNeed={true}/>
        <AlbumLink wrapperClass={trackTypeClass}/>
        {true && <TrackDetail wrapperClass={relDateClass}/> }
        <TrackDetail wrapperClass={dateAddedClass}/>
        <Others />
      </RowWrapper>
    </>
  );
};

export default React.memo(CreatePlaylistTrackListRow);
