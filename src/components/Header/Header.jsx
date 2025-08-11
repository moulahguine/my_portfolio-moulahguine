import "./Header.scss";

export default function Header() {
  return (
    <header className="site-header">
      <a className="userName" href="#home" aria-label="Go to home section">
        {/* <img
          className="userName__logo"
          src="/images/logo.svg"
          alt="Moulahguine logo"
          width="28"
          height="28"
        /> */}
        <span className="userName__name">moulahguine</span>
      </a>

      <nav className="primary-nav" aria-label="Primary">
        <ul className="primary-nav__list">
          <li className="primary-nav__item">
            <a href="#about">About</a>
          </li>
          <li className="primary-nav__item">
            <a href="#projects">Projects</a>
          </li>
          <li className="primary-nav__item">
            <a href="#skills">Skills</a>
          </li>
          <li className="primary-nav__item">
            <a href="#experience">Experience</a>
          </li>
          <li className="primary-nav__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
