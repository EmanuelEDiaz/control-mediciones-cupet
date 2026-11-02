'use client';
import { useCallback, useEffect, useState } from 'react';
import { Faltantes, Lineal, Menu, Splash, type Pantalla } from './pantallas';

type Vista = 'splash' | Pantalla;

export default function Page() {
  const [vista, setVista] = useState<Vista>('splash');

  // Splash solo una vez por sesión; el botón Atrás del móvil vuelve al menú.
  useEffect(() => {
    try {
      if (sessionStorage.getItem('splash') === '1') setVista('menu');
    } catch {}
    const onPop = (e: PopStateEvent) => setVista((e.state?.p as Pantalla) ?? 'menu');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/sw.js`)
        .catch(() => {});
    }
  }, []);

  const finSplash = useCallback(() => {
    try { sessionStorage.setItem('splash', '1'); } catch {}
    setVista('menu');
  }, []);

  const ir = (p: Pantalla) => {
    history.pushState({ p }, '');
    setVista(p);
    window.scrollTo(0, 0);
  };
  const volver = () => (history.state?.p ? history.back() : setVista('menu'));

  if (vista === 'splash') return <Splash onFin={finSplash} />;
  if (vista === 'faltantes') return <Faltantes volver={volver} />;
  if (vista === 'lineal') return <Lineal volver={volver} />;
  return <Menu ir={ir} />;
}
