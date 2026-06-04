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
          <h3>Card 1</h3>
          <p>Beschrijving van card 1</p>
        </div>

        <div className="card">
          <h3>Card 2</h3>
          <p>Beschrijving van card 2</p>
        </div>

        <div className="card">
          <h3>Card 3</h3>
          <p>Beschrijving van card 3</p>
        </div>
      </div>

    </div>
  );
};

export default App;