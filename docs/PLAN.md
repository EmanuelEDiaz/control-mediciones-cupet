# Plan y decisiones

- **Tecnología:** PWA con Next.js + pnpm, exportada estática y desplegada en GitHub Pages
  (https://emanuelediaz.github.io/control-mediciones-cupet/). Una sola URL sirve a iPhone y Android.
- **Origen de los requisitos:** `CONVERSATION_HISTORY_CUPET.md` (chat con ChatGPT) y las fotos de `cuaderno/`.
- **Fórmulas:** en `lib/calculos.ts`, con pruebas (`pnpm test`) que usan los ejemplos del cuaderno
  (interpolar 30 cm → 0,082; extrapolar 140 cm → 0,598).
- **Interpolar y extrapolar** usan la misma recta; solo cambian las etiquetas de los campos.
- **Splash:** 15 s, se salta tocando la pantalla y sale una vez por sesión.

## Pendiente de confirmar con el dueño
- Error permisible como tolerancia: con «Diferencia − Error» un faltante de 20 L (Veeder, 300 L facturados)
  da −29 en vez de 11, y una diferencia de 0 da −9 («Existe Faltante»). Propuesta: si |diferencia| ≤ error
  → «No existe»; si no, |diferencia| − error. El cliente quedó en investigarlo.
- Vara de medición: en el cuaderno las medidas se toman en cm y se pasan a litros; hoy la pantalla pide litros.

## Resuelto
- 2026-11-02 (audio del cliente): signo invertido. Positivo = «Existe Sobrante», negativo = «Existe Faltante».
- Logo oficial entregado por el cliente: `public/logo-cupet-santiago.png` (Comercialización Santiago de Cuba).
- Tablas de aforo: confirmado que el usuario escribe a mano los valores superior e inferior.
