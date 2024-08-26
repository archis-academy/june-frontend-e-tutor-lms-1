import React from "react";
import styles from "./AttachFileTab.module.scss";
import FileText from "@/public/common/FileText.png";

const AttachFileTab: React.FC = () => {
  return (
    <div className={styles.attachFileTab}>
      <h4>Attach Files(01) </h4>

      <div className={styles.WatchFile}>
        <div className={styles.infoNumberCont}>
          <img src={FileText.src} alt="" />
          <div className={styles.numberInfoBox}>
            <p className={styles.fileInfo}>Create account on webflow.pdf</p>
            <p className={styles.numberIcon}>(12.6 MB)</p>
          </div>
        </div>
        <button className={styles.watchDownloadFile}>Download File </button>
      </div>
    </div>
  );
};

export default AttachFileTab;
