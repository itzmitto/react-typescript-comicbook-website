import React from 'react';
import './index.css';
import './index2.css';

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

      <main className="content">
        <h1>Hello World</h1>
      </main>
    </div>
  );
};

export default App;