import React from 'react';
import './index.css';
import './index2.css';
import './index3.css';
const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">Comicbooks.com</div>

          <ul className="nav-links">
            <li><a href="#">Types</a></li>
            <li><a href="#">Genres</a></li>
            <li><a href="#">Newest</a></li>
            <li><a href="#">Updated</a></li>
            <li><a href="#">Added</a></li>
            <li><a href="#">Random</a></li>
          </ul>
        </div>

        <div className="navbar-center">
          <input
            type="text"
            placeholder="Search manga..."
            className="search-bar"
          />
        </div>

        <div className="navbar-right">
          <button className="filter-btn">Filter</button>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <div className="cards-container">
        <div className="card">
          <h2>Completed</h2>
          <h3>Naruto</h3>
          <p>When Naruto is subsequently appointed to Team 7...</p>
          <p>Action Shounen Super Power</p>

        </div>

        <div className="card">
          <h2>Releasing</h2>
          <h3>One Punch Man</h3>
          <p>After rigorously training for three years, the ordinary...</p>
          <p>Action Comedy Drama</p>

        </div>

        <div className="card">
          <h2>Releasing</h2>
          <h3>Dragon Ball Super</h3>
          <p>having defeated Boo, Goku is starting to get..</p>
          <p>Action Sci-Fi Super Power</p>
        </div>
      </div>

    </div>
  );
};

export default App;