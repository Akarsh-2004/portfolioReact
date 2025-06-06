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
import img from './assets/imagebg.jpg';


document.documentElement.style.setProperty('--background-color', '#1a1a2e');
document.documentElement.style.setProperty('--text-color', '#e0e0e0');
document.body.style.backgroundColor = '#1a1a2e';
document.body.style.color = '#e0e0e0';


function App() {
    // --- KEY CHANGE: Force theme to 'dark-mode' from the start ---
    const [theme, setTheme] = useState('dark-mode'); // No localStorage check, always start dark

    useEffect(() => {
        // This will now always set the body class to 'dark-mode'
        document.body.className = theme;
        // Also, explicitly remove any lingering localStorage theme setting to prevent future issues
        localStorage.removeItem('theme');
    }, [theme]);

    // Define common options for Lottie animations here
    const commonLottieOptions = {
        loop: true,     // Set to true for infinite loop
        autoplay: true,    // Set to true to play automatically
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice' // Maintain aspect ratio
        }
    };

    return (<>
    <div className={`App dark-mode`}>
            <Navbar />

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

            <div className="lottie-container">
  {/* First animation */}
  <div className="lottie-wrapper">
    <Lottie
      animationData={Animation}
      loop={commonLottieOptions.loop}
      autoplay={commonLottieOptions.autoplay}
      style={{ width: '100%', height: '100%', maxWidth: '180px', maxHeight: '180px' }}
    />
  </div>

  {/* Second animation */}
  <div className="lottie-wrapper">
    <Lottie
      animationData={animation2}
      loop={commonLottieOptions.loop}
      autoplay={commonLottieOptions.autoplay}
      style={{ width: '100%', height: '100%', maxWidth: '180px', maxHeight: '180px' }}
    />
  </div>
</div>


            <Skills />

            
            
            <div style={{ width: '200px', height: '200px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie
                    animationData={animation3} // Use the specific animation data here
                    loop={commonLottieOptions.loop}
                    autoplay={commonLottieOptions.autoplay}
                    style={{ width: '100%', height: '100%' }} // Style the Lottie component
                />
            </div>
            
           <Projects />
            <Personal />

            <div style={{ width: '200px', height: '200px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie
                    animationData={animation4} // Use the specific animation data here
                    loop={commonLottieOptions.loop}
                    autoplay={commonLottieOptions.autoplay}
                    style={{ width: '100%', height: '100%' }} // Style the Lottie component
                />
            </div>
            <div style={{ width: '200px', height: '200px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie
                    animationData={animation5} // Use the specific animation data here
                    loop={commonLottieOptions.loop}
                    autoplay={commonLottieOptions.autoplay}
                    style={{ width: '100%', height: '100%' }} // Style the Lottie component
                />
            </div>
            <br/>
            <br/>
            <Resume />
            <br/>
            <br/>  
            <Contact />
            
            <Footer />
        </div>
        </>
        
    );
}

export default App;
