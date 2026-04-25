import React from 'react';
import './ActivityCard.css';

const ActivityCard = ({ title, category, description }) => {
  // Adding a timestamp as an internal "value"
  const timestamp = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="activity-card">
      <div className="card-content">
        <span className="category-tag">{category}</span>
        <h3 className="activity-title">{title}</h3>
        <p className="activity-description">{description}</p>
        <div className="card-footer">
          <span className="timestamp">{timestamp}</span>
          <div className="arrow-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
      <div className="card-glow"></div>
    </div>
  );
};

export default ActivityCard;
