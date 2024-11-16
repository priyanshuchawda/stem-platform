import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, Typography, Button } from '@mui/material';
import UserType from '../types/User'; // Adjust import path as needed

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [recentActivity, setRecentActivity] = useState<string[]>([]);
  const [upcomingLessons, setUpcomingLessons] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock user data (you should fetch from your backend or authentication service)
    const userData: UserType = {
      uid: '12345',
      email: 'john.doe@example.com',
      displayName: 'John Doe', // Include displayName in the mock data
      achievements: ['Completed Lesson 1', 'Earned Badge 1'],
      recentActivity: ['Watched Tutorial 1', 'Completed Exercise 1'],
      upcomingLessons: ['Lesson 2', 'Lesson 3'],
    };

    setUser(userData);
    setAchievements(userData.achievements || []);
    setRecentActivity(userData.recentActivity || []);
    setUpcomingLessons(userData.upcomingLessons || []);
  }, []);

  const handleNavigateToLearningPath = (pathId: string) => {
    navigate(`/learning-path/${pathId}`);
  };

  return (
    <div>
      {user && (
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h5" gutterBottom>
            Welcome, {user.displayName || user.email}!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Here's an overview of your progress and activities.
          </Typography>

          {/* Display Achievements */}
          <Typography variant="h6">Achievements</Typography>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>

          {/* Display Recent Activity */}
          <Typography variant="h6">Recent Activity</Typography>
          <ul>
            {recentActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>

          {/* Display Upcoming Lessons */}
          <Typography variant="h6">Upcoming Lessons</Typography>
          <ul>
            {upcomingLessons.map((lesson, index) => (
              <li key={index}>{lesson}</li>
            ))}
          </ul>

          {/* Learning Path Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleNavigateToLearningPath('path-1')}
          >
            Explore Learning Path
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default Dashboard;
