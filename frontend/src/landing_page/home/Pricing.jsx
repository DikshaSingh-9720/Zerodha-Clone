import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: left;

  @media (max-width: 992px) {
    .row {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .text-col {
      order: 2; /* Show text second on small screens */
    }

    .pricing-col {
      order: 1; /* Show pricing boxes first on small screens */
      width: 100%; /* Optional: full width on small screens */
    }

    .price{
     display: flex;

    }
  }
`;

function Pricing() {
  return (
    <Container className="container p-5">
      <div className="row p-5">
        <div className="col-lg-6 col-sm-12 text-col">
          <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price <br />transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See Pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-lg-6 col-sm-12 mb-5 pricing-col">
          <div className="row price text-center mt-5">
            <div className="col border">
              <h1 className="mb-3">
                <i className="fa-solid fa-indian-rupee-sign"></i>0
              </h1>
              <p>
                Free equity delivery and <br />
                direct mutual funds
              </p>
            </div>
            <div className="col border">
              <h1 className="mb-3">
                <i className="fa-solid fa-indian-rupee-sign"></i>20
              </h1>
              <p>Intraday and F&Q</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Pricing;
