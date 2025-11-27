import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

export default function Header() {
  return (
    <header className={"header"}>
      <div className="header__container">
        {/* Logo */}
        <Logo />
        {/* nevigation */}
        <Navigation />
      </div>
    </header>
  );
}
