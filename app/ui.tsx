'use client';
import { useId } from 'react';

export function Tarjeta({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-3xl bg-white p-5 shadow-lg ${className}`}>{children}</div>;
}

export function Cabecera({ titulo, onVolver }: { titulo: string; onVolver: () => void }) {
  return (
    <header className="flex items-center gap-3 pb-4 pt-2 text-white">
      <button
        onClick={onVolver}
        aria-label="Volver al menú"
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 text-2xl active:bg-white/30"
      >
        <span aria-hidden>←</span>
      </button>
      <h1 className="text-lg font-bold leading-tight">{titulo}</h1>
    </header>
  );
}

export function Campo(props: {
  etiqueta: string;
  unidad: string;
  valor: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const id = useId();
  return (
    <div className="mb-4">
      <label htmlFor={id} className="mb-1 block text-sm font-semibold text-tinta">
        {props.etiqueta}
      </label>
      <div
        className={`flex min-h-12 items-center rounded-2xl border-2 bg-white px-4 focus-within:border-verde ${
          props.error ? 'border-faltante' : 'border-borde'
        }`}
        style={props.error ? { borderColor: 'var(--faltante)' } : undefined}
      >
        <input
          id={id}
          inputMode="decimal"
          autoComplete="off"
          enterKeyHint="next"
          value={props.valor}
          onChange={(e) => props.onChange(e.target.value)}
          aria-invalid={!!props.error}
          aria-describedby={props.error ? `${id}-e` : undefined}
          className="min-h-12 w-full bg-transparent text-xl outline-none"
        />
        <span className="ml-2 text-sm font-semibold text-suave">{props.unidad}</span>
      </div>
      {props.error && (
        <p id={`${id}-e`} role="alert" className="mt-1 text-sm" style={{ color: 'var(--faltante)' }}>
          {props.error}
        </p>
      )}
    </div>
  );
}

export function Segmentos<T extends string>(props: {
  etiqueta: string;
  valor: T;
  opciones: { valor: T; texto: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="mb-4">
      <legend className="mb-1 text-sm font-semibold">{props.etiqueta}</legend>
      <div className="grid grid-cols-2 gap-2" role="radiogroup">
        {props.opciones.map((o) => {
          const activo = o.valor === props.valor;
          return (
            <button
              key={o.valor}
              role="radio"
              aria-checked={activo}
              onClick={() => props.onChange(o.valor)}
              className={`min-h-12 rounded-2xl border-2 px-2 text-base font-semibold ${
                activo ? 'border-verde bg-verde text-white' : 'border-borde bg-white text-tinta'
              }`}
            >
              {o.texto}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export function Acciones({ onCalcular, onLimpiar }: { onCalcular: () => void; onLimpiar: () => void }) {
  return (
    <div className="mt-2 grid grid-cols-2 gap-3">
      <button onClick={onCalcular} className="min-h-12 rounded-2xl bg-verde text-lg font-bold text-white active:bg-verde-oscuro">
        Calcular
      </button>
      <button onClick={onLimpiar} className="min-h-12 rounded-2xl border-2 border-verde bg-white text-lg font-bold text-verde active:bg-verde-claro">
        Limpiar
      </button>
    </div>
  );
}

export function Fila({ nombre, valor, fuerte = false }: { nombre: string; valor: string; fuerte?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between gap-3 border-b border-borde py-2 ${fuerte ? 'text-lg font-bold' : ''}`}>
      <dt className="text-sm text-suave">{nombre}</dt>
      <dd className="text-right tabular-nums">{valor}</dd>
    </div>
  );
}
