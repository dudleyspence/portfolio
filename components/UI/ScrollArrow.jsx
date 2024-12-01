"use client";
import React, { useState, useEffect } from "react";

export default function ScrollArrow() {
  const [isVisible, setIsVisible] = useState(true);

  function handleScroll() {
    if (window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <svg
      className={`fill-foreground h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12 animate-bounce transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z" />
    </svg>
  );
}
