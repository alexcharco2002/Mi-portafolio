"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profileConfig } from "@/config/profile";

type FilterType = "all" | "web-mobile" | "data-bi" | "ai-fintech";

interface Project {
  id: string;
  category: "web-mobile" | "data-bi" | "ai-fintech";
}

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: "Todos", value: "all" },
    { label: "Desarrollo Web & Móvil", value: "web-mobile" },
    { label: "Data & BI", value: "data-bi" },
    { label: "IA & Fintech", value: "ai-fintech" },
  ];

  const isVisible = (cat: "web-mobile" | "data-bi" | "ai-fintech") => {
    return filter === "all" || filter === cat;
  };

  return (
    <section
      className="relative w-full py-space-xl bg-surface-container-low/50 dark:bg-surface-container-low/20 border-y border-white/5 scroll-mt-20 overflow-hidden"
      id="proyectos"
    >
      {/* Cyan Ambient Light for Projects */}
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-80 h-80 bg-primary-container/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
              <span className="font-label-mono-xs text-label-mono-xs text-primary uppercase tracking-widest font-semibold">
                Portafolio Técnico
              </span>
            </div>
            <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
              Proyectos Seleccionados
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Soluciones de software de extremo a extremo, analítica estratégica y sistemas
              modulares desplegados con estándares internacionales de calidad.
            </p>
          </div>

          {/* Filterable Pills */}
          <div className="flex flex-wrap items-center gap-space-xs p-1 rounded-xl bg-surface-container-low border border-white/5 shadow-sm">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                className={`px-space-sm py-1.5 rounded-lg text-body-sm transition-all font-body-sm ${
                  filter === btn.value
                    ? "bg-surface-container-high text-primary font-semibold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/40"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid 12 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Card 1: HidroSys (Featured, Spans 12 columns) */}
          {isVisible("web-mobile") && (
            <div className="lg:col-span-12 rounded-xl bg-surface-container-low p-space-lg border border-white/5 shadow-xl hover:translate-y-[-2px] transition-all flex flex-col lg:flex-row gap-space-lg">
              {/* Left Details */}
              <div className="flex-1 flex flex-col justify-between gap-space-md">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary-container/20 text-primary font-label-mono-xs text-label-mono-xs uppercase font-semibold">
                      <span className="relative w-4 h-4 inline-block">
                        <Image
                          src={profileConfig.projects.hidrosys}
                          alt="HidroSys"
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                      </span>
                      Caso de Estudio Destacado
                    </span>
                    <span className="font-label-mono-xs text-label-mono-xs text-tertiary bg-tertiary/10 border border-tertiary/20 px-2.5 py-1 rounded-md font-semibold">
                      95.14% Idoneidad Funcional ISO/IEC 25010
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                    HidroSys — Gestión Hídrica &amp; Geolocalización
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Plataforma web de facturación y geolocalización de medidores de agua con
                    optimización de rutas para cuadrillas técnicas, validada bajo la norma
                    internacional ISO/IEC 25010 alcanzando un 95.14% de adecuación funcional.
                  </p>
                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["React", "FastAPI", "PostgreSQL", "Leaflet GIS", "Docker"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-primary border border-white/5 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary font-headline-md text-body-sm font-semibold hover:bg-primary-fixed-dim transition-all shadow-[0_0_20px_-3px_rgba(76,215,246,0.35)]"
                  >
                    <span>Ver Demo en Vivo</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-space-sm py-2 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-all font-label-mono-sm text-label-mono-sm border border-white/5"
                  >
                    <span className="material-symbols-outlined text-[16px]">code</span>
                    <span>Código Fuente</span>
                  </a>
                </div>
              </div>

              {/* Right Mockup: Interactive GIS Dashboard Preview */}
              <div className="flex-1 rounded-lg bg-surface-container p-space-sm border border-white/5 shadow-inner flex flex-col gap-space-xs">
                <div className="flex items-center justify-between pb-1 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-error opacity-60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-60"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary opacity-60"></span>
                    <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant ml-2">
                      GIS_Module // Riobamba_Sector_04
                    </span>
                  </div>
                  <span className="font-label-mono-xs text-label-mono-xs text-primary">
                    Live Telemetry
                  </span>
                </div>
                {/* Simulated Map Canvas */}
                <div className="relative w-full h-48 sm:h-56 rounded-md bg-surface-container-lowest overflow-hidden flex items-center justify-center p-2 border border-white/5">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 400 200">
                    <path
                      d="M 20 40 L 120 40 L 180 100 L 260 100 L 320 60 L 380 60"
                      stroke="#31353f"
                      strokeDasharray="4 4"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M 40 180 L 100 130 L 220 130 L 300 170 L 370 170"
                      stroke="#31353f"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M 120 40 L 100 130 M 180 100 L 220 130 M 260 100 L 300 170"
                      stroke="#31353f"
                      strokeWidth="1.5"
                    ></path>
                    <path
                      d="M 50 150 L 110 110 L 190 85 L 280 120 L 350 70"
                      stroke="#4cd7f6"
                      strokeLinecap="round"
                      strokeWidth="3"
                    ></path>
                    <circle cx="50" cy="150" fill="#4edea3" r="5"></circle>
                    <circle cx="110" cy="110" fill="#4cd7f6" r="4"></circle>
                    <circle cx="190" cy="85" fill="#4cd7f6" r="4"></circle>
                    <circle cx="280" cy="120" fill="#4cd7f6" r="4"></circle>
                    <circle cx="350" cy="70" fill="#acedff" r="6"></circle>
                    <rect
                      fill="#1c1f29"
                      height="24"
                      rx="4"
                      stroke="none"
                      width="100"
                      x="140"
                      y="55"
                    ></rect>
                    <text
                      fill="#4cd7f6"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="10"
                      x="150"
                      y="71"
                    >
                      Medidor #A-402 OK
                    </text>
                  </svg>
                  <div className="absolute bottom-2 left-2 px-2 py-1 rounded bg-surface-container-high/90 border border-white/5 text-on-surface font-label-mono-xs text-label-mono-xs">
                    320 Medidores Sincronizados
                  </div>
                </div>
                {/* Mini Summary Data Row */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="p-2 rounded bg-surface-container-high border border-white/5 flex flex-col">
                    <span className="font-label-mono-xs text-label-mono-xs text-outline">
                      Eficiencia Ruta
                    </span>
                    <span className="font-headline-md text-body-sm font-bold text-tertiary">
                      +38.4%
                    </span>
                  </div>
                  <div className="p-2 rounded bg-surface-container-high border border-white/5 flex flex-col">
                    <span className="font-label-mono-xs text-label-mono-xs text-outline">
                      Tiempo Lectura
                    </span>
                    <span className="font-headline-md text-body-sm font-bold text-primary">
                      -45 min/día
                    </span>
                  </div>
                  <div className="p-2 rounded bg-surface-container-high border border-white/5 flex flex-col">
                    <span className="font-label-mono-xs text-label-mono-xs text-outline">
                      Adecuación QA
                    </span>
                    <span className="font-headline-md text-body-sm font-bold text-secondary">
                      ISO 25010
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: Hade - Asistente Personal con IA (Spans 6 cols) */}
          {isVisible("ai-fintech") && (
            <div className="lg:col-span-6 rounded-xl bg-surface-container-low p-space-md border border-white/5 shadow-xl hover:translate-y-[-2px] transition-all flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-tertiary font-semibold uppercase border border-white/5">
                    Inteligencia Artificial &amp; Mobile
                  </span>
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    mic
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                  Hade — Asistente Personal con IA
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Asistente móvil multiplataforma con procesamiento por voz (STT/TTS en tiempo
                  real), automatización de tareas y flujos conversacionales potenciados con
                  modelos de lenguaje.
                </p>
                {/* Interface Visual Mockup */}
                <div className="rounded-lg bg-surface-container p-space-sm border border-white/5 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant font-mono">
                      &gt; hade_voice_agent.listen()
                    </span>
                    <span className="font-label-mono-xs text-label-mono-xs text-tertiary">
                      Activo
                    </span>
                  </div>
                  {/* Voice soundwave */}
                  <div className="h-10 w-full flex items-center justify-center gap-1">
                    <span className="w-1 h-3 rounded-full bg-primary/40 animate-pulse"></span>
                    <span className="w-1 h-6 rounded-full bg-primary/70"></span>
                    <span className="w-1 h-9 rounded-full bg-primary"></span>
                    <span className="w-1 h-4 rounded-full bg-primary/80"></span>
                    <span className="w-1 h-8 rounded-full bg-primary"></span>
                    <span className="w-1 h-10 rounded-full bg-tertiary animate-pulse"></span>
                    <span className="w-1 h-5 rounded-full bg-primary"></span>
                    <span className="w-1 h-8 rounded-full bg-primary/80"></span>
                    <span className="w-1 h-3 rounded-full bg-primary/50"></span>
                  </div>
                  <div className="p-2 rounded bg-surface-container-high border border-white/5 text-on-surface font-body-sm text-body-sm flex items-start gap-2">
                    <span className="material-symbols-outlined text-[18px] text-tertiary shrink-0">
                      check_circle
                    </span>
                    <span className="line-clamp-2">
                      &quot;Recordatorio programado para revisión de código a las 16:30 hrs y
                      resumen de backlog enviado a Slack.&quot;
                    </span>
                  </div>
                </div>
                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Flutter", "Gemini API", "Riverpod", "Hive DB"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-primary border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {/* CTAs */}
              <div className="flex items-center gap-space-sm pt-space-xs">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-all font-headline-md text-body-sm font-semibold border border-white/5"
                >
                  <span>Ver Demo</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-space-sm py-2 rounded-lg text-on-surface-variant hover:text-on-surface transition-all font-label-mono-sm text-label-mono-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  <span>Repositorio</span>
                </a>
              </div>
            </div>
          )}

          {/* Card 3: Telco Churn Analytics (Spans 6 cols) */}
          {isVisible("data-bi") && (
            <div className="lg:col-span-6 rounded-xl bg-surface-container-low p-space-md border border-white/5 shadow-xl hover:translate-y-[-2px] transition-all flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-secondary-fixed-dim font-semibold uppercase border border-white/5">
                    Data Engineering &amp; BI
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    analytics
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                  Telco Churn Analytics &amp; Pipeline
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  Pipeline de datos end-to-end con gobernanza estructurada, extracción y
                  transformación ETL automatizada, y dashboard interactivo para predicción
                  ejecutiva de retención de clientes.
                </p>
                {/* Interface Visual Mockup */}
                <div className="rounded-lg bg-surface-container p-space-sm border border-white/5 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-label-mono-xs">
                    <span className="text-on-surface-variant">
                      Pipeline: Raw → SingleStore → BI
                    </span>
                    <span className="text-tertiary">99.8% Sync</span>
                  </div>
                  {/* Mini Bar Chart */}
                  <div className="h-14 w-full flex items-end justify-between gap-2 px-2 pb-1 bg-surface-container-lowest border border-white/5 rounded">
                    <div className="w-full flex flex-col items-center gap-1">
                      <div className="w-full bg-surface-container-highest rounded-t h-8"></div>
                      <span className="font-label-mono-xs text-[9px] text-outline">Q1</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-1">
                      <div className="w-full bg-surface-container-highest rounded-t h-10"></div>
                      <span className="font-label-mono-xs text-[9px] text-outline">Q2</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-1">
                      <div className="w-full bg-primary/70 rounded-t h-6"></div>
                      <span className="font-label-mono-xs text-[9px] text-outline">Q3</span>
                    </div>
                    <div className="w-full flex flex-col items-center gap-1">
                      <div className="w-full bg-tertiary rounded-t h-4"></div>
                      <span className="font-label-mono-xs text-[9px] text-tertiary font-bold">
                        Churn ↓
                      </span>
                    </div>
                  </div>
                </div>
                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {["Talend", "SingleStore", "OpenMetadata", "Tableau"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-secondary-fixed border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* CTAs */}
              <div className="flex items-center gap-space-sm pt-space-xs">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-all font-headline-md text-body-sm font-semibold border border-white/5"
                >
                  <span>Ver Dashboard</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-space-sm py-2 rounded-lg text-on-surface-variant hover:text-on-surface transition-all font-label-mono-sm text-label-mono-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">description</span>
                  <span>Pipeline Specs</span>
                </a>
              </div>
            </div>
          )}

          {/* Card 4: Core Fintech Cajas Comunales (Spans 12 cols) */}
          {isVisible("ai-fintech") && (
            <div className="lg:col-span-12 rounded-xl bg-surface-container-low p-space-lg border border-white/5 shadow-xl hover:translate-y-[-2px] transition-all flex flex-col lg:flex-row gap-space-lg">
              {/* Left Content */}
              <div className="flex-1 flex flex-col justify-between gap-space-md">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-secondary-container/40 text-secondary-fixed font-label-mono-xs text-label-mono-xs uppercase font-semibold border border-secondary/20">
                      Fintech &amp; Gobernanza Financiera
                    </span>
                    <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant">
                      Producción Activa
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                    Core Fintech Cajas Comunales
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Arquitectura web modular y motor de simulación financiera diseñado para
                    instituciones de ahorro y crédito comunitario, simplificando la gestión
                    crediticia, amortizaciones contables y la auditoría local transparente.
                  </p>
                  {/* Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {["Next.js", "Node.js", "Supabase", "PostgreSQL"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-primary border border-white/5 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* CTAs */}
                <div className="flex items-center gap-space-sm pt-space-xs">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-all font-headline-md text-body-sm font-semibold border border-white/5"
                  >
                    <span>Ver Detalles</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-space-sm py-2 rounded-lg text-on-surface-variant hover:text-on-surface transition-all font-label-mono-sm text-label-mono-sm"
                  >
                    <span className="material-symbols-outlined text-[16px]">hub</span>
                    <span>Arquitectura</span>
                  </a>
                </div>
              </div>

              {/* Right Simulator / Accounting Preview */}
              <div className="flex-1 rounded-lg bg-surface-container p-space-sm border border-white/5 shadow-inner flex flex-col gap-2">
                <div className="flex items-center justify-between pb-1 border-b border-white/5">
                  <span className="font-label-mono-xs text-label-mono-xs text-primary font-mono">
                    &gt; Simulador_Amortizaciones.exec()
                  </span>
                  <span className="font-label-mono-xs text-label-mono-xs text-tertiary">
                    Método Francés / Alemán
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded bg-surface-container-lowest border border-white/5">
                    <span className="font-label-mono-xs text-[10px] text-outline block">
                      Monto Solicitado
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface font-bold">
                      $3,500.00
                    </span>
                  </div>
                  <div className="p-2 rounded bg-surface-container-lowest border border-white/5">
                    <span className="font-label-mono-xs text-[10px] text-outline block">
                      Tasa / Plazo
                    </span>
                    <span className="font-headline-md text-headline-md text-tertiary font-bold">
                      12.5% • 18m
                    </span>
                  </div>
                </div>
                <div className="rounded bg-surface-container-lowest border border-white/5 p-2 overflow-x-auto">
                  <table className="w-full text-left font-label-mono-xs text-label-mono-xs">
                    <thead>
                      <tr className="text-outline border-b border-white/5">
                        <th className="py-1">Cuota</th>
                        <th className="py-1">Capital</th>
                        <th className="py-1">Interés</th>
                        <th className="py-1 text-right">Saldo</th>
                      </tr>
                    </thead>
                    <tbody className="text-on-surface-variant divide-y divide-white/5">
                      <tr>
                        <td className="py-1 text-primary">#01</td>
                        <td className="py-1">$178.20</td>
                        <td className="py-1">$36.45</td>
                        <td className="py-1 text-right">$3,321.80</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-primary">#02</td>
                        <td className="py-1">$180.05</td>
                        <td className="py-1">$34.60</td>
                        <td className="py-1 text-right">$3,141.75</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-primary">#03</td>
                        <td className="py-1">$181.93</td>
                        <td className="py-1">$32.72</td>
                        <td className="py-1 text-right">$2,959.82</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
