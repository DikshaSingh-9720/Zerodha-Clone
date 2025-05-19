import React from 'react';
import {Link} from "react-router-dom"
function Universe() {
  return (
    <div className="universe-section">
      <h2>The Zerodha Universe</h2>
      <p>Extend your trading and investment experience even further with our partner platforms.</p>

      <div className="universe-grid">
        <div className="universe-item">
          <img src="media/images/smallcaselogo.png" alt="Smallcase" />
          <p>Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.</p>
        </div>
        <div className="universe-item">
          <img src="media/images/streakLogo.png" alt="Streak" />
          <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
        </div>
        <div className="universe-item">
          <img src="media/images/sensibullLogo.svg" alt="Sensibull" />
          <p>Options trading platform to create strategies, analyze positions, and examine data like open interest.</p>
        </div>
        <div className="universe-item">
          <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" />
          <p>Our asset management venture creating simple and transparent index funds to help you save for your goals.</p>
        </div>
        <div className="universe-item">
          <img src="media/images/goldenpiLogo.png" alt="GoldenPi" />
          <p>Bonds trading platform.</p>
        </div>
        <div className="universe-item">
          <img src="media/images/dittoLogo.png" alt="Ditto" />
          <p>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
        </div>
      </div>

      <Link to={"/signup"}><button>Sign up for free</button></Link>
    </div>
  );
}

export default Universe;
