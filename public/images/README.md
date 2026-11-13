# Carpeta de Imágenes

Aquí puedes guardar todas las imágenes de tu portafolio. En Next.js, todo archivo dentro de `public/` es accesible directamente desde la raíz del sitio web.

## 📁 Estructura Recomendada

```bash
public/images/
├── profile/
│   └── foto.jpg         # Tu foto de perfil principal (accesible como /images/profile/foto.jpg)
└── projects/
    ├── hidrosys.png     # Captura de pantalla o logo de HidroSys
    ├── hade.png         # Captura de pantalla de Hade
    ├── telco-churn.png  # Gráfico o captura de Telco Churn
    └── fintech.png      # Captura de pantalla de Fintech Cajas Comunales
```

## 📸 Cómo usar tu foto de perfil:

1. Guarda tu foto dentro de `public/images/profile/` (por ejemplo con el nombre `foto.jpg` o `foto.png`).
2. En `src/components/Hero.tsx` y `src/components/Navbar.tsx`, puedes reemplazar la URL externa por `/images/profile/foto.jpg`.
