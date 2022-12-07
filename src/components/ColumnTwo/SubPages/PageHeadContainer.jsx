import { useContext } from "react";
import { Context } from "./SubPage";

import HeadImage from "./PageHead/HeadImage";
import UserHeadImage from "./UserPageHead/HeadImage";

import HeadName from "./PageHead/HeadName";
import HeadTitle from "./PageHead/HeadTitle";
import HeadInfos from "./HeadInfos";

import styles from "./PageHeadContainer.module.css";

const PageHeadContainer = () => {
  const {
    headImageWrapperClass,
    headWrapperClass,
    headBgColor,
    isHeadImageUploadable,
    headImage,
    headSvg,
    coverTypeText,
    titleText,
    pageType
  } = useContext(Context);


  return (
    <div
      className={`${styles.wrapper} ${headWrapperClass}`}
      style={{ "--head-bg-color": headBgColor }}
    >
      <div className={styles.sectionLeft}>
        {isHeadImageUploadable ? (
          <UserHeadImage image={headImage} pageType={pageType}/>
        ) : (
          <HeadImage
            image={headImage}
            headSvg={headSvg}
            headImageWrapperClass={headImageWrapperClass}
            pageType={pageType}
          />
        )}
      </div>

      <div className={styles.sectionRight}>
        <HeadName coverTypeText={coverTypeText} />
        <HeadTitle titleText={titleText} />
        <HeadInfos />
      </div>
    </div>
  );
};

export default PageHeadContainer;
