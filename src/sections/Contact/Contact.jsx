import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import "./Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Hidden field for spam protection
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Quick action links - replace with your actual links
  const quickActions = [
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:your.email@example.com",
      color: "#EA4335",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-profile",
      color: "#0077B5",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/your-username",
      color: "#333333",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/your-phone-number",
      color: "#25D366",
    },
  ];

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    // Check honeypot field
    if (formData.honeypot) {
      newErrors.honeypot = "Spam detected";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with actual form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Log form data (replace with actual submission logic)
      console.log("Form submitted:", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", honeypot: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        {/* Header Section */}
        <motion.div
          className="contact__header"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact__title">
            Let's build something amazing together
          </h2>
          <p className="contact__subtitle">
            I'm always open to discussing new opportunities, collaborations, or
            projects.
          </p>
        </motion.div>

        <div className="contact__content">
          {/* Quick Action Buttons */}
          <motion.div
            className="contact__quick-actions"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="contact__section-title">Quick Connect</h3>
            <div className="contact__action-buttons">
              {quickActions.map((action, index) => (
                <motion.a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__action-button"
                  style={{ "--action-color": action.color }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <action.icon className="contact__action-icon" />
                  <span className="contact__action-label">{action.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact__form-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="contact__section-title">Send me a message</h3>
            <form className="contact__form" onSubmit={handleSubmit}>
              {/* Honeypot field for spam protection */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="contact__form-row">
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__label">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`contact__input ${errors.name ? "contact__input--error" : ""}`}
                    placeholder="Your name"
                    required
                  />
                  {errors.name && (
                    <span className="contact__error">
                      <FaExclamationCircle />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__label">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`contact__input ${errors.email ? "contact__input--error" : ""}`}
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.email && (
                    <span className="contact__error">
                      <FaExclamationCircle />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`contact__textarea ${errors.message ? "contact__textarea--error" : ""}`}
                  placeholder="Tell me about your project or opportunity..."
                  rows="6"
                  required
                />
                {errors.message && (
                  <span className="contact__error">
                    <FaExclamationCircle />
                    {errors.message}
                  </span>
                )}
              </div>

              <motion.button
                type="submit"
                className="contact__submit-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="contact__submit-loading">
                    <div className="contact__spinner"></div>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  className={`contact__status contact__status--${submitStatus}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitStatus === "success" ? (
                    <>
                      <FaCheckCircle />
                      <span>
                        Message sent successfully! I'll get back to you soon.
                      </span>
                    </>
                  ) : (
                    <>
                      <FaExclamationCircle />
                      <span>
                        Something went wrong. Please try again or use the quick
                        action buttons above.
                      </span>
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
