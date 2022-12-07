import React,{useContext} from 'react'
import { Context } from './PagePlaylist';

import RowWrapper from './RowWrapper'
import IndexPart from './IndexPart';
import TitleAndArtists from './TitleAndArtists';
import Others from './Others';

const AlbumPageTrackListRow = () => {
  const {gridClass} = useContext(Context)
  return (
    <>
      <RowWrapper wrapperClass={gridClass}>
        <IndexPart />
        <TitleAndArtists isImageNeed={false}  isArtistListNeed={true}/>
        <Others />
      </RowWrapper>
    </>
  )
}

export default AlbumPageTrackListRow