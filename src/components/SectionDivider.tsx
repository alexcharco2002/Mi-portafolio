import React from "react";

interface SectionDividerProps {
  number: string;
  label: string;
  accent?: "primary" | "secondary" | "tertiary";
}

export default function SectionDivider({
  number,
  label,
  accent = "primary",
}: SectionDividerProps) {
  const accentClasses = {
    primary: {
      line: "via-primary/30",
      dot: "bg-primary",
      text: "text-primary",
      badge: "border-primary/20 bg-surface-container-low text-primary",
    },
    secondary: {
      line: "via-secondary/30",
      dot: "bg-secondary",
      text: "text-secondary",
      badge: "border-secondary/20 bg-surface-container-low text-secondary",
    },
    tertiary: {
      line: "via-tertiary/30",
      dot: "bg-tertiary",
      text: "text-tertiary",
      badge: "border-tertiary/20 bg-surface-container-low text-tertiary",
    },
  }[accent];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-margin py-8 flex items-center justify-center">
      {/* Horizontal faded gradient divider line */}
      <div
        className={`absolute inset-x-margin h-[1px] bg-gradient-to-r from-transparent ${accentClasses.line} to-transparent`}
      />

      {/* Center technical terminal badge */}
      <div
        className={`relative z-10 px-3.5 py-1 rounded-full border shadow-sm font-mono text-label-mono-xs flex items-center gap-2 backdrop-blur-md ${accentClasses.badge}`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${accentClasses.dot} animate-pulse`} />
        <span className="opacity-70">{number}</span>
        <span className="opacity-40">//</span>
        <span className="font-semibold uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
}
