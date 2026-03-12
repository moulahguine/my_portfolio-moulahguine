import { Comic_Neue } from "next/font/google";
import { metadata as siteMetadata } from "./metadata";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Providers from "./providers";
import "../assets/styles/main.scss";

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comic",
});

export const metadata = siteMetadata;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Mohamed Oulahguine",
    alternateName: "moulahguine",
    jobTitle: "Frontend Developer",
    description:
      "Frontend developer specializing in building modern web applications using React, Next.js, and TypeScript.",
    url: "https://mohamedoulahguine.com",
    mainEntityOfPage: "https://mohamedoulahguine.com",
    image: "https://ik.imagekit.io/moulahguine/mohamedoulahguine",
    sameAs: [
      "https://www.linkedin.com/in/moulahguine",
      "https://github.com/moulahguine",
      "https://leetcode.com/moulahguine",
      "https://www.upwork.com/freelancers/moulahguine",
      "https://medium.com/@moulahguine",
      "https://www.instagram.com/moulahguine",
      "https://www.youtube.com/@moulahguine",
      "https://t.me/moulahguine",
      "https://codepen.io/moulahguine",
    ],
    email: "mailto:hello@mohamedoulahguine.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Web Development",
      "SCSS",
      "CSS",
      "HTML",
      "Tailwind CSS",
      "Redux",
      "Material UI",
      "Framer Motion",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={comicNeue.variable}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </head>

      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100dvh",
          justifyContent: "space-between",
        }}
      >
        <Providers>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
