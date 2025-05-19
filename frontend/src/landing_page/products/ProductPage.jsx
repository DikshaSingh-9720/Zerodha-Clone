import React from "react";
import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import "./ProductPage.css"

function ProductPage() {
  return (
    <>
      <Hero />
      
      {/* Left Section for Kite */}
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
      
      {/* Right Section for Console */}
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="#"
      />
      
      {/* Left Section for Coin */}
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />
      
      {/* Right Section for Kite Connect API */}
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our client base."
        learnMore="#"
      />
      
      {/* Left Section for Varsity Mobile */}
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      {/* Tech Stack Blog Link */}
      <p className="text-center mt-5 mb-5 fs-5 text-muted">
        Want to know more about our technology stack? Check out the{" "}
        <a href="https://zerodha.tech" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </p>

      {/* Universe Section */}
      <Universe />
    </>
  );
}

export default ProductPage;
