import React from "react";
import { FaSpotify, FaInstagram, FaCheckCircle } from "react-icons/fa";
import "./Personal.css";

const Personal = () => {
  return (
    <section id="personal-life" className="personal-section">
  <div className="personal-content-container">
        <h2>My Personal Side</h2>
        <p className="intro-text">
          When I&apos;m not coding, I indulge in the arts and culture that fuel my creativity and keep me grounded.
        </p>

        {/* ... other content ... */}

        {/* Social Links section styled similar to skills */}
        <div className="social-links-container">
          <a
            href="https://open.spotify.com/user/1u0nio7agld3uewg186z6ais1?si=d0a2b7de393145d5"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link spotify-link"
          >
            <FaSpotify className="social-icon" />
            <div className="social-text">
              <h4>My Spotify Playlists</h4>
              <p>Dive into my curated playlists—chill beats and coding vibes that inspire me daily.</p>
            </div>
          </a>

          <a
            href="https://instagram.com/akarshsaklani"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link instagram-link"
          >
            <FaInstagram className="social-icon" />
            <div className="social-text">
              <h4>Follow me on Instagram</h4>
              <p>See my latest photos, stories, and behind-the-scenes moments of my creative journey.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Personal;
