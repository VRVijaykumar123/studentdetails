import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
        <img src="MY PHOTO.jpg" alt="eye" />
        </div>
        <h2 className="name">Name: VIJAY KUMAR V R</h2>
        <p className="registration">Registration No: 212221040178</p>
        <button className="button" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            Additional details or content can go here...
          </div>
        )}
      </div>
    </div>
  );
};

export default App;