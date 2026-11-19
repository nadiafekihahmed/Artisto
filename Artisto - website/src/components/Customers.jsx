import React from "react";
import "./Customers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    name: "Bert jhon",
    review: "Absolutely love the quality of the artworks! Highly recommend Artisto for all art lovers.",
    rating: 5,
  },
  {
    name: "Emma Silver",
    review: "Great selection of unique pieces. I'll definitely be bidding again!",
    rating: 4,
  },
  {
    name: "Luna Jae",
    review: "Stunning designs and excellent support throughout the auction process.",
    rating: 5,
  },
];

function Customers() {
  return (
    <div className="customers">
      <h1 className="customers-header">Customer Reviews</h1>
      <div className="review-cards-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3 className="customer-name">{review.name}</h3>
            <p className="customer-review">"{review.review}"</p>
            <div className="star-rating">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FontAwesomeIcon icon={faStar} key={i} className="star-icon" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;

