import React from "react";
import nasir from "../../../images/nasir.jpg";
const About = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-center text-info">About My Self</h1>
      <hr />
      <div className=" d-flex mt-5">
        <div>
          <p className="m-5 p-5">
             
            <h1 className="text-center text-info">Md.Nasir Uddin</h1>
            <hr />
            1. An internship paid / non-paid on React. <br />
            2. Or I have to do a job. <br />
            3. Because my B.Sc. will end in May. My dream is to do a job or
            internship on font end. <br />
            4. I need more skills...
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
