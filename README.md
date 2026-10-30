# Team Two · TP2 — Proyecto React

Aplicación web hecha con React para el **Trabajo Práctico Grupal 2** de _Desarrollo de Sistemas Web (Front End)_ del IFTS N° 29 (2.º cuatrimestre 2026).

## Índice

- [Descripción](#descripción)
- [Deploy](#deploy)
- [Integrante](#integrante)
- [Secciones de la aplicación](#secciones-de-la-aplicación)
- [Tecnologías](#tecnologías)
- [Cómo ejecutarlo en local](#cómo-ejecutarlo-en-local)
- [Uso de IA](#uso-de-ia)

## Descripción

Team Two reúne en una sola aplicación sus proyectos, sus herramientas y el recorrido del equipo. Continúa el sitio del TP1 (HTML, CSS y JavaScript) y lo lleva a React, con navegación mediante React Router, una sidebar compartida, datos locales en JSON con búsqueda y filtro, una API pública con estados de carga y error, un árbol de renderizado y una bitácora del proceso de trabajo.

## Deploy

- **Sitio publicado en Vercel:** https://desarrollo-web-tp-2-2026.vercel.app/
- **Repositorio del TP2:** https://github.com/JoseLuisGalvis/desarrollo_web_TP2_2026
- Repositorio del TP1: https://github.com/JoseLuisGalvis/desarrollo_web_TP1_2026

## Integrante

| Nombre y apellido | GitHub                                              | Responsabilidad                                                                                                                                                                                     |
| ----------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| José Luis Galvis  | [JoseLuisGalvis](https://github.com/JoseLuisGalvis) | Todo el proyecto: estructura en React, componentes, sidebar y rutas, datos en JSON, búsqueda y filtro, consumo de la API, árbol de renderizado, bitácora, identidad visual, deploy y documentación. |

Los commits del repositorio pueden figurar con el usuario `proyectos-jogal`, que corresponde a la misma persona.

## Secciones de la aplicación

| Sección              | Ruta           | Contenido                                                                              |
| -------------------- | -------------- | -------------------------------------------------------------------------------------- |
| Inicio               | `/`            | Portada del equipo y tarjeta del integrante                                            |
| Perfil               | `/perfil`      | Perfil con tarjeta que gira, datos curiosos y barras de habilidades                    |
| Proyectos            | `/proyectos`   | 20 registros desde un JSON local, con búsqueda por texto y filtro por tecnología       |
| API pública          | `/api-publica` | Repositorios públicos de GitHub, con mensajes de carga y error y botón para reintentar |
| Árbol de renderizado | `/arbol`       | Jerarquía real de componentes, expandible y contraíble                                 |
| Bitácora             | `/bitacora`    | Registros desplegables del proceso de trabajo                                          |

## Tecnologías

- React y Vite (JavaScript)
- React Router para la navegación
- CSS propio, con variables para la paleta
- Tipografías: Bricolage Grotesque, Outfit y JetBrains Mono (Google Fonts)
- Datos locales en archivos JSON
- API REST pública de GitHub, consultada con `fetch`
- Publicación en Vercel

## Cómo ejecutarlo en local

Requiere Node.js 22.12 o superior.

```
git clone https://github.com/JoseLuisGalvis/desarrollo_web_TP2_2026.git
cd desarrollo_web_TP2_2026
npm install
npm run dev
```

## Uso de IA

| Integrante       | Aplicación                            | Modelo            | Contenidos o tareas                                                                                                                                                                                                                                                |
| ---------------- | ------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| José Luis Galvis | Claude (chat de Anthropic, claude.ai) | Claude Sonnet 5.5 | Análisis de la consigna y de los repos de referencia; planificación por etapas; generación y revisión del código React (componentes, rutas, estilos, JSON, API); propuesta de paleta y tipografías; diagnóstico de errores; borradores de la bitácora y del README |

**Qué decidió y verificó el equipo:** la identidad visual (paleta y tipografías), el contenido de los datos, la estructura de secciones, las pruebas manuales de cada pantalla y de los estados de la API, y el deploy en Vercel. El código sugerido por la IA se revisó, se probó y se adaptó antes de incorporarlo.

**Imágenes:** Proviene del TP1, hecha con ChatGPT
