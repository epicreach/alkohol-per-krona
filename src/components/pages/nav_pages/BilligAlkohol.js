// ProductList.js
import React from "react";
import ProductList from "../../ProductList";
import "../../../styles/BilligAlkohol.css";
import Footer from "../../Footer";

function BilligAlkohol() {
  return (
    <div className="billigalkohol-container">
      <div className="billigalkoholcontainer">
        <div className="titlecontainer">
          <h1 className="tabletitle">APK LISTA</h1>
        </div>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default BilligAlkohol;
