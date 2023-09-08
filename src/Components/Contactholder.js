import React from "react";
import Contactlist from "./Contactlist";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contactholder(props) {
  console.log(props.contacts);
  // console.log("the items are"+ props.contacts);
  const deleteNotify = () => toast.warn("Deleted!!");
  const deleteContactHandler = (id) => {
    props.getContactId(id);
    deleteNotify();
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <Contactlist
        contacts={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></Contactlist>
    );
  });
//auto retrive the updated contacts from a server and show in the content box


  
  return (
    <>
      <div>
        <h2 className="text-center">Saved Contacts</h2>
        {renderContactList}
      </div>
      <div className="container text-center mt-2">
        <Link to="/add">
          <button className="btn btn-primary">Back to Home</button>
        </Link>
      </div>
      <ToastContainer />
    </>
  );
}

export default Contactholder;
