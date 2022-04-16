import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingUp = () => {
    return (
        <div className="container w-50  login mt-3">
        <div className="w-50 d-d-block mx-auto p-2">
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" /> 
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" /> 
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
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