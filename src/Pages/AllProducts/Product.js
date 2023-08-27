import React from "react";
import { Card, Col } from "react-bootstrap";

const Product = ({ product }) => {
  const { name, description, price } = product;
  return (
    <div>
      <Col>
        <Card>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Price: {price}
            </Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            {/* <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Product;
