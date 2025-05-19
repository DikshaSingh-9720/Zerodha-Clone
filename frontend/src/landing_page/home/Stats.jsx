import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: left;

  @media (max-width: 992px) {
    .row {
      flex-direction: column !important;
      align-items: center;
    }
      .text-col {
      order: 2;
    }
    .image-col {
      order: 1;
    }
  }
`;

function Stats() {
  return (
    <Container className="container p-3">
      <div className="row p-5">
        <div className="col-lg-6 col-sm-12 p-5 text-col">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12 p-5 .image-col">
          <img src="media/images/ecosystem.png" style={{ width: "90%" }} alt="Ecosystem" />
          <div>
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products
              <i className="fa-solid fa-arrow-right-long mx-2"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Stats;
