import React from "react";
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaBlog, FaEnvelope, FaCog, FaGithub, FaLinkedin} from "react-icons/fa";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaBehance } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import "./app.css";


const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
        <aside className="w-64 bg-gray-200 text-black flex flex-col items-center p-6 fixed left-0 top-0 h-full sidebar text">
          <img
            src="/images/headshot.jpg" // Ensure the image is placed in the `public/pictures` folder
            alt="Daniel Kan"
            className="headshot"
            />
            <h2 className="text-xl font-bold text-blue-400 text">DANIEL KAN</h2>
            <nav className="mt-4 space-y-3 w-full sidebar_text">
            <a href="#home">
              <NavItem icon={<FaHome />} text="HOME" />
            </a>
            <a href="#about">
              <NavItem icon={<FaUser />} text="ABOUT ME" />
            </a>
            <a href="#resume">
              <NavItem icon={<FaFileAlt />} text="RESUME" />
            </a>
            <a href="#portfolio">
              <NavItem icon={<FaBriefcase />} text="PORTFOLIO" />
            </a>
            <a href="#blog">
              <NavItem icon={<FaBlog />} text="BLOG" />
            </a>
            <a href="#contact">
              <NavItem icon={<FaEnvelope />} text="CONTACT" />
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
            <p className="text-gray-500 text-xs mt-4 declaim text">2025 © Daniel Kan designed and coded with passion</p>
            </aside>

            {/* Main Content */}
      
      <main className="flex-1 relative main-content">
        {/* <img
          src="/images/sd.jpg" // Ensure the image is placed in the `public` folder
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center text_main">
          <h1 className="text-5xl font-bold">
            I am Daniel (Xuechen) <span className="text-blue-400">Kan</span>
          </h1>
          <p className="text-xl mt-2"> Bioinfomatics scientist</p>
          <p className="text-xl mt-2"> Bio-AI Developer</p>
          <p className="text-xl mt-2"> UI/UX design, Web developer</p>
          <p className="text-xl mt-2"> Photographer</p>
          <p className="text-xl mt-2"> Music Producer</p>
        </div>
        <FaCog className="absolute top-4 right-4 text-white text-2xl cursor-pointer" />
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
