import "./Hero.scss";
// import { useState, useMemo, useCallback, Suspense, lazy } from "react";
import { useHeroHeight } from "./useHeroHeight";
import { useMediaQuery } from "react-responsive";
// import Aside from "../../components/Aside/Aside";

// Lazy load ImageModal
// const ImageModal = lazy(() => import("../../components/ImageModal/ImageModal"));

// export default function Hero() {
//   const heroHeight = useHeroHeight();

//   const isTablet = useMediaQuery({ maxWidth: 1130 });
//   const isMobile = useMediaQuery({ maxWidth: 778 });

//   const [isImageOpen, setIsImageOpen] = useState(false);

//   const socialLinks = useMemo(
//     () => [
//       {
//         href: "https://github.com/moulahguine",
//         icon: <FaGithub />,
//         label: "GitHub Profile",

//         className: "github-link",
//       },
//       {
//         href: "https://linkedin.com/in/moulahguine",
//         icon: <FaLinkedin />,
//         label: "LinkedIn Profile",
//         className: "linkedin-link",
//       },
//     ],
//     []
//   );

//   // Modal handlers
//   const handleImageClick = useCallback(() => {
//     setIsImageOpen(true);
//   }, []);

//   const handleCloseModal = useCallback(() => {
//     setIsImageOpen(false);
//   }, []);

//   return (
//     <>
//       <motion.section
//         style={{ height: !isMobile ? `${heroHeight}px` : "100vh" }}
//         id="hero"
//         className="hero"
//         aria-label="Hero"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//       >
//         <div className="container">
//           <div style={{ overflow: "hidden", width: "100%" }}>
//             {/* <Aside /> */}
//           </div>
//         </div>
//       </motion.section>
//       {/* {isImageOpen && (
//         <ImageModal
//           isOpen={isImageOpen}
//           onClose={handleCloseModal}
//           imageSrc={heroImage}
//           imageAlt="Mohamed Oulahguine - Frontend Developer"
//         />
//       )} */}
//     </>
//   );
// }
