import React from "react";
import "./ProductPage.css"


function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="product-section">
      <div className="product-image">
        <img src={imageURL} alt={productName} />
      </div>
      <div className="product-content">
        <h2>{productName}</h2>
        <p>{productDescription}</p>
        <div className="product-buttons">
          {tryDemo && (
            <a href={tryDemo}>
              Try Demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          )}
          {learnMore && (
            <a href={learnMore}>
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          )}
        </div>
        <div className="d-flex justify-content-center p-5">
          {googlePlay && (
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" style={{width:"150px"}}/>
            </a>
          )}
          {appStore && (
            <a href={appStore} style={{ marginLeft: "50px" ,height:"50px"}}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" style={{width:"150px"}}/>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
