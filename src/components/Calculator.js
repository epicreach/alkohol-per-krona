import React, { useState } from "react";
import "../styles/Calculator.css";

function Calculator() {
  const [volume, setVolume] = useState("");
  const [alcoholPercentage, setAlcoholPercentage] = useState("");
  const [price, setPrice] = useState("");
  const [apkResult, setApkResult] = useState("");
  const [apkStatus, setApkStatus] = useState("");
  const [condition, setCondition] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const apk = ((alcoholPercentage / price) * volume) / 100;
    setApkResult(apk.toFixed(2));
    displayResult(apk);
    setCondition(true);
  };

  const displayResult = (apknr) => {
    let status;
    let color;

    if (apknr <= 0.3) {
      status = "Scam";
      color = "red";
    } else if (apknr <= 0.7 && apknr > 0.3) {
      status = "Dåligt";
      color = "dark orange";
    } else if (apknr <= 1 && apknr > 0.7) {
      status = "Accepterbart";
      color = "yellow";
    } else if (apknr <= 1.7 && apknr > 1) {
      status = "Värd";
      color = "green";
    } else if (apknr <= 2.5 && apknr > 1.7) {
      status = "Riktigt Bra";
      color = "green";
    } else {
      status = "!!100% Värd!!";
      color = "#09cdda";
    }

    // Update the state with both status and color
    setApkStatus({ status, color });
  };

  return (
    <div>
      <div className="container">
        <div className="result-wrapper">
          <div className="result-container">
            <div id="result" className="result-box">
              <h1 id="APKresultat">APK Resultat</h1>

              <p className="final-result">{apkResult}</p>
              {apkStatus.status && (
                <h1 id="APKstatus" style={{ color: apkStatus.color }}>
                  {apkStatus.status}
                </h1>
              )}

              {condition ? (
                <progress
                  className="apk-progress"
                  value={apkResult}
                  max={2.5}
                  min={0}
                />
              ) : null}
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
