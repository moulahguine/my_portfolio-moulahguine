"use client";

import socialLinks from "@/components/SocialLinks/socialLinksData";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { GoLink } from "react-icons/go";

export default function SocialLinks() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "x" }, [
    Autoplay({
      delay: 1000,
    }),
  ]);

  return (
    <button
      className="social_carousel_btn embla"
      ref={emblaRef}
      aria-label="My social media"
      type="button"
    >
      <div className="container">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <span key={social.label} className="item">
              <Icon size={22} />
            </span>
          );
        })}
        
      </div>

      <span className="hover_icon">
        <GoLink size={22} />
      </span>
    </button>
  );
}
