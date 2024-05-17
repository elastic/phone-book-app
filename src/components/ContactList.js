// src/components/ContactList.js
import React from "react";
import "./ContactList.css";

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <table className="contact-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Company</th>
              <th>Job Title</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.email}</td>
                <td>
                  {contact.street}, {contact.city}, {contact.state},{" "}
                  {contact.postalCode}, {contact.country}
                </td>
                <td>{contact.company}</td>
                <td>{contact.jobTitle}</td>
                <td>{contact.notes}</td>
                <td>
                  <button onClick={() => onEdit(contact)}>Edit</button>
                  <button onClick={() => onDelete(contact.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactList;
