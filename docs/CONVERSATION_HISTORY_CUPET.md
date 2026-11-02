# Historial completo de conversación — Control de Mediciones Cupet

> **Propósito:** conservar el historial de decisiones y requisitos de esta conversación para incorporarlo al proyecto de desarrollo.
>
> **Alcance:** transcripción de los mensajes de usuario y las respuestas visibles del asistente disponibles en esta conversación. No incluye instrucciones internas del sistema ni contenido técnico interno de herramientas. Se conservan también las reiteraciones porque forman parte del historial.

---

## 1. Definición de la primera calculadora

### Usuario
Te acuerdas donde nos quedamos ayer haciendo la apk que te mencioné

### Asistente
Sí, me acuerdo. Ayer dejamos guardado tu proyecto para poder continuarlo.

Hasta donde llegamos, la aplicación tenía estas características:

- Fondo de color verde.
- El logotipo de Cupet que me enviaste como imagen.
- Una interfaz sencilla.
- Campos para introducir valores numéricos.
- Más adelante incorporaríamos las fórmulas matemáticas que tú me vas a proporcionar para realizar los cálculos.
- La idea es generar una APK para Android.

Lo siguiente que nos toca hacer es construir la pantalla principal de la aplicación y empezar a añadir los campos de entrada y la lógica de cálculo según las fórmulas que me indiques.

Estoy listo para continuar exactamente donde lo dejamos. Envíame las fórmulas o dime qué datos debe introducir el usuario y comenzamos a desarrollar la APK paso a paso.

### Usuario
Vamos a añadir los campos de entrada

### Asistente
Perfecto. Continuemos con la pantalla principal de la aplicación.

Propongo una interfaz limpia con el fondo verde y el logotipo de Cupet en la parte superior. Debajo colocaremos los campos de entrada.

**Datos de entrada propuestos inicialmente:**
1. Número de cisterna
2. Producto
3. Volumen inicial (L)
4. Volumen final (L)
5. Temperatura (°C)
6. Densidad observada
7. Factor de corrección (si aplica)
8. Resultado

En la parte inferior habrá dos botones: **Calcular** y **Limpiar**.

Por ahora estos campos solo servirán para introducir los datos. Cuando me des las fórmulas, el botón Calcular realizará automáticamente las operaciones.

Una pregunta importante antes de seguir: ¿qué cálculo realizará exactamente esta aplicación?

### Usuario
Los Datos de Entrada serán :
1- Instrumento de Medición Usado
( habrá dos opciones a elegir Vedeer Root o Vara de Medición Usado)
2- Medida Inicial (litros)
3- Medida Final(litros)
4- Cantidad Facturada (litros)

### Asistente
Perfecto. Esa estructura es mucho más clara y se adapta al proceso que quieres automatizar.

La pantalla principal tendrá:

**Datos de entrada**
1. Instrumento de Medición Usado:
   - Veeder-Root
   - Vara de Medición
2. Medida Inicial (L)
3. Medida Final (L)
4. Cantidad Facturada (L)

Los campos numéricos tendrán teclado numérico. Habrá botones **Calcular** y **Limpiar**, y un área para mostrar los resultados.

El siguiente paso será definir qué debe hacer el botón Calcular.

### Usuario
Vamos ahora a decirte la Fórmula de los cálculos que harás con esos datos

### Asistente
Perfecto. Vamos a definir la lógica de la aplicación paso a paso.

Ya tenemos los datos de entrada:
1. Instrumento de Medición Usado (Veeder-Root o Vara de Medición)
2. Medida Inicial (L)
3. Medida Final (L)
4. Cantidad Facturada (L)

Si la fórmula cambia dependiendo de si se usa Veeder-Root o Vara de Medición, indícame ambas por separado.

### Usuario
Paso 1: Real Descargado = Medida Final - Medida Inicial
Paso 2: Diferencia de Medición = Real Descargado - Cantidad Facturada 
Paso 3: Error Permisible = Si se selecciona Vedeer Rot el número es 0,03 o si se selecciona Vara de Medición el número es 0,01 
Paso 4: Error en la Cantidad Facturada = Error Permisible * Cantidad Facturada 
Paso 5: Cantidad a Reclamar = Diferencia de Medición- Error en la Cantidad Facturada

### Asistente
Excelente. Ya tenemos la lógica principal de la aplicación.

**Datos de entrada**
1. Instrumento de Medición Usado: Veeder-Root o Vara de Medición.
2. Medida Inicial (L).
3. Medida Final (L).
4. Cantidad Facturada (L).

**Cálculos**
1. Real Descargado = Medida Final − Medida Inicial.
2. Diferencia de Medición = Real Descargado − Cantidad Facturada.
3. Error Permisible:
   - Veeder-Root → 0,03.
   - Vara de Medición → 0,01.
4. Error en la Cantidad Facturada = Error Permisible × Cantidad Facturada.
5. Cantidad a Reclamar = Diferencia de Medición − Error en la Cantidad Facturada.

Los resultados mostrarán Real Descargado, Diferencia de Medición, Error Permisible, Error en la Cantidad Facturada y Cantidad a Reclamar.

Se preguntó qué hacer si Cantidad a Reclamar es negativa.

### Usuario
Chat guárdalo todo hasta ahora, ahora mismo te respondo la pregunta

### Asistente
Se confirmó que el progreso quedaba guardado, incluyendo el diseño general, los cuatro datos de entrada y las cinco operaciones descritas. Quedó pendiente decidir cómo interpretar un resultado negativo.

### Usuario
Chat el último paso: Si el Resultado de la cantidad a Reclamar es Cero que muestre el siguiente texto ( No existe Faltante o Sobrante), si el resultado es Positivo que muestre el siguiente texto ( Existe Faltante), si el resultado es negativo que muestre el siguiente texto (Existe Sobrante).

### Asistente
Queda definida la regla de interpretación de Cantidad a Reclamar:

- Si Cantidad a Reclamar = 0: **No existe Faltante o Sobrante**.
- Si Cantidad a Reclamar > 0: **Existe Faltante**.
- Si Cantidad a Reclamar < 0: **Existe Sobrante**.

Además se mostrarán todos los valores calculados. Se indicó que el siguiente paso sería construir la APK con la lógica integrada.

---

## 2. Segunda hoja de cálculo

### Usuario
Chat en la Apk quiero agregar como si fuera otra hoja de calcula a la cual se pueda acceder con un botón, como si fuera una hoja secundaria

### Asistente
Se propuso una segunda pantalla independiente, con sus propios campos, fórmulas, resultados y botones para calcular, limpiar y volver. La primera pantalla seguiría siendo Cálculo de Faltantes y Sobrantes.

### Usuario
Quiero que la segunda Pantalla se llame: “Interpolación o Extrapolación en las mediciones por Vara”

### Asistente
Se confirmó el título **Interpolación o Extrapolación en las mediciones por Vara**. Se propuso acceder a ella desde la pantalla principal mediante un botón. La segunda pantalla tendría campos y fórmulas propios, botón Calcular, botón Limpiar y botón Volver.

### Usuario
Paso 1: El usuario deberá elegir si va Interpolar o Extrapolar

### Asistente
La segunda pantalla tendrá un selector para elegir:
- Interpolar
- Extrapolar

La selección determinará el procedimiento y los campos que se mostrarán.

### Usuario
Paso 2: Si se selecciona Interpola se deberá introducir los siguientes datos 
1- Medición Superior de Vara (centímetros)
2- Equivalente de Medición Superior de Vara (litros)
3- Medición Inferior de Vara (centímetros)
4- Equivalente de Medición Inferior de Vara (litros)
5- Medición Buscada de Vara (centímetros) 

 O si se selecciona Extrapolación se deberá introducir los siguientes datos 
1- Medición Superior de Vara (centímetros)
2- Equivalente de Medición Superior de Vara (litros)
3- Medición Inmediata Superior de Vara (centímetros)
4- Equivalente de Medición Inmediata Superior de Vara (litros)
5- Medición Buscada de Vara (centímetros)

### Asistente
Quedaron definidos los campos dinámicos:

**Si selecciona Interpolar**
1. Medición Superior de Vara (cm).
2. Equivalente de Medición Superior de Vara (L).
3. Medición Inferior de Vara (cm).
4. Equivalente de Medición Inferior de Vara (L).
5. Medición Buscada de Vara (cm).

**Si selecciona Extrapolar**
1. Medición Superior de Vara (cm).
2. Equivalente de Medición Superior de Vara (L).
3. Medición Inmediata Superior de Vara (cm).
4. Equivalente de Medición Inmediata Superior de Vara (L).
5. Medición Buscada de Vara (cm).

### Usuario
En el Caso de Interpolación el cálculo será el Siguiente: 
Cálculo 1
Equivalente de Medición Buscada = ((Equivalente de Medición Inferior de Vara - Equivalente de Medición Superior de Vara) *(Medición Buscada de Vara - Medición Superior de Vara))/ (Medición Inferior de Vara - Medición Superior de Vara)

Cálculo 2 
Medición Buscada (litros)= Equivalente de Medición Buscada + Equivalente de Medición Superior de Vara

### Asistente
Se registró la fórmula de interpolación:

**Cálculo 1 — Equivalente de Medición Buscada**

((Equivalente de Medición Inferior − Equivalente de Medición Superior) × (Medición Buscada − Medición Superior)) ÷ (Medición Inferior − Medición Superior)

**Cálculo 2 — Medición Buscada (litros)**

Medición Buscada (L) = Equivalente de Medición Buscada + Equivalente de Medición Superior.

El resultado final será Medición Buscada (litros).

### Usuario
Si el usuario selecciona Interpolación se hará los siguientes cálculos: 
Cálculo 1:
Equivalente de Medición Buscada = ((Equivalente de Medición Inmediata Superior de Vara - Equivalente de Medición Superior de Vara)* (Medición Buscada de Vara - Medición Superior de Vara))/ ( Medición Inmediata Superior de Vara - Medición Superior de Vara)

Cálculo 2:
Medición Buscada (litros)= Equivalente de Medición Buscada + Equivalente de Medición Superior de Vara

### Asistente
Se observó que esta segunda fórmula utiliza **Medición Inmediata Superior de Vara**, que corresponde a los campos definidos para Extrapolación, aunque el mensaje del usuario dice “si selecciona Interpolación”. Se indicó que se conservaría exactamente la fórmula bajo el cálculo que acababa de proporcionar, sin cambiarla silenciosamente.

La fórmula proporcionada fue:

**Cálculo 1 — Equivalente de Medición Buscada**

((Equivalente de Medición Inmediata Superior − Equivalente de Medición Superior) × (Medición Buscada − Medición Superior)) ÷ (Medición Inmediata Superior − Medición Superior)

**Cálculo 2 — Medición Buscada (litros)**

Medición Buscada (L) = Equivalente de Medición Buscada + Equivalente de Medición Superior.

> **Aclaración pendiente importante:** el usuario llamó “Interpolación” a este segundo conjunto de cálculos, pero sus variables corresponden a los campos que previamente definió para “Extrapolación”. Antes de programar, confirmar si esta fórmula es la de Extrapolación o si realmente desea usarla en Interpolación.

### Usuario
Ya están definidas todas la fórmulas

### Asistente
Se resumió que la primera calculadora y las dos modalidades de la segunda estaban definidas. Se propuso pasar a crear pantallas, botones, navegación, lógica y APK.

---

## 3. Diseño visual y navegación

### Usuario
Ya podemos crear las pantallas

### Asistente
Se propuso esta estructura:
- Pantalla de inicio.
- Pantalla 1: Cálculo de Faltantes y Sobrantes.
- Pantalla 2: Interpolación o Extrapolación en las mediciones por Vara.

La pantalla de inicio tendría logo, título y dos botones de acceso. Las calculadoras tendrían campos, botones Calcular, Limpiar y Volver, y paneles de resultados.

### Usuario
Vamos a definir el aspecto visual

### Asistente
Se propuso:
- Orientación vertical.
- Fondo verde, identidad visual Cupet.
- Estilo simple, limpio y legible.
- Botones y campos redondeados.
- Tarjetas blancas sobre el fondo verde.
- Teclado numérico para las entradas.
- Logo en encabezados.
- Botones grandes y claros.

Para la pantalla principal:
- Logo Cupet centrado.
- Título Control de Mediciones Cupet.
- Botones para las dos calculadoras.
- Versión de aplicación en la parte inferior.

Para la primera calculadora:
- Selector de instrumento.
- Tres campos numéricos.
- Calcular y Limpiar.
- Tarjeta con resultados y mensaje final.
- Botón Volver.

Para la segunda calculadora:
- Selector Interpolar/Extrapolar.
- Campos dinámicos según la opción.
- Calcular, Limpiar y Volver.
- Tarjeta de resultados.

### Usuario
Quiero que ante todo al iniciar la apk puedas poner un mensaje que dure unos 15 segundos y luego inicie el resto de la aplicaciones

### Asistente
Se propuso una pantalla de apertura (Splash Screen) de aproximadamente 15 segundos, con fondo verde, logo Cupet y mensaje de bienvenida. Al terminar, abrirá automáticamente la pantalla principal.

### Usuario
Que buena Idea Chat, que el nombre sea : “Herramienta de apoyo para cálculos de faltantes, sobrantes e interpolación de mediciones”
También agrégale el nombre del creador: 
Henry de Jesús Hechavarria Ramirez 
Aleixeis Soñora 
Versión de la aplicación: 1.00
Agrégale Chat algún efecto

### Asistente
Se definió la pantalla Splash Screen:
- Duración aproximada: 15 segundos.
- Fondo verde.
- Logo Cupet.
- Texto principal: **Herramienta de apoyo para cálculos de faltantes, sobrantes e interpolación de mediciones**.
- Creadores:
  - Henry de Jesús Hechavarria Ramirez
  - Aleixeis Soñora
- Versión de la aplicación: **1.00**.
- Animación suave del logo: desvanecimiento, ligero aumento de tamaño y permanencia.
- Transición suave hacia el menú principal.

### Usuario
Vamos

### Asistente
Se confirmó que se comenzaría por la Splash Screen y luego se diseñaría el menú principal.

### Usuario
Ok

### Asistente
Se continuó con el diseño de la pantalla principal:
- Fondo verde.
- Logo Cupet.
- Título Control de Mediciones Cupet.
- Dos botones grandes para las calculadoras.
- Versión 1.00 en la parte inferior.

### Usuario
Ok

### Asistente
Se diseñó la Pantalla 1:
- Logo pequeño y título.
- Selector Veeder-Root / Vara de Medición.
- Medida Inicial (litros).
- Medida Final (litros).
- Cantidad Facturada (litros).
- Botones Calcular, Limpiar y Volver.
- Resultados: Real Descargado, Diferencia de Medición, Error Permisible, Error en la Cantidad Facturada y Cantidad a Reclamar.
- Mensaje final según el signo de Cantidad a Reclamar.

### Usuario
Ok

### Asistente
Se diseñó la Pantalla 2:
- Título Interpolación o Extrapolación en las mediciones por Vara.
- Selector Interpolar / Extrapolar.
- Campos variables.
- Botones Calcular, Limpiar y Volver.
- Resultados: Equivalente de Medición Buscada y Medición Buscada (litros).

### Usuario
Ok

### Asistente
Se indicó que estaban definidas la Splash Screen, la pantalla principal y ambas calculadoras. Se propuso pasar a la estructura y programación Android.

---

## 4. Requisitos técnicos y construcción

### Usuario
Ok

### Asistente
Se propuso crear la estructura Android:
- Splash Screen.
- MainActivity / menú principal.
- FaltantesSobrantesActivity.
- InterpolacionVaraActivity.
- Módulo de cálculos.
- Validación de campos vacíos.
- Teclado numérico.
- Formato de resultados en litros.

### Usuario
Para Android del 10 en adelante

### Asistente
Se confirmó compatibilidad mínima Android 10 (API 29), orientación vertical, interfaz moderna y funcionamiento local sin conexión a internet.

### Usuario
Ok

### Asistente
Se describió la base del proyecto y el orden de implementación: crear pantallas, navegación, fórmulas, recursos visuales y pruebas.

### Usuario
Ok

### Asistente
Se reiteró la arquitectura:
1. Splash Screen de 15 segundos.
2. Menú principal.
3. Calculadora de Faltantes y Sobrantes.
4. Calculadora de Interpolación/Extrapolación.

Se indicó que la primera fase sería la interfaz base.

### Usuario
Ok

### Asistente
Se volvió a describir el flujo Splash → Menú → Calculadora 1 / Calculadora 2 y el plan de integrar las fórmulas.

### Usuario
Ok

### Asistente
Se reiteró que se prepararía la interfaz base, con Splash Screen, menú principal y estilo común.

### Usuario
Ok

### Asistente
Se indicó que la fase siguiente sería crear una primera versión funcional con Splash Screen, menú, navegación y espacios para los cálculos.

### Usuario
Ok

### Asistente
Se describió la Pantalla 1 con selector de instrumento, tres campos numéricos, botones y panel de resultados.

### Usuario
Ok

### Asistente
Se detalló la lógica del botón Calcular de la primera pantalla:
- Leer instrumento, medida inicial, medida final y cantidad facturada.
- Calcular Real Descargado.
- Calcular Diferencia de Medición.
- Seleccionar Error Permisible según instrumento.
- Calcular Error en la Cantidad Facturada.
- Calcular Cantidad a Reclamar.
- Mostrar el mensaje según el signo.

### Usuario
Ok

### Asistente
Se confirmó la integración prevista de la primera calculadora y se pasó a describir la segunda herramienta.

### Usuario
Ok

### Asistente
Se describieron los campos y fórmulas de Interpolar y Extrapolar. Para Interpolar se usaban los valores superior e inferior; para Extrapolar se usaban el valor superior y el inmediato superior. Se mostró el mismo patrón de cálculo lineal indicado por el usuario.

### Usuario
Ok

### Asistente
Se resumió la integración de ambas herramientas y se propuso preparar la primera versión de prueba.

### Usuario
Ok

### Asistente
Se reiteraron los requisitos y se propuso preparar la implementación de las pantallas y la estructura de código Android.

### Usuario
Ok

### Asistente
Se propuso la estructura final:
- SplashScreen.
- MainScreen.
- FaltantesSobrantesScreen.
- InterpolacionVaraScreen.
- Módulo de cálculos.
- Validación de entradas.
- Teclado numérico.
- Formato de resultados.
- Android 10 o superior.

### Usuario
Ok

### Asistente
Se volvió a describir la implementación de Splash Screen y menú principal, antes de conectar las calculadoras.

### Usuario
Ok

### Asistente
Se reiteró la pantalla de presentación con fondo verde, logo, animación, texto, creadores, versión 1.00 y temporizador de 15 segundos; luego el menú principal.

### Usuario
Ok

### Asistente
Se indicó que la planificación estaba definida y que la siguiente fase sería construir la primera versión funcional.

### Usuario
Termina la apk ya por favor

### Asistente
Se aclaró que todavía no se había generado una APK y que no se debía afirmar que estaba construida. Se propuso preparar el proyecto Android completo con código de pantallas, botones, cálculos, diseño verde, logo y navegación, para después compilarlo. Se enumeraron los pasos: crear proyecto, implementar pantallas, programar cálculos, añadir logo y generar APK. Se pidió volver a subir el logo si no estaba disponible.

### Usuario
Ok

### Asistente
Se confirmó que se continuaría con la base del proyecto Android:
- Nombre: Control de Mediciones Cupet.
- Android 10 o superior.
- Aplicación local/offline.
- Orientación vertical.
- Fondo verde.
- Splash Screen de 15 segundos con logo, animación, texto, creadores y versión 1.00.
Se solicitó nuevamente el logotipo de Cupet para incorporarlo como recurso.

### Usuario
Ok

### Asistente
Se indicó que el diseño y los requisitos estaban preparados y que, al enviar el logo, se continuaría con la integración visual, las pantallas y el código.

### Usuario
Guárdalo todo hasta aquí

### Asistente
Se confirmó que el estado del proyecto quedaba guardado, incluyendo:
- Proyecto Control de Mediciones Cupet.
- Splash Screen de 15 segundos.
- Texto de presentación.
- Creadores y versión.
- Menú principal con dos herramientas.
- Primera calculadora con campos, fórmulas y mensajes.
- Segunda calculadora con campos y fórmulas.
- Fondo verde, estilo profesional y Android 10 o superior.
- Pendiente: continuar la construcción e integrar el logo cuando el usuario lo envíe.

### Usuario
quiero que importes esta conversacion completa sin perdidas para usarla en mi proyecto

---

# 5. Especificación consolidada del proyecto

Esta sección resume los requisitos extraídos del historial. No sustituye la transcripción anterior.

## Identidad
- Nombre de la aplicación: **Control de Mediciones Cupet**.
- Texto de presentación: **Herramienta de apoyo para cálculos de faltantes, sobrantes e interpolación de mediciones**.
- Creadores:
  - Henry de Jesús Hechavarria Ramirez
  - Aleixeis Soñora
- Versión visible: **1.00**.
- Identidad visual: fondo verde y logotipo de Cupet.
- Orientación: vertical.
- Compatibilidad solicitada: Android 10 en adelante (API mínima 29).
- Funcionamiento previsto: sin conexión a internet.

## Pantalla de presentación
- Se muestra al iniciar la APK durante aproximadamente 15 segundos.
- Fondo verde.
- Logo Cupet centrado.
- Animación de desvanecimiento y ligero aumento de escala.
- Texto de presentación, creadores y versión.
- Transición suave hacia el menú principal.

## Menú principal
- Logo Cupet.
- Título: Control de Mediciones Cupet.
- Botón 1: Cálculo de Faltantes y Sobrantes.
- Botón 2: Interpolación o Extrapolación en las mediciones por Vara.
- Versión 1.00 en la parte inferior.

## Calculadora 1: Cálculo de Faltantes y Sobrantes

### Entradas
1. Instrumento de Medición Usado:
   - Veeder-Root.
   - Vara de Medición.
2. Medida Inicial (litros).
3. Medida Final (litros).
4. Cantidad Facturada (litros).

### Fórmulas originales
1. `Real Descargado = Medida Final - Medida Inicial`
2. `Diferencia de Medición = Real Descargado - Cantidad Facturada`
3. `Error Permisible = 0,03` si se selecciona Veeder-Root; `0,01` si se selecciona Vara de Medición.
4. `Error en la Cantidad Facturada = Error Permisible * Cantidad Facturada`
5. `Cantidad a Reclamar = Diferencia de Medición - Error en la Cantidad Facturada`

### Interpretación del resultado
- Si Cantidad a Reclamar es exactamente cero: **No existe Faltante o Sobrante**.
- Si es positivo: **Existe Faltante**.
- Si es negativo: **Existe Sobrante**.

### Resultados que deben mostrarse
- Real Descargado.
- Diferencia de Medición.
- Error Permisible.
- Error en la Cantidad Facturada.
- Cantidad a Reclamar.
- Mensaje de estado.

## Calculadora 2: Interpolación o Extrapolación en las mediciones por Vara

### Selector
- Interpolar.
- Extrapolar.

### Entradas para Interpolar
1. Medición Superior de Vara (cm).
2. Equivalente de Medición Superior de Vara (litros).
3. Medición Inferior de Vara (cm).
4. Equivalente de Medición Inferior de Vara (litros).
5. Medición Buscada de Vara (cm).

### Fórmula de Interpolación proporcionada
`Equivalente de Medición Buscada = ((Equivalente de Medición Inferior de Vara - Equivalente de Medición Superior de Vara) * (Medición Buscada de Vara - Medición Superior de Vara)) / (Medición Inferior de Vara - Medición Superior de Vara)`

`Medición Buscada (litros) = Equivalente de Medición Buscada + Equivalente de Medición Superior de Vara`

### Entradas para Extrapolar
1. Medición Superior de Vara (cm).
2. Equivalente de Medición Superior de Vara (litros).
3. Medición Inmediata Superior de Vara (cm).
4. Equivalente de Medición Inmediata Superior de Vara (litros).
5. Medición Buscada de Vara (cm).

### Segundo conjunto de fórmulas proporcionado
El usuario lo introdujo literalmente diciendo “Si el usuario selecciona Interpolación”, pero emplea las variables “Medición Inmediata Superior”, que corresponden a los campos definidos para Extrapolación:

`Equivalente de Medición Buscada = ((Equivalente de Medición Inmediata Superior de Vara - Equivalente de Medición Superior de Vara) * (Medición Buscada de Vara - Medición Superior de Vara)) / (Medición Inmediata Superior de Vara - Medición Superior de Vara)`

`Medición Buscada (litros) = Equivalente de Medición Buscada + Equivalente de Medición Superior de Vara`

**No corregir ni reasignar esta fórmula sin confirmación del usuario.** La interpretación más probable es que se trate de la fórmula de Extrapolación, pero debe confirmarse antes de programar.

### Resultados
- Equivalente de Medición Buscada.
- Medición Buscada (litros).

## Elementos comunes de interfaz
- Fondo verde.
- Tarjetas blancas para datos y resultados.
- Bordes redondeados.
- Tipografía grande y legible.
- Teclado numérico para valores.
- Botones Calcular, Limpiar y Volver.
- Navegación entre el menú y las dos calculadoras.
- Validación de entradas vacías.
- Evitar división por cero en las fórmulas de interpolación/extrapolación.
- Mostrar resultados con unidades claras.

## Pendientes antes de generar la APK
1. El usuario debe volver a adjuntar el logotipo de Cupet para integrarlo como recurso.
2. Confirmar que el segundo conjunto de fórmulas corresponde a Extrapolación y no a Interpolación.
3. Elegir/confirmar la tecnología concreta de implementación (por ejemplo, Kotlin con Jetpack Compose o vistas XML) si aún no está decidida.
4. Crear el proyecto y el código fuente.
5. Probar los cálculos con casos de prueba.
6. Compilar y entregar el APK instalable.

---

# 6. Nota de integridad

El historial conversacional se conserva arriba en orden cronológico, incluyendo las reiteraciones visibles. La especificación consolidada facilita usar los requisitos como contexto de desarrollo. No se afirma que la APK ya exista ni que se haya compilado: hasta el final de esta conversación el proyecto está en fase de definición y pendiente de implementación.
