import React from "react";

function CreateTicket() {
  const columns = [
    {
      title: "Account Opening",
      icon: "fa-circle-plus",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company,Partnership",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-user-large",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "fa-chart-simple",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "Generals",
      ],
    },
    {
      title: "Funds",
      icon: "fa-folder",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: "fa-brands fa-nfc-directional",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: "fa-coins",
      links: [
        "Understanding mutual funds and Coin",
        "Coin app",
        "Coin web",
        "Transactions and reports",
        "National Pension Scheme (NPS)",
      ],
    },
  ];
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5 ">
        <h1 className="fs-4 text-muted ">
          To create a ticket, select a relevant topic
        </h1>

        {columns.map((column, index) => (
          <div key={index} className="col-md-3 col-sm-6 mt-4">
            <h4 style={{fontSize:"20px"}} className="mb-3">
              <i className={`fa-solid ${column.icon}`} style={{fontSize:"15px"}}></i> {column.title }
            </h4>
            {column.links.map((link, i) => (
              <a
                key={i}
                style={{
                  textDecoration: "none",
                  lineHeight: "2",
                  display: "block",
                }}
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
