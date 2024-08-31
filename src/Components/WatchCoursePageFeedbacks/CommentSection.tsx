import React from "react";
import Comment from "../WatchCoursePageFeedbacks/Comment";
import { CommentData } from "@/types/commentFeedback";

interface CommentSectionProps {
  comments: CommentData[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div className="comment-section">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <button className="load-more-button">Load More</button>
    </div>
  );
};

export default CommentSection;
