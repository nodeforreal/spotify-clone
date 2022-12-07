import React from 'react'

import RowWrapper from './RowWrapper';
import TitleAndArtists from './TitleAndArtists';

import Others from './Others';

import styles from './SearchResultTrackListRow.module.css';

const SearchResultTrackListRow = ({isImageNeed}) => {
  return (
    <RowWrapper wrapperClass={styles.gridColumns}>
      <TitleAndArtists isImgPlayBtn={true} isImageNeed={isImageNeed}  isArtistListNeed={true}/>
      <Others />
    </RowWrapper>
  )
}

export default SearchResultTrackListRow