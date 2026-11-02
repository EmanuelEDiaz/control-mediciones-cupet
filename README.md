# Control de Mediciones Cupet

PWA (Next.js + pnpm, exportada estática) para calcular faltantes/sobrantes de combustible e
interpolar/extrapolar mediciones de vara. Funciona sin conexión y se instala en iPhone y Android.

- `pnpm dev` — desarrollo · `pnpm test` — pruebas de las fórmulas · `pnpm build` — exporta a `out/`
- Despliegue: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`).
- Fórmulas en `lib/calculos.ts`, tal como las dictó el dueño. Regla de signo: Cantidad a Reclamar
  > 0 = «Existe Faltante», < 0 = «Existe Sobrante», 0 = «No existe Faltante o Sobrante».
- Logo de Cupet: marca de su propietario (descargado de logotyp.us, «uso personal y educativo»);
  verificar con Cupet antes de un uso comercial.

Instalar: iPhone → Safari → Compartir → «Añadir a pantalla de inicio». Android → Chrome → menú → «Instalar aplicación».
