import React from "react";
import styles from "./CommentsTab.module.scss";
import { CommentProps } from "@/types/commentTab";
import { comments } from "@/utils/commentData";
import point from "@/public/CommentAvatar/point.svg";
import chatsCircle from "@/public/CommentAvatar/ChatsCircle.svg";
import line from "@/public/CommentAvatar/line.svg";

const Comment: React.FC<CommentProps> = ({
  username,
  avatar,
  role,
  timeAgo,
  content,
  replies,
}) => {
  return (
    <div className={styles.comment}>
      <img
        src={avatar}
        alt={`${username}'s avatar`}
        className={styles.comment__avatar}
      />
      <div className={styles.comment__content}>
        <div className={styles.comment__header}>
          <span className={styles.comment__username}>{username}</span>
          {role && (
            <span className={styles.comment__role} style={{ color: "#564FFD" }}>
              ADMIN
            </span>
          )}
          {role && (
            <img src={point.src} alt="point" className={styles.comment__point} />
          )}
          <span className={styles.comment__time} style={{ color: "#6E7485" }}>
            {timeAgo}
          </span>
        </div>
        <p className={styles.comment__text}>{content}</p>

        {replies && replies.length > 0 && (
          <div className={styles.comment__replies}>
            {replies.map((reply) => (
              <div key={reply.id} className={styles.comment__reply}>
                <img
                  src={chatsCircle.src}
                  alt="reply"
                  className={styles.comment__replyIcon}
                />
                <Comment {...reply} />
              </div>
            ))}
          </div>
        )}
      </div>

      <img src={line.src} alt="separator" className={styles.comment__line} />
    </div>
  );
};

const CommentsTab: React.FC = () => {
  return (
    <div className={styles.commentsTab}>
      <h2>Comments({comments.length})</h2>

      {comments.map((comment, index) => (
        <div key={comment.id}>
          {comment.username === "Ronald Richards" && (
            <div>
              <Comment {...comment} />

              {comments
                .filter(
                  (subComment) =>
                    subComment.username &&
                    ["Kristin Watson", "Cody Fisher"].includes(subComment.username)
                )
                .map((subComment) => (
                  <div key={subComment.id}>
                    <Comment {...subComment} />
                  </div>
                ))}
            </div>
          )}
          {/* Diğer yorumlar */}
          {!["Ronald Richards", "Kristin Watson", "Cody Fisher"].includes(
            comment.username || ""
          ) && <Comment {...comment} />}
        </div>
      ))}
    </div>
  );
};

export default CommentsTab;
