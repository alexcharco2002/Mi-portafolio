"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { profileConfig } from "@/config/profile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "proyectos", label: "Proyectos" },
    { id: "stack", label: "Stack" },
    { id: "experiencia", label: "Experiencia" },
    { id: "contacto", label: "Contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // 1. Si está casi al final de la página, activa Contacto
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      if (windowHeight + scrollY >= fullHeight - 120) {
        setActiveSection("contacto");
        return;
      }

      // 2. Si está en la parte superior, activa Inicio
      if (scrollY < 200) {
        setActiveSection("inicio");
        return;
      }

      // 3. Evaluar cada sección desde abajo hacia arriba
      const sectionIds = ["contacto", "experiencia", "stack", "proyectos", "inicio"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140; // margen de compensación del header
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.15)] border-b border-white/5"
          : "bg-surface-container-lowest/70 backdrop-blur-md"
      }`}
    >
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between">
        {/* Brand / Logo Principal */}
        <Link href="#inicio" className="flex items-center gap-space-sm group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-surface-container border border-primary/30 flex items-center justify-center p-0.5 shadow-[0_0_15px_-3px_rgba(76,215,246,0.3)] group-hover:border-primary transition-all">
            <Image
              src={profileConfig.brandIcon}
              alt="JC Innovation / Tec Logo"
              width={40}
              height={40}
              className="w-full h-full object-cover rounded-lg"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-md text-headline-md tracking-tight font-bold text-on-surface group-hover:text-primary transition-colors">
              JC<span className="text-primary">.dev</span>
            </span>
            <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant uppercase tracking-wider">
              {profileConfig.shortRole}
            </span>
          </div>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-1 px-1.5 py-1 rounded-full bg-surface-container/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`px-space-sm py-1.5 rounded-lg transition-all font-body-sm text-body-sm ${
                  isActive
                    ? "bg-surface-container-high text-primary font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-space-sm">
          <a
            href={profileConfig.links.cv}
            download
            className="hidden sm:inline-flex items-center gap-space-xs px-space-sm py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-all font-body-sm text-body-sm border border-white/5 shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Descargar CV</span>
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-primary text-on-primary font-headline-md text-body-sm font-semibold hover:bg-primary-fixed-dim transition-all shadow-[0_0_20px_-3px_rgba(76,215,246,0.35)]"
          >
            <span className="material-symbols-outlined text-[18px]">chat_bubble</span>
            <span>Hablemos</span>
          </a>

          {/* Theme Toggle Button (Dark / Light) */}
          <ThemeToggle />

          {/* User Profile Avatar */}
          <Link
            href="#inicio"
            className="relative w-9 h-9 rounded-full overflow-hidden border border-primary/40 shadow-sm shrink-0 hover:border-primary transition-all cursor-pointer"
            title="Ir a Inicio"
          >
            <Image
              src={profileConfig.avatar}
              alt={profileConfig.name}
              fill
              className="object-cover object-top"
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
