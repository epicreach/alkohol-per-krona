import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 1160) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="apkLogo" src="/images/APK_LOGO.png" alt="APK" />
          </Link>

          <div
            className={click ? "menu-icon active" : "menu-icon"}
            onClick={handleClick}
          >
            <img
              src={
                click ? "/images/cross_icon.png" : "/images/hamburger_icon.png"
              }
              alt="Menu Icon"
              className="menu-icon-img"
            />
          </div>
          {/*Navbar Items*/}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/*APK Kalkyl*/}
            <li className="nav-item">
              <Link
                to="/APKKalkyl"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                APK Kalkyl
              </Link>
            </li>
            {/*Billig Alkohol*/}
            <li className="nav-item">
              <Link
                to="/BilligAlkohol"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Billig Alkohol
              </Link>
            </li>
            {/*Billiga Barer*/}
            <li className="nav-item">
              <Link
                to="/BilligaBarer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Billiga Barer
              </Link>
            </li>
            {/*Stena Line*/}
            <li className="nav-item">
              <Link
                to="/StenaLine"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Stena Line
              </Link>
            </li>
            {/*Lägg Till*/}
            <li className="nav-item">
              <Link
                to="/LaggTill"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Lägg Till
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Lägg Till</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
