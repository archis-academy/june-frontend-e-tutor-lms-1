import React from "react";
import CommentSection from "../WatchCoursePageFeedbacks/CommentSection";
import { comments } from "@/utils/commentsFeedbackData";

const WacthFeedbacks: React.FC = () => {
  return (
    <div className="WacthFeedbacks">
      <h1>Comments ({comments.length})</h1>
      <CommentSection comments={comments} />
    </div>
  );
};

export default WacthFeedbacks;
