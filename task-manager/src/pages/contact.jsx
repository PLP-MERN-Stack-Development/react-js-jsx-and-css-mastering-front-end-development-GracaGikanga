import React, { useState } from "react";
import "../styles/contact.css";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We’d love to hear your feedback, suggestions, or any issues you’ve encountered while using Task Manager!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message..."
          required
        />

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Other ways to reach us:</h3>
        <p>📧 Email: support@taskmanager.com</p>
        <p>📞 Phone: +1 (555) 123-4567</p>
        <p>🏢 Address: 123 Productivity Lane, Nairobi, Kenya</p>
      </div>
    </div>
  );
}

export default Contacts;
