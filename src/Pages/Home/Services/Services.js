import React from "react";

const Services = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card text-center" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top rounded-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>{price}</h6>
          <p className="card-text">{description}</p>
          <button className="btn btn-info d-block mx-auto w-50">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
