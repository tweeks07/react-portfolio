import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt  } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="row">
        <div className="links-me col text-center">
          <a href="https://github.com/tweeks07" target="_blank" rel="noreferrer"><FaGithub size={44}/></a>
          <a href="https://www.linkedin.com/in/taylor-weeks-2a43538a/" target="_blank" rel="noreferrer"><FaLinkedinIn size={44}/></a>
          <a href="mailto: taylorlweeks707@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope size={44}/></a>
          <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:fc8e7cc6-99db-4de2-9cd6-9a8e29bf77d3" target="_blank" rel="noreferrer"><FaFileAlt size={40}/></a>
          </div>
          </div>
        </div>
    );
}

export default Contact;