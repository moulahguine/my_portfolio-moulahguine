import "./SocialLinksHero.scss";
import socialLinks from "@/components/SocialLinks/socialLinksData";
import * as motion from "motion/react-client";

export default function SocialLinksHero({ className }) {
  const groupVariants = {
    hidden: { scale: 0.8, y: -8, x: -30 },
    visible: {
      scale: 1,
      y: 0,
      x: 5,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      className={`hero__social ${className}`}
      initial="hidden"
      animate="visible"
      variants={groupVariants}
    >
      {socialLinks
        .filter(({ label }) => ["LinkedIn", "GitHub", "upwork"].includes(label))
        .map(({ href, label, color, icon: Icon }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{ "--social-color": color }}
          >
            <Icon aria-hidden="true" />
          </motion.a>
        ))}
    </motion.div>
  );
}
