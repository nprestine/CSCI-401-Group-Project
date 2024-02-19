import React from "react";
import "./App.css"; // Import the updated App.css

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-title">Valence Vibrations</h1>
        <p className="tagline">Enhance your emotional journey.</p>
        <button className="start-button">Explore Now</button>
      </header>
      <main className="feature-section">
        <div className="feature-container">
          <h2 className="feature-title">Features</h2>
          <div className="feature-cards">
            <div className="card">
              <h3>Emotion Recognition</h3>
              <p>
                Unveil the layers of your emotions with precise AI analysis.
              </p>
            </div>
            <div className="card">
              <h3>Mood Tracking</h3>
              <p>Monitor your emotional trends and gain valuable insights.</p>
            </div>
            <div className="card">
              <h3>Personalized Insights</h3>
              <p>Get tailored guidance to foster your emotional well-being.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
