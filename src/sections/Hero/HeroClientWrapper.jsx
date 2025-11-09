"use client";
import { useHeroHeight } from "./useHeroHeight";
import Hero from "./Hero";

export default function HeroClientWrapper(props) {
  const heroHeight = useHeroHeight();
  if (heroHeight == null) {
    return null;
  }
  return <Hero height={heroHeight} {...props} />;
}
