import React from "react";

export default function TechStack() {
  const stackGroups = [
    {
      title: "Full-Stack & Móvil",
      badge: "Client & API",
      badgeClass: "text-primary bg-primary/10",
      icon: "terminal",
      items: [
        {
          name: "React • Next.js",
          level: "Senior / Core",
          icon: "layers",
          levelColor: "text-tertiary",
        },
        {
          name: "Flutter • Dart",
          level: "Multiplatform",
          icon: "phone_android",
          levelColor: "text-tertiary",
        },
        {
          name: "FastAPI • Python",
          level: "High-Speed API",
          icon: "api",
          levelColor: "text-tertiary",
        },
        {
          name: "Node.js • Angular",
          level: "Avanzado",
          icon: "javascript",
          levelColor: "text-outline",
        },
      ],
    },
    {
      title: "Data & BI",
      badge: "ETL & Analytics",
      badgeClass: "text-secondary-fixed bg-secondary-container/40",
      icon: "database",
      items: [
        {
          name: "PostgreSQL • MySQL",
          level: "Relacional",
          icon: "table_chart",
          levelColor: "text-tertiary",
        },
        {
          name: "SingleStore DB",
          level: "Real-Time Ops",
          icon: "speed",
          levelColor: "text-primary",
        },
        {
          name: "Talend • OpenMetadata",
          level: "Gobernanza ETL",
          icon: "transform",
          levelColor: "text-outline",
        },
        {
          name: "Tableau Desktop",
          level: "Reporting Ejecutivo",
          icon: "bar_chart",
          levelColor: "text-tertiary",
        },
      ],
    },
    {
      title: "Infra & DevOps",
      badge: "SysOps",
      badgeClass: "text-tertiary bg-tertiary/10",
      icon: "dns",
      items: [
        {
          name: "Docker • CI/CD Git",
          level: "Containers",
          icon: "deployed_code",
          levelColor: "text-tertiary",
        },
        {
          name: "Ubuntu • Linux CLI",
          level: "Server Hardening",
          icon: "computer",
          levelColor: "text-outline",
        },
        {
          name: "Zabbix • Nagios",
          level: "Monitoreo 24/7",
          icon: "monitoring",
          levelColor: "text-outline",
        },
        {
          name: "Render • Netlify • Supabase",
          level: "Cloud Native",
          icon: "cloud",
          levelColor: "text-secondary-fixed",
        },
      ],
    },
  ];

  return (
    <section className="relative w-full py-space-xl scroll-mt-20 overflow-hidden" id="stack">
      {/* Violet Ambient Glow for Tech Architecture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
        {/* Section Header */}
        <div className="flex flex-col gap-space-xs text-center md:text-left">
          <div className="inline-flex items-center gap-2 self-center md:self-start">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block"></span>
            <span className="font-label-mono-xs text-label-mono-xs text-secondary uppercase tracking-widest font-semibold">
              Capacidades de Ingeniería
            </span>
          </div>
          <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
            Stack Tecnológico &amp; Dominio Técnico
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Herramientas, frameworks y arquitecturas que domino para llevar ideas de
            diseño conceptual a sistemas de alta disponibilidad.
          </p>
        </div>

        {/* 3 Columns Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl bg-surface-container-low p-space-md border border-white/5 shadow-xl flex flex-col gap-space-md"
            >
              <div className="flex items-center justify-between pb-space-xs border-b border-white/5">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[24px]">
                    {group.icon}
                  </span>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    {group.title}
                  </h3>
                </div>
                <span
                  className={`font-label-mono-xs text-label-mono-xs px-2 py-0.5 rounded border border-white/5 ${group.badgeClass}`}
                >
                  {group.badge}
                </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-2.5 rounded-lg bg-surface-container border border-white/5 flex items-center justify-between hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[20px] text-primary">
                        {item.icon}
                      </span>
                      <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                        {item.name}
                      </span>
                    </div>
                    <span
                      className={`font-label-mono-xs text-label-mono-xs ${item.levelColor}`}
                    >
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
