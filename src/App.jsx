import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Typewriter from './components/Typewriter';
import About from './components/About/About';
import Skills from './components/skills/Skills';
import Lottie from 'lottie-react';
import Animation from './assets/animations/Animation.json';
import animation2 from './assets/animations/2ndanimation.json';
import animation3 from './assets/animations/3rdanimation.json';
import Projects from './components/projects/Projects.jsx';
import Personal from './components/personal/Personal.jsx';
import animation4 from "./assets/animations/4ani.json";
import animation5 from "./assets/animations/5th.json";
import Contact from "./components/contacts/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Resume from "./components/resume/Resume.jsx";
import img from './assets/imagebg.jpg';

// Import the updated NeuralNetwork3D component
import NeuralNetwork3D from './components/three_models/NeuralNetwork3D.jsx';

document.documentElement.style.setProperty('--background-color', '#1a1a2e');
document.documentElement.style.setProperty('--text-color', '#e0e0e0');
document.body.style.backgroundColor = '#1a1a2e';
document.body.style.color = '#e0e0e0';

function App() {
    const [theme, setTheme] = useState('dark-mode');

    useEffect(() => {
        document.body.className = theme;
        localStorage.removeItem('theme');
    }, [theme]);

    const commonLottieOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className={`App dark-mode`}>
            <Navbar />

            {/* Hero Section */}
            <section
                id="hero"
                className="hero-section"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <div className="hero-text-container">
                    <h1 className="greeting">Hi, I'm Akarsh</h1>
                    <p className="roles">
                        <Typewriter roles={["Ethical Hacker", "Developer", "ML/AI Enthusiast"]} />
                    </p>
                </div>
            </section>

            <About />
            <NeuralNetwork3D />    
            
            <Skills />

            {/* Animation 3 Center */}
            <div style={{
                padding: '4rem 0',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                background: 'linear-gradient(180deg, transparent 0%, rgba(199, 125, 255, 0.05) 50%, transparent 100%)'
            }}>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(199, 125, 255, 0.3) 50%, transparent 100%)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 0
                }} />

                <div style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(199, 125, 255, 0.1) 0%, transparent 70%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <Lottie
                        animationData={animation3}
                        {...commonLottieOptions}
                        style={{
                            width: '200px',
                            height: '200px',
                            filter: 'drop-shadow(0 0 20px rgba(199, 125, 255, 0.3))'
                        }}
                    />
                </div>
            </div>

            <Projects />
            {/* Animated Transition 1 */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '3rem',
                padding: '6rem 2rem',
                background: 'linear-gradient(180deg, transparent 0%, rgba(199, 125, 255, 0.03) 50%, transparent 100%)',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    width: '90%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(199, 125, 255, 0.3) 20%, rgba(255, 107, 157, 0.3) 80%, transparent 100%)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 0
                }} />

                {/* Animation 1 (slightly smaller) */}
                <div style={{
                    width: '130px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(199, 125, 255, 0.1) 0%, transparent 70%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <Lottie
                        animationData={Animation}
                        {...commonLottieOptions}
                        style={{
                            width: '110px',
                            height: '110px',
                            filter: 'drop-shadow(0 0 20px rgba(199, 125, 255, 0.4))'
                        }}
                    />
                </div>

                {/* Animation 2 */}
                <div style={{
                    width: '160px',
                    height: '180px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 107, 157, 0.1) 0%, transparent 70%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <Lottie
                        animationData={animation2}
                        {...commonLottieOptions}
                        style={{
                            width: '140px',
                            height: '140px',
                            filter: 'drop-shadow(0 0 20px rgba(255, 107, 157, 0.4))'
                        }}
                    />
                </div>
            </div>

            <Personal />

            {/* Transition Before Contact */}
            <div style={{
                padding: '6rem 2rem',
                background: `
                    radial-gradient(circle at 25% 25%, rgba(199, 125, 255, 0.08) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(255, 107, 157, 0.06) 0%, transparent 50%),
                    linear-gradient(180deg, transparent 0%, rgba(15, 15, 30, 0.3) 100%)
                `,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4rem',
                flexWrap: 'wrap'
            }}>
                <div style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(199, 125, 255, 0.15) 0%, transparent 70%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(199, 125, 255, 0.2)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <Lottie
                        animationData={animation4}
                        {...commonLottieOptions}
                        style={{
                            width: '160px',
                            height: '160px',
                            filter: 'drop-shadow(0 0 25px rgba(199, 125, 255, 0.5))'
                        }}
                    />
                </div>

                <div style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 107, 157, 0.15) 0%, transparent 70%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 107, 157, 0.2)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <Lottie
                        animationData={animation5}
                        {...commonLottieOptions}
                        style={{
                            width: '160px',
                            height: '160px',
                            filter: 'drop-shadow(0 0 25px rgba(255, 107, 157, 0.5))'
                        }}
                    />
                </div>
            </div>
            <br />
            <br />
            <Resume />
            <br />
            <br />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
