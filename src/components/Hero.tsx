"use client";

import React from "react";
import Image from "next/image";
import { profileConfig } from "@/config/profile";

export default function Hero() {
  return (
    <div id="inicio" className="relative w-full overflow-hidden scroll-mt-20">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Top Ambient Glow Accents */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>

      <section className="max-w-7xl mx-auto px-margin pt-space-lg pb-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Hero Left Column (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-surface-container-low border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span className="font-label-mono-xs text-label-mono-xs text-tertiary font-semibold tracking-wide">
                {profileConfig.status}
              </span>
            </div>

            {/* Main Hero Typography */}
            <div className="flex flex-col gap-space-xs">
              <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero text-on-surface">
                {profileConfig.name}
              </h1>
              <span className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary bg-gradient-to-r from-primary via-primary-fixed to-secondary bg-clip-text text-transparent">
                — {profileConfig.fullRole}
              </span>
            </div>

            {/* Subtitle */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              {profileConfig.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs w-full sm:w-auto">
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary text-on-primary font-headline-md text-body-md font-bold shadow-[0_0_25px_-5px_rgba(76,215,246,0.5)] hover:bg-primary-fixed-dim transition-all"
              >
                <span>Ver Proyectos</span>
                <span className="material-symbols-outlined text-[20px]">
                  arrow_downward
                </span>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-all font-headline-md text-body-md border border-white/5 shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
              >
                <span>Hablemos de tu idea</span>
                <span className="material-symbols-outlined text-[18px] text-primary">
                  arrow_outward
                </span>
              </a>
            </div>

            {/* Micro-badges / Metadata */}
            <div className="flex flex-wrap items-center gap-space-sm pt-space-sm">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-md bg-surface-container-low border border-white/5 text-on-surface-variant font-label-mono-xs text-label-mono-xs">
                <span className="material-symbols-outlined text-[16px] text-primary">
                  location_on
                </span>
                <span>{profileConfig.location}</span>
              </div>
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-md bg-surface-container-low border border-white/5 text-on-surface-variant font-label-mono-xs text-label-mono-xs">
                <span className="material-symbols-outlined text-[16px] text-tertiary">
                  bolt
                </span>
                <span>Full-Stack + Data Engineering</span>
              </div>
            </div>
          </div>

          {/* Hero Right Column / Terminal Profile Bento Card (Cols 8-12) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl bg-surface-container-low/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-space-md py-2.5 bg-surface-container-high border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-error inline-block opacity-80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block opacity-80"></span>
                  <span className="w-3 h-3 rounded-full bg-tertiary inline-block opacity-80"></span>
                </div>
                <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant">
                  ~/jeferson-charco/profile.ts
                </span>
                <span className="material-symbols-outlined text-[16px] text-outline">
                  terminal
                </span>
              </div>

              {/* Card Body with Image & Telemetry */}
              <div className="p-space-md flex flex-col gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 border border-primary/40 shadow-[0_0_20px_-3px_rgba(76,215,246,0.35)]">
                    <Image
                      src={profileConfig.avatar}
                      alt={`${profileConfig.name} - ${profileConfig.fullRole}`}
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="font-headline-md text-headline-md font-bold text-on-surface truncate">
                      {profileConfig.name}
                    </span>
                    <span className="font-mono text-code-inline text-primary">
                      Ingeniero de Software
                    </span>
                    <p className="font-label-mono-xs text-label-mono-xs text-on-surface-variant flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                      <span>ESPOCH Alumnus • Full-Cycle Dev</span>
                    </p>
                  </div>
                </div>

                {/* Metrics inside Terminal */}
                <div className="grid grid-cols-2 gap-space-xs">
                  <div className="p-space-xs rounded-lg bg-surface-container border border-white/5 flex flex-col gap-0.5">
                    <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant uppercase">
                      Idoneidad Software
                    </span>
                    <span className="font-headline-md text-headline-md font-bold text-tertiary">
                      95.14%
                    </span>
                    <span className="font-label-mono-xs text-label-mono-xs text-outline">
                      ISO/IEC 25010 Validado
                    </span>
                  </div>
                  <div className="p-space-xs rounded-lg bg-surface-container border border-white/5 flex flex-col gap-0.5">
                    <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant uppercase">
                      Ecosistema Core
                    </span>
                    <span className="font-headline-md text-headline-md font-bold text-primary">
                      FastAPI + React
                    </span>
                    <span className="font-label-mono-xs text-label-mono-xs text-outline">
                      Flutter &amp; SingleStore
                    </span>
                  </div>
                </div>

                {/* Terminal Code Snippet */}
                <div className="rounded-lg bg-surface-container-lowest border border-white/5 p-space-sm font-label-mono-xs text-label-mono-xs text-on-surface-variant overflow-x-auto shadow-inner">
                  <div className="text-on-surface-variant">
                    <span className="text-secondary">const</span> engineer = {"{"}
                  </div>
                  <div className="pl-4">
                    name: <span className="text-tertiary">&apos;{profileConfig.name}&apos;</span>,
                  </div>
                  <div className="pl-4">
                    status: <span className="text-primary">&apos;ready_to_build&apos;</span>,
                  </div>
                  <div className="pl-4">
                    focus: [
                    <span className="text-primary-fixed">&apos;Scalable Web&apos;</span>,{" "}
                    <span className="text-primary-fixed">&apos;Data Pipelines&apos;</span>,{" "}
                    <span className="text-primary-fixed">&apos;AI Systems&apos;</span>
                    ],
                  </div>
                  <div className="pl-4">
                    governance:{" "}
                    <span className="text-secondary-fixed">
                      &apos;ISO/IEC 25010 Certified QA&apos;
                    </span>
                  </div>
                  <div className="text-on-surface-variant">{"}"};</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
