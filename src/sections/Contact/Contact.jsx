import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import instagram from "../../assets/images/contact-section/instagram.jpg";
import telegram from "../../assets/images/contact-section/telegram.jpg";
import whatsapp from "../../assets/images/contact-section/whatsapp.jpg";
import linkedin from "../../assets/images/contact-section/linkedin.png";
import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaPhone,
  FaRegCopy,
} from "react-icons/fa";
import "./Contact.scss";
import { useForm } from "@formspree/react";
import { TfiEmail } from "react-icons/tfi";
import { FaMapLocation } from "react-icons/fa6";
import HoverCursor from "../../components/HoverCursor/HoverCursor";

function Contact() {
  // Quick action links
  const quickActions = [
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/moulahguine",
      color: "linear-gradient(to right,#833ab4,#fd1d1d,#fcb045)",
      background: instagram,
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/moulahguine",
      color: "#0077B5",
      background: linkedin,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/5548826567",
      color: "#25D366",
      background: whatsapp,
    },
    {
      icon: FaTelegram,
      label: "Telegram",
      href: "https://t.me/moulahguine",
      color: "#0077B5",
      background: telegram,
    },
  ];

  const [formResponse, setFormResponse] = useState({ type: "", message: "" });
  const [copyFeedback, setCopyFeedback] = useState({
    email: false,
    phone: false,
  });

  // Clipboard copy
  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyFeedback((prev) => ({ ...prev, [type]: true }));
      setTimeout(() => {
        setCopyFeedback((prev) => ({ ...prev, [type]: false }));
      }, 1000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [state, handleSubmit] = useForm("myzdnqpd");

  // Custom validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // clear error if typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Submit
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    await handleSubmit(e);
  };

  // Reset form
  const clearForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };

  // Handle success/error from Formspree
  useEffect(() => {
    if (state.succeeded) {
      clearForm();
      setFormResponse({
        type: "success",
        message: "Thank you! I'll reply soon.",
      });
      const timer = setTimeout(() => {
        setFormResponse({ type: "", message: "" });
      }, 2000);
      return () => clearTimeout(timer);
    }

    if (state.errors && state.errors.length > 0) {
      setFormResponse({
        type: "error",
        message: "Something went wrong, please try again.",
      });
    }
  }, [state.succeeded, state.errors]);

  return (
    <section path="/contact" id="contact" className="contact">
      {/* Header */}
      <motion.div
        className="contact__header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact__title">contact me</h2>
      </motion.div>

      <div className="container">
        {/* Quick Actions */}
        <motion.div
          className="contact__quick-actions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="contact__social-title">
            Reach out on the platform that works best for you.
          </h3>
          <div className="contact__action-cards">
            {quickActions.map((action) => (
              <motion.a
                key={action.label}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__action-card"
                style={{
                  "--action-color": action.color,
                  "--background": `url(${action.background})`,
                }}
              >
                <div className="contact__action-icon-bg">
                  <action.icon className="contact__action-icon" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <div className="contact__footer">
            <div className="contact__footer-location">
              <FaMapLocation />
              <p>Based in Turkey, available for remote and onsite roles.</p>
            </div>

            <HoverCursor
              content="copy"
              className="contact__footer-email"
              onClick={() =>
                copyToClipboard("mohamedoulahguine@gmail.com", "email")
              }
            >
              <TfiEmail />
              <p>
                {copyFeedback.email ? "Copied!" : "mohamedoulahguine@gmail.com"}
              </p>
              {!copyFeedback.email && <FaRegCopy />}
            </HoverCursor>

            <HoverCursor
              content="copy"
              className="contact__footer-number"
              onClick={() => copyToClipboard("+90 554 882 65 67", "phone")}
            >
              <FaPhone />
              <p>{copyFeedback.phone ? "Copied!" : "+90 554 882 65 67"}</p>
              {!copyFeedback.phone && <FaRegCopy />}
            </HoverCursor>
          </div>
        </motion.div>

        {/* Form */}
        <div className="contact__form-section">
          <span className="contact__form-icon">
            <TfiEmail />
          </span>
          <form className="contact__form" onSubmit={onSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="What should I call you?"
                  className={`contact__input ${
                    errors.name ? "contact__input--error" : ""
                  }`}
                />
              </div>

              <div className="contact__form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Where can I reply back?"
                  className={`contact__input ${
                    errors.email ? "contact__input--error" : ""
                  }`}
                />
              </div>

              <div className="contact__form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about the role or project…"
                  className={`contact__textarea ${
                    errors.message ? "contact__textarea--error" : ""
                  }`}
                  rows="6"
                />
              </div>
            </div>

            <motion.button
              type="submit"
              className="contact__submit-button"
              disabled={state.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {state.submitting ? (
                <span className="contact__submit-loading">
                  <div className="contact__spinner"></div>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </div>
      </div>

      {/* Notifications */}
      {formResponse.message && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          className={`notification notification--${formResponse.type}`}
        >
          <div className="notification__content">
            <div className="notification__message">{formResponse.message}</div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Contact;
