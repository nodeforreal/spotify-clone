import React,{useContext} from 'react';
import { Context } from './PagePlaylist';

import RowWrapper from './RowWrapper';
import IndexPart from './IndexPart';
import TitleAndArtists from './TitleAndArtists';
import TrackDetail from './TrackDetail';
import Others from './Others';

const ArtistPageTrackListRow = () => {

  const {gridClass,trackDetailsIsHover} = useContext(Context)
  
  console.log(gridClass)

  return (
    <>
      <RowWrapper wrapperClass={gridClass}>
        <IndexPart />
        <TitleAndArtists isImageNeed={true} isArtistNeed={false} />
        <TrackDetail isHover={trackDetailsIsHover}/>
        <Others />
      </RowWrapper>
    </>
  )
}

export default ArtistPageTrackListRow