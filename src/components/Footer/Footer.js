import React from "react";
import './Footer.css';

const Footer = ({setFavouriteSongs}) => {
  return (<footer>
    Made by 
      <a 
        className="footer--github"
        href="https://github.com/ike-gg" 
        target="_blank" 
        rel="noreferrer"
      >
        @ike-gg
      </a> 
    (GitHub) • 
    <button
      className="btn-primary"
      onClick={() => {setFavouriteSongs([])}}
    >
      Clear cache
    </button>
    
  </footer>)
}

export default Footer;