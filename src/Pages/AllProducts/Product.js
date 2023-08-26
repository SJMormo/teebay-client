import React from 'react';

const Product = ({product}) => {
    const {name, description, price} = product;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Product;