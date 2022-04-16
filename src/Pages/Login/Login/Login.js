import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="container w-50  login mt-3">
      <div className="w-50 d-d-block mx-auto p-2">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <p>
          Loss Password And Forget?
          <Link
            
            className="from-link text-decoration-none text-danger"
            to=""
          >
            Forget Password
          </Link>
        </p>
          <Button
            className="mb-3 w-50 mx-auto d-block"
            variant="primary"
            type="submit"
          >
            Login
          </Button>
         
        <p>
          AllReady Have and account?
          <Link
            className="from-link text-decoration-none text-danger"
            to="/singUp"
          >
            Register Now..
          </Link>
        </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
