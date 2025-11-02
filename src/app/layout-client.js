import Background from "@/components/Background/Background";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MouseFollower from "@/components/MouseFollower/MouseFollower";
import Hero from "@/sections/Hero/Hero";
import Aside from "@/components/Aside/Aside";

export default function LayoutClient({ children }) {
  return (
    <>
      {/* <Background /> */}
      {/* <Header /> */}

      <Aside />
      {/* <main id="main-content">{children}</main> */}
      {/* <Footer /> */}
      {/* <MouseFollower size={15} color="#2d3748" speed={0.3} enabled={true} /> */}
    </>
  );
}
