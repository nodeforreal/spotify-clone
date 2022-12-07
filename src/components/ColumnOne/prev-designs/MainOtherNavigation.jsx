import React from 'react';
import { Link } from 'react-router-dom';
import useMatchPath from '../../hooks/useMatchPath';

import {
  SIAddPlus,
  SIHeartFill,
  SIEpisode
} from '../../assets/SpotifyIcons';
import styles from './MainOtherNavigation.module.css';

const {
  navigationMenu,
  menuItem,
  playlistIcon,
  heartIcon,
  episodeIcon,
  menuText,
  activeMenu
} = styles ;

const MainOtherNavigation = () => {
  

  const isActiveOne = useMatchPath('/playlist').isMatch
  const isActiveTwo = useMatchPath('/collection/tracks').isMatch
  const isActiveThree = useMatchPath('/collection/episodes').isMatch

  return (
    <section className={navigationMenu}>
      
      <Link to="/playlist" className={ isActiveOne ? `${activeMenu} ${menuItem}` : menuItem  }>
        <span className={playlistIcon}>
          <SIAddPlus />
        </span>
        <span className={menuText}>Create Playlist</span>
      </Link>

      <Link to="/collection/tracks" className={!isActiveTwo ? menuItem : `${activeMenu} ${menuItem}`}>
        <span className={heartIcon}>
          <SIHeartFill />
          </span>
        <span className={menuText}>Liked Songs</span>
      </Link>

      <Link to="/collection/episodes" className={!isActiveThree ? menuItem : `${activeMenu} ${menuItem}`}>
        <span className={episodeIcon}>
          <SIEpisode />
          </span>
        <span className={menuText}>Your Episodes</span>
      </Link>
      
    </section>
  )
}

export default MainOtherNavigation;