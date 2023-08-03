import { Email, LinkedIn, Telegram } from '@material-ui/icons';
import "../styles/Home.css";
import React from 'react';


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My Name is Pooja</h2>
        <div className='prompt'>
          <p>A FullStack developer with a passion for learning and creating</p>
          <a
          href='https://www.linkedin.com/in/pooja-b-975b2b19a/'
          target="_blank"
          rel="noopener noreferrer">
            <LinkedIn />
          </a>
          <a 
          href="mailto:poojabalamurugan99@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <Email />
          </a>         
          <a 
          href="https://t.me/PoojaMca"
          target="_blank"
          rel="noopener noreferrer">
          <Telegram /> 
          </a>
          
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>ReactJS</li>
                <li>NPM</li>
                <li>Material UI</li>
                <li>Yarn</li>
              </ul></span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span><ul>
                <li>NodeJS</li>
                <li>SQL</li>
                <li>PLSQL</li>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul></span>
          </li>
          <li className='item'>
            <h2>Programming Language</h2>
            <span><ul>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
                <li>Basic C</li>
                <li>C#</li>
              </ul></span>
          </li>
          <li className='item'>
            <h2>Technology</h2>
            <span>
              <ul>
                <li>FullStack</li>
                <li>Augmented Reality</li>
                <li>Data Analysis</li>
                <li>Basics of Machine Learning</li>
              </ul></span>
          </li>
          <li className='item'>
            <h2>Languages Known</h2>
            <span>
              <ul>
                  <li>Tamil - (Speak, Write, Read)</li>
                  <li>English - (Speak, Write, Read) </li>
              </ul></span>
          </li>
          <li className='item'>
            <h2>Hobby </h2>
            <span>
              <ul>
                <li>Learning</li>
                <li>Coding</li>
                <li>Reading Comics and Novals</li>
                <li>Drawing</li>
              </ul></span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home