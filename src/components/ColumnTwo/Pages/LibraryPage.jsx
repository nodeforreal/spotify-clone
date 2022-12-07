import { Routes, Route } from "react-router-dom";

import FirstLibraryPlaylistPage from "../UserFindTracksFirstView/FirstLibraryPlaylistPage";
import FirstLibraryPodcastPage from "../UserFindTracksFirstView/FirstLibraryPodcastPage";
import FirstLibraryArtistPage from "../UserFindTracksFirstView/FirstLibraryArtistPage";
import FirstLibraryAlbumPage from "../UserFindTracksFirstView/FirstLibraryAlbumPage";

import LibraryView from "../LibraryPage/LibraryView";
import PageEndLine from "../ColumnTwo/PageEndLine";

import styles from "./LibraryPage.module.css";

const { wrapper } = styles;

const LibraryPage = () => {
  
  
  return (
    <section className={wrapper}>
      <Routes>
        <Route
          path="/playlists"
          element={<FirstLibraryPlaylistPage />}
        ></Route>
        <Route
          path="/podcasts"
          element={<LibraryView view="podcasts" viewTitle="podcasts" />}
        ></Route>
        <Route
          path="/artists"
          element={<LibraryView view="artists" viewTitle="artists" />}
        ></Route>
        <Route
          path="/albums"
          element={<LibraryView view="albums" viewTitle="albums" />}
        ></Route>
      </Routes>
    </section>
  );
};

export default LibraryPage;
