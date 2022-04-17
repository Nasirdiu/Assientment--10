import React from "react";
import nasir from "../../../images/nasir.jpg";
const About = () => {
  return (
    <div className="container mt-3"> 
        <h1 className="text-center text-info">About My Self</h1>
      <div className=" d-flex mt-5">
        <div>
          <p className="m-5 p-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vel
            blanditiis aliquid quas eum vitae iste, non minus quisquam ipsam,
            voluptatum ullam alias omnis odit, velit fugiat dolorum consectetur
            corporis.
          </p>
        </div>
        <div>
          <img className="img-fluid rounded-circle" src={nasir} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
