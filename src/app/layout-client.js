import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
export default function LayoutClient({ children }) {
  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
