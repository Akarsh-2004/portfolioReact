import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Typewriter from './components/Typewriter';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Lottie from 'lottie-react';
import Animation from './assets/animations/Animation.json'; // Make sure this path is correct for your Lottie JSON
import animation2 from './assets/animations/2ndanimation.json';
import animation3 from './assets/animations/3rdanimation.json';
import Projects from './components/projects/Projects.jsx';
import Personal from './components/personal/Personal.jsx';
import animation4 from "./assets/animations/4ani.json";
import animation5 from "./assets/animations/5th.json";
import Contact from "./components/contacts/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Resume from "./components/resume/Resume.jsx"

// REMOVE these direct JavaScript DOM manipulations for background and text color
// document.documentElement.style.setProperty('--background-color', '#1a1a2e');
// document.documentElement.style.setProperty('--text-color', '#e0e0e0');
// document.body.style.backgroundColor = '#1a1a2e'; // This was overriding the image
// document.body.style.color = '#e0e0e0';


function App() {
    // Keeping theme state for now, but for a fixed dark mode, it's not strictly necessary.
    // If you always want dark mode, you don't need this state or useEffect.
    // However, it's harmless if you plan to add a theme toggle later.
    const [theme, setTheme] = useState('dark-mode');

    useEffect(() => {
        document.body.className = theme; // This applies 'dark-mode' class to body
        // Also, apply the global background and text colors from CSS variables
        // These are now handled by the .dark-mode class in App.css
    }, [theme]);

    const commonLottieOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        // The `App` div already has the `dark-mode` class applied
        <div className={`App ${theme}`}> {/* Keep this for styling the main App container */}
            <Navbar />

            <section id="hero" className="hero-section"> {/* Background image applied here */}
                <div className="hero-text-container">
                    <h1 className="greeting">Hi, I'm Akarsh</h1>
                    <p className="roles">
                        <Typewriter roles={["Ethical Hacker", "Developer", "ML/AI Enthusiast"]} />
                    </p>
                </div>
            </section>

            <About />

            <div className="lottie-container">
                <div className="lottie-wrapper">
                    <Lottie
                        animationData={Animation}
                        {...commonLottieOptions} // Use spread to apply common options
                        style={{ width: '100%', height: '100%', maxWidth: '180px', maxHeight: '180px' }}
                    />
                </div>

                <div className="lottie-wrapper">
                    <Lottie
                        animationData={animation2}
                        {...commonLottieOptions}
                        style={{ width: '100%', height: '100%', maxWidth: '180px', maxHeight: '180px' }}
                    />
                </div>
            </div>

            <Skills />

            <div style={{ width: '200px', height: '200px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie
                    animationData={animation3}
                    {...commonLottieOptions}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            <Projects />
            <Personal />

            <div style={{ width: '200px', height: '200px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie
                    animationData={animation4}
                    {...commonLottieOptions}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <div style={{ width: '200px', height: '200px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie
                    animationData={animation5}
                    {...commonLottieOptions}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
            <br />
            <Resume />
            <br />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
