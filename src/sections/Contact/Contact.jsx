import { useState } from "react";
import { motion } from "framer-motion";
import instagram from "../../assets/images/contact-section/instagram.jpg";
import telegram from "../../assets/images/contact-section/telegram.jpg";
import whatsapp from "../../assets/images/contact-section/whatsapp.jpg";
import linkedin from "../../assets/images/contact-section/linkedin.png";
import {
  FaLinkedin,
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationCircle,
  FaInstagram,
  FaTelegram,
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
      icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/moulahguine",
      color: "linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)",
      backGround: instagram,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/moulahguine",
      color: "#0077B5",
      backGround: linkedin,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/5548826567",
      color: "#25D366",
      backGround: whatsapp,
    },
    {
      icon: FaTelegram,
      label: "Telegran",
      href: "https://t.me/moulahguine",
      color: "#0077B5",
      backGround: telegram,
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
      {/* Header Section */}
      <motion.div
        className="contact__header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact__title">contact me</h2>
        <p className="contact__subtitle">Looking for my next challenge.</p>
      </motion.div>

      <div className="container">
        {/* Quick Action Buttons */}
        <motion.div
          className="contact__quick-actions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact__action-cards">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__action-card"
                style={{
                  "--action-color": action.color,
                  "--backGround": `url(${action.backGround})`,
                }}
              >
                <div className="contact__action-icon-bg">
                  <action.icon className="contact__action-icon" />
                </div>
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
    </section>
  );
}

export default Contact;
