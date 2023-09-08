import React from "react";
import user from "../Images/user_profile.jpg";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Contactdetails = (props) => {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="container">
      <h2 className="text-center">Contact</h2>

      <div className="card text-center mx-auto" style={{ width: "18rem" }}>
        <img className="card-img-top" src={user} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.email}</p>
        </div>
      </div>
      <div className="text-center mt-3">
        <Link to="/add">
          <button className="btn btn-primary">Go Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Contactdetails;
