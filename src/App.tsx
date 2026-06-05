import React from 'react';
import './index.css';
import './index2.css';
import './index3.css';
import './index3.css';
import './index4.css';
import './index5.css';
import './index6.css';

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
          <div className="search-wrapper">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Search manga..."
              className="search-bar"
            />
          </div>
        </div>
        <div className="navbar-right">
          <button className="filter-btn">Filter</button>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <div className="cards-container">

        <div className="card">
          <div className="card-content">
            <p className="card-status">Completed</p>
            <h3 className="card-title">Naruto</h3>
            <p className="card-description">
              Whenever Naruto Uzumaki proclaims that he will someday...
            </p>
            <p className="card-meta">Chap 700.6 · Vol 72</p>
            <div className="card-tags">
              <span className="card-tag">Action</span>
              <span className="card-tag">Shounen</span>
              <span className="card-tag">Super Power</span>
            </div>
          </div>
          <div className="card-image">
            <img src="assets/img1.jpg" alt="Naruto cover" />
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <p className="card-status">Releasing</p>
            <h3 className="card-title">One Punch Man</h3>
            <p className="card-description">
              After rigorously training for three years, the ordinary...
            </p>
            <p className="card-meta">Chap 195 · Vol 30</p>
            <div className="card-tags">
              <span className="card-tag">Action</span>
              <span className="card-tag">Comedy</span>
              <span className="card-tag">Drama</span>
            </div>
          </div>
          <div className="card-image">
            <img src="assets/img2.jpg" alt="One Punch Man cover" />
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <p className="card-status">Releasing</p>
            <h3 className="card-title">Dragon Ball Super</h3>
            <p className="card-description">
              Having defeated Boo, Goku is starting to get...
            </p>
            <p className="card-meta">Chap 103 · Vol 22</p>
            <div className="card-tags">
              <span className="card-tag">Action</span>
              <span className="card-tag">Sci-Fi</span>
              <span className="card-tag">Super Power</span>
            </div>
          </div>
          <div className="card-image">
            <img src="assets/img3.jpg" alt="Dragon Ball Super cover" />
          </div>
        </div>
      </div>

      <div className="share-container">
        <p className="share-text">
          If you enjoy the website, please consider sharing it with your friends. Thank you!
        </p>
      </div>


      <div className="cards2-container">
        <div className="cards2">
          <img src="/assets/img4.jpg" alt="Card afbeelding" className="cards2-img" />
          <h2 className="cards2-badge">1</h2>
          <p className="cards2-title">One Piece</p>
        </div>
        <div className="cards2">
          <img src="/assets/img1.jpg" alt="Card afbeelding" className="cards2-img" />
          <h2 className="cards2-badge">2</h2>
          <p className="cards2-title">Naruto</p>
        </div>
        <div className="cards2">
          <img src="/assets/img5.jpg" alt="Card afbeelding" className="cards2-img" />
          <h2 className="cards2-badge">3</h2>
          <p className="cards2-title">Blue lock</p>
        </div>
        <div className="cards2">
          <img src="/assets/img6.jpg" alt="Card afbeelding" className="cards2-img" />
          <h2 className="cards2-badge">4</h2>
          <p className="cards2-title">That Time I Got Reincarnated as a Slime</p>
        </div>
        <div className="cards2">
          <img src="/assets/img8.jpg" alt="Card afbeelding" className="cards2-img" />
          <h2 className="cards2-badge">5</h2>
          <p className="cards2-title">Jujutsu Kaisen</p>
        </div>
        <div className="cards2">
          <img src="/assets/img7.jpg" alt="Card afbeelding" className="cards2-img" />
          <h2 className="cards2-badge">6</h2>
          <p className="cards2-title">Kagurabachi</p>
        </div>
        <div className="cards2">
          <img src="/assets/img2.jpg" alt="Card afbeelding" className="cards2-img" />
          <h2 className="cards2-badge">7</h2>
          <p className="cards2-title">One Punch Man</p>
        </div>
      </div>
    </div>
  );
};

export default App;