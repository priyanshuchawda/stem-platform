interface UserType {
  uid: string; // Unique identifier for the user
  email: string; // User's email address
  displayName?: string; // User's display name (can be optional if not set)
  interests?: string[]; // A list of user interests like "Robotics", "AI", etc.
  learningPreferences?: string; // User's preferred learning style or speed
  progress?: { [key: string]: number }; // Tracks progress on various topics
  createdAt?: string; // Timestamp for when the user account was created
  updatedAt?: string; // Timestamp for when the user profile was last updated
  profilePictureUrl?: string; // URL to the user's profile picture
  bio?: string; // A short description about the user
  achievements?: string[]; // A list of the user's achievements
  role?: 'student' | 'mentor' | 'admin'; // Role of the user in the platform
  recentActivity?: string[]; // A list of the user's recent activities
  upcomingLessons?: string[]; // A list of upcoming lessons for the user
}

export default UserType;
