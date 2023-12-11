import React, { useState } from "react";
import banner from "../assets/bgside.png";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending email (this would typically be done on the server)
    const success = true; // Set to false to simulate an error

    if (success) {
      // Reset form data
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div
      id="contact"
      className="text-bg-dark"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundBlendMode: "soft-light",
        backgroundSize: "cover",
      }}
    >
      <div className="container pt-5">
        <h1 className="text-center mt-4">
          <strong>Contact Me</strong>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="mx-auto"
          style={{ maxWidth: "400px" }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control text-bg-dark"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control text-bg-dark"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control text-bg-dark"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
