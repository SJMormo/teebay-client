import React, { useEffect, useState } from "react";
import Product from "./Product";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return <div>
    <h2>{products.length}</h2>
    {
        products.map(product => <Product
            key={product.id}
            product = {product}
        ></Product>)
    }
  </div>;
};

export default AllProducts;
