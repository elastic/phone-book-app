// src/components/ContactForm.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";

const ContactForm = ({ onSave, contactToEdit }) => {
  const { t: translate } = useTranslation();
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    street: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    company: "",
    job_title: "",
    notes: "",
  });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
    }
  }, [contactToEdit]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      });
  }, []);

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
      postal_code: "",
      country: "",
      company: "",
      job_title: "",
      notes: "",
    });
  };

  console.log("++++ contact ++++");
  console.log(contact);

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <label>{translate("firstName")}:</label>
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>{translate("lastName")}:</label>
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>{translate("street")}:</label>
        <input
          type="text"
          name="street"
          value={contact.street}
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
          type="text"
          name="email"
          value={contact.email}
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
          pattern="[A-Za-z0-9]+"
          title="State name should only contain letters"
        />
      </div>
      <div className="form-row">
        <label>Postal Code:</label>
        <input
          type="text"
          name="postal_code"
          value={contact.postal_code}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label>Country:</label>
        <select name="country" value={contact.country} onChange={handleChange}>
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
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
      <button type="submit">Save Contact</button>
      <div className="form-row">
        <label>Job Title:</label>
        <input
          type="text"
          name="job_title"
          value={contact.job_title}
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
    </form>
  );
};

export default ContactForm;
