"use client";

import React, { useState } from "react";
import { profileConfig } from "@/config/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "oportunidad",
    message: "",
  });

  const email = profileConfig.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", reason: "oportunidad", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative w-full py-space-xl scroll-mt-20 overflow-hidden" id="contacto">
      {/* Ambient Conversion Glows */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
        {/* Split Bento Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch">
          {/* Left: Context & Channels (Cols 1-5) */}
          <div className="lg:col-span-5 rounded-xl bg-surface-container-low p-space-lg border border-white/5 shadow-xl flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary inline-block"></span>
                <span className="font-label-mono-xs text-label-mono-xs text-tertiary uppercase tracking-widest font-semibold">
                  ¿Trabajamos juntos?
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-xl font-bold text-on-surface">
                ¿Tienes un proyecto o vacante en mente?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Estoy disponible para incorporarme a equipos innovadores en roles de{" "}
                <strong className="text-on-surface font-semibold">
                  Ingeniería de Software
                </strong>
                , <strong className="text-on-surface font-semibold">Full-Stack</strong> y{" "}
                <strong className="text-on-surface font-semibold">
                  Data Engineering
                </strong>
                , tanto en modalidad remota como híbrida.
              </p>

              {/* Quick Email Copy Widget */}
              <div className="p-space-sm rounded-lg bg-surface-container border border-white/5 flex items-center justify-between gap-2 shadow-inner">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                    mail
                  </span>
                  <span className="font-mono text-code-inline text-on-surface truncate">
                    {email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 px-2.5 py-1.5 rounded-md bg-surface-container-high text-on-surface hover:text-primary transition-all font-label-mono-xs text-label-mono-xs flex items-center gap-1 border border-white/5"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copied ? "check" : "content_copy"}
                  </span>
                  <span>{copied ? "¡Copiado!" : "Copiar"}</span>
                </button>
              </div>

              {/* Social / Quick Access Links */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="font-label-mono-xs text-label-mono-xs text-outline uppercase tracking-wider">
                  Canales Directos
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={profileConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high border border-white/5 transition-all flex items-center gap-2 text-on-surface text-body-sm font-medium"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      code
                    </span>
                    <span>GitHub ↗</span>
                  </a>
                  <a
                    href={profileConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high border border-white/5 transition-all flex items-center gap-2 text-on-surface text-body-sm font-medium"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      work
                    </span>
                    <span>LinkedIn ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Micro Note */}
            <div className="pt-space-sm border-t border-white/5 flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary text-[18px]">
                schedule
              </span>
              <span className="font-label-mono-xs text-label-mono-xs text-on-surface-variant">
                Respondo habitualmente en menos de 24 horas laborables. Basado en {profileConfig.location}.
              </span>
            </div>
          </div>

          {/* Right: Modern Bento Contact Form (Cols 6-12) */}
          <div className="lg:col-span-7 rounded-xl bg-surface-container-low p-space-lg border border-white/5 shadow-xl flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <span className="font-mono text-label-mono-xs text-primary">
                &gt; iniciar_conversacion()
              </span>
              <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                Envíame un Mensaje Directo
              </h3>
            </div>

            <form className="flex flex-col gap-space-sm" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                {/* Name Input */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-mono-xs text-label-mono-xs text-on-surface-variant"
                    htmlFor="contact-name"
                  >
                    Nombre y Apellido *
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="Ej. Alex Morales"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container border border-white/5 text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                  />
                </div>
                {/* Email Input */}
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-mono-xs text-label-mono-xs text-on-surface-variant"
                    htmlFor="contact-email"
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="alex@empresa.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container border border-white/5 text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                  />
                </div>
              </div>

              {/* Subject / Project Scope */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-mono-xs text-label-mono-xs text-on-surface-variant"
                  htmlFor="contact-reason"
                >
                  Tipo de Propuesta / Asunto *
                </label>
                <select
                  id="contact-reason"
                  required
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                  className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container border border-white/5 text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                >
                  <option value="oportunidad">
                    Oportunidad Laboral (Full-time / Contrato)
                  </option>
                  <option value="proyecto">
                    Proyecto Software / MVP Freelance
                  </option>
                  <option value="consultoria">
                    Consultoría Técnica en Datos o Arquitectura
                  </option>
                  <option value="otro">Otro Asunto</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-mono-xs text-label-mono-xs text-on-surface-variant"
                  htmlFor="contact-message"
                >
                  Detalles del Requerimiento *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Cuéntame brevemente sobre tu equipo, desafío tecnológico o alcance del proyecto..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-space-sm py-2.5 rounded-lg bg-surface-container border border-white/5 text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none shadow-inner"
                ></textarea>
              </div>

              {/* Submit Button & Feedback Status */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
                {submitted ? (
                  <span className="font-label-mono-xs text-label-mono-xs text-tertiary flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px]">
                      check_circle
                    </span>
                    <span>¡Mensaje recibido con éxito! Te contactaré a la brevedad.</span>
                  </span>
                ) : (
                  <span className="text-xs text-on-surface-variant">
                    * Campos obligatorios
                  </span>
                )}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary text-on-primary font-headline-md text-body-md font-bold shadow-[0_0_20px_-3px_rgba(76,215,246,0.35)] hover:bg-primary-fixed-dim transition-all"
                >
                  <span>Enviar Mensaje Directo</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
