import React, { useState, useEffect } from "react";
import "../styles/HeroSection.css";
import "../styles/App.css";
import Cards from "./Cards";
import Search from "./Search";

function HeroSection() {
  const [cardData, setCardData] = useState([]);
  const [filteredCardData, setFilteredCardData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetch("./cardData.json")
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
        setFilteredCardData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = (city) => {
    // Filter the card data based on the entered city
    const filteredCards = cardData.filter((card) =>
      card.cityName.toLowerCase().includes(city.toLowerCase())
    );

    setFilteredCardData(filteredCards);
  };

  const resetSearch = () => {
    // Reset the filtered card data to the original card data
    setFilteredCardData(cardData);
  };

  return (
    <div className="hero-container">
      <h1>ALKOHOL PER KRONA</h1>
      <h2>HITTA BILLIG ALKOHOL NÄRA DIG</h2>
      <Search onSearch={handleSearch} onReset={resetSearch} />
      <div className="cards-container">
        {filteredCardData.length > 0 ? (
          filteredCardData.map((card, index) => (
            <Cards
              key={index}
              imageSrc={card.imageSrc}
              cityName={card.cityName}
              barCount={card.barCount}
            />
          ))
        ) : (
          <p className="no-result">Inga Resultat</p>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
