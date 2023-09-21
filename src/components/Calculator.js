import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [volume, setVolume] = useState("");
  const [alcoholPercentage, setAlcoholPercentage] = useState("");
  const [price, setPrice] = useState("");
  const [apkResult, setApkResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const apk = ((alcoholPercentage / price) * volume) / 100;
    setApkResult(apk.toFixed(2));
  };
  let apkstatus = "";
  const displayResult = (apknr) => {
    if (apknr === "0") {
      apkstatus = "Bedrägligt Dåligt";
    } else if (apknr <= 1) {
      apkstatus = "Dåligt";
    } else if (apknr <= 2) {
      apkstatus = "Accepterbart";
    } else if (apknr <= 3) {
      apkstatus = "Riktigt Bra";
    } else {
      apkstatus = "100% Värd";
    }
  };

  return (
    <div>
      <div className="container">
        <div className="result-wrapper">
          <div className="result-container">
            <div id="result" className="result-box">
              <h1 id="APKresultat">APK Resultat</h1>
              <h1> {apkstatus}</h1>
              <p className="final-result">{apkResult}</p>
              <progress
                className="apk-progress"
                value={apkResult}
                max={3}
                min={0}
              />
            </div>
          </div>
        </div>

        <div className="calculator-wrapper">
          <h1 className="title">Alkohol Per Krona Kalkylator</h1>
          <form id="alcCalc" onSubmit={handleSubmit}>
            <label htmlFor="volume">Volym (ml)</label>
            <input
              type="number"
              id="volume"
              name="volume"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              required
            />

            <label htmlFor="alcoholPercentage">Alkohol Procent</label>
            <input
              type="number"
              id="alcoholPercentage"
              name="alcoholPercentage"
              value={alcoholPercentage}
              onChange={(e) => setAlcoholPercentage(e.target.value)}
              required
            />

            <label htmlFor="price">Pris (kr)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <button type="submit">Räkna ut APK</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Calculator;