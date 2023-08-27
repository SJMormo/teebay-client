import React, { useRef } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/signin");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password);
    console.log(email, password);
  };

  return (
    <div>
      <Form onSubmit={handleRegister} className="w-50 mx-auto mt-3">
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
