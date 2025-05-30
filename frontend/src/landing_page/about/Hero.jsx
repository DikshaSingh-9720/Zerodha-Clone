import React from "react";
import { Link } from 'react-router-dom';
import "./AboutPage.css";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          <b>We pioneered the discount broking model in India.</b>
          <br />
          <b>Now, we are breaking ground with our technology.</b>
        </h1>        
      </div>

      <hr />
      
      <div className="hero row text-muted fs-6">
        <div className="col-lg-6">
          <p className="p-2">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="p-2">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="p-2">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-lg-6">
          <p className="p-2">
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
          </p>
          <p className="p-2">
            <Link to="/rainmatter" style={{ textDecoration: "none" }}>
              <b>Rainmatter</b>
            </Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
          </p>
          <p className="p-2">
            And yet, we are always up to something new every day. Catch up on the latest updates on our{" "}
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <b>blog</b>
            </Link> or see what the media is{" "}
            <Link to="/media" style={{ textDecoration: "none" }}>
              <b>saying about us.</b>
            </Link>
          </p>
        </div>       
      </div>
    </div>
  );
}

export default Hero;
