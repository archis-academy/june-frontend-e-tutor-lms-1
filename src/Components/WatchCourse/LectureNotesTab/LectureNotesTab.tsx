import React from "react";
import styles from "./LectureNotesTab.module.scss";
import DownloadSimple from "@/public/common/DownloadSimple.png";

const LectureNotesTab: React.FC = () => {
  return (
    <div className={styles.lectureNotesTab}>
      <div className={styles.lectureContent}>
        <h4>Lecture Notes</h4>
        <button className={styles.downloadNotes}>
          <img className={styles.downloadIcon} src={DownloadSimple.src} alt="" />
          Download Notes
        </button>
      </div>

      <p>
        In ut aliquet ante. Curabitur mollis tincidunt turpis, sed aliquam mauris
        finibus vel. Praesent eget mi in mi maximus egestas. Mauris eget ipsum in
        justo bibendum pellentesque. Sed id arcu in arcu ullamcorper eleifend
        condimentum quis diam. Phasellus tempus, urna ut auctor mattis, nisi nunc
        tincidunt lorem, eu egestas augue lectus sit amet sapien. Maecenas tristique
        aliquet massa, a venenatis augue tempor in. Aliquam turpis urna, imperdiet in
        lacus a, posuere suscipit augue.
      </p>

      <ul>
        Nullam non quam a lectus finibus varius nec a orci. Aliquam efficitur sem
        cursus elit efficitur lacinia
        <li>
          Morbi sit amet pretium tellus. Donec blandit{" "}
          <span className={styles.blackText}>Fermentum tincidunt</span>.
        </li>
        <li>
          Proin iaculis sem et imperdiet tristique. Nam varius ac nisl id sodales.
          Donec iaculis interdum mattis.
        </li>{" "}
        <li>Curabitur posuere ultricies diam in egestas.</li>
        <li>
          Donec id diam et lacus pharetra vestibulum a id est. Mauris vestibulum
          massa quis elit feugiat, dictum maximus ipsum pellentesque.
        </li>
        <li>
          Sed elementum, libero id lacinia aliquet, purus nibh consectetur mauris,
          eget interdum mi lacus vitae sem.
        </li>
      </ul>

      <p>
        Donec congue aliquam lorem nec congue. Suspendisse eu risus mattis, interdum
        ante sed, fringilla urna. Praesent mattis dictum sapien a lacinia. Ut
        scelerisque magna aliquet,{" "}
        <span className={styles.blackText}>blandit arcu quis</span>, consequat purus.
        Suspendisse eget scelerisque felis. Integer vulputate urna laoreet purus
        vehicula condimentum. Donec quis luctus quam. Curabitur quis molestie ante.
        Nam pharetra sagittis varius. Sed ullamcorper facilisis bibendum.
      </p>
    </div>
  );
};

export default LectureNotesTab;
