'use client';

import React, { useState, useEffect } from 'react';
import FeedbackDatabase from '@/utils/feedbackDatabase/feedbackDatabase';
import './SingleCourseFeedback.scss';

interface Feedback {
  id: number;
  name: string;
  comment: string;
  date: string;
}

const SingleCourseFeedback: React.FC = () => {
  const feedbackDB = new FeedbackDatabase();
  
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    const allFeedbacks = feedbackDB.getAllFeedbacks();
    setFeedback(allFeedbacks);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      const newFeedback: Feedback = {
        id: feedback.length + 1,
        name,
        comment,
        date: new Date().toISOString(), 
      };
      feedbackDB.addFeedback(newFeedback); 
      setFeedback([newFeedback, ...feedback]);
      setName('');
      setComment('');
    }
  };

  return (
    <div className="feedback-container">
      <h2>Course Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your feedback"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit Feedback</button>
      </form>

      <div className="feedback-list">
        {feedback.map((item) => (
          <div key={item.id} className="feedback-item">
            <h4>{item.name}</h4>
            <p>{item.comment}</p>
            <span>{new Date(item.date).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCourseFeedback;