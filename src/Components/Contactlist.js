import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Contactlist(props) {
  console.log("Contactlist Function Called");
    const myStyle = {
        width : "10%",
        borderRadius:"500px",
        margin:"3px"


    }

   
    
  return (
    <>
    <div className="container w-50">
    <div className="container mt-2 d-flex border">
     <img src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-business-user-profile-vector-png-image_1541960.jpg" className="img-rounded" alt="user" style={myStyle}/>
     <div className="container mt-4">
        <h5>{props.contacts.name}</h5>
        <p>{props.contacts.email}</p>
     </div>
     <i className="bi bi-trash-fill mt-2" style={{color:"red"}} onClick={(e)=>{props.clickHandler(props.contacts.id)}}></i>
    </div>
    </div></>
  );
}

export default Contactlist;
