import React from "react";
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaBlog, FaEnvelope, FaCog, FaGithub, FaLinkedin} from "react-icons/fa";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaBehance } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import "./app.css";
import { Typewriter } from 'react-simple-typewriter';


const App = () => {
  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: "Futura, Helvetica, sans-serif" }}>
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 text-black flex flex-col items-center p-6 fixed left-0 top-0 h-full sidebar text">
        <img
          src="images/headshot.jpg"
          alt="Daniel Kan"
          className="headshot"
        />
        <h2 className="text-xl font-bold text-blue-400 text letter_space">DANIEL<br />KAN</h2>
        <nav className="mt-4 space-y-3 w-full sidebar_text letter_space">
          <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); }}>
            <NavItem text="HOME" />
          </a>
          <a href="#resume" onClick={(e) => { e.preventDefault(); document.getElementById('resume').scrollIntoView({ behavior: 'smooth' }); }}>
            <NavItem text="RESUME" />
          </a>
          <a href="#portfolio" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' }); }}>
            <NavItem text="PORTFOLIO" />
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }); }}>
            <NavItem text="ABOUT ME" />
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
            <NavItem text="CONTACT" />
          </a>
        </nav>
        <div className="mt-auto flex space-x-3 socials sidebar_socials">
          <a href="https://www.linkedin.com/in/xuechen-kan/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-600 cursor-pointer" />
          </a>
          <a href="https://github.com/Daniel-Xkan" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-600 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/xuechenkan/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-600 cursor-pointer" />
          </a>
        </div>
        <p className="text-gray-500 text-xs mt-4 declaim text">2025 © Daniel (xuechen) Kan designed and coded</p>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-y-auto main-content">
        <div id="home" className="absolute inset-0 flex flex-col items-center justify-center text-white text-center subsection_home">
          <h1 style={{ fontSize: 30 }} className="text-5xl font-bold">
            I am <br />
          </h1>
          <p style={{ fontSize: 50, fontWeight: "bold" }}>
            A{' '}
            <Typewriter
              words={[
                "Bioinfo Researcher",
                "Bio-AI Developer",
                "UI/UX Designer",
                "Web Developer",
                "Photographer",
                "Music Producer",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={45}
              delaySpeed={2000}
            />
          </p>
        </div>

        <div id="resume" className="section h-screen flex items-center justify-center bg-gray-800 text-whit text_main subsection">
          <h2 className="text-4xl font-bold mb-4">My Resume</h2>
          <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="files/resume.pdf"
              width="1000"
              height="600"
              title="Resume PDF Viewer"
            />
          </div>
        </div>

        <div id="portfolio" className="section h-screen flex items-center justify-center bg-gray-700 text-whit text_main subsection">
          <h2 className="text-4xl font-bold">My Portfolio(in contruction)</h2>
        </div>

        <div id="about" className="section h-screen flex items-center justify-center bg-gray-600 text-white text_main subsection">
          <h2 className="text-4xl font-bold">About Me (in contruction)</h2>
        </div>

        <div id="contact" className="section h-screen flex items-center justify-center bg-gray-500 text-white text_main subsection">
          <section className="w-full max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
            <div className="contactInfo">
              <h2 className="text-2xl font-bold mb-4">Contact Info(in contruction)</h2>
              <ul className="info">
                <li className="mb-2">
                  <span>8950 Costa Verde Blvd<br />San Diego, California</span>
                </li>
                <li className="mb-2">
                  <span>xkan@ucsd.edu</span>
                </li>
                <li className="mb-2">
                  <span>(858) 568 0019</span>
                </li>
              </ul>

            </div>


          </section>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ icon, text }) => (
  <div className="flex items-center space-x-3 p-2 cursor-pointer hover:bg-gray-800 rounded">
    {icon}
    <span>{text}</span>
  </div>
);

export default App;
