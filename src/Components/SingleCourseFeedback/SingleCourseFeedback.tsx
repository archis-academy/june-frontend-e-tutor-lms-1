import React, { useState, useEffect } from 'react';
import FeedbackDatabase from '@/utils/feedbackDatabase';
import './StudentFeedback.scss';

interface Feedback {
  id: number;
  name: string;
  profileImage: string;
  comment: string;
  rating: number; 
  date: string;
}

const StudentFeedback: React.FC = () => {
  const feedbackDB = new FeedbackDatabase();

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [filterRating, setFilterRating] = useState<number | null>(null);

  useEffect(() => {
    if (filterRating !== null) {
      setFeedbacks(feedbackDB.getFeedbacksByRating(filterRating));
    } else {
      setFeedbacks(feedbackDB.getAllFeedbacks());
    }
  }, [filterRating]);

  const handleFilterChange = (rating: number) => {
    setFilterRating(rating);
  };

  return (
    <div className="student-feedback">
      <div className="feedback-header">
        <h2>Student Feedback</h2>
        <div className="filter">
          <label>Filter by rating:</label>
          {[5, 4, 3, 2, 1].map(star => (
            <button key={star} onClick={() => handleFilterChange(star)}>
              {star} Stars
            </button>
          ))}
          <button onClick={() => setFilterRating(null)}>Show All</button>
        </div>
      </div>
      <div className="feedback-list">
        {feedbacks.map(feedback => (
          <div key={feedback.id} className="feedback-item">
            <div className="profile">
              <img src={feedback.profileImage} alt={`${feedback.name} profile`} />
              <div>
                <h4>{feedback.name}</h4>
                <div className="rating">
                  {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                </div>
              </div>
            </div>
            <p>{feedback.comment}</p>
            <span className="date">{new Date(feedback.date).toLocaleDateString()}</span>
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentFeedback;