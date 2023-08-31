import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contactbox(props) {
  console.log("Contact box Function Called");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const notify = () => toast("Saved Successfully !");
  

  function getName(e) {
    e.preventDefault();
    setName(e.target.value);
  }
  function getEmail(e) {
    e.preventDefault();
    setEmail(e.target.value);
  }

  function add(e) {
    if (name === "" && email === "") {
      alert("Fields are empty");
      return;
    }
    e.preventDefault();
    const newContact = {
      name: name,
      email: email,
    };
    props.addContactHandler(newContact);
    setName("");
    setEmail("");
    notify();
  }

  return (
    <div className="container">
      <h2 className="text-center">Contact App</h2>

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={name}
          onChange={getName}
        />
        <label htmlFor="floatingInput">User Name</label>
      </div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingemail"
          placeholder="email"
          value={email}
          onChange={getEmail}
        />
        <label htmlFor="floatingemail">Email</label>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mt-2" onClick={add}>
            Add
          </button>
          <Link to="/add">
            <button className="btn btn-primary mt-2 mx-2">
              View Saved Contacts
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contactbox;
