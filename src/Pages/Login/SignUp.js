import React, { useRef } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useMutation, gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    createUser(name: $name) {
      id
      name
    }
  }
`;

const SignUp = () => {
  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [createUser] = useMutation(CREATE_USER);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/signin");
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // createUserWithEmailAndPassword(email, password);
    console.log(name, email, password);

    try {
      const { data } = await createUser({
        variables: { name },
      });
  
      console.log("User created:", data.createUser);
      navigate("/signin");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleRegister} className="w-50 mx-auto mt-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Name"
          className="mb-3"
        >
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Name"
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </FloatingLabel>

        <Button className="w-100" variant="dark" type="submit">
          CREATE AN ACCOUNT
        </Button>
        <p className="mt-2 text-center">Already Have an Account?</p>
        <Link className="btn btn-outline-dark w-100" to="/signin">
          SignIn
        </Link>
      </Form>
    </div>
  );
};

export default SignUp;

