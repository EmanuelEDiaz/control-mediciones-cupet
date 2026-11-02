# Plan y decisiones

- **Tecnología:** PWA con Next.js + pnpm, exportada estática y desplegada en GitHub Pages
  (https://emanuelediaz.github.io/control-mediciones-cupet/). Una sola URL sirve a iPhone y Android.
- **Origen de los requisitos:** `CONVERSATION_HISTORY_CUPET.md` (chat con ChatGPT) y las fotos de `cuaderno/`.
- **Fórmulas:** en `lib/calculos.ts`, con pruebas (`pnpm test`) que usan los ejemplos del cuaderno
  (interpolar 30 cm → 0,082; extrapolar 140 cm → 0,598).
- **Interpolar y extrapolar** usan la misma recta; solo cambian las etiquetas de los campos.
- **Splash:** 15 s, se salta tocando la pantalla y sale una vez por sesión.

## Pendiente de confirmar con el dueño
- Signo del resultado: según lo dictado, Cantidad a Reclamar > 0 = «Existe Faltante». Si lo descargado
  supera lo facturado eso parecería un sobrante; está programado tal cual se pidió. Cambiarlo es una línea.
- Logo: se usa el general de Cupet (logotyp.us, uso personal/educativo); verificar permiso con Cupet.
- Tablas de aforo: hoy el usuario escribe los datos de la tabla a mano; no hay tablas guardadas por tanque.
