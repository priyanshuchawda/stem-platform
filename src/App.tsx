import { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'; // Import MUI components for theming
import UserProfile from './components/UserProfile';
import Dashboard from './components/Dashboard';
import { auth } from './firebase'; // Import auth for login check

// Create a theme instance
const theme = createTheme({
  palette: {
    mode: 'light', // You can switch to 'dark' mode if you prefer
  },
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {/* Render UserProfile if not logged in, otherwise render Dashboard */}
        {isLoggedIn ? <Dashboard /> : <UserProfile />}
      </div>
    </ThemeProvider>
  );
}

export default App;
