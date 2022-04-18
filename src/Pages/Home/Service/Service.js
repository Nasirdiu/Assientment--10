import React, { useEffect, useState } from "react";
import Services from "../Services/Services";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`generated.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <h1 className="text-center text-info mt-3">Service</h1>
      <hr/>
      <div className="row">
          {
              services.map(service=><Services key={service.id} service={service}></Services>)
          }
      </div>
    </div>
  );
};

export default Service;
