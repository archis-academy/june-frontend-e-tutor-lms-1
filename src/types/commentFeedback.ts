export interface ReplyData {
  id: string;
  author: string;
  date: string;
  text: string;
}

export interface CommentData {
  id: string;
  author: string;
  date: string;
  text: string;
  replies: ReplyData[];
}
