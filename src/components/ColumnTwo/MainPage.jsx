import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import MakeScrollable from "../MakeScrollable/MakeScrollable";
import TrackListBgHandler from "./TrackListRow/TrackListBgHandler";

// main pages
// import HomePage from "./Pages/HomePage";
// import SearchPage from "./Pages/SearchPage";
// import LibraryPage from "./Pages/LibraryPage";

// main pages
// import CreatePlaylistPage from "./Pages/CreatePlaylistPage";

// sub pages
// import CardsSectionView from "./CardsSectionView/CardsSectionView";
// import SearchResultsPage from "./Pages/SearchResultsPage";
// import ResultOptions from "./SearchResultsPage/ResultOptions";
// import AllResultSection from "./SearchResultsPage/AllResultSection";
// import PodcastAndShowSection from "./SearchResultsPage/PodcastAndShowSection";
// import EpisodePlaylist from "./EpisodePlaylist/EpisodePlaylist";
// import PlaylistPagePlaylist from "./PagePlaylist/PlaylistPagePlaylist";
// import AlbumPage from "./Pages/AlbumPage";
// import ArtistPage from "./Pages/ArtistPage";
// import UserPage from './Pages/UserPage';

// import HeadCoverBg from "./HeadCoverBg";

// reporting views
import LoaderView from "./ReportingViews/LoaderView";

import { globalSelectors } from "../../styles/GlobalSelectors";
import styles from "./MainPage.module.css";

// main pages
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const SearchPage = React.lazy(() => import("./Pages/SearchPage"));
const LibraryPage = React.lazy(() => import("./Pages/LibraryPage"));
const YourEpisodesPage = React.lazy(() => import("./Pages/YourEpisodesPage"));
const LikedSongsPage = React.lazy(() => import("./Pages/LikedSongsPage"));

const CardsSectionView = React.lazy(() =>
  import("./CardsSectionView/CardsSectionView")
);
const SearchResultsPage = React.lazy(() => import("./Pages/SearchResultsPage"));
const ResultOptions = React.lazy(() =>
  import("./SearchResultsPage/ResultOptions")
);
const AllResultSection = React.lazy(() =>
  import("./SearchResultsPage/AllResultSection")
);
const PodcastAndShowSection = React.lazy(() =>
  import("./SearchResultsPage/PodcastAndShowSection")
);
const EpisodePlaylist = React.lazy(() =>
  import("./EpisodePlaylist/EpisodePlaylist")
);
const PlaylistPagePlaylist = React.lazy(() =>
  import("./PagePlaylist/PlaylistPagePlaylist")
);

const AlbumPage = React.lazy(() => import("./Pages/AlbumPage"));
const ArtistPage = React.lazy(() => import("./Pages/ArtistPage"));
const UserPage = React.lazy(() => import("./Pages/UserPage"));
const PlaylistPage = React.lazy(() => import("./Pages/PlaylistPage"));
const UserTopTrackListView = React.lazy(() =>
  import("./UserPage/UserTopTrackListView")
);

const ShowPage = React.lazy(() => import("./Pages/ShowPage"));
const EpisodePage = React.lazy(() => import("./Pages/EpisodePage"));
const GenrePage = React.lazy(() => import("./Pages/GenrePage"));
const HeadCoverBg = React.lazy(() => import("./HeadCoverBg"));
const DownloadPage = React.lazy(() => import("./Pages/DownloadPage"));


const MainPage = () => {
  return (
    <section className={styles.wrapper}>
      <TrackListBgHandler />
      <HeadCoverBg />
      <MakeScrollable
        scrollWrapperClass={`${globalSelectors.mainPageScrollWrapper}`}
        contentWrapperClass={`${globalSelectors.mainPageScrollContentWrapper}`}
        scrollType={"vertical"}
      >
        <Suspense fallback={<LoaderView />}>
          <Routes>
            <Route index element={<HomePage />}></Route>
            <Route
              path="/genre/section"
              element={
                <CardsSectionView wrapperClass={styles.genreCardsSection} />
              }
            ></Route>

            <Route path="/genre/:genreID" element={<GenrePage />}></Route>
            <Route path="/genre/section/:sectionID" element={<CardsSectionView sectionTitle={'Title Check'}wrapperClass={styles.genreSectionView}/>}></Route>

            <Route path="/search" element={<SearchPage />} />
            <Route
              path="/search/:searchParam/*"
              element={<SearchResultsPage />}
            >
              <Route
                path=""
                element={
                  <>
                    <ResultOptions />
                    <AllResultSection />
                  </>
                }
              />

              <Route
                path="playlists"
                element={
                  <>
                    <ResultOptions />
                    <CardsSectionView
                      wrapperClass={styles.searchResultCardsSection}
                    />
                  </>
                }
              />

              <Route
                path="artists"
                element={
                  <>
                    <ResultOptions />
                    <CardsSectionView
                      wrapperClass={styles.searchResultCardsSection}
                    />
                  </>
                }
              />

              <Route
                path="albums"
                element={
                  <>
                    <ResultOptions />
                    <CardsSectionView
                      wrapperClass={styles.searchResultCardsSection}
                    />
                  </>
                }
              />

              <Route
                path="genres"
                element={
                  <>
                    <ResultOptions />
                    <CardsSectionView
                      wrapperClass={styles.searchResultCardsSection}
                    />
                  </>
                }
              />

              <Route
                path="users"
                element={
                  <>
                    <ResultOptions />
                    <CardsSectionView
                      wrapperClass={styles.searchResultCardsSection}
                    />
                  </>
                }
              />

              <Route
                path="podcastAndEpisodes"
                element={
                  <>
                    <ResultOptions />
                    <PodcastAndShowSection />
                  </>
                }
              />

              <Route
                path="tracks"
                element={
                  <>
                    <ResultOptions />
                    <PlaylistPagePlaylist
                      wrapperStyle={{
                        margin: "var(--topNavigationBar-height) 0 38px",
                      }}
                      rootMarginTop={"-190px"}
                      stickyTop="calc(var(--topNavigationBar-height) + var(--result-optionBar-height))"
                    />
                  </>
                }
              />

              <Route
                path="podcasts"
                element={
                  <CardsSectionView wrapperClass={styles.genreCardsSection} />
                }
              />

              <Route path="episodesFull" element={<EpisodePlaylist />} />
            </Route>
            <Route path="/collection/*" element={<LibraryPage />}></Route>
            <Route
              path="/collection/tracks"
              element={<LikedSongsPage />}
            ></Route>
            <Route
              path="/playlist/:playlistID"
              element={<PlaylistPage isUserPlaylist={true} />}
            ></Route>
            <Route
              path="/album/:albumID"
              element={<AlbumPage isUserPlaylist={true} />}
            />
            <Route path="/artist/:artistID" element={<ArtistPage />}></Route>
            <Route path="/user/:userID" element={<UserPage />} />
            <Route
              path="/user/:userID/followers"
              element={
                <CardsSectionView
                  wrapperClass={styles.userPageCardsSection}
                  sectionTitle="Followers"
                />
              }
            />
            <Route
              path="/user/:userID/following"
              element={
                <CardsSectionView
                  wrapperClass={styles.userPageCardsSection}
                  sectionTitle="Following"
                />
              }
            />
            <Route
              path="/user/:userID/playlists"
              element={
                <CardsSectionView
                  wrapperClass={styles.userPageCardsSection}
                  sectionTitle="Public Playlists"
                />
              }
            />
            <Route
              path="/user/:userID/top/tracks"
              element={<UserTopTrackListView />}
            />
            <Route path="/show/:showID" element={<ShowPage />} />
            <Route path="/episode/:episodeID" element={<EpisodePage />} />
            <Route path="/download" element={<DownloadPage />} />

            <Route
              path="/collection/episodes"
              element={<YourEpisodesPage />}
            ></Route>
          </Routes>
        </Suspense>
       
      </MakeScrollable>
    </section>
  );
};

export default MainPage;
