import React from "react";
import { Button, Form } from "react-bootstrap";
const CheekOut = () => {
  const handleFrom = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container w-50  login mt-3">
      <h1 className="text-center text-info">Cheek Out Page</h1>
      <div className="w-50 d-d-block mx-auto p-2">
        <Form onSubmit={handleFrom}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="address"
              name="address"
              placeholder="Your address"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Number">
            <Form.Label>Number</Form.Label>
            <Form.Control type="number" name="number" placeholder="Number" />
          </Form.Group>

          <Button
            className="mb-3 w-50 mx-auto d-block"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CheekOut;
