// ProductList.js
import React from "react";

export default function ProductList() {
  const products = [
    { name: "Product 1", price: 5 },
    { name: "Product 2", price: 15 },
    { name: "Product 3", price: 8 },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
