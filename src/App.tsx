import React from 'react';
import './index.css';
import './index2.css';
import './index3.css';
import './index3.css';
import './index4.css';
import './index5.css';
import './index6.css';
import './index7.css';
import './index8.css';

const mangaData = [
  {
    id: 1,
    type: "Manga",
    title: "Mousou Sensei",
    img: "assets/img1.jpg",
    chapters: [
      { num: "74", lang: "EN", time: "1 hour ago" },
      { num: "73", lang: "EN", time: "May 22, 2026" },
      { num: "72", lang: "EN", time: "May 12, 2026" },
    ],
  },
  {
    id: 2,
    type: "Manga",
    title: "Mahou Shoujo Dandelion",
    img: "assets/img1.jpg",
    chapters: [
      { num: "24.2", lang: "EN", time: "1 hour ago" },
      { num: "24", lang: "ES-LA", time: "Jun 02, 2026" },
      { num: "24", lang: "EN", time: "May 20, 2026" },
    ],
  },
  {
    id: 3,
    type: "Manhwa",
    title: "66,666 Years: Advent of the Dark Mage",
    img: "assets/img1.jpg",
    chapters: [
      { num: "185", lang: "EN", time: "1 hour ago" },
      { num: "184", lang: "EN", time: "May 28, 2026" },
      { num: "183", lang: "EN", time: "May 22, 2026" },
    ],
  },
  {
    id: 4,
    type: "Manga",
    title: "Toru ni Taranai",
    img: "assets/img1.jpg",
    chapters: [
      { num: "39", lang: "ES-LA", time: "1 hour ago" },
      { num: "38", lang: "ES-LA", time: "May 15, 2026" },
      { num: "37", lang: "ES-LA", time: "Apr 22, 2026" },
    ],
  },
  {
    id: 5,
    type: "Manga",
    title: "Destiny Unchain Online",
    img: "assets/img1.jpg",
    chapters: [
      { num: "103.5", lang: "EN", time: "1 hour ago" },
      { num: "103", lang: "EN", time: "May 10, 2026" },
      { num: "102", lang: "EN", time: "May 10, 2026" },
    ],
  },
  {
    id: 6,
    type: "Manhua",
    title: "A Mountain of Corpses, A Sea of Blood",
    img: "assets/img1.jpg",
    chapters: [
      { num: "37", lang: "EN", time: "1 hour ago" },
      { num: "36", lang: "EN", time: "May 29, 2026" },
      { num: "35", lang: "EN", time: "May 22, 2026" },
    ],
  },
  {
    id: 7,
    type: "Manhwa",
    title: "Warrior Kariel",
    img: "assets/img1.jpg",
    chapters: [
      { num: "43", lang: "EN", time: "1 hour ago" },
      { num: "42", lang: "EN", time: "May 30, 2026" },
      { num: "41", lang: "EN", time: "May 23, 2026" },
    ],
  },
  {
    id: 8,
    type: "Manga",
    title: "I Was Reincarnated as an Evil Noble in a...",
    img: "assets/img1.jpg",
    chapters: [
      { num: "41", lang: "EN", time: "1 hour ago" },
      { num: "40", lang: "EN", time: "May 17, 2026" },
      { num: "39", lang: "EN", time: "May 09, 2026" },
    ],
  },
  {
    id: 9,
    type: "Manga",
    title: "The Angel Next Door Spoils Me Rotten: Af...",
    img: "assets/img1.jpg",
    chapters: [
      { num: "42", lang: "EN", time: "1 hour ago" },
      { num: "41", lang: "PT-BR", time: "14 hours ago" },
      { num: "41", lang: "EN", time: "14 hours ago" },
    ],
  },
  {
    id: 10,
    type: "Manhwa",
    title: "S-, Such a Handsome Guy Is My Childho...",
    img: "assets/img1.jpg",
    chapters: [
      { num: "21.5", lang: "EN", time: "2 hours ago" },
      { num: "21", lang: "EN", time: "2 hours ago" },
      { num: "20", lang: "EN", time: "May 30, 2026" },
    ],
  },
  {
    id: 11,
    type: "Manga",
    title: "Teachers I Want to Love",
    img: "assets/img1.jpg",
    chapters: [
      { num: "14", lang: "EN", time: "2 hours ago" },
      { num: "12", lang: "EN", time: "Nov 24, 2025" },
      { num: "11", lang: "EN", time: "Nov 02, 2025" },
    ],
  },
  {
    id: 12,
    type: "Manga",
    title: "[Dungeon] Hitodasuke shitara, Shiran To...",
    img: "assets/img1.jpg",
    chapters: [
      { num: "14", lang: "EN", time: "2 hours ago" },
      { num: "13", lang: "EN", time: "May 04, 2026" },
      { num: "12", lang: "EN", time: "Mar 29, 2026" },
    ],
  },
];

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

      <div className="cards3-container">
        <div className="cards3">
          <h1 className="cards3-heading">Recently Updated</h1>
          <div className="cards3-grid">
            {mangaData.map((item) => (
              <div key={item.id} className="cards3-card">
                <div className="cards3-card-inner">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="cards3-cover"
                  />
                  <div className="cards3-info">
                    <div className="cards3-meta">
                      <p className="cards3-type">{item.type}</p>
                      <div className="cards3-tabs">
                        <p className="cards3-tab cards3-tab-active">Chapter</p>
                        <p className="cards3-tab">Volume</p>
                      </div>
                    </div>
                    <p className="cards3-title">{item.title}</p>
                    <div className="cards3-chapters">
                      {item.chapters.map((ch, i) => (
                        <div key={i} className="cards3-chapter-row">
                          <p className="cards3-chapter-label">
                            Chap {ch.num}{" "}
                            <span className="cards3-lang">{ch.lang}</span>
                          </p>
                          <p className="cards3-chapter-time">{ch.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="cards4-container">
        <div className="cards4">
          <img src="/assets/img4.jpg" alt="Card afbeelding" className="cards2-img" />
          <h2 className="cards2-badge">1</h2>
          <p className="cards2-title">One Piece</p>
        </div>
          </div>

    </div>
  );
};

export default App;









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