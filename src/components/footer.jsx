import React from "react";
import { Bio } from "../data/constants";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import banner from "../assets/bgside.png";

const Footer = () => {
  return (
    <footer
      className="text-bg-dark"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundBlendMode: "soft-light",
        backgroundSize: "cover",
      }}
    >
      <div className="container p-4">
        <h1 className="mt-4 text-center">
          <strong>Sudish</strong>
        </h1>
        <nav className="nav justify-content-center mb-4">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#project" className="nav-link">
            Projects
          </a>
          {/* <a href="#education" className="nav-link">Education</a> */}
        </nav>
        <div className="d-flex justify-content-center">
          <a
            href={Bio.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-center  mt-4 text-light">
          &copy; made with ❤️ by sudish
        </p>
      </div>
    </footer>
  );
};

export default Footer;
