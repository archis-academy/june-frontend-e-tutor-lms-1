interface Feedback {
    id: number;
    name: string;
    comment: string;
    rating?: number;
    date: string;
  }
  
  class FeedbackDatabase {
    private feedbacks: Feedback[] = [
      {
        id: 1,
        name: "John Doe",
        comment: "This course was amazing! I learned so much.",
        rating: 5,
        date: "2024-08-01T10:30:00Z",
      },
      {
        id: 2,
        name: "Jane Smith",
        comment: "Good content, but I wish it covered more advanced topics.",
        rating: 4,
        date: "2024-08-05T14:45:00Z",
      },
      {
        id: 3,
        name: "Alice Johnson",
        comment: "The course was okay, but the pacing was too fast.",
        rating: 3,
        date: "2024-08-10T08:20:00Z",
      },
      // Diğer geri bildirimler...
    ];
  
    public getAllFeedbacks(): Feedback[] {
      return this.feedbacks;
    }
  
    public addFeedback(feedback: Feedback): void {
      this.feedbacks.push(feedback);
    }
  }
  
  export default FeedbackDatabase;
  