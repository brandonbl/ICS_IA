# EJER_04.1 resuelto

Proyecto de React + TypeScript con los ejercicios que aparecen desarrollados en el documento.

## Instalar y ejecutar

```bash
npm install
npm run dev
```

Antes de entregar:

```bash
npm run build
npm run lint
```

## Respuestas

### A1 · Predice y comprueba

1. Al pulsar «Sumar 3» desde 0, la consola muestra 0 y el título muestra 1 en el código original. Las tres llamadas usan la misma foto del estado (`cuenta` vale 0), por eso todas intentan poner 1.
2. Con el código original, al pulsar «Duplicar» desde 0 se muestra 2: primero se programa el valor 1 y después la actualización funcional multiplica ese 1 por 2. Al segundo clic, partiendo de 2, se muestra 6.
3. Se corrige usando `setCuenta(anterior => anterior + 3)`. Así React aplica cada suma sobre el estado más reciente.

### B1 · Reloj con limpieza

El efecto crea un intervalo que actualiza la fecha cada segundo. La función de limpieza ejecuta `clearInterval` para detenerlo cuando el componente se desmonta o cuando el efecto se limpia. En StrictMode, durante el desarrollo React puede ejecutar un ciclo adicional de montaje y limpieza para detectar efectos mal preparados. Sin limpiar el intervalo, pueden quedar temporizadores activos y aparecer varios «tic».

### B4 · ¿Necesito un efecto?

1. El nombre completo depende directamente de las props. No hace falta guardarlo en estado ni actualizarlo con un efecto. Se calcula directamente: `const nombreCompleto = nombre + " " + apellidos`.
2. Guardar en el servidor es una acción causada por enviar el formulario. Debe hacerse dentro de `manejarEnvio`, no en un efecto que observa `enviado`.
3. Para reiniciar el comentario al cambiar de alumno, se pone `key={idAlumno}` en el componente que contiene el estado. Al cambiar la key, React crea una nueva instancia y el estado empieza vacío.

### C1 · Foco inteligente

Usamos `?.` porque `current` puede ser `null` antes de que el input esté disponible. El operador evita intentar llamar a `focus()` si no existe el elemento.

### C2 · Cronómetro con vueltas

El id del intervalo va en una ref porque necesitamos guardarlo sin provocar un nuevo renderizado. Si estuviera en el estado, cada cambio del id podría provocar renders innecesarios. Además, el id es un dato interno que no se muestra en pantalla.

### D · Cuaderno de notas

La media se calcula en una variable porque depende de las notas actuales. No hace falta guardarla en el estado: se puede obtener con `reduce` cada vez que se renderiza. Así evitamos tener dos datos que podrían quedar desincronizados.

## Nota sobre los apartados que faltan

El índice del documento menciona B2 (localStorage) y B3 (AbortController), pero sus enunciados no aparecen en el archivo entregado. Por eso no están implementados aquí.
