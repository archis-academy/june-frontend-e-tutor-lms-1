import React, { useState } from "react";
import styles from "./CommentsTab.module.scss";
import { CommentProps } from "@/types/commentTab";
import { comments } from "@/utils/commentData";
import point from "@/public/CommentAvatar/point.svg";
import chatsCircle from "@/public/CommentAvatar/ChatsCircle.svg";
import topline from "@/public/CommentAvatar/line.svg";
import line from "@/public/CommentAvatar/line.svg";
import subline from "@/public/CommentAvatar/line.svg";
import spinner from "@/public/CommentAvatar/spinner.svg";

const Comment: React.FC<CommentProps> = ({
  username,
  avatar,
  role,
  timeAgo,
  content,
  replies,
}) => {
  const [isReplied, setIsReplied] = useState(false);

  const handleReplyClick = () => {
    setIsReplied((prev) => !prev);
  };

  return (
    <div className={styles.comment}>
      {username === "Ronald Richards" && (
        <div className={styles.comment__branchLine} />
      )}
      {username === "Kristin Watson" && (
        <img src={topline.src} alt="line" className={styles.comment__topline} />
      )}
      {username === "Cody Fisher" && (
        <img src={line.src} alt="line" className={styles.comment__line} />
      )}

      <img
        src={avatar}
        alt={`${username}'s avatar`}
        className={styles.comment__avatar}
      />
      <div className={styles.comment__content}>
        <div className={styles.comment__header}>
          <span className={styles.comment__username}>{username}</span>
          {role === "ADMIN" && <span className={styles.comment__role}>ADMIN</span>}
          <img src={point.src} alt="point" className={styles.comment__point} />
          <span className={styles.comment__time}>{timeAgo}</span>
        </div>
        <div className={styles.comment__text}>
          {content}
          <div className={styles.comment__replyOption}>
            <img
              src={chatsCircle.src}
              alt="reply"
              className={`${styles.comment__replyIcon} ${
                isReplied ? styles.activeReply : ""
              } ${username === "Theresa Webb" ? styles.specialReplyIcon : ""}`}
              onClick={handleReplyClick}
            />
            <span
              className={`${styles.comment__replyText} ${
                isReplied ? styles.activeReply : ""
              } ${username === "Theresa Webb" ? styles.specialReplyText : ""}`}
              onClick={handleReplyClick}
            >
              Reply
            </span>
          </div>
        </div>

        {replies && replies.length > 0 && (
          <div className={styles.comment__replies}>
            {replies.map((reply) => (
              <div key={reply.id} className={styles.comment__replyItem}>
                <Comment {...reply} />
              </div>
            ))}
          </div>
        )}

        {username === "Theresa Webb" && (
          <div className={styles.comment__replyBox}>
            <img src={subline.src} className={styles.comment__subline} alt="line" />
            <div className={styles.comment__replyInputWrapper}>
              <button className={styles.comment__replyButton}>
                <img
                  src={chatsCircle.src}
                  alt="Chats Icon"
                  className={styles.comment__chatsIcon}
                />
                <span className={styles.comment__replyText}>Write your reply</span>
              </button>
              <button className={styles.comment__postButton}>Post Reply</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CommentsTab: React.FC = () => {
  const [visibleComments, setVisibleComments] = useState(8);
  const [loading, setLoading] = useState(false);

  const loadMoreFeedback = () => {
    setLoading(true);

    setTimeout(() => {
      setVisibleComments((prevVisible) =>
        Math.min(prevVisible + 3, comments.length)
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className={styles.commentsTab}>
      <h2>Comments ({comments.length})</h2>
      {comments.slice(0, visibleComments).map((comment) => (
        <div key={comment.id}>
          <Comment {...comment} />
        </div>
      ))}

      {visibleComments < comments.length && (
        <button className={styles.load_more} onClick={loadMoreFeedback}>
          <span className={styles.load_more_text}>Load More</span>
          {loading && (
            <img
              src={spinner.src}
              alt="Loading"
              className={styles.loading_spinner}
            />
          )}
        </button>
      )}
    </div>
  );
};

export default CommentsTab;
