import React, { Suspense } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Typewriter from './components/Typewriter';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects.jsx';
import Personal from './components/personal/Personal.jsx';
import Contact from "./components/contacts/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Resume from "./components/resume/Resume.jsx";
import Experience from "./components/Experience/Experience.jsx";
import CursorProvider from "./components/CursorProvider";
import ScrollProgressBar from "./components/ScrollProgressBar";

// Lazy load heavy 3D and animation components
const NeuralNetwork3D = React.lazy(() => import('./components/three_models/NeuralNetwork3D.jsx'));
const Effects = React.lazy(() => import('./components/effects/Effects.jsx'));

const LoadingFallback = () => (
  <div style={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="blinking-cursor">_</div>
  </div>
);

function App() {
  return (
    <CursorProvider>
      <div className="App">
        <ScrollProgressBar />
        <Navbar />

        {/* Hero Section */}
        <section id="hero" className="hero-section">
          <div className="hero-text-container">
            <h1 className="greeting">Akarsh Saklani</h1>
            <p className="roles">
              <Typewriter roles={["Ethical Hacker", "Developer", "ML/AI Enthusiast"]} />
            </p>
          </div>
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <Suspense fallback={<LoadingFallback />}>
          <NeuralNetwork3D />
        </Suspense>

        <section id="skills" className="section">
          <Skills />
        </section>

        <Suspense fallback={<LoadingFallback />}>
          <Effects />
        </Suspense>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="personal" className="section">
          <Personal />
        </section>

        <section id="resume" className="section">
          <Resume />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>

        <Footer />
      </div>
    </CursorProvider>
  );
}

export default App;
