import { BrowserRouter, Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";
import MouseFollower from "./components/MouseFollower/MouseFollower";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";

// Page imports
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Background />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MouseFollower size={15} color="#2d3748" speed={0.3} enabled={true} />
    </BrowserRouter>
  );
}
