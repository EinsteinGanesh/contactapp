import "./App.css";
import Contactbox from "./Components/Contactbox";
import { useRoutes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Contactholder from "./Components/Contactholder";
import { v4 as uuidv4 } from "uuid";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContact] = useState([]);
  const addContactHandler = (contact) => {
    setContact([...contacts, { id: uuidv4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(newContactList);
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("Stored Contacts:", storedContacts);
    if (storedContacts.length !== 0) {
      setContact(storedContacts);
      console.log("Setting Contacts:", storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  let element = useRoutes([
    {
      path: "/",
      element: <Contactbox addContactHandler={addContactHandler} />,
    },
    {
      path: "/add",
      element: (
        <Contactholder
          contacts={contacts}
          getContactId={removeContactHandler}
        />
      ),
    },
  ]);

  return (
    <>
        {element}
    </>
  );
}

export default App;
