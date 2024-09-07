export interface Video {
  id: number;
  title: string;
  url: string;
  description: string;
  duration: string; 
  section: string;
  lectures: number;
  completed: boolean;
  lastUpdated: string;
  comments: number;
}

export const videos: Video[] = [
  {
      id: 1,
      title: "Archi's Academy - Code your Future",
      url: "https://www.youtube.com/watch?v=l1PlKz92fjQ",
      description: "An introductory video to help you get started with our platform. Learn about key features and how to navigate through the site.",
      duration: "2m ",
      section: "Getting Started",
      lectures: 1,
      completed: false,
      lastUpdated: "2024-08-26",
      comments: 25,
  },
  {
      id: 2,
      title: "Complete Website Responsive Design: from Figma to Webflow to Website Design",
      url: "https://example.com/video2",
      description: "Learn how to create a responsive website from start to finish.",
      duration: "19m",
      section: "Getting Started",
      lectures: 4,
      completed: false,
      lastUpdated: "2024-08-15",
      comments: 154,
  },
  {
      id: 3,
      title: "JavaScript Essentials: Understanding the Basics",
      url: "https://example.com/video3",
      description: "Master the fundamentals of JavaScript with hands-on examples.",
      duration: "15m",
      section: "Programming Foundations",
      lectures: 8,
      completed: false,
      lastUpdated: "2024-07-30",
      comments: 98,
  },
  {
      id: 4,
      title: "Advanced CSS Techniques: Flexbox, Grid, and Beyond",
      url: "https://example.com/video4",
      description: "Enhance your CSS skills by learning advanced layout techniques.",
      duration: "10m",
      section: "Styling the Web",
      lectures: 6,
      completed: false,
      lastUpdated: "2024-06-12",
      comments: 203,
  },
  {
      id: 5,
      title: "React Development: Building Interactive User Interfaces",
      url: "https://example.com/video5",
      description: "Develop dynamic web applications using React.",
      duration: "25m",
      section: "Frontend Frameworks",
      lectures: 12,
      completed: false,
      lastUpdated: "2024-08-05",
      comments: 347,
  },
  {
      id: 6,
      title: "Node.js and Express: Building Back-End APIs",
      url: "https://example.com/video6",
      description: "Create powerful back-end services with Node.js and Express.",
      duration: "18m",
      section: "Server-Side Programming",
      lectures: 10,
      completed: false,
      lastUpdated: "2024-05-25",
      comments: 128,
  },
  {
      id: 7,
      title: "Full-Stack Web Development: From Database to Deployment",
      url: "https://example.com/video7",
      description: "Learn to build full-stack applications from the ground up.",
      duration: "30m",
      section: "Full-Stack Mastery",
      lectures: 15,
      completed: false,
      lastUpdated: "2024-07-20",
      comments: 412,
  }
  // Add more video objects as needed
];
