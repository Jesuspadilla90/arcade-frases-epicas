
# ⚡ ARCADE DE FRASES ÉPICAS

## 🎮 Descripción del proyecto

ARCADE DE FRASES ÉPICAS es una aplicación web interactiva donde los usuarios pueden publicar, visualizar, editar, eliminar y votar por sus frases favoritas de videojuegos, películas y memes.

El objetivo es crear una colección de frases legendarias y mostrar un ranking TOP 10 de las más votadas.

## 🚀 Tecnologías utilizadas

- HTML5
- CSS3
- TypeScript
- Vite
- SQL.js
- SQLite
- LocalStorage
- Git y GitHub
- Vercel (despliegue y alojamiento web)

## ✨ Funcionalidades principales

- Crear frases con texto, autor y categoría.
- Mostrar todas las frases registradas.
- Editar frases existentes.
- Eliminar frases.
- Votar por las frases favoritas.
- Buscar frases por texto o autor.
- Filtrar por categorías.
- Mostrar un ranking TOP 10.
- Guardar los datos para conservarlos al recargar la página.

## 🗄️ Base de datos

El proyecto utiliza SQL.js, una implementación de SQLite que funciona en el navegador mediante WebAssembly.

Los datos de la base de datos se exportan y almacenan en LocalStorage para conservar los registros entre sesiones en el mismo navegador.

## 📁 Estructura del proyecto

```text
arcade-frases-epicas/
│
├── public/
│   ├── favicon.ico
│   └── sql-wasm-browser.wasm
│
├── src/
│   ├── main.ts
│   ├── db/
│   │   └── database.ts
│   ├── models/
│   │   └── Frase.ts
│   ├── views/
│   │   └── ArcadeView.ts
│   ├── controllers/
│   │   └── FraseController.ts
│   └── styles/
│       └── styles.css
│
├── index.html
├── package.json
├── vite.config.ts
├── README.md
└── .gitignore
```

## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Entrar a la carpeta:

```bash
cd arcade-frases-epicas
```

Instalar las dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

Abrir en el navegador la dirección que proporciona Vite, normalmente:

```text
http://localhost:5173/
```

## 🧪 Operaciones CRUD

El proyecto implementa las cuatro operaciones fundamentales:

- CREATE: registrar nuevas frases.
- READ: consultar las frases guardadas.
- UPDATE: modificar frases existentes.
- DELETE: eliminar frases.

También permite votar y organizar las frases según su popularidad.

## 👨‍💻 Autor

Proyecto académico desarrollado para el laboratorio de proyecto creativo.

**Nombre:** Jesús Alexander Membreño Padilla

**Proyecto:** EPIC ARCADE

**Año:** 2026
