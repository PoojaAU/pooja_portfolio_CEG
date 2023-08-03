import React from 'react';
import "../styles/Footer.css";
import { Instagram, Telegram, LinkedIn, WhatsApp } from '@material-ui/icons';

function Footer() {
  return (
    <div className='footer'> 
    <div className='socialMedia'>
      <a
       href="https://instagram.com/ms.hydra_venus"
       target="_blank"
       rel="noopener noreferrer"
      >
        <Instagram />
      </a> 
        <a
          href='https://www.linkedin.com/in/pooja-b-975b2b19a/'
          target="_blank"
          rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
          <a 
          href="https://t.me/PoojaMca"
          target="_blank"
          rel="noopener noreferrer">
          <Telegram /> 
          </a>
          <a
        href="https://wa.me/9566098020"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsApp />
      </a>
    
    </div>

    <p> &copy; 2023 pooja copyright</p>
    </div>
  );
}

export default Footer