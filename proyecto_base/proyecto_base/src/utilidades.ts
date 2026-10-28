// APARTADO 2 · Función calcularResultado
// Escribe aquí la función `calcularResultado` (consulta el enunciado).

import type { Estado } from "./tipos";

export function obtenerEstado( calificacion: number): Estado{
    if(calificacion < 5){
        return "suspenso"
    }else if(calificacion < 7){
        return "aprobado"
    }else if(calificacion < 9){
        return "notable"
    }else {
        return "sobresaliente"
    }
}


