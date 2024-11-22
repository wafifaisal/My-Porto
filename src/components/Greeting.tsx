"use client";
import { useEffect, useState } from "react";

export default function CurrentGreeting() {
  const greetings = [
    "Hello !",
    "Hola !",
    "Bonjour !",
    "Hallo !",
    "Ciao !",
    "Olá !",
    "Namaste !",
    "Salaam !",
    "Zdravstvuyte !",
    "こんにちは !",
    "你好 !",
    "안녕하세요 !",
    "Merhaba !",
    "Ahoj !",
    "Szia !",
    "Shalom !",
    "Hei !",
    "Salve !",
    "Hola !",
    "Hallo !",
  ];

  const [currentGreeting, setCurrentGreeting] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(greetings[index]);
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index, greetings]);

  return (
    <div className="text-4xl font-extrabold text-teal-600 text-start">
      <span className="typing">{currentGreeting}</span>
      <span className="text-gray-800"> I'm</span>
    </div>
  );
}
