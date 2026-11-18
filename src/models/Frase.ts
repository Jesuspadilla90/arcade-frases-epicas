
export interface Frase {
    id: number;
    texto: string;
    autor: string;
    categoria: string;
    votos: number;
}

export function crearFrase(
    texto: string,
    autor: string,
    categoria: string
): Omit<Frase, "id" | "votos"> {
    return {
        texto,
        autor,
        categoria
    };
}
