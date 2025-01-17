"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../style/3D.module.css";

interface ThreeDQuestionMarkProps {
  text: string;
  defaultBackground?: string; // Default background
  hoverBackground?: string; // Background when hovered
  children?: React.ReactNode;
}

export function ThreeDQuestionMark({
  text,
  defaultBackground,
  hoverBackground,
  children,
}: ThreeDQuestionMarkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = -(x - centerX) / 20;

      setRotation({ rotateX, rotateY });

      container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      setRotation({ rotateX: 0, rotateY: 0 });
      if (container) {
        container.style.transform = `rotateX(0deg) rotateY(0deg)`;
      }
    };

    container?.addEventListener("mousemove", handleMouseMove);
    container?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
      container?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles.card}
      style={{
        background: isHovered ? hoverBackground : defaultBackground, // Dynamic background based on hover state
        transform: `rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`, // Apply rotation from state
      }}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
    >
      <div className={styles.questionMark}>{text}</div>
      {children && <div className={styles.cardImage}>{children}</div>}{" "}
    </div>
  );
}
