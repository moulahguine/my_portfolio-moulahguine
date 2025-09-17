import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaRegCopy,
  FaPaperPlane,
  FaGithub,
  FaPhone,
  FaHandPointer,
} from "react-icons/fa";
import "./Contact.scss";
import { useForm } from "@formspree/react";
import { TfiEmail } from "react-icons/tfi";
import HoverCursor from "../../components/HoverCursor/HoverCursor";
import Location from "../../components/Location/Location";
import Modal from "../../components/Modal/Modal";

function Contact() {
  // Social media links
  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/moulahguine",
      color: "#0077B5",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/moulahguine",
      color: "#333",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/moulahguine",
      color: "#E4405F",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/5548826567",
      color: "#25D366",
    },
    {
      icon: FaTelegram,
      label: "Telegram",
      href: "https://t.me/moulahguine",
      color: "#0088CC",
    },
  ];

  const [formResponse, setFormResponse] = useState({ type: "", message: "" });
  const [copyFeedback, setCopyFeedback] = useState({
    email: false,
    phone: false,
  });
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [showFormInModal, setShowFormInModal] = useState(false);

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

  // Handle email modal actions
  const handleCopyEmail = () => {
    copyToClipboard("mohamedoulahguine@gmail.com", "email");
    setIsEmailModalOpen(false);
  };

  const handleOpenForm = () => {
    setShowFormInModal(true);
  };

  const handleCloseEmailModal = () => {
    setIsEmailModalOpen(false);
    setShowFormInModal(false);
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
    <section id="contact" className="contact">
      {/* Header */}
      <motion.div
        className="contact__header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__subtitle">
          Questions, Opportunities, Collaborations
        </p>
      </motion.div>

      <div className="container">
        <div className="contact__content">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Location */}
            <div className="contact__info-item">
              <div className="contact__info-content">
                <Location />
              </div>
            </div>

            {/* Email */}
            <div className="contact__info-item">
              <div className="contact__info-content">
                <HoverCursor
                  content="click"
                  className="contact__info-value"
                  onClick={() => setIsEmailModalOpen(true)}
                >
                  <TfiEmail />
                  <span>mohamedoulahguine@gmail.com</span>
                  <FaHandPointer />
                </HoverCursor>
              </div>
            </div>

            {/* Phone */}
            <div className="contact__info-item">
              <div className="contact__info-content">
                <HoverCursor
                  content="copy"
                  className="contact__info-value"
                  onClick={() => copyToClipboard("+90 554 882 65 67", "phone")}
                >
                  <FaPhone />
                  <span>
                    {copyFeedback.phone ? "Copied!" : "+90 554 882 65 67"}
                  </span>
                  {!copyFeedback.phone && <FaRegCopy />}
                </HoverCursor>
              </div>
            </div>

            {/* Social Media */}
            <div className="contact__social">
              <span className="contact__social-label">
                You may also find me on these platforms!
              </span>
              <div className="contact__social-links">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    style={{ "--social-color": social.color }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Email Options Modal */}
      <Modal
        isOpen={isEmailModalOpen}
        onClose={handleCloseEmailModal}
        title={showFormInModal ? "Send a Message" : "Email Options"}
        size="small"
        showHeader={false}
        style={{
          backgroundColor: "#ffffff39",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
        }}
      >
        {!showFormInModal ? (
          <div className="contact__email-options">
            <div className="contact__email-actions">
              <motion.button
                className="contact__email-btn contact__email-btn--copy"
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaRegCopy />
                Copy Email
              </motion.button>
              <motion.button
                className="contact__email-btn contact__email-btn--form"
                onClick={handleOpenForm}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane />
                Open Form
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="contact__form-modal">
            <button
              className="contact__form-close"
              onClick={handleCloseEmailModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <form className="contact__form" onSubmit={onSubmit}>
              <div className="contact__form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`contact__input ${
                    errors.name ? "contact__input--error" : ""
                  }`}
                />
                {errors.name && (
                  <span className="contact__error">{errors.name}</span>
                )}
              </div>

              <div className="contact__form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className={`contact__input ${
                    errors.email ? "contact__input--error" : ""
                  }`}
                />
                {errors.email && (
                  <span className="contact__error">{errors.email}</span>
                )}
              </div>

              <div className="contact__form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className={`contact__textarea ${
                    errors.message ? "contact__textarea--error" : ""
                  }`}
                  rows="5"
                />
                {errors.message && (
                  <span className="contact__error">{errors.message}</span>
                )}
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
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        )}
      </Modal>

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
