export interface CommentProps {
  id?: number;
  username?: string;
  avatar?: string;
  role?: string;
  timeAgo?: string;
  content?: string;
  replies?: CommentProps[];
}
