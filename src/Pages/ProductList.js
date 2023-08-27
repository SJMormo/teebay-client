import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      description
    }
  }
`;

function ProductList() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
