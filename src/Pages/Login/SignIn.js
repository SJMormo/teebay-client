import React, { useRef } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SignIn = () => {
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate("/");
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <Form onSubmit={handleLogin} className="w-50 mx-auto mt-3">
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
          LOGIN
        </Button>
        <p className="mt-2 text-center">Don't Have an Account?</p>
        <Link className="btn btn-outline-dark w-100" to="/signup">
          SignUp
        </Link>
      </Form>
    </div>
  );
};

export default SignIn;
