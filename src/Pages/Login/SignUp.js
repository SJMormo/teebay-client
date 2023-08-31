import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../graphql/mutations"; // Path to your mutation
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useMutation(CREATE_USER);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if(loading) {
        <>Loading...</>
      }
      await createUserWithEmailAndPassword(email, password);
      await createUser({
        variables: {
          name,
          email,
        },
      });
      console.log("User created successfully");
      // Reset form fields after successful user creation
      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-3">
        <div>
          <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FloatingLabel>
        </div>

        <div>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FloatingLabel>
        </div>

        <div>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FloatingLabel>
        </div>

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

export default Signup;
