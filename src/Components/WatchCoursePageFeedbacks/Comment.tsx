import React from "react";
import Reply from "../WatchCoursePageFeedbacks/Reply";
import CommentForm from "../WatchCoursePageFeedbacks/CommentForm";
import { CommentData, ReplyData } from "@/types/commentFeedback";
import IconFeedbacks from "@/public/Imgfeedback/IconFeedbacks.svg";

interface CommentProps {
  comment: CommentData;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <img src={IconFeedbacks.src} alt="" />
        <span className="comment-author">{comment.author}</span>
        <span className="comment-date">{comment.date}</span>
      </div>
      <p className="comment-text">{comment.text}</p>
      <div className="comment-replies">
        {comment.replies.map((reply: ReplyData) => (
          <Reply key={reply.id} reply={reply} />
        ))}
      </div>
      <CommentForm placeholder="Write your reply..." />
    </div>
  );
};

export default Comment;
