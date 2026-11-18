
import { obtenerDB, guardarDB } from "../db/database";
import type { Frase } from "../models/Frase";

export function agregarFrase(
    texto: string,
    autor: string,
    categoria: string
): void {
    const db = obtenerDB();

    db.run(
        "INSERT INTO frases (texto, autor, categoria, votos) VALUES (?, ?, ?, 0)",
        [texto, autor, categoria]
    );

    guardarDB();
}

export function listarFrases(): Frase[] {
    const db = obtenerDB();

    const resultado = db.exec(
        "SELECT * FROM frases ORDER BY votos DESC"
    );

    if (resultado.length === 0) return [];

    return resultado[0].values.map((fila) => ({
        id: Number(fila[0]),
        texto: String(fila[1]),
        autor: String(fila[2]),
        categoria: String(fila[3]),
        votos: Number(fila[4])
    }));
}

export function editarFrase(
    id: number,
    texto: string,
    autor: string,
    categoria: string
): void {
    const db = obtenerDB();

    db.run(
        "UPDATE frases SET texto = ?, autor = ?, categoria = ? WHERE id = ?",
        [texto, autor, categoria, id]
    );

    guardarDB();
}

export function eliminarFrase(id: number): void {
    const db = obtenerDB();

    db.run("DELETE FROM frases WHERE id = ?", [id]);

    guardarDB();
}

export function votarFrase(id: number): void {
    const db = obtenerDB();

    db.run(
        "UPDATE frases SET votos = votos + 1 WHERE id = ?",
        [id]
    );

    guardarDB();
}

export function obtenerTop10(): Frase[] {
    const db = obtenerDB();

    const resultado = db.exec(
        "SELECT * FROM frases ORDER BY votos DESC LIMIT 10"
    );

    if (resultado.length === 0) return [];

    return resultado[0].values.map((fila) => ({
        id: Number(fila[0]),
        texto: String(fila[1]),
        autor: String(fila[2]),
        categoria: String(fila[3]),
        votos: Number(fila[4])
    }));
}
