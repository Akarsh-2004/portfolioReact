import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-card-single">
        <h3>MLOps & AI Intern</h3>
        <h4 style={{ color: 'var(--accent)', marginBottom: '1.5rem' }}>DKAI Technologies (JD Fusion)</h4>
        <div className="meta">
          <span>📍 Dehradun, India</span>
          <span>🗓 Dec 2025 – Present</span>
          <span>🌐 <a href="https://dkaitech.com" target="_blank" rel="noopener noreferrer">dkaitech.com</a></span>
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {[
            "Engineered production-grade RAG pipelines using LangChain and AutoGen, improving retrieval latency by 35%",
            "Orchestrated end-to-end MLOps workflows on AWS (SageMaker, EC2, S3), reducing operational overhead by 25%",
            "Built scalable embedding pipelines and vector indexing for 1M+ documents",
            "Implemented multi-agent LLM systems, increasing task automation efficiency by 40%",
            "Optimized inference and caching layers, reducing response latency by 20–30%",
            "Collaborated with internal engineering teams and US-based clients, accelerating delivery cycles by 50%"
          ].map((item, i) => (
            <li key={i} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--accent)', marginRight: '10px' }}>▹</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
