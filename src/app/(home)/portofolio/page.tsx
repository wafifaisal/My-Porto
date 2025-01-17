import React from "react";
import { HeroParallax } from "@/components/HeroParallax";
import { products } from "@/data/products"; // Import products from a data file

export default function PortofolioPage() {
  return (
    <div>
      <HeroParallax products={products} />
    </div>
  );
}
