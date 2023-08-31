import React from "react";

function Samplelist(props) {
    
  return (
    <div className="container mb-2 mt-1">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{props.contacts.name}</h5>
          <p class="card-text">{props.contacts.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Samplelist;
