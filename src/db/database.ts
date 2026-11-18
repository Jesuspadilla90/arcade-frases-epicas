import initSqlJs from "sql.js";
import type { Database } from "sql.js";

let db: Database;

const STORAGE_KEY = "arcade_frases_epicas";

export async function inicializarDB(): Promise<Database> {
   const SQL = await initSqlJs({
    locateFile: (file) => `/${file}`
});

    const datosGuardados = localStorage.getItem(STORAGE_KEY);

    if (datosGuardados) {
        const bytes = Uint8Array.from(
            atob(datosGuardados),
            (c) => c.charCodeAt(0)
        );

        db = new SQL.Database(bytes);
    } else {
        db = new SQL.Database();
    }

    db.run(`
        CREATE TABLE IF NOT EXISTS frases (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            texto TEXT NOT NULL,
            autor TEXT NOT NULL,
            categoria TEXT NOT NULL,
            votos INTEGER DEFAULT 0
        )
    `);

    guardarDB();

    return db;
}

export function guardarDB(): void {
    if (!db) return;

    const datos = db.export();
    const bytes = Array.from(datos);

    let binario = "";
    bytes.forEach((byte) => {
        binario += String.fromCharCode(byte);
    });

    localStorage.setItem(STORAGE_KEY, btoa(binario));
}

export function obtenerDB(): Database {
    return db;
}
