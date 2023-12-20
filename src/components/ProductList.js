import React, { Component } from "react";
import jsonData from "./products.json";

class ProductList extends Component {
  state = {
    products: jsonData, // Store your JSON data here
    currentPage: 1,
    productsPerPage: 50,
    sortBy: "productName", // Default sorting key
  };

  handleSort = (key) => {
    this.setState({ sortBy: key });
    this.sortProducts(key);
  };

  sortProducts = (key) => {
    const { products } = this.state;

    products.sort((a, b) => {
      return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
    });

    this.setState({ products });
  };
  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { products, currentPage, productsPerPage, sortBy } = this.state;

    // Calculate the index of the first and last product to be displayed on the current page
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    return (
      <div>
        {/* ... other JSX elements ... */}
        <table>
          {/* Table header with sorting buttons */}
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Alcohol Percentage</th>
              <th>Volume</th>
              <th>Category Level 1</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product, index) => (
              <tr key={index}>
                <td>{product.productNameBold}</td>
                <td>{product.alcoholPercentage}</td>
                <td>{product.volumeText}</td>
                <td>{product.categoryLevel1}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination controls and sorting controls can be placed here */}
      </div>
    );
  }
}

export default ProductList;
