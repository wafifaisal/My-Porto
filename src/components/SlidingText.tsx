import React from "react";
import styles from "../style/SlidingText.module.css";

interface SlidingTextProps {
  text: string;
  hoverText: string;
}

const SlidingText: React.FC<SlidingTextProps> = ({ text, hoverText }) => {
  return (
    <a href="#" className={styles.hoverSlide}>
      <span className={styles.originalText}>{text}</span>
      <span className={styles.hoverText}>{hoverText}</span>
    </a>
  );
};

export default SlidingText;
