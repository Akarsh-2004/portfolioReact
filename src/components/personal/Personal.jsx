import { FaSpotify, FaInstagram } from "react-icons/fa";
import "./Personal.css";

const Personal = () => {
  return (
    <section id="personal" className="personal-section">
      <div className="personal-container">
        <h2 className="personal-title">Beyond the Code</h2>
        <p className="personal-intro">
          When I'm not securing systems or building AI models, I indulge in the music and digital stories that fuel my creativity.
        </p>

        <div className="social-links-grid">
          <a
            href="https://open.spotify.com/user/1u0nio7agld3uewg186z6ais1?si=d0a2b7de393145d5"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card spotify"
          >
            <div className="card-content">
              <FaSpotify className="social-icon" />
              <div className="text-info">
                <h3>Spotify</h3>
                <p>Coding Vibes & Chill Beats</p>
              </div>
            </div>
          </a>

          <a
            href="https://instagram.com/akarshsaklani"
            target="_blank"
            rel="noopener noreferrer"
            className="social-card instagram"
          >
            <div className="card-content">
              <FaInstagram className="social-icon" />
              <div className="text-info">
                <h3>Instagram</h3>
                <p>Digital Journey & Moments</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Personal;
