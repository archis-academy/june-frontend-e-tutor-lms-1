"use client";
import React, { useState, useEffect } from "react";
import feedbackDatabase from "@/utils/feedbackDatabase";
import { Feedback } from "@/types/feedback";
import "./SingleCourseFeedback.scss";

const StudentFeedback: React.FC = () => {
  const feedbackDB = feedbackDatabase;

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  useEffect(() => {
    if (filterRating !== null) {
      setFeedbacks(
        feedbackDB.filter((feedback) => feedback.rating === filterRating)
      );
    } else {
      setFeedbacks(feedbackDB);
    }
  }, [filterRating]);

  const handleFilterChange = (rating: number | null) => {
    setFilterRating(rating);
    if (rating === null) {
      setFeedbacks(feedbackDB);
    } else {
      setFeedbacks(feedbackDB.filter((feedback) => feedback.rating === rating));
    }
    setVisibleCount(6);
  };

  const loadMoreFeedback = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="student-feedback">
      <div className="feedback-header">
        <h2>Student Feedback</h2>
        <div className="filter">
          <label htmlFor="filter">Filter by rating:</label>
          <select
            id="filter"
            onChange={(e) =>
              handleFilterChange(e.target.value ? Number(e.target.value) : null)
            }
          >
            <option value="">Show All</option>
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>
                {star} Stars
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="feedback-list">
        {feedbacks.slice(0, visibleCount).map((feedback) => (
          <div key={feedback.id} className="feedback-item">
            <div className="profile">
              <img src={feedback.profileImage} alt={`${feedback.name} profile`} />
              <div>
                <h4>{feedback.name}</h4>
                <div className="rating">
                  {"★".repeat(feedback.rating)}
                  {"☆".repeat(5 - feedback.rating)}
                </div>
              </div>
            </div>
            <p>{feedback.comment}</p>
            <span className="date">
              {new Date(feedback.date).toLocaleDateString()}
            </span>
            <div className="divider"></div>
          </div>
        ))}
      </div>
      <button className="load-more" onClick={loadMoreFeedback}>
  <span className="load-more-text">Load More</span>
  <span className="loading-spinner"></span>
</button>

    </div>
  );
};

export default StudentFeedback;
