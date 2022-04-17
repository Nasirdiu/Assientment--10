import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../../../images/icon/google.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error1] =
    useSendPasswordResetEmail(auth);
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  let errorhandle;
  if (error) {
    errorhandle = <p className="text-danger">Error: {error?.message}</p>;
  }
  const handleEmaile = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleFrom = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Send Mail");
    } else {
      toast("Enter Your Mail Address");
    }
  };
  return (
    <div className="container w-50  login mt-3">
      <div className="w-50 d-d-block mx-auto p-2">
        <Form onSubmit={handleFrom}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmaile}
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
          <p>
            Loss Password And Forget?
            <Link
              onClick={resetPassword}
              className="from-link text-decoration-none text-danger"
              to=""
            >
              Forget Password
            </Link>
          </p>
          {errorhandle}
          <Button
            className="mb-3 w-50 mx-auto d-block"
            variant="primary"
            type="submit"
          >
            Login
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
              to="/singUp"
            >
              Register Now..
            </Link>
          </p>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
