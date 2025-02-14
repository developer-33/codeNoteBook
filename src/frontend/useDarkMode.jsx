import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("dark-mode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
}
