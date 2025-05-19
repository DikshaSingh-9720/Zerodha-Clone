import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 992px) {
    .text-center {
      h1 {
        font-size: 3rem;
      }
      h3 {
        font-size: 1.85rem;

      }      
    }

    .row {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        max-width: 350px;
      }
      h3 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.7rem;
      }
    }
  }
`;

function Hero() {
  return (
    <Container className="container mb-5">
      <div className="text-center mt-5 p-3">
        <h1
          className=""
          style={{
            color: "#424242",
            fontWeight: "750",
            fontFamily: "sans-serif",
          }}
        >
          Pricing
        </h1>
        <h3 className="text-muted mt-3 mb-5">
          Free equity investments and flat ₹20 intraday and F&Q trades
        </h3>
        <div className="row">
          <div className="col-lg-4 col-sm-12 mb-4">
            <img src="media/images/pricingEquity.svg" />
            <h3>Free equity delivery</h3>
            <p className="text-muted">
              All equity delivery investments(NSE, BSE),
              <br />
              are absolutely free— <b>₹</b> 0 brokerage.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 mb-4">
            <img src="media/images/intradayTrades.svg" />
            <h3>Intraday and F&O trades</h3>
            <p className="text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-lg-4 col-sm-12 mb-4">
            <img src="media/images/pricingMF.svg" />
            <h3>Free direct MF</h3>
            <p className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
        <Link to={"/signup"}><button
          className="p-2 btn btn-primary fs-5 mt-5"
          style={{ width: "30%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
        </Link>
      </div>
    </Container>
  );
}

export default Hero;
