import React from 'react';
import { Bio } from '../data/constants';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-bg-dark  p-5">
      <div className="container">
        <h1 className="font-weight-bold mb-4 text-center">Sudish</h1>
        <nav className="nav justify-content-center mb-4">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#project" className="nav-link">Projects</a>
          {/* <a href="#education" className="nav-link">Education</a> */}
        </nav>
        <div className="d-flex justify-content-center">
          <a href={Bio.facebook} target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaFacebook size={24} />
          </a>
          <a href={Bio.twitter} target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaTwitter size={24} />
          </a>
          <a href={Bio.linkedin} target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaLinkedin size={24} />
          </a>
          <a href={Bio.insta} target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-center  mt-4 text-light">
          &copy; 2023 sudish.k. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
