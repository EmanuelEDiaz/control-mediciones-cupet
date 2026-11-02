export type Instrumento = 'veeder' | 'vara';

export const ERROR_PERMISIBLE: Record<Instrumento, number> = {
  veeder: 0.03,
  vara: 0.01,
};

export type EstadoReclamo = 'ninguno' | 'faltante' | 'sobrante';

export interface ResultadoFaltantes {
  realDescargado: number;
  diferenciaMedicion: number;
  errorPermisible: number;
  errorCantidadFacturada: number;
  cantidadReclamar: number;
  estado: EstadoReclamo;
  mensaje: string;
}

/** Redondea a n decimales evitando errores de coma flotante. */
export const redondear = (v: number, n = 2) => {
  const f = 10 ** n;
  return Math.round((v + Number.EPSILON) * f) / f;
};

/** Texto del usuario: acepta coma o punto decimal. NaN si está vacío o es inválido. */
export const leerNumero = (s: string): number => {
  const t = s.trim().replace(',', '.');
  return t === '' || !/^-?\d*\.?\d+$|^-?\d+\.$/.test(t) ? NaN : Number(t);
};

/** Fórmulas tal como las dictó el dueño (ver historial de la conversación). */
export function faltantesSobrantes(
  instrumento: Instrumento,
  medidaInicial: number,
  medidaFinal: number,
  cantidadFacturada: number,
): ResultadoFaltantes {
  const realDescargado = medidaFinal - medidaInicial;
  const diferenciaMedicion = realDescargado - cantidadFacturada;
  const errorPermisible = ERROR_PERMISIBLE[instrumento];
  const errorCantidadFacturada = errorPermisible * cantidadFacturada;
  const cantidadReclamar = diferenciaMedicion - errorCantidadFacturada;

  const r = redondear(cantidadReclamar);
  const estado: EstadoReclamo = r === 0 ? 'ninguno' : r > 0 ? 'faltante' : 'sobrante';
  const mensaje =
    estado === 'ninguno'
      ? 'No existe Faltante o Sobrante'
      : estado === 'faltante'
        ? 'Existe Faltante'
        : 'Existe Sobrante';

  return {
    realDescargado,
    diferenciaMedicion,
    errorPermisible,
    errorCantidadFacturada,
    cantidadReclamar,
    estado,
    mensaje,
  };
}

export interface ResultadoLineal {
  equivalenteBuscado: number;
  medicionBuscadaLitros: number;
}

/**
 * Interpolación y extrapolación usan la misma recta:
 * equivalente = ((y2 - y1) * (x - x1)) / (x2 - x1);  litros = equivalente + y1
 * Devuelve null si x2 == x1 (división por cero).
 */
export function lineal(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x: number,
): ResultadoLineal | null {
  if (x2 === x1) return null;
  const equivalenteBuscado = ((y2 - y1) * (x - x1)) / (x2 - x1);
  return { equivalenteBuscado, medicionBuscadaLitros: equivalenteBuscado + y1 };
}
