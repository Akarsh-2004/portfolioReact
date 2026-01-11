import React, { useState, useEffect, useRef } from 'react';

// CSS styles embedded in the component
const styles = `
  .effects-section {
    position: relative;
    width: 100%;
    min-height: 700px;
    background: transparent;
    border-radius: 24px;
    overflow: hidden;
    margin: 4rem auto;
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(10px);
  }

  .effects-container {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 6rem 3rem;
  }

  .mouse-glow {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.15) 0%,
      rgba(37, 99, 235, 0.05) 40%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 1;
    transition: transform 0.1s ease-out;
    transform: translate(-50%, -50%);
    filter: blur(60px);
  }

  .mouse-trail {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 2;
    box-shadow: 0 0 15px var(--accent);
    opacity: 0;
    animation: fadeOut 1s forwards;
  }

  @keyframes fadeOut {
    from { opacity: 0.8; transform: scale(1.5); }
    to { opacity: 0; transform: scale(0.1); }
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
    width: 3px;
    height: 3px;
    background: rgba(59, 130, 246, 0.4);
    border-radius: 50%;
    animation: float-particle 10s ease-in-out infinite;
  }

  @keyframes float-particle {
    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.3; }
    50% { transform: translateY(-40px) scale(1.2); opacity: 0.6; }
  }

  .content-grid {
    position: relative;
    z-index: 3;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 6rem;
    align-items: center;
    height: 100%;
  }

  .text-content {
    color: var(--text-primary);
  }

  .section-title {
    font-size: clamp(3rem, 6vw, 4.5rem);
    font-weight: 800;
    margin-bottom: 2rem;
    background: linear-gradient(to bottom, #fff, var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.1;
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    line-height: 1.7;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 3rem 0;
  }

  .feature-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
    transition: var(--transition-smooth);
  }

  .feature-item:hover {
    color: var(--text-primary);
    transform: translateX(10px);
  }

  .feature-icon {
    width: 10px;
    height: 10px;
    background: var(--accent);
    border-radius: 50%;
    margin-right: 1.5rem;
    box-shadow: 0 0 10px var(--accent);
  }

  .interactive-showcase {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .showcase-card {
    background: var(--bg-secondary);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 2.5rem;
    transition: var(--transition-smooth);
    position: relative;
    overflow: hidden;
  }

  .showcase-card:hover {
    border-color: var(--accent);
    background: var(--bg-tertiary);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .card-icon {
    width: 12px;
    height: 12px;
    background: var(--accent);
    border-radius: 4px;
    margin-right: 1.2rem;
    box-shadow: 0 0 10px var(--accent);
  }

  .card-title {
    color: var(--text-primary);
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
  }

  .card-description {
    color: var(--text-secondary);
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          setMousePosition({ x, y });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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