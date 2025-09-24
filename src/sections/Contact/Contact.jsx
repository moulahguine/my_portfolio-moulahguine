import { motion } from "framer-motion";
import {
  FaRegCopy,
  FaPaperPlane,
  FaPhone,
  FaHandPointer,
} from "react-icons/fa";
import "./Contact.scss";
import { TfiEmail } from "react-icons/tfi";
import HoverCursor from "../../components/HoverCursor/HoverCursor";
import Location from "../../components/Location/Location";
import Modal from "../../components/Modal/Modal";
import CloseButton from "../../components/CloseButton/CloseButton";
import socialLinks from "./socialLinks";
import { useContactForm } from "./useContactForm";

function Contact() {
  const {
    formData,
    errors,
    formResponse,
    copyFeedback,
    isEmailModalOpen,
    showFormInModal,
    state,
    formKey,
    handleInputChange,
    onSubmit,
    copyToClipboard,
    handleCopyEmail,
    handleOpenForm,
    handleCloseEmailModal,
    setIsEmailModalOpen,
  } = useContactForm();

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <header className="contact__header">
        <h1 className="contact__title">Get In Touch</h1>
        <p className="contact__subtitle">
          Questions, Opportunities, Collaborations
        </p>
      </header>

      <main className="container">
        <div className="contact__content">
          <div className="contact__info">
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
              <span className="contact__social-label">I’m also active on:</span>
              <div className="contact__social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    style={{ "--social-color": social.color }}
                    title={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Email Options Modal */}
      <Modal
        isOpen={isEmailModalOpen}
        onClose={handleCloseEmailModal}
        title={showFormInModal ? "Send a Message" : "Email Options"}
        size="small"
        showHeader={false}
        style={{
          background: "transparent !important",
        }}
      >
        {!showFormInModal ? (
          <div className="contact__email-options">
            <div className="contact__email-actions">
              <button
                className="contact__email-btn contact__email-btn--copy"
                onClick={handleCopyEmail}
              >
                <FaRegCopy />
                Copy Email
              </button>
              <button
                className="contact__email-btn contact__email-btn--form"
                onClick={handleOpenForm}
              >
                <FaPaperPlane />
                Open Form
              </button>
            </div>
          </div>
        ) : (
          <div className="contact__form-modal">
            <CloseButton
              onClick={handleCloseEmailModal}
              ariaLabel="Close modal"
            />
            <form key={formKey} className="contact__form" onSubmit={onSubmit}>
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">
                  Your Name
                </label>
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
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={!!errors.name}
                  required
                />
                {errors.name && (
                  <span id="name-error" className="contact__error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">
                  Your Email
                </label>
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
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                  required
                />
                {errors.email && (
                  <span
                    id="email-error"
                    className="contact__error"
                    role="alert"
                  >
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__label">
                  Your Message
                </label>
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
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  aria-invalid={!!errors.message}
                  required
                />
                {errors.message && (
                  <span
                    id="message-error"
                    className="contact__error"
                    role="alert"
                  >
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="contact__submit-button"
                disabled={state.submitting}
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
              </button>
            </form>
          </div>
        )}
      </Modal>

      {/* Notifications */}
      {formResponse.message && (
        <div
          className={`notification notification--${formResponse.type}`}
          role="alert"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="notification__content">
            <div className="notification__message">{formResponse.message}</div>
          </div>
        </div>
      )}
    </motion.section>
  );
}

export default Contact;
