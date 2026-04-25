import React from 'react';
import ActivityCard from './components/ActivityCard';
import './App.css';

function App() {
  const activities = [
    { id: 1, title: "Morning Yoga Session", category: "Wellness", description: "Start your day with deep breathing and mindful movement." },
    { id: 2, title: "Code Review & Refactor", category: "Development", description: "Enhance code quality and optimize performance of core modules." },
    { id: 3, title: "Gourmet Italian Cooking", category: "Culinary", description: "Master the art of handmade pasta and authentic sauces." },
    { id: 4, title: "Deep Space Exploration", category: "Scientific", description: "Analyze data from the latest telescope observations." }
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="main-title">Activity Dashboard</h1>
        <p className="subtitle">Track your progress and stay inspired</p>
      </header>
      
      <main className="grid-container">
        {activities.map((activity) => (
          <ActivityCard 
            key={activity.id} 
            title={activity.title} 
            category={activity.category} 
            description={activity.description}
          />
        ))}
      </main>

      <footer className="app-footer">
        <p>&copy; 2026 Premium Activity Tracker</p>
      </footer>
    </div>
  );
}

export default App;
