import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Assuming your Firebase config is correctly set up
import './App.css';
import LoginPage from './components/LoginPage'; // Import your LoginPage component

function App() {
  const [user, setUser] = useState(null); // State to track user authentication
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for changes in auth state (login/logout)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        navigate('/'); // Redirect to the root page if logged in
      } else {
        setUser(null);
        navigate('/login'); // Redirect to login if not logged in
      }
    });

    // Clean up the subscription when component unmounts
    return () => unsubscribe();
  }, [navigate]);

  return (
    <Routes>
      {/* Define Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          user ? (
            <div className="App">
              <header className="App-header">
                <img src={require('./logo.svg').default} className="App-logo" alt="logo" />
                <p>Welcome, {user.email}!</p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          ) : null
        }
      />
    </Routes>
  );
}

export default App;
