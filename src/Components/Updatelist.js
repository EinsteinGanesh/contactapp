import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";

function Updatelist(props) {
  console.log("update Contact box Function Called");

  const notify = () => toast("Updated Successfully !");
  const location = useLocation();
  const data = location.state;

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);

  function update(e) {
    if (name === "" && email === "") {
      alert("Fields are empty");
      return;
    }
    e.preventDefault();
    const newContact = {
      name: name,
      email: email,
    };
    console.log(newContact);
    props.updateContactHandler(newContact, data.id);
    setEmail("");
    setName("");
    notify();
  }

  return (
    <div className="container">
      <h2 className="text-center">Edit Contact</h2>

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
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
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="floatingemail">Email</label>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mt-2" onClick={update}>
            Update
          </button>
          <Link to="/">
            <button className="btn btn-primary mt-2 mx-2">Home</button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Updatelist;
