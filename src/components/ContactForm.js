// src/components/ContactForm.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";

const ContactForm = ({ onSave, contactToEdit }) => {
  const { t } = useTranslation();
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    if (contactToEdit) {
      setContact({
        firstName: contactToEdit.firstName,
        lastName: contactToEdit.lastName,
      });
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
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <label>{t("firstName")}:</label>
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>{t("lastName")}:</label>
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Contact</button>
    </form>
  );
};

export default ContactForm;
