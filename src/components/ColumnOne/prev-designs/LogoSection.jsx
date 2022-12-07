import React from 'react';
import { Link } from 'react-router-dom';
import SpotifyLogo from '../../assets/SpotifyLogo';
import styles from './LogoSection.module.css';

const LogoSection = () => {
 
  return (
    <section className={styles.logo}>
      <Link to="/">
        <SpotifyLogo />
      </Link>
    </section>
  )
}

export default LogoSection