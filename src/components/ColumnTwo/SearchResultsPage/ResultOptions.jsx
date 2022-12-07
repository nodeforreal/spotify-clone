import React from "react";
import {useNavigate,useParams,useLocation} from 'react-router-dom'

import OptionButton from "./OptionButton";
import styles from "./ResultOptions.module.css";
const options = [
  {
    id: 1,
    label: "All",
    path: "",
  },
  {
    id: 2,
    label: "Songs",
    path: "tracks",
  },
  {
    id: 3,
    label: "Albums",
    path: "albums",
  },
  {
    id: 4,
    label: "Artists",
    path: "artists",
  },
  {
    id: 5,
    label: "Podcasts & Shows",
    path: "podcastAndEpisodes",
  },
  {
    id: 6,
    label: "Playlists",
    path: "playlists",
  },
  {
    id: 7,
    label: "Genres & Moods",
    path: "genres",
  },
  {
    id: 8,
    label: "Profile",
    path: "users",
  },
];

const ResultOptions = () => {
  const {searchParam} = useParams()
  const {pathname} = useLocation()
  const navigate = useNavigate()
  
  const clickHandler = (locationPath)=>{
    navigate(locationPath,{replace:true})
  }
  return (
    <div className={styles.wrapper}>
      {options.map(({ path, id, label }) => {
        let routePath = `/search/${searchParam}/${path}`
        return (
          <OptionButton
            key={id}
            labelText={label}
            clickHandler ={()=>clickHandler(routePath)}
            isCurrentPath={routePath === pathname}
          />
        );
      })}
    </div>
  );
};

export default ResultOptions;
