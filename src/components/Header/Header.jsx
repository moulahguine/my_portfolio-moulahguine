// nextjs client components
import Link from "next/link";
import Image from "next/image";

// components
import { Navigation, Menu } from "@/components";

// styles
import "./Header.scss";

// logo
const logo =
  "https://ik.imagekit.io/moulahguine/myPortfolio/portfolioLogo/logo?updatedAt=1773486593918&tr=q-80,w-800,h-800";

export default function Header() {
  return (
    <>
      {/* start desktop header */}
      <header className="header">
        <div className="container">
          {/* start logo */}
          <Link href="/" className="header__logo" aria-label="Home">
            <Image
              src={logo}
              className="header__logo-img"
              alt="Mohamed Oulahguine portfolio logo"
              width={40}
              height={40}
              priority
              quality={100}
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
