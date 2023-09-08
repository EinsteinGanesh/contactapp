import "./App.css";
import Contactbox from "./Components/Contactbox";
import { useRoutes } from "react-router-dom";
import api from "./api/contacts"
import React, { useState, useEffect } from "react";
import Contactholder from "./Components/Contactholder";
import { v4 as uuidv4 } from "uuid";
import Contactdetails from "./Components/Contactdetails";
import Updatelist from "./Components/Updatelist";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContact] = useState([]);
  const addContactHandler = async(contact) => {
    const request = {
      id:uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts",request);
    setContact([...contacts, response]);
    
   
      setContact([...contacts, response.data]);
    
  };

  //Retrive Contact Function

  const retriveContacts = async()=>{
    const response = await api.get("/contacts");
    return response.data;
  };
//Remove contacts from the list
  const removeContactHandler = async(id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(newContactList);
  };


//Update the contacts from the update component

const updateContactHandler = async(contact, compId)=>{
  const response = await api.put(`/contacts/${compId}`,contact);
  console.log(response);
  const {id, name, email} = response.data;
  console.log(response.data);
  setContact(
    contacts.map((contact)=>{
      return contacts.id === id ? {...response.data} : contact;
    })
  );
};

//Get the stored contacts from the server

  useEffect(() => {
    // const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (storedContacts.length !== 0) {
    //   setContact(storedContacts);
    // }

    const getAllContacts = async ()=> {
      const allContacts = await retriveContacts();
      if (allContacts) setContact(allContacts);
    }
    getAllContacts();
  }, []);

  //Storing the contacts in the local storage

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

//Using Routes to navigate between the pages.

  let element = useRoutes([
    {
      path: "/add",
      element: <Contactbox addContactHandler={addContactHandler} />,
    },
    {
      path: "/",
      element: (
        <Contactholder
          contacts={contacts}
          getContactId={removeContactHandler}
        />
      ),
    },
    {
      path: "/contact/:id",
      element: <Contactdetails />,
    },
    {
      path:"/update/:id",
      element:<Updatelist updateContactHandler = {updateContactHandler}/>
    }
  ]);

  return <>{element}</>;
}

export default App;
