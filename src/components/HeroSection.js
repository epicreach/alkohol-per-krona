import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import "../App.css";
import Cards from "./Cards";

function HeroSection() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("./cardData.json")
      .then((response) => response.json())
      .then((data) => setCardData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="hero-container">
      <h1>ALKOHOL PER KRONA</h1>
      <h2>HITTA BILLIG ALKOHOL NÄRA DIG</h2>
      <div className="cards-container">
        {/* Map over the card data and generate card components */}
        {cardData.map((card, index) => (
          <Cards
            key={index} // Add a unique key for each card
            imageSrc={card.imageSrc}
            cityName={card.cityName}
            barCount={card.barCount}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
