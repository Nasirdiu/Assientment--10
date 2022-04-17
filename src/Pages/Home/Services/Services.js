import React from "react";
import { useNavigate } from "react-router-dom";

const Services = ({ service }) => {
  const { id, name, img, price, description } = service;
  const navigate = useNavigate();
  const handelenavagite = (id) => {
    navigate(`/cheekOut/${id}`);
  };
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div className="card text-center" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top rounded-3" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>Per Day:${price}</h6>
          <p className="card-text">{description}</p>
          <button
            onClick={() => handelenavagite(id)}
            className="btn btn-info d-block mx-auto w-50"
          >
            Booking Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
