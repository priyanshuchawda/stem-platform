import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, User as FirebaseUser } from 'firebase/auth';
import { TextField, Button, Typography, Alert } from '@mui/material';
import { doc, setDoc } from 'firebase/firestore';
import UserType from '../types/User'; // Importing the updated UserType

const UserProfile: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [interests, setInterests] = useState<string[]>([]);  // Track user interests
  const [learningPreferences, setLearningPreferences] = useState<string>('');  // Track learning preferences
  const [progress, setProgress] = useState<{ [key: string]: number }>({});  // Track progress

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage(''); // Clear previous error message

    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;

        // Create user in Firestore with additional fields
        const userRef = doc(db, 'users', newUser.uid);
        await setDoc(userRef, {
          uid: newUser.uid,
          email: newUser.email,
          interests: interests,
          learningPreferences: learningPreferences,
          progress: progress,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        } as UserType);

        console.log('User created successfully!');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in successfully!');
      }
    } catch (error: any) {
      console.error('Error during authentication:', error);
      // Handle specific Firebase error codes
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('This email is already in use. Please try logging in or use a different email.');
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage('Please provide a valid email address.');
      } else if (error.code === 'auth/weak-password') {
        setErrorMessage('Password is too weak. It must be at least 6 characters long.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  if (!user) {
    return (
      <div>
        <Typography variant="h4">User Profile</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            fullWidth
            margin="normal"
          />
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>} {/* Display error message */}
          <Button type="submit" variant="contained" color="primary">
            {isSignUp ? 'Sign Up' : 'Log In'}
          </Button>
          <Button onClick={() => setIsSignUp(!isSignUp)} variant="contained" color="secondary">
            {isSignUp ? 'Already have an account? Log In' : 'Create an account'}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <Typography variant="h4">Welcome to the Dashboard</Typography>
      <p>You are logged in as: {user.email}</p>
      {/* Dashboard content */}
      <Typography variant="h5">Your Interests:</Typography>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <Typography variant="h5">Learning Preferences: {learningPreferences}</Typography>
      <Typography variant="h5">Progress:</Typography>
      <pre>{JSON.stringify(progress, null, 2)}</pre>
    </div>
  );
};

export default UserProfile;
