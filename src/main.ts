
import "./styles/styles.css";

import { inicializarDB } from "./db/database";

import {
    agregarFrase,
    listarFrases,
    editarFrase,
    eliminarFrase,
    votarFrase,
    obtenerTop10
} from "./controllers/FraseController";

import { crearVista } from "./views/ArcadeView";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
    throw new Error("No se encontró el contenedor principal");
}

let filtro = "Todas";
let busqueda = "";

function renderizar(): void {
    const frases = listarFrases();
    const top10 = obtenerTop10();

    const filtradas = frases.filter((frase) => {
        const coincideCategoria =
            filtro === "Todas" || frase.categoria === filtro;

        const termino = busqueda.toLowerCase();

        const coincideBusqueda =
            frase.texto.toLowerCase().includes(termino) ||
            frase.autor.toLowerCase().includes(termino);

        return coincideCategoria && coincideBusqueda;
    });

    app!.innerHTML = crearVista(
        frases,
        top10,
        filtradas,
        filtro,
        busqueda
    );

    conectarEventos();
}

function conectarEventos(): void {
    const formulario =
        document.querySelector<HTMLFormElement>("#quote-form");

    formulario?.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const texto =
            document.querySelector<HTMLInputElement>("#texto")!.value.trim();

        const autor =
            document.querySelector<HTMLInputElement>("#autor")!.value.trim();

        const categoria =
            document.querySelector<HTMLSelectElement>("#categoria")!.value;

        if (!texto || !autor) return;

        agregarFrase(texto, autor, categoria);

        busqueda = "";
        filtro = "Todas";

        renderizar();
    });

    document.querySelector<HTMLInputElement>("#search")
        ?.addEventListener("input", (evento) => {
            busqueda = (evento.target as HTMLInputElement).value;

            renderizar();

            const buscador =
                document.querySelector<HTMLInputElement>("#search");

            buscador?.focus();
            buscador?.setSelectionRange(
                busqueda.length,
                busqueda.length
            );
        });

    document.querySelector<HTMLSelectElement>("#filter")
        ?.addEventListener("change", (evento) => {
            filtro = (evento.target as HTMLSelectElement).value;
            renderizar();
        });

    app!.querySelectorAll<HTMLButtonElement>("[data-action]")
        .forEach((boton) => {
            boton.addEventListener("click", () => {
                const id = Number(boton.dataset.id);
                const accion = boton.dataset.action;

                if (accion === "votar") {
                    votarFrase(id);
                }

                if (accion === "eliminar") {
                    if (confirm("¿Seguro que deseas eliminar esta frase?")) {
                        eliminarFrase(id);
                    } else {
                        return;
                    }
                }

                if (accion === "editar") {
                    const frase = listarFrases().find((f) => f.id === id);

                    if (!frase) return;

                    const texto = prompt("Editar frase:", frase.texto);
                    if (texto === null) return;

                    const autor = prompt("Editar autor:", frase.autor);
                    if (autor === null) return;

                    const categoria = prompt(
                        "Categoría: Videojuegos, Películas o Memes",
                        frase.categoria
                    );

                    if (categoria === null) return;

                    const categorias = [
                        "Videojuegos",
                        "Películas",
                        "Memes"
                    ];

                    if (
                        !texto.trim() ||
                        !autor.trim() ||
                        !categorias.includes(categoria.trim())
                    ) {
                        alert("Revisa los datos y la categoría.");
                        return;
                    }

                    editarFrase(
                        id,
                        texto.trim(),
                        autor.trim(),
                        categoria.trim()
                    );
                }

                renderizar();
            });
        });
}

async function iniciar(): Promise<void> {
    try {
        app!.innerHTML = `
            <div class="loading">
                <h2>⚡ INICIANDO EPIC ARCADE...</h2>
                <p>Preparando la base de datos</p>
            </div>
        `;

        await inicializarDB();

        renderizar();

    } catch (error) {
        console.error("Error al iniciar el arcade:", error);

        app!.innerHTML = `
            <div class="loading">
                <h2>Error al iniciar</h2>
                <p>No se pudo cargar la base de datos. Revisa la conexión.</p>
            </div>
        `;
    }
}

iniciar();
