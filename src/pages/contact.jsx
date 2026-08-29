import React, { useState } from "react";
import { validateField, isFormValid } from "../services/formValidation";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;
    let value = inputValue;
    let errorMsg = "";

    if (name === "fullName" || name === "subject") {
      if (/[0-9]/.test(value)) {
        errorMsg =
          name === "fullName"
            ? "Numbers are not allowed in the full name."
            : "Numbers are not allowed in the subject.";

        value = value.replace(/[0-9]/g, "");
      }

      value = value.slice(0, 20);

      if (!errorMsg) {
        errorMsg = validateField(name, value);
      }
    } else if (name === "phone") {
      value = value.replace(/[^\d+\-\s()]/g, "");
      value = value.slice(0, 20);
      errorMsg = validateField(name, value);
    } else if (name === "message") {
      value = value.slice(0, 500);
      errorMsg = validateField(name, value);
    } else {
      errorMsg = validateField(name, value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handlePaste = (e) => {
    const { name } = e.target;

    if (name === "fullName" || name === "subject") {
      const pastedText = e.clipboardData.getData("text");

      if (/[0-9]/.test(pastedText)) {
        e.preventDefault();

        setTouched((prev) => ({
          ...prev,
          [name]: true,
        }));

        setErrors((prev) => ({
          ...prev,
          [name]:
            name === "fullName"
              ? "Numbers are not allowed in the full name."
              : "Numbers are not allowed in the subject.",
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {
      fullName: validateField("fullName", formData.fullName),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };

    setErrors(nextErrors);

    setTouched({
      fullName: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (!isFormValid(formData, nextErrors)) {
      return;
    }

    setIsSubmitted(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setErrors({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTouched({});
  };

  const canSubmit = isFormValid(formData, errors);

  return (
    <section className="split-hero contact-page">
      <div className="hero-text-side">
        <p className="eyebrow accent">Contact us</p>

        <h2>
          Get in <span>touch</span> with our team
        </h2>

        <div className="yellow-line"></div>

        <p>
          Have questions or want to start a project? Send us a message and
          our team will get back to you within 24 hours.
        </p>

        <div className="quick-contact-info">
          <div className="info-item">
            <strong>Email Us</strong>
            <p>support@ethera-studio.co.ls</p>
          </div>

          <div className="info-item">
            <strong>Location</strong>
            <p>Maseru, Lesotho</p>
          </div>
        </div>
      </div>

      <div className="hero-form-side">
        {isSubmitted ? (
          <div className="success-message">
            <h3>Message Sent!</h3>

            <p>
              Thank you for reaching out. We will get back to you within
              24 hours.
            </p>

            <button
              className="submit-btn"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="glass-form" onSubmit={handleSubmit} noValidate>
            <h3>Send a Message</h3>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>

                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onPaste={handlePaste}
                  maxLength={20}
                  placeholder="Enter your full name"
                />

                {touched.fullName && errors.fullName && (
                  <span className="error-text">{errors.fullName}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email address"
                />

                {touched.email && errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  maxLength={20}
                  placeholder="Enter your phone number"
                />

                {touched.phone && errors.phone && (
                  <span className="error-text">{errors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onPaste={handlePaste}
                  maxLength={20}
                  placeholder="Enter subject"
                />

                {touched.subject && errors.subject && (
                  <span className="error-text">{errors.subject}</span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={500}
                placeholder="Enter your message"
              ></textarea>

              {touched.message && errors.message && (
                <span className="error-text">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={!canSubmit}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
