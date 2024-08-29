"use client";
import React, { useState } from "react";
import folder from "../../../public/Icons/FolderNotchOpen.svg";
import lecture from "../../../public/Icons/Lectures.svg";
import duration from "../../../public/Icons/Duration.svg";
import check from "../../../public/Icons/check.svg";
import chevronDown from "../../../public/Icons/chevrondownminor.svg";
import chevronUp from "../../../public/Icons/chevronup.svg";
import ReactPlayer from "react-player";
import Link from "next/link";
import { videos } from "@/utils/videoDatabse";
import "./Watchcourse.scss";

const Watchcourse: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [completed, setCompleted] = useState<boolean[]>(
    new Array(videos.length).fill(false)
  );
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const handleVideoChange = (videoId: number) => {
    const video = videos.find((v) => v.id === videoId);
    if (video) {
      setCurrentVideo(video);
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSections((prevState) =>
      prevState.includes(section)
        ? prevState.filter((sec) => sec !== section)
        : [...prevState, section]
    );
  };

  const handleMarkComplete = (index: number) => {
    const updatedCompleted = [...completed];
    updatedCompleted[index] = !updatedCompleted[index];
    setCompleted(updatedCompleted);
  };

  const sections = Array.from(new Set(videos.map((video) => video.section)));

  return (
    <div className="watchcourse">
      <header className="watchcourse-header">
        <Link href="/course" className="back-button">←</Link>
        <div className="info">
          <h1>{currentVideo.title}</h1>
          <div className="details">
            <img src={folder} alt="Folder Icon" className="icon" />
            <span className="text">{videos.length} lectures</span>
            <img src={lecture} alt="Lecture Icon" className="icon play-icon" />
            <span className="text">{currentVideo.lectures} lectures</span>
            <img src={duration} alt="Duration Icon" className="icon clock-icon" />
            <span className="text">{currentVideo.duration}</span>
          </div>
        </div>
        <button className="review-button">Write a Review</button>
        <button className="next-button">Next lecture</button>
      </header>

      <div className="content-wrapper">
        <div className="video-section">
          <ReactPlayer
            url={currentVideo.url}
            controls
            width="100%"
            height="100%"
            className="react-player"
          />
          <div className="video-info">
            <div className="title">{currentVideo.title}</div>
            <div className="metadata">
              <span>Last updated: {currentVideo.lastUpdated}</span>
              <span>Comments: {currentVideo.comments}</span>
            </div>
          </div>
        </div>

        <div className="course-contents">
          <div className="content-header">
            <span>Course Contents</span>
            <span className="progress-text">
              %
              {((completed.filter(Boolean).length / videos.length) * 100).toFixed(0)}{" "}
              Completed
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${
                  (completed.filter(Boolean).length / videos.length) * 100
                }%`,
              }}
            ></div>
          </div>
          <div className="lecture-list">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="section-group">
                <div
                  className="section-header"
                  onClick={() => toggleSection(section)}
                >
                  <h3>{section}</h3>
                  <div className="section-details">
                    <img
                      src={lecture}
                      alt="Lecture Icon"
                      className="icon"
                    />
                    <span>
                      {videos.filter((video) => video.section === section).length}{" "}
                      lectures
                    </span>
                    <img
                      src={duration}
                      alt="Duration Icon"
                      className="icon"
                    />
                    <span>
                      {videos
                        .filter((video) => video.section === section)
                        .reduce(
                          (total, video) => total + parseFloat(video.duration),
                          0
                        )}{" "}
                      min
                    </span>
                    <img
                      src={expandedSections.includes(section) ? chevronUp : chevronDown}
                      alt={expandedSections.includes(section) ? "Collapse Icon" : "Expand Icon"}
                      className="icon"
                    />
                  </div>
                </div>
                {expandedSections.includes(section) && (
                  <div className="lecture-list">
                    {videos
                      .filter((video) => video.section === section)
                      .map((video, index) => (
                        <div
                          key={video.id}
                          className={`lecture ${
                            currentVideo.id === video.id ? "active" : ""
                          }`}
                        >
                          <div
                            className="title"
                            onClick={() => handleVideoChange(video.id)}
                          >
                            <input
                              type="checkbox"
                              checked={completed[videos.indexOf(video)]}
                              onChange={() =>
                                handleMarkComplete(videos.indexOf(video))
                              }
                              className="checkbox"
                            />
                            <span>{video.title}</span>
                          </div>
                          <div className="details">
                            <img
                              src={
                                completed[videos.indexOf(video)] ? check : lecture
                              }
                              alt={completed[videos.indexOf(video)] ? "Completed Icon" : "Lecture Icon"}
                              className="icon play-icon"
                            />
                            <span>{video.duration}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchcourse;
