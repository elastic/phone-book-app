// src/components/ContactForm.js
import React, { useState, useEffect } from "react";

const ContactForm = ({ onSave, contactToEdit }) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
      country: "",
    },
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

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      address: {
        ...prevContact.address,
        [name]: value,
      },
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
      address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
      company: "",
      jobTitle: "",
      notes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={contact.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
      </label>
      <fieldset>
        <legend>Address</legend>
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={contact.address.street}
            onChange={handleAddressChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={contact.address.city}
            onChange={handleAddressChange}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={contact.address.state}
            onChange={handleAddressChange}
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            name="postalCode"
            value={contact.address.postalCode}
            onChange={handleAddressChange}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            name="country"
            value={contact.address.country}
            onChange={handleAddressChange}
          />
        </label>
      </fieldset>
      <label>
        Company:
        <input
          type="text"
          name="company"
          value={contact.company}
          onChange={handleChange}
        />
      </label>
      <label>
        Job Title:
        <input
          type="text"
          name="jobTitle"
          value={contact.jobTitle}
          onChange={handleChange}
        />
      </label>
      <label>
        Notes:
        <textarea
          name="notes"
          value={contact.notes}
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit">Save Contact</button>
    </form>
  );
};

export default ContactForm;
