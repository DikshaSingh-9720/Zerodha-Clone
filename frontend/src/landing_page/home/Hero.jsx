import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 18px;
  }

  button {
    width: 25%;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 4.3rem;
    }

     p {
    font-size: 1.9rem;
  }

    button {
      width: 30%;
    }
  }
`;

function Hero() {
  return (
    <Container className="container mb-5">
      <div className="row text-center">
        <img
          src="/media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
          style={{ width: '100%', maxWidth: '700px', margin: '50px auto' }}
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p className='text-muted'>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link to="/signup">
          <button className="p-2 btn btn-primary fs-5 mb-5">
            Sign up now
          </button>
        </Link>
      </div>
    </Container>
  );
}

export default Hero;
