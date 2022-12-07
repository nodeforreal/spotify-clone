import SubPage from "../SubPages/SubPage";

import CreatePlaylistPagePlaylist from "../PagePlaylist/CreatePlaylistPagePlaylist";

import PlaylistPagePlaylist from "../PagePlaylist/PlaylistPagePlaylist";
import PageFindSomeThing from "../CreatePlaylistPage/PageFindSomeThing";
import PageEndLine from "../ColumnTwo/PageEndLine";

import styles from "./PlaylistPage.module.css";

const PlaylistPage = ({ isUserPlaylist }) => {
  return (
    <section className={styles.wrapper}>
      <SubPage
        isUserPlaylist={isUserPlaylist}
        headWrapperClass={styles.headWrapper}
        isHeadImageUploadable={false}
        coverTypeText={"playlist"}
        headImage={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15ItPfseut13T4kDqanqgKO63KiaCLDJZPw&usqp=CAU"
        }
        titleText={"Playlist #7"}
        userNameText={"kaliyamoorthy"}
        headBgColor="#4d4d4d"
        showOptionBtn={true}
        showLikeBtn={true}
        showPlayBtn={true}
      >
        {isUserPlaylist && (
          <CreatePlaylistPagePlaylist
            rootMarginTop={"-120px"}
            stickyTop={"64px"}
          />
        )}
        {isUserPlaylist && <PageFindSomeThing />}
        {!isUserPlaylist && (
          <PlaylistPagePlaylist rootMarginTop={"-120px"} stickyTop={"64px"} />
        )}
      </SubPage>
      <PageEndLine />
    </section>
  );
};

export default PlaylistPage;
