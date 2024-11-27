"use client";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import About from "./page";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <About />
      </div>
    </ParallaxProvider>
  );
}

export default App;
