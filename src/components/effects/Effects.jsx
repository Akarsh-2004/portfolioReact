import React, { useState, useEffect, useRef } from 'react';

// CSS styles embedded in the component
const styles = `
  .effects-section {
    position: relative;
    width: 100%;
    min-height: 700px;
    background: linear-gradient(145deg, #0a0a0a, #1a1a2e);
    border-radius: 24px;
    overflow: hidden;
    margin: 4rem auto;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.45), inset 0 0 50px rgba(255, 255, 255, 0.01);
    backdrop-filter: blur(10px);
  }

  .effects-container {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 4rem 3rem;
  }

  .mouse-glow {
    position: absolute;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(156, 39, 176, 0.15) 0%,
      rgba(63, 81, 181, 0.1) 30%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 1;
    transition: all 0.35s ease;
    transform: translate(-50%, -50%);
    filter: blur(45px);
  }

  .mouse-trail {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #9c27b0;
    border-radius: 50%;
    pointer-events: none;
    z-index: 2;
    box-shadow: 0 0 15px #9c27b0, 0 0 25px #3f51b5;
    opacity: 0;
    animation: fadeOut 1.2s forwards;
  }

  @keyframes fadeOut {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.5); }
  }

  .floating-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(156, 39, 176, 0.7);
    border-radius: 50%;
    animation: float-particle 12s ease-in-out infinite;
  }

  @keyframes float-particle {
    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
    50% { transform: translateY(-60px) scale(1.3); opacity: 0.9; }
  }

  .content-grid {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
    align-items: center;
    height: 100%;
    min-height: 600px;
  }

  .text-content {
    color: white;
  }

  .section-title {
    font-size: 3.8rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(45deg, #e0eafc, #cfdef3);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  .section-subtitle {
    font-size: 1.4rem;
    opacity: 0.85;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    font-weight: 300;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 2.5rem 0;
  }

  .feature-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  .feature-item:hover {
    opacity: 1;
    transform: translateX(10px) scale(1.02);
  }

  .feature-icon {
    width: 12px;
    height: 12px;
    background: #e0eafc;
    border-radius: 50%;
    margin-right: 1.2rem;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }

  .interactive-showcase {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transform-style: preserve-3d;
  }

  .showcase-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    backdrop-filter: blur(15px);
    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    overflow: hidden;
    transform: rotateX(0deg) rotateY(0deg);
  }

  .showcase-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      rgba(156, 39, 176, 0.0),
      rgba(156, 39, 176, 0.1),
      rgba(63, 81, 181, 0.1)
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .showcase-card:hover::before {
    opacity: 1;
  }

  .showcase-card:hover {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 
      0 20px 45px rgba(0, 0, 0, 0.4),
      inset 0 0 30px rgba(255, 255, 255, 0.05);
    transform: translateY(-10px) rotateX(2deg) rotateY(-2deg);
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .card-icon {
    width: 18px;
    height: 18px;
    background: linear-gradient(45deg, #e0eafc, #cfdef3);
    border-radius: 6px;
    margin-right: 1rem;
    box-shadow: 0 0 12px rgba(224, 234, 252, 0.6);
  }

  .card-title {
    color: white;
    font-size: 1.35rem;
    font-weight: 700;
    margin: 0;
  }

  .card-description {
    color: rgba(255, 255, 255, 0.75);
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 992px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
      text-align: center;
    }
    .effects-section {
      min-height: 600px;
      margin: 2rem auto;
    }
    .section-title { font-size: 2.8rem; }
    .section-subtitle { font-size: 1.2rem; }
    .effects-container { padding: 3rem 1.5rem; }
    .feature-list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .feature-item:hover { transform: translateX(0) scale(1.02); }
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const Effects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const trailsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          setMousePosition({ x, y });
          const newTrail = document.createElement('div');
          newTrail.className = 'mouse-trail';
          newTrail.style.left = `${x}px`;
          newTrail.style.top = `${y}px`;
          sectionRef.current.appendChild(newTrail);
          trailsRef.current.push(newTrail);

          if (trailsRef.current.length > 20) {
            const oldTrail = trailsRef.current.shift();
            oldTrail.remove();
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      trailsRef.current.forEach(trail => trail.remove());
    };
  }, []);

  const particles = Array.from({ length: 25 }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 12}s`,
        animationDuration: `${8 + Math.random() * 6}s`
      }}
    />
  ));

  return (
    <div className="effects-section" ref={sectionRef}>
      {/* Mouse glow */}
      <div className="mouse-glow" style={{ left: mousePosition.x, top: mousePosition.y }} />

      {/* Floating particles */}
      <div className="floating-particles">{particles}</div>

      <div className="effects-container">
        <div className="content-grid">
          <div className="text-content">
            <h2 className="section-title">Cybersecurity Meets AI</h2>
            <p className="section-subtitle">
              Building intelligent systems that defend, adapt, and scale. From intrusion detection to AI-powered threat intelligence, my projects blend <b>security</b> with <b>innovation</b>.
            </p>

            <ul className="feature-list">
              <li className="feature-item"><div className="feature-icon"></div><span>AI-driven Threat Intelligence</span></li>
              <li className="feature-item"><div className="feature-icon"></div><span>Secure Compiler Engineering</span></li>
              <li className="feature-item"><div className="feature-icon"></div><span>Real-Time Intrusion Detection</span></li>
              <li className="feature-item"><div className="feature-icon"></div><span>OSINT & Vulnerability Automation</span></li>
            </ul>
          </div>

          <div className="interactive-showcase">
            <div className="showcase-card">
              <div className="card-header">
                <div className="card-icon"></div>
                <h3 className="card-title">ReconGPT</h3>
              </div>
              <p className="card-description">
                AI-powered OSINT suite for phishing detection, DNS analysis, and automated threat modeling workflows.
              </p>
            </div>

            <div className="showcase-card">
              <div className="card-header">
                <div className="card-icon"></div>
                <h3 className="card-title">Intrusion Detection System</h3>
              </div>
              <p className="card-description">
                Real-time syscall-based IDS with ML anomaly detection, reducing false positives by 37%.
              </p>
            </div>

            <div className="showcase-card">
              <div className="card-header">
                <div className="card-icon"></div>
                <h3 className="card-title">Secure Smart Compiler</h3>
              </div>
              <p className="card-description">
                Context-aware compiler with vulnerability detection and advanced symbol tracking to prevent unsafe memory access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Effects;