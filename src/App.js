// src/App.js
import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addOrUpdateContact = (contact) => {
    if (editingContact) {
      setContacts(
        contacts.map((c) => (c.id === editingContact.id ? contact : c))
      );
      setEditingContact(null);
    } else {
      setContacts([...contacts, { ...contact, id: Date.now() }]);
    }
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const editContact = (contact) => {
    setEditingContact(contact);
  };

  return (
    <div className="App">
      <h1>Phone Book App</h1>
      <ContactForm onSave={addOrUpdateContact} contactToEdit={editingContact} />
      <ContactList
        contacts={contacts}
        onDelete={deleteContact}
        onEdit={editContact}
      />
    </div>
  );
};

export default App;
