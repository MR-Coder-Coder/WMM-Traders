import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure your global styles are imported
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router for routing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Optionally, measure performance in your app (optional)
reportWebVitals();
