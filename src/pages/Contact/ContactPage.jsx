import { motion } from "framer-motion";
import Contact from "../../sections/Contact/Contact";

const ContactPage = () => {
  return (
    <motion.main
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Contact />
    </motion.main>
  );
};

export default ContactPage;
