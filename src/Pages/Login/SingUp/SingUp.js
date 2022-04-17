import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import google from "../../../images/icon/google.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmpassword, setConfirmpassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

  const navigate = useNavigate();
  /* useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]); */
  let errorhandle;
  if (error) {
    errorhandle = <p className="text-danger">Error: {error?.message}</p>;
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
  const handleFrom =async (e) => {
    e.preventDefault();
    if(email ||password ||confirmpassword ){
      await   createUserWithEmailAndPassword(email, password, confirmpassword);
      toast("Submit Success");
    }else {
      toast("Not Submit");
    }
    
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

          {errorhandle}
          <Button
            className="mb-3 w-50 mx-auto d-block"
            variant="primary"
            type="submit"
          >
            Sing Up
          </Button>
          <div className="d-flex align-items-center">
            <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            <p className="m-2 px-2">Or</p>
            <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          </div>
          <Button
            className="mb-3 w-50 mx-auto d-block"
            variant="primary"
            type="submit"
            onClick={() => signInWithGoogle()}
          >
            <img style={{ width: "24px" }} src={google} alt="" />
            Google SingIn
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
      <ToastContainer />
    </div>
  );
};

export default SingUp;
