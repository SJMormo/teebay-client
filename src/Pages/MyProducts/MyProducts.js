import React from "react";
import { useEffect, useState } from "react";
import MyProduct from "./MyProduct";
import { Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-5 text-center">The Products We Offer</h2>
      <Button className="mb-5" onClick={()=>navigate('/addproduct')}>Add Product</Button>
      <Row sm={1} md={2} className="g-5">
        {products.map((product) => (
          <MyProduct key={product.id} product={product}></MyProduct>
        ))}
      </Row>
    </div>
  );
};

export default MyProducts;
