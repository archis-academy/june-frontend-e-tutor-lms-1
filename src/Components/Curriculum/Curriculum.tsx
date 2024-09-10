import Image from "next/image";
import { curriculumData } from "@/utils/curriculumData";
import play from "@/public/common/play-icon.svg";
import clock from "@/public/common/clock.svg";
import playBlack from "@/public/common/play-black.svg";
import file from "@/public/common/file.svg";
import fileOpen from "@/public/common/file-open.svg";
import dropDown from "@/public/common/drop-down-arrow.svg";
import styles from "./Curriculum.module.scss";

export const Curriculum = () => {
  const convertSeconds = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${hours}h ${minutes}m`;
  };
  return (
    <div className={styles.curriculum}>
      <div className={styles.titleWrapper}>
        <h2>Curriculum</h2>
        <span>
          <span>
            <span>
              <Image src={fileOpen} alt="file-icon" />
            </span>
            6 sections
          </span>
          <span>
            <span>
              <Image src={play} alt="play-icon" />
            </span>
            167 lectures
          </span>
          <span>
            <span>
              <Image src={clock} alt="clock-icon" />
            </span>
            {convertSeconds(55456)}
          </span>
        </span>
      </div>
      <div className={styles.curriculumListWrapper}>
        {curriculumData.map((data, index) => {
          return (
            <div className={styles.listItem} key={index}>
              <div className={styles.itemDetail}>
                <div className={styles.titleDropDown}>
                  <span>
                    <Image src={dropDown} alt="drop-down-icon" />
                  </span>
                  <p>{data.title}</p>
                </div>
                <div className={styles.detailedInfo}>
                  <span>
                    <span>
                      <Image src={play} alt="play-icon" />
                    </span>
                    {data.lectures} lectures
                  </span>
                  <span>
                    <span>
                      <Image src={clock} alt="clock-icon" />
                    </span>
                    {convertSeconds(data.totalDuration)}
                  </span>
                </div>
              </div>
              <ul>
                {data.content.map((topic, index) => {
                  const duration = topic.duration
                    ? convertSeconds(topic.duration)
                    : null;
                  return (
                    <li key={index}>
                      <div className={styles.titleAndIcon}>
                        <span>
                          <Image
                            src={topic.type == "video" ? playBlack : file}
                            alt="clock-icon"
                          />
                        </span>
                        <p>{topic.title}</p>
                      </div>
                      <p className={styles.duration}>{duration || topic.size}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};