import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

function Contactlist(props) {
  const myStyle = {
    width: "10%",
    borderRadius: "500px",
    margin: "3px",
  };
  const data = props.contacts;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`contact/${props.contacts.id}`, { state: data });
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`, { state: data });
  };
  return (
    <>
      <div className="container w-50">
        <div className="container mt-2 d-flex border">
          <img
            src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-business-user-profile-vector-png-image_1541960.jpg"
            className="img-rounded"
            alt="user"
            style={myStyle}
          />

          <div className="container mt-4" onClick={handleClick} style={{cursor:"pointer"}} >
           
              <h5>{props.contacts.name}</h5>
              <p>{props.contacts.email}</p>
            
          </div>
          
          <i
            className="bi bi-pencil-square mt-2"
            style={{ color: "blue", marginRight:"10px"}}
            onClick={(e)=>{
              handleUpdate(props.contacts.id);
            }}
          ></i>
      

          <i
            className="bi bi-trash-fill mt-2"
            style={{ color: "red" }}
            onClick={(e) => {
              props.clickHandler(props.contacts.id);
            }}
          ></i>
          
        </div>
      </div>
    </>
  );
}

export default Contactlist;
