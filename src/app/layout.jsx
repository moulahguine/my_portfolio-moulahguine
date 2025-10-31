import { metadata as siteMetadata } from "./metadata";
import LayoutClient from "./layout-client";
import "../assets/styles/main.scss";
import "./layout.scss";

export const metadata = siteMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohamed Oulahguine",
              alternateName: "Oulahguine",
              jobTitle: "Frontend Developer",
              description:
                "Expert Frontend Developer specializing in Next, React, JavaScript, and modern web development",
              url: "https://mohamedoulahguine.com",
              image: "https://mohamedoulahguine.com/og/og-image.png",
              sameAs: [
                "https://github.com/moulahguine",
                "https://linkedin.com/in/moulahguine",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Istanbul",
                addressCountry: "Turkey",
              },
              birthPlace: {
                "@type": "Place",
                name: "Morocco",
              },
              knowsAbout: [
                "React",
                "Next",
                "TypeScript",
                "JavaScript",
                "Frontend Development",
                "Web Development",
                "SCSS",
                "CSS",
                "HTML",
                "tailwindCss",
                "vite",
                "jest",
                "redux",
                "materia UI",
                "Framer Motion",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Frontend Developer",
                occupationLocation: {
                  "@type": "City",
                  name: "Istanbul",
                },
              },
            }),
          }}
        />
      </head>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
