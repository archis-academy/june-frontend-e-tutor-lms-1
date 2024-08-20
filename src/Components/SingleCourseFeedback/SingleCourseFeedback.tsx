import React, { useState } from 'react';
import './SingleCourseFeedback.scss';

interface Feedback {
  name: string;
  comment: string;
}

const SingleCourseFeedback: React.FC = () => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && comment) {
      const newFeedback = { name, comment };
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
        {feedback.map((item, index) => (
          <div key={index} className="feedback-item">
            <h4>{item.name}</h4>
            <p>{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCourseFeedback;
