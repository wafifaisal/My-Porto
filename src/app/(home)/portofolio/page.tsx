"use client";
import React from "react";
import { HeroParallax } from "@/components/HeroParallax";

export default function PortofolioPage() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "",
    thumbnail: "",
  },
  {
    title: "Cursor",
    link: "",
    thumbnail: "",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "",
  },
];
