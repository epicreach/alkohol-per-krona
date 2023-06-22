import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards(props) {
  return (
    <div className="card">
      <img src={props.imageSrc} alt={props.cityName} className="card-image" />
      <div className="card-info">
        <h2 className="city-name">{props.cityName}</h2>
        <p className="bar-count">Antal Barer: {props.barCount}</p>
      </div>
    </div>
  );
}

export default Cards;
