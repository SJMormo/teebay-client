import React, { useEffect, useState } from "react";
import MyProduct from "./MyProduct";
import { Button, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useQuery } from "@apollo/client";
import { GET_USER_ID_BY_EMAIL } from "../../graphql/queries";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const [user, loadingEmail] = useAuthState(auth);
  const userEmail = user?.email;

  const { loading: userIdLoading, error: userIdError, data: userIdData } = useQuery(GET_USER_ID_BY_EMAIL, {
    variables: {
      email: userEmail,
    },
    skip: !userEmail, // Skip query if userEmail is falsy
  });

  const userId = userIdData?.getUserIdByEmail;

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (loadingEmail || userIdLoading) return <p>Loading...</p>;
  if (userIdError) return <p>Error: {userIdError.message}</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-5 text-center">The Products We Offer</h2>
      <Button className="mb-5" onClick={() => navigate("/addproduct")}>
        Add Product
      </Button>
      <Row sm={1} md={2} className="g-5">
        {products.map((product) => (
          <MyProduct key={product.id} product={product}></MyProduct>
        ))}
      </Row>
    </div>
  );
};

export default MyProducts;
