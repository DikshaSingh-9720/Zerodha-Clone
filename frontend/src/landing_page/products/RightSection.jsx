import React from "react";
import "./ProductPage.css"

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="product-section reverse reverse-on-mobile">
      <div className="product-content">
        <h2>{productName}</h2>
        <p>{productDescription}</p>
        <div className="product-buttons">
          {learnMore && (
            <a href={learnMore}>
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          )}
        </div>
      </div>
      <div className="product-image">
        <img src={imageURL} alt={productName} />
      </div>
    </div>
  );
}

export default RightSection;
