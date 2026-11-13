import React from "react";
import Image from "next/image";
import { profileConfig } from "@/config/profile";

export default function Experience() {
  return (
    <section
      className="relative w-full py-space-xl bg-surface-container-low/60 dark:bg-surface-container-low/25 border-y border-white/5 scroll-mt-20 overflow-hidden"
      id="experiencia"
    >
      {/* Emerald Ambient Light for Operations & Metrics */}
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-tertiary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs">
          <div className="inline-flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span>
            <span className="font-label-mono-xs text-label-mono-xs text-primary uppercase tracking-widest font-semibold">
              Evolución Técnica
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
            Trayectoria Profesional &amp; Formación
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Experiencia práctica combinando la rigurosidad analítica de la gestión
            financiera con el ciclo completo de ingeniería de software e infraestructura.
          </p>
        </div>

        {/* Bento Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* Experience Card */}
          <div className="rounded-xl bg-surface-container-low p-space-lg border border-white/5 shadow-xl flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-mono-xs text-label-mono-xs text-tertiary bg-tertiary/10 border border-tertiary/20 px-2 py-1 rounded">
                  2022 — Presente
                </span>
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10 bg-surface-container p-0.5">
                  <Image
                    src={profileConfig.projects.fuenteDeVida}
                    alt="Logo Caja Comunal Fuente de Vida"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                  Asesor de Crédito &amp; Gestión Financiera
                </h3>
                <span className="font-mono text-code-inline text-primary">
                  Caja Comunal Fuente de Vida
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Gestión integral de cartera de crédito, análisis de solvencia financiera
                comunitaria, conciliación de cuentas y liderazgo activo en la
                transformación digital de procesos operativos: de reportería manual a
                pipelines digitales automatizados.
              </p>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-space-xs border-t border-white/5">
              <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-on-surface-variant border border-white/5">
                Gestión Financiera
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-on-surface-variant border border-white/5">
                Análisis de Datos
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-primary font-medium border border-white/5">
                Digitalización de Procesos
              </span>
            </div>
          </div>

          {/* Academic / Engineering Training Card */}
          <div className="rounded-xl bg-surface-container-low p-space-lg border border-white/5 shadow-xl flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-mono-xs text-label-mono-xs text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded">
                  Graduado Superior
                </span>
                <span className="material-symbols-outlined text-primary text-[24px]">
                  school
                </span>
              </div>
              <div>
                <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                  Ingeniería de Software
                </h3>
                <span className="font-mono text-code-inline text-primary">
                  Escuela Superior Politécnica de Chimborazo (ESPOCH)
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Formación de alto rigor en sistemas distribuidos, bases de datos
                relacionales y NoSQL, metodologías ágiles, aseguramiento de la calidad de
                software bajo estándar ISO/IEC 25010, así como administración de
                infraestructura y monitoreo de redes con Zabbix y Nagios.
              </p>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-space-xs border-t border-white/5">
              <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-tertiary font-medium border border-white/5">
                ISO/IEC 25010
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-on-surface-variant border border-white/5">
                Sistemas Distribuidos
              </span>
              <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono-xs text-label-mono-xs text-outline border border-white/5">
                Zabbix &amp; Nagios
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
