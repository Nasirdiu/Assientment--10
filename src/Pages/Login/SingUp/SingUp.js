import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification: true });

  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmpassword(e.target.value);
  };
  const handleFrom = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password, confirmpassword);
  };
  return (
    <div className="container w-50  login mt-3">
      <div className="w-50 d-d-block mx-auto p-2">
        <Form onSubmit={handleFrom}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePassword}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onBlur={handleConfirmPassword}
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
            />
          </Form.Group>

          <Button
            className="mb-3 w-50 mx-auto d-block"
            variant="primary"
            type="submit"
          >
            Sing Up
          </Button>

          <p>
            AllReady Have and account?
            <Link
              className="from-link text-decoration-none text-danger"
              to="/login"
            >
              Login Now..
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SingUp;
