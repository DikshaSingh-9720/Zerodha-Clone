import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  text-align: left;

  .row {
    display: flex;
    flex-wrap: wrap; /* for Bootstrap-like wrapping */
  }

  @media (max-width: 992px) {
    .row {
      flex-direction: column !important;
      align-items: center;
    }
  }
`;

function Education() {
  return (
    <Container className="container mt-4">
      <div className="row">
        <div className="col-lg-6 col-sm-12 mb-5">
          <img src="media/images/education.svg" style={{ width: "70%" }} alt="Education Illustration" />
        </div>

        <div className="col-lg-6 col-sm-12">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active and invested community in India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Education;
