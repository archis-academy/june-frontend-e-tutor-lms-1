import React from "react";
import { ReplyData } from "@/types/commentFeedback";

interface ReplyProps {
  reply: ReplyData;
}

const Reply: React.FC<ReplyProps> = ({ reply }) => {
  return (
    <div className="reply">
      <span className="reply-author">{reply.author}</span>
      <span className="reply-date">{reply.date}</span>
      <p className="reply-text">{reply.text}</p>
    </div>
  );
};

export default Reply;
