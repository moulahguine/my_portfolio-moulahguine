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
        <div className="container">
          {/* start logo */}
          <Link href="/" className="header__logo" aria-label="Home">
            <Image
              src="/logo/Logo.svg"
              alt="The logo of the website"
              width={32}
              height={32}
              className="header__logo-img"
              priority
            />
          </Link>
          {/* end logo */}
          {/* start navigation */}
          <Navigation className="nav-desktop" />
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
