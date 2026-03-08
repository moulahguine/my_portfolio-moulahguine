import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import "./Header.scss";

export default function Header() {
  return (
    <>
      {/* start desktop header */}
      <header className="header">
        <div className="header__container">
          {/* start logo */}
          <Link href="/" className="header__logo" aria-label="Home">
            <Image
              src="/logo/LogoInLightTheme.svg"
              alt="portfolio main logo"
              width={120}
              height={28}
              className="header__logo-dark"
              priority
            />
            <Image
              src="/logo/LogoInDarkTheme.svg"
              alt="portfolio main logo"
              width={120}
              height={28}
              className="header__logo-light"
              priority
            />
          </Link>
          {/* end logo */}
          {/* start navigation */}
          <div className="header__nav-desktop">
            <Navigation />
          </div>
          {/* end navigation */}
          <Menu />
        </div>
      </header>
      {/* end desktop header */}
      {/* start mobile navigation */}
      <div className="mobile-nav">
        <Navigation />
      </div>
      {/* end mobile navigation */}
    </>
  );
}
