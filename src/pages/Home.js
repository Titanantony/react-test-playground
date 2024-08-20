import React from 'react';
import logo from "../assets/myLogo.png"

const Home = () => {
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My React playground
        </p>
        <a
          className="App-link"
          href="https://antonykinuthia.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit My website
        </a>
      </header>
    </div>
    );
}

export default Home;
