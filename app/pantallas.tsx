'use client';
import { useEffect, useState } from 'react';
import {
  faltantesSobrantes, leerNumero, lineal, type Instrumento,
  type ResultadoFaltantes, type ResultadoLineal,
} from '@/lib/calculos';
import { Acciones, Cabecera, Campo, Fila, Segmentos, Tarjeta } from './ui';

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const fmt = (n: number, u = '') =>
  new Intl.NumberFormat('es-ES', { maximumFractionDigits: 3 }).format(n) + (u ? ` ${u}` : '');
const VERSION = '1.00';
const DURACION_SPLASH = 15000;

export function Logo({ ancho = 160 }: { ancho?: number }) {
  return (
    <div className="inline-grid place-items-center rounded-3xl bg-white p-4 shadow-lg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${base}/logo-cupet.svg`} alt="Logotipo de Cupet" width={ancho} height={ancho * 0.71} />
    </div>
  );
}

export function Splash({ onFin }: { onFin: () => void }) {
  useEffect(() => {
    const t = setTimeout(onFin, DURACION_SPLASH);
    return () => clearTimeout(t);
  }, [onFin]);
  return (
    <main
      onClick={onFin}
      className="flex min-h-dvh cursor-pointer flex-col items-center justify-between px-6 py-10 text-center text-white"
    >
      <div />
      <div className="flex flex-col items-center gap-6">
        <div className="anim-entrada"><Logo ancho={190} /></div>
        <h1 className="anim-subir max-w-sm text-2xl font-bold leading-snug" style={{ animationDelay: '.5s' }}>
          Herramienta de apoyo para cálculos de faltantes, sobrantes e interpolación de mediciones
        </h1>
        <div className="anim-subir text-sm leading-relaxed text-white/90" style={{ animationDelay: '1s' }}>
          <p className="font-semibold">Creadores</p>
          <p>Henry de Jesús Hechavarria Ramirez</p>
          <p>Aleixeis Soñora</p>
          <p className="mt-2">Versión {VERSION}</p>
        </div>
      </div>
      <div className="w-full max-w-xs">
        <div className="h-1.5 overflow-hidden rounded-full bg-white/25">
          <div className="anim-barra h-full bg-white" />
        </div>
        <p className="mt-2 text-xs text-white/80">Toca la pantalla para continuar</p>
      </div>
    </main>
  );
}

export type Pantalla = 'menu' | 'faltantes' | 'lineal';

export function Menu({ ir }: { ir: (p: Pantalla) => void }) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center gap-6 px-5 py-8 text-white">
      <Logo />
      <h1 className="text-center text-2xl font-bold">Control de Mediciones Cupet</h1>
      <div className="flex w-full flex-col gap-4">
        <button onClick={() => ir('faltantes')} className="min-h-20 rounded-3xl bg-white p-4 text-left text-lg font-bold text-verde shadow-lg active:bg-verde-claro">
          Cálculo de Faltantes y Sobrantes
          <span className="block text-sm font-normal text-suave">Veeder-Root o vara de medición</span>
        </button>
        <button onClick={() => ir('lineal')} className="min-h-20 rounded-3xl bg-white p-4 text-left text-lg font-bold text-verde shadow-lg active:bg-verde-claro">
          Interpolación o Extrapolación en las mediciones por Vara
          <span className="block text-sm font-normal text-suave">Convierte cm a litros con la tabla de aforo</span>
        </button>
      </div>
      <p className="mt-auto text-sm text-white/80">Versión {VERSION}</p>
    </main>
  );
}

type Errores = Record<string, string>;
const REQ = 'Escribe un número';

export function Faltantes({ volver }: { volver: () => void }) {
  const [instr, setInstr] = useState<Instrumento>('veeder');
  const [ini, setIni] = useState('');
  const [fin, setFin] = useState('');
  const [fac, setFac] = useState('');
  const [err, setErr] = useState<Errores>({});
  const [res, setRes] = useState<ResultadoFaltantes | null>(null);

  const calcular = () => {
    const v = { ini: leerNumero(ini), fin: leerNumero(fin), fac: leerNumero(fac) };
    const e: Errores = {};
    (Object.keys(v) as (keyof typeof v)[]).forEach((k) => { if (Number.isNaN(v[k])) e[k] = REQ; });
    setErr(e);
    setRes(Object.keys(e).length ? null : faltantesSobrantes(instr, v.ini, v.fin, v.fac));
  };
  const limpiar = () => { setIni(''); setFin(''); setFac(''); setErr({}); setRes(null); };

  const color = res?.estado === 'faltante' ? ['--faltante', '--faltante-bg'] : res?.estado === 'sobrante' ? ['--sobrante', '--sobrante-bg'] : ['--ok', '--ok-bg'];

  return (
    <main className="mx-auto max-w-md px-5 pb-10 pt-4">
      <Cabecera titulo="Cálculo de Faltantes y Sobrantes" onVolver={volver} />
      <Tarjeta>
        <Segmentos
          etiqueta="Instrumento de medición usado"
          valor={instr}
          onChange={(v) => { setInstr(v); setRes(null); }}
          opciones={[{ valor: 'veeder', texto: 'Veeder-Root' }, { valor: 'vara', texto: 'Vara de medición' }]}
        />
        <Campo etiqueta="Medida inicial" unidad="L" valor={ini} onChange={setIni} error={err.ini} />
        <Campo etiqueta="Medida final" unidad="L" valor={fin} onChange={setFin} error={err.fin} />
        <Campo etiqueta="Cantidad facturada" unidad="L" valor={fac} onChange={setFac} error={err.fac} />
        <Acciones onCalcular={calcular} onLimpiar={limpiar} />
      </Tarjeta>
      {res && (
        <Tarjeta className="anim-subir mt-4">
          <div
            role="status"
            className="mb-3 rounded-2xl p-3 text-center text-lg font-bold"
            style={{ color: `var(${color[0]})`, background: `var(${color[1]})` }}
          >
            {res.mensaje}
          </div>
          <dl>
            <Fila nombre="Real descargado" valor={fmt(res.realDescargado, 'L')} />
            <Fila nombre="Diferencia de medición" valor={fmt(res.diferenciaMedicion, 'L')} />
            <Fila nombre="Error permisible" valor={fmt(res.errorPermisible)} />
            <Fila nombre="Error en la cantidad facturada" valor={fmt(res.errorCantidadFacturada, 'L')} />
            <Fila nombre="Cantidad a reclamar" valor={fmt(res.cantidadReclamar, 'L')} fuerte />
          </dl>
        </Tarjeta>
      )}
    </main>
  );
}

type Modo = 'interpolar' | 'extrapolar';

export function Lineal({ volver }: { volver: () => void }) {
  const [modo, setModo] = useState<Modo>('interpolar');
  const [v, setV] = useState({ x1: '', y1: '', x2: '', y2: '', x: '' });
  const [err, setErr] = useState<Errores>({});
  const [res, setRes] = useState<ResultadoLineal | null>(null);
  const set = (k: keyof typeof v) => (s: string) => setV((p) => ({ ...p, [k]: s }));

  const seg = modo === 'interpolar' ? 'Inferior' : 'Inmediata Superior';

  const calcular = () => {
    const n = { x1: leerNumero(v.x1), y1: leerNumero(v.y1), x2: leerNumero(v.x2), y2: leerNumero(v.y2), x: leerNumero(v.x) };
    const e: Errores = {};
    (Object.keys(n) as (keyof typeof n)[]).forEach((k) => { if (Number.isNaN(n[k])) e[k] = REQ; });
    if (!Object.keys(e).length && n.x1 === n.x2) e.x2 = 'Las dos mediciones en cm no pueden ser iguales';
    setErr(e);
    setRes(Object.keys(e).length ? null : lineal(n.x1, n.y1, n.x2, n.y2, n.x));
  };
  const limpiar = () => { setV({ x1: '', y1: '', x2: '', y2: '', x: '' }); setErr({}); setRes(null); };

  return (
    <main className="mx-auto max-w-md px-5 pb-10 pt-4">
      <Cabecera titulo="Interpolación o Extrapolación en las mediciones por Vara" onVolver={volver} />
      <Tarjeta>
        <Segmentos
          etiqueta="¿Qué vas a hacer?"
          valor={modo}
          onChange={(m) => { setModo(m); setRes(null); setErr({}); }}
          opciones={[{ valor: 'interpolar', texto: 'Interpolar' }, { valor: 'extrapolar', texto: 'Extrapolar' }]}
        />
        <Campo etiqueta="Medición Superior de Vara" unidad="cm" valor={v.x1} onChange={set('x1')} error={err.x1} />
        <Campo etiqueta="Equivalente de Medición Superior de Vara" unidad="L" valor={v.y1} onChange={set('y1')} error={err.y1} />
        <Campo etiqueta={`Medición ${seg} de Vara`} unidad="cm" valor={v.x2} onChange={set('x2')} error={err.x2} />
        <Campo etiqueta={`Equivalente de Medición ${seg} de Vara`} unidad="L" valor={v.y2} onChange={set('y2')} error={err.y2} />
        <Campo etiqueta="Medición Buscada de Vara" unidad="cm" valor={v.x} onChange={set('x')} error={err.x} />
        <Acciones onCalcular={calcular} onLimpiar={limpiar} />
      </Tarjeta>
      {res && (
        <Tarjeta className="anim-subir mt-4">
          <dl>
            <Fila nombre="Equivalente de Medición Buscada" valor={fmt(res.equivalenteBuscado, 'L')} />
            <Fila nombre="Medición Buscada" valor={fmt(res.medicionBuscadaLitros, 'L')} fuerte />
          </dl>
        </Tarjeta>
      )}
    </main>
  );
}
