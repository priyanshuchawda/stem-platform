interface LearningPath {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
  // Additional optional properties:
  difficulty?: string;        // Difficulty level of the learning path, e.g., "Beginner", "Intermediate", "Advanced"
  prerequisites?: string[];    // List of prerequisites
}

interface Topic {
  id: string;
  title: string;
  description: string;
  content: Content[];
  // Additional optional properties:
  learningObjectives?: string[];  // Key learning goals for the topic
  resources?: string[];           // Links to additional resources
}

interface Content {
  id: string;
  type: ContentType;
  url: string;
  // Additional optional properties:
  title?: string;                 // Title of the content
  description?: string;           // Brief description of the content
}

enum ContentType {
  Video = 'video',
  Quiz = 'quiz',
  Exercise = 'exercise',
  Project = 'project',
  Interactive = 'interactive',    // Added Interactive content type
  Article = 'article',            // Added Article content type
  Simulation = 'simulation',      // Added Simulation content type
}

export { LearningPath, Topic, Content, ContentType };
