// src/components/ContactForm.js
import React, { useState, useEffect } from "react";
import "./ContactForm.css";

const ContactForm = ({ onSave, contactToEdit }) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    company: "",
    jobTitle: "",
    notes: "",
  });

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
    }
  }, [contactToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(contact);
    setContact({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
      company: "",
      jobTitle: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={contact.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>Street:</label>
        <input
          type="text"
          name="street"
          value={contact.street}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={contact.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={contact.state}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>Postal Code:</label>
        <input
          type="text"
          name="postalCode"
          value={contact.postalCode}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={contact.country}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>Company:</label>
        <input
          type="text"
          name="company"
          value={contact.company}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          value={contact.jobTitle}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>Notes:</label>
        <textarea
          name="notes"
          value={contact.notes}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Save Contact</button>
    </form>
  );
};

export default ContactForm;
