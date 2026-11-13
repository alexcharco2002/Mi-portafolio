"use client";

import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-surface-container border border-white/5 opacity-50" />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
      className="relative w-9 h-9 rounded-lg bg-surface-container hover:bg-surface-container-high border border-white/10 text-on-surface flex items-center justify-center transition-all hover:text-primary shadow-sm group"
    >
      <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:rotate-45">
        {theme === "dark" ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}
