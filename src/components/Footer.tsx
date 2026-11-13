import React from "react";
import { profileConfig } from "@/config/profile";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/5 py-space-xl mt-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-lg pb-space-lg border-b border-white/5">
          <div className="flex flex-col items-center md:items-start gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-md text-headline-md font-bold text-on-surface">
                {profileConfig.name}
              </span>
              <span className="font-mono text-code-inline text-primary">
                ~/senior-engineer
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left">
              Ingeniería de software de alta concurrencia y arquitecturas de datos distribuidas.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-surface-container-low border border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span className="font-label-mono-xs text-label-mono-xs text-tertiary uppercase">
                Disponible para retos
              </span>
            </div>
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-surface-container-low border border-white/5">
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                public
              </span>
              <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant">
                {profileConfig.timezone}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-md">
          <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant text-center sm:text-left">
            © {new Date().getFullYear()} {profileConfig.name} (JC.dev). Diseñado bajo estética Neo-Terminal.
          </span>
          <div className="flex flex-wrap items-center justify-center gap-space-md">
            <a
              href={profileConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-mono-xs text-label-mono-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href={profileConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-mono-xs text-label-mono-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#stack"
              className="font-label-mono-xs text-label-mono-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              Architecture Docs
            </a>
            <a
              href="#contacto"
              className="font-label-mono-xs text-label-mono-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              PGP Key
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
