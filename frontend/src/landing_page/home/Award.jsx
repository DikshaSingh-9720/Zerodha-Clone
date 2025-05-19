import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  text-align: left;

  @media (max-width: 992px) {
    .row {
      flex-direction: column !important;
      align-items: center;
    }
  }
`;

function Awards() {
    return (
        <Container className='container mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-10 p-5 mt-5'>
                    <img src="media/images/largestBroker.svg" alt="Largest Broker" />
                </div>
                <div className='col-lg-6 col-sm-12 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes
                        in India daily by trading and investing in:
                    </p>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <ul>
                                <li><p>Futures and Operation</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and</p></li>
                            </ul>
                        </div>
                        <img src="media/images/pressLogos.png" style={{ width: "90%" }} alt="Press Logos" />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Awards;
