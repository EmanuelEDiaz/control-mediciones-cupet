import { describe, expect, it } from 'vitest';
import { faltantesSobrantes, leerNumero, lineal, redondear } from './calculos';

describe('lineal (cuaderno)', () => {
  it('interpola 30 cm entre 25→0,07 y 50→0,13', () => {
    const r = lineal(25, 0.07, 50, 0.13, 30)!;
    expect(redondear(r.medicionBuscadaLitros, 3)).toBe(0.082);
  });
  it('extrapola 140 cm con 100→0,23 y 125→0,46', () => {
    const r = lineal(100, 0.23, 125, 0.46, 140)!;
    expect(redondear(r.medicionBuscadaLitros, 3)).toBe(0.598);
  });
  it('tabla decreciente 25→1000, 30→800, x=27', () => {
    expect(lineal(25, 1000, 30, 800, 27)!.medicionBuscadaLitros).toBe(920);
  });
  it('evita división por cero', () => {
    expect(lineal(10, 1, 10, 2, 12)).toBeNull();
  });
});

describe('faltantesSobrantes', () => {
  it('Veeder-Root: error 0,03', () => {
    const r = faltantesSobrantes('veeder', 1000, 11000, 10000);
    expect(r.realDescargado).toBe(10000);
    expect(r.diferenciaMedicion).toBe(0);
    expect(r.errorCantidadFacturada).toBe(300);
    expect(r.cantidadReclamar).toBe(-300);
    expect(r.estado).toBe('faltante');
  });
  it('Vara: error 0,01 y positivo = sobrante', () => {
    const r = faltantesSobrantes('vara', 0, 10500, 10000);
    expect(r.cantidadReclamar).toBe(400);
    expect(r.mensaje).toBe('Existe Sobrante');
  });
  it('caso del cliente: 2500→2880, facturado 300, Veeder-Root', () => {
    const r = faltantesSobrantes('veeder', 2500, 2880, 300);
    expect(r.realDescargado).toBe(380);
    expect(r.diferenciaMedicion).toBe(80);
    expect(r.errorCantidadFacturada).toBe(9);
    expect(r.cantidadReclamar).toBe(71);
    expect(r.mensaje).toBe('Existe Sobrante');
  });
  it('exactamente cero', () => {
    const r = faltantesSobrantes('vara', 0, 10100, 10000);
    expect(r.estado).toBe('ninguno');
  });
});

describe('leerNumero', () => {
  it('acepta coma, punto y rechaza vacío', () => {
    expect(leerNumero('0,07')).toBe(0.07);
    expect(leerNumero('12.5')).toBe(12.5);
    expect(leerNumero('')).toBeNaN();
    expect(leerNumero('abc')).toBeNaN();
  });
});
