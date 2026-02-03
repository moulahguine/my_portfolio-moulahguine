import Navigation from "../Navigation/Navigation";
import * as motion from "motion/react-client";
import "./Header.scss";

export default function Header() {
  return (
    <motion.header
      className={"header"}
      // initial={{
      //   width: "5%",
      //   position: "absolute",
      //   top: "50%",
      //   left: "50%",
      //   transform: "translate(-50%,-50%)",
      // }}
      // animate={{
      //   width: "100%",
      //   position: "fixed",
      //   top: "  0",
      //   left: "50%",
      //   transform: "translate(-50%,0)",
      // }}
      // transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="header__container">
        {/* nevigation */}
        <Navigation />
      </div>
    </motion.header>
  );
}
