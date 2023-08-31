import React from "react";
import Samplelist from "./Samplelist";

function Samplecontact() {
  const contacts = [
    { name: "ganesh", email: "ganesh@gmail.com" },
    {
      name: "murugan",
      email: "murugan@gmail.com",
    }
  ];
  const renderNames = contacts.map((contact)=>{
    return(<Samplelist contacts={contact}></Samplelist>);
  })
  return <div>
    {renderNames}
  </div>;
}

export default Samplecontact;
