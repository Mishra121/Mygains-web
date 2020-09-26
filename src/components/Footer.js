import React from 'react';

import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {(new Date().getFullYear())} Copyright: MyGains</p>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/my_gains/"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i><span>Instagram</span></a>
    </div>
  );
}

export default Footer;
