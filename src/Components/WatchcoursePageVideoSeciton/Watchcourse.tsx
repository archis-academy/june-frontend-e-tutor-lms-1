import React, { useState } from 'react';
import { videos } from '@/utils/videoDatabse';
import './Watchcourse.scss';

const Watchcourse: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [completed, setCompleted] = useState<boolean[]>(new Array(videos.length).fill(false));

  const handleVideoChange = (videoId: number) => {
    const video = videos.find(v => v.id === videoId);
    if (video) {
      setCurrentVideo(video);
    }
  };

  const handleMarkComplete = (index: number) => {
    const updatedCompleted = [...completed];
    updatedCompleted[index] = !updatedCompleted[index];
    setCompleted(updatedCompleted);
  };

  return (
    <div className="watchcourse">
      {/* Header */}
      <header className="watchcourse-header">
        <button className="back-button">←</button>
        <div className="info">
          <h1>{currentVideo.title}</h1>
          <div className="details">
            <span className="icon file-icon">📁</span>
            <span className="text">6 Sections</span>
            <span className="icon play-icon">▶</span>
            <span className="text">{videos.length} lectures</span>
            <span className="icon clock-icon">⏰</span>
            <span className="text">{currentVideo.duration}</span>
          </div>
        </div>
        <button className="review-button">Write a Review</button>
      </header>

      {/* Video Section */}
      <div className="video-section">
        <video width="1229" height="690" controls>
          <source src={currentVideo.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-info">
          <div className="title">{currentVideo.title}</div>
          <div className="metadata">
            <span>Last updated: {currentVideo.lastUpdated}</span>
            <span>Comments: {currentVideo.comments}</span>
          </div>
        </div>
      </div>

      {/* Course Contents */}
      <div className="course-contents">
        <div className="content-header">
          <span>Course Contents</span>
          <span className="progress-text">Course Progress: {completed.filter(Boolean).length / videos.length * 100}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${(completed.filter(Boolean).length / videos.length) * 100}%` }}></div>
        </div>
        <div className="lecture-list">
          {videos.map((video, index) => (
            <div key={video.id} className="lecture">
              <div className="title" onClick={() => handleVideoChange(video.id)}>
                {video.title}
                <span className="check-icon">{completed[index] ? '✔' : ''}</span>
              </div>
              <div className="details">
                <span className="play-icon">{currentVideo.id === video.id ? '▶' : '⏸'}</span>
                <span className="clock-icon">{video.duration}</span>
                <button onClick={() => handleMarkComplete(index)} className="complete-button">
                  {completed[index] ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watchcourse;
