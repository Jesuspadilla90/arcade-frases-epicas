
import type { Frase } from "../models/Frase";

function escapar(texto: string): string {
    return texto.replace(/[&<>"']/g, (caracter) => {
        const entidades: Record<string, string> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entidades[caracter];
    });
}

function tarjetaFrase(frase: Frase): string {
    return `
        <article class="quote-card">
            <div class="quote-category">${escapar(frase.categoria)}</div>

            <div class="quote-mark">“</div>

            <p class="quote-text">${escapar(frase.texto)}</p>

            <p class="quote-author">— ${escapar(frase.autor)}</p>

            <div class="quote-footer">
                <button class="vote-button" data-action="votar" data-id="${frase.id}">
                    ⚡ ${frase.votos} Votos
                </button>

                <div class="card-actions">
                    <button class="edit-button" data-action="editar" data-id="${frase.id}">
                        ✏️
                    </button>

                    <button class="delete-button" data-action="eliminar" data-id="${frase.id}">
                        🗑️
                    </button>
                </div>
            </div>
        </article>
    `;
}

export function crearVista(
    frases: Frase[],
    top10: Frase[],
    filtradas: Frase[],
    filtro: string,
    busqueda: string
): string {

    return `
        <header class="navbar">
            <a href="#" class="logo">⚡ EPIC<span>ARCADE</span></a>
            <span class="online-status">● ARCADE ONLINE</span>
        </header>

        <main class="container">

            <section class="hero">
                <span class="hero-tag">BIENVENIDO AL MUNDO GAMER</span>

                <h1>ARCADE DE FRASES <span>ÉPICAS</span></h1>

                <p>
                    Las palabras más legendarias merecen un lugar en la historia.
                    Publica, vota y descubre las mejores frases.
                </p>

                <div class="hero-stats">
                    <div>
                        <strong>${frases.length}</strong>
                        <span>FRASES</span>
                    </div>

                    <div>
                        <strong>${frases.reduce((total, f) => total + f.votos, 0)}</strong>
                        <span>VOTOS</span>
                    </div>

                    <div>
                        <strong>${top10.length}</strong>
                        <span>EN EL RANKING</span>
                    </div>
                </div>
            </section>

            <section class="content-grid">

                <div class="quotes-section">

                    <div class="section-heading">
                        <div>
                            <span class="section-label">COLECCIÓN LEGENDARIA</span>
                            <h2>Frases épicas</h2>
                        </div>

                        <span class="total-label">${filtradas.length} RESULTADOS</span>
                    </div>

                    <form id="quote-form" class="quote-form">
                        <h3>⚡ Publica una frase legendaria</h3>

                        <input
                            type="text"
                            id="texto"
                            placeholder="Escribe aquí tu frase épica..."
                            maxlength="250"
                            required
                        >

                        <div class="form-row">
                            <input
                                type="text"
                                id="autor"
                                placeholder="Autor o personaje"
                                maxlength="60"
                                required
                            >

                            <select id="categoria" required>
                                <option value="Videojuegos">🎮 Videojuegos</option>
                                <option value="Películas">🎬 Películas</option>
                                <option value="Memes">😂 Memes</option>
                            </select>
                        </div>

                        <button type="submit" class="publish-button">
                            + PUBLICAR FRASE
                        </button>
                    </form>

                    <div class="filters">
                        <input
                            type="search"
                            id="search"
                            placeholder="🔎 Buscar frase o autor..."
                            value="${escapar(busqueda)}"
                        >

                        <select id="filter">
                            ${["Todas", "Videojuegos", "Películas", "Memes"]
                                .map((categoria) => `
                                    <option value="${categoria}"
                                        ${filtro === categoria ? "selected" : ""}>
                                        ${categoria}
                                    </option>
                                `).join("")}
                        </select>
                    </div>

                    <div class="quotes-grid">
                        ${filtradas.length
                            ? filtradas.map(tarjetaFrase).join("")
                            : `<div class="empty-state">
                                <span>🎮</span>
                                <h3>No hay frases todavía</h3>
                                <p>¡Sé el primero en publicar una frase épica!</p>
                              </div>`
                        }
                    </div>
                </div>

                <aside class="ranking-section">
                    <div class="ranking-title">
                        <span>🏆</span>
                        <div>
                            <span class="section-label">LOS MÁS VOTADOS</span>
                            <h2>TOP 10</h2>
                        </div>
                    </div>

                    <div class="ranking-list">
                        ${top10.length
                            ? top10.map((frase, index) => `
                                <div class="ranking-item">
                                    <span class="ranking-number">
                                        ${String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div class="ranking-info">
                                        <strong>${escapar(frase.texto)}</strong>
                                        <span>${escapar(frase.autor)}</span>
                                    </div>

                                    <span class="ranking-votes">
                                        ⚡ ${frase.votos}
                                    </span>
                                </div>
                            `).join("")
                            : `<p class="ranking-empty">
                                Todavía no hay frases en el ranking.
                              </p>`
                        }
                    </div>
                </aside>

            </section>

            <footer class="footer">
                <p>⚡ EPIC ARCADE © 2026 | DONDE NACEN LAS LEYENDAS</p>
            </footer>

        </main>
    `;
}
