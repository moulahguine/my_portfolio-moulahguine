import * as motion from "motion/react-client";

export default function FadeIn({
  children,
  id,
  className,
  as = "div",
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 30,
  once = true,
  ...props
}) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
