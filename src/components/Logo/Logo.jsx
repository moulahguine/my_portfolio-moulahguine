import Image from "next/image";
import Link from "next/link";
import logoImage from "../../assets/images/logo/logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <Link className="logo" href={"/"}>
      <Image src={logoImage} alt="Go to home section" width={70} height={70} />
    </Link>
  );
};

export default Logo;
