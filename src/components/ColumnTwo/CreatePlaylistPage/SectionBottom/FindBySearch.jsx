import React from 'react'

import AlbumsRow from '../Row/NestedRow';
import ArtistRow from '../Row/NestedRow'
import SingleTrackRow from '../Row/SingleTrackRow';
import ByNestingRow from '../Row/ByNestingRow';

import styles from './FindByRecommend.module.css';

const FindByRecommend = ({handleViews}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bySearch}>
      <SingleTrackRow rowIndex={1}/>
      <SingleTrackRow rowIndex={2}/>
      <SingleTrackRow rowIndex={3}/>
      <SingleTrackRow rowIndex={4}/>
      <SingleTrackRow rowIndex={5}/>
      <SingleTrackRow rowIndex={6}/>
        <AlbumsRow rowType={'album'} clickHandler={()=>handleViews({view:'albumsView',viewIndex:1})}/>
        <ArtistRow rowType={'artist'} clickHandler={()=>handleViews({view:'artistView',viewIndex:1})}/>
      <ByNestingRow byNestName={'See all artists'} clickHandler={()=>handleViews({view:'allArtistsView',viewIndex:1})} />
      <ByNestingRow byNestName={'See all albums'} clickHandler={()=>handleViews('singleNested')} />
      <ByNestingRow byNestName={'See all songs'} clickHandler={()=>handleViews('singleNested')} />
      </div>
    </div>
  )
}

export default FindByRecommend;