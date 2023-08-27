import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Row } from "react-bootstrap";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-5 text-center">The Products We Offer</h2>
      <Row sm={1} md={2} className="g-5">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </Row>
    </div>
  );
};

export default AllProducts;
