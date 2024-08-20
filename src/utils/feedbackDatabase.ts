import { Feedback } from "@/types/feedback";
  class FeedbackDatabase {
    private feedbacks: Feedback[] = [
      {
        id: 1,
        name: "John Doe",
        profileImage: "path/to/profile1.jpg",
        comment: "This course was amazing! I learned so much.",
        rating: 5,
        date: "2024-08-01T10:30:00Z",
      },
      {
        id: 2,
        name: "Jane Smith",
        profileImage: "path/to/profile2.jpg",
        comment: "Good content, but I wish it covered more advanced topics.",
        rating: 4,
        date: "2024-08-05T14:45:00Z",
      },
      {
        id: 3,
        name: "Alice Johnson",
        profileImage: "path/to/profile3.jpg",
        comment: "The course was okay, but the pacing was too fast.",
        rating: 3,
        date: "2024-08-10T08:20:00Z",
      },
      {
        id: 4,
        name: "Bob Brown",
        profileImage: "path/to/profile4.jpg",
        comment: "I didn't find the course useful for my level of knowledge.",
        rating: 2,
        date: "2024-08-12T11:10:00Z",
      },
      {
        id: 5,
        name: "Charlie Davis",
        profileImage: "path/to/profile5.jpg",
        comment: "Excellent course! Highly recommended.",
        rating: 5,
        date: "2024-08-15T09:00:00Z",
      },
    ];
  
    public getAllFeedbacks(): Feedback[] {
      return this.feedbacks;
    }
  
    public getFeedbacksByRating(rating: number): Feedback[] {
      return this.feedbacks.filter(feedback => feedback.rating === rating);
    }
  }
  
  export default FeedbackDatabase;