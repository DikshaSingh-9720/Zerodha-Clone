import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero-support">
      <div id="hero-support-wrapper">
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>
      <div className="hero-support-content">
        <div className="left">
          <h3>Search for an answer or browse help topics to create a ticket</h3>
          <form>
            <input
              type="text"
              placeholder="E.g: how do I activate F&O, why is my order getting rejected..."
            />
          </form>
          <a href="#">Track account opening</a>
          <a href="#">Track segment activation</a>
          <a href="#">Intraday</a>
          <a href="#">Margins</a>
          <a href="#">Kite user manual</a>
        </div>
        <div className="right" id="feature">
          <h3>Featured</h3>
          <ol>
            <li>
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
