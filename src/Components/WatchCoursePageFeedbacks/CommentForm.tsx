"use client";

import React, { useState } from "react";

interface CommentFormProps {
  placeholder: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ placeholder }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Yorum gönderme işlemi burada yapılacak
    setValue("");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="comment-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="post-reply-button">
        Post Reply
      </button>
    </form>
  );
};

export default CommentForm;
