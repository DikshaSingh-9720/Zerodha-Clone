import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        {/* Left Column */}
        <div className="col-lg-8 col-sm-12 p-4">
          <a href="#" style={{ textDecoration: "none" }}>
            <h3 className="fs-2">Brokerage calculator</h3>
          </a>
          <ul
            style={{
              textAlign: "left",
              lineHeight: "2",
              fontSize: "18px",
              paddingLeft: "1rem",
            }}
            className="text-muted"
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS): 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS): 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Brokerage;
