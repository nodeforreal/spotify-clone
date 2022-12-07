import React from 'react'

import {SILinkCopy} from '../../../assets/SpotifyIcons';

import styles from './LinkCopyButton.module.css';

const LinkCopyButton = ({btnClass}) => {

  return (
    <button className={`${btnClass} ${styles.btn}`} >
      <SILinkCopy />
    </button>
  )
}

export default LinkCopyButton