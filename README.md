
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

**Nota:** Los datos se conservan localmente en cada navegador y dispositivo; no se sincronizan automáticamente entre usuarios o dispositivos.

## 📁 Estructura del proyecto

```text
arcade-frases-epicas/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── sql-wasm-browser.wasm
├── src/
│   ├── controllers/
│   │   └── FraseController.ts
│   ├── db/
│   │   └── database.ts
│   ├── models/
│   │   └── Frase.ts
│   ├── styles/
│   │   └── styles.css
│   ├── views/
│   │   └── ArcadeView.ts
│   └── main.ts
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git https://github.com/Jesuspadilla90/arcade-frases-epicas.git
```

### 2. Entrar a la carpeta

```bash
cd arcade-frases-epicas
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar el proyecto

```bash
npm run dev
```

Abrir en el navegador la dirección:

```text
http://localhost:5173/
```

### 5. Generar versión de producción

```bash
npm run build
```

## 🧪 Operaciones CRUD

El proyecto implementa las cuatro operaciones fundamentales:

- **CREATE:** registrar nuevas frases.
- **READ:** consultar las frases guardadas.
- **UPDATE:** modificar frases existentes.
- **DELETE:** eliminar frases.

También permite votar y organizar las frases según su popularidad.

## 🌐 Despliegue

El proyecto está preparado para desplegarse en Vercel.

## 👨‍💻 Autor

**Nombre:** Jesús Alexander Membreño Padilla

**Proyecto:** EPIC ARCADE

**Año:** 2026
