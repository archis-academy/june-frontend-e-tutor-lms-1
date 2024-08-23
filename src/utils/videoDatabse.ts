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
      title: "Complete Website Responsive Design: from Figma to Webflow to Website Design",
      url: "https://example.com/video1",
      description: "Learn how to create a responsive website from start to finish.",
      duration: "19h 37m",
      section: "Secret of Good Design",
      lectures: 4,
      completed: false,
      lastUpdated: "2024-08-15",
      comments: 154,
    },
    // Add more video objects as needed
  ];
  