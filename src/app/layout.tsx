import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeferson Charco — Ingeniero de Software & Data Builder",
  description:
    "Construyo aplicaciones web y móviles escalables, pipelines de datos robustos e integraciones con IA que resuelven problemas reales de negocio.",
  keywords: [
    "Jeferson Charco",
    "Software Engineer",
    "Data Engineer",
    "Full-Stack",
    "FastAPI",
    "React",
    "Next.js",
    "Flutter",
    "SingleStore",
    "Ecuador",
  ],
  authors: [{ name: "Jeferson Charco" }],
  openGraph: {
    title: "Jeferson Charco — Ingeniero de Software & Data Builder",
    description:
      "Portafolio técnico en arquitectura de software, pipelines de datos e IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                if (saved === 'light' || (!saved && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="bg-surface-container-lowest text-on-surface antialiased min-h-screen selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
