import Navigation from "../Navigation/Navigation";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import * as motion from "motion/react-client";
import "./Header.scss";

export default function Header() {
  return (
    <motion.header
      className={"header"}
      // initial={{
      //   width: "100px",
      //   y: "50vh",
      //   x: "-50%",
      // }}
      // animate={{
      //   width: "100%",
      //   y: "0",
      //   x: "-50%",
      // }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="header__container">
        <Navigation />
        <SettingsMenu />
      </div>
    </motion.header>
  );
}
