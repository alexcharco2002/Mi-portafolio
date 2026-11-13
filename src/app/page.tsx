import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface-container-lowest transition-colors duration-300">
        <Hero />

        <SectionDivider
          number="01"
          label="Proyectos Seleccionados"
          accent="primary"
        />
        <Projects />

        <SectionDivider
          number="02"
          label="Arquitectura & Stack"
          accent="secondary"
        />
        <TechStack />

        <SectionDivider
          number="03"
          label="Trayectoria & Formación"
          accent="tertiary"
        />
        <Experience />

        <SectionDivider
          number="04"
          label="Contacto & Colaboración"
          accent="primary"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
