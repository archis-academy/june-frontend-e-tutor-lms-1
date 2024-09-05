import React from "react";
import styles from "./CommentsTab.module.scss";
import { CommentProps } from "@/types/commentTab";
import { comments } from "@/utils/commentData";
import point from "@/public/CommentAvatar/point.svg";
import chatsCircle from "@/public/CommentAvatar/ChatsCircle.svg";
import line from "@/public/CommentAvatar/line.svg";
import theresaAvatar from "@/public/CommentAvatar/theresa_avatar.svg"; // Theresa için avatar

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
          {role === "ADMIN" && <span className={styles.comment__role}>ADMIN</span>}
          <img src={point.src} alt="point" className={styles.comment__point} />
          <span className={styles.comment__time}>{timeAgo}</span>
        </div>
        <p className={styles.comment__text}>
          {content}
          <div className={styles.comment__replyOption}>
            <img
              src={chatsCircle.src}
              alt="reply"
              className={styles.comment__replyIcon}
            />
            <span className={styles.comment__replyText}>Reply</span>
          </div>
        </p>

        {replies && replies.length > 0 && (
          <div className={styles.comment__replies}>
            {replies.map((reply) => (
              <div key={reply.id} className={styles.comment__replyItem}>
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

        {/* Theresa Webb'e özel "Write your reply" kutusu */}
        {username === "Theresa Webb" && (
          <div className={styles.comment__replyBox}>
            <img
              src={theresaAvatar.src}
              alt="Theresa Avatar"
              className={styles.comment__avatarSmall}
            />
            <img src={chatsCircle.src} className={styles.comment__chatsIcon} />
            <input
              type="text"
              placeholder="Write your reply"
              className={styles.comment__input}
            />
            <img src={line.src} className={styles.comment__line} />
            <button className={styles.comment__button}>Post Reply</button>
          </div>
        )}
      </div>
    </div>
  );
};

const CommentsTab: React.FC = () => {
  return (
    <div className={styles.commentsTab}>
      <h2>Comments({comments.length})</h2>

      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment {...comment} />
        </div>
      ))}
    </div>
  );
};

export default CommentsTab;
