# Biblioteca Digital

Sitio web estático para GitHub Pages que reúne **La búsqueda de la santidad** y **Pecados respetables**, de Jerry Bridges, y **La oración del Señor**, de R. C. Sproul. También incluye un glosario de lectura con filtro instantáneo.

## Estructura

```text
BibliotecaDigital/
├── index.html                       # Inicio con ambos libros y sección Glosario
├── assets/
│   ├── css/styles.css               # Colores, degradados y diseño adaptable
│   ├── js/app.js                     # Navegación y búsqueda en tiempo real
│   ├── js/glosario.js                # AQUÍ se editan las definiciones
│   ├── favicon.svg
│   └── referencias/anatema-referencia.png  # Captura de referencia original
└── libros/
    ├── busqueda-de-la-santidad/     # Primer libro completo, sin modificaciones
    │   ├── index.html
    │   └── chapters/                 # Todas las imágenes originales (PNG, JPG, WebP)
    └── pecados-respetables/         # Segundo libro completo, sin modificaciones
        ├── index.html
        └── chapters/                 # Todas las imágenes originales (WebP)
```

## Cómo abrirlo

- **Localmente:** abre `index.html` en el navegador (también funcionan los botones de lectura).
- **En GitHub Pages:** sube **el contenido de esta carpeta** a la raíz de un repositorio; en *Settings → Pages* selecciona *Deploy from a branch*, rama `main` y carpeta `/ (root)`. La dirección será `https://TU_USUARIO.github.io/NOMBRE_REPOSITORIO/`.
- Los botones **Abrir libro** cargan las copias incluidas en `libros/` sin depender de otro sitio externo. Los lectores originales no han sido editados.

## Glosario

Para añadir definiciones, edita únicamente `assets/js/glosario.js` y agrega objetos con los campos `termino`, `significado` y `ejemplo` al arreglo `DEFINICIONES_GLOSARIO` (separados por coma). No se necesita base de datos. El buscador filtra al escribir y no distingue entre mayúsculas/minúsculas ni entre vocales con/sin tilde.

La primera entrega contiene **solo Anatema**, con la definición y el ejemplo proporcionados por el usuario.

## Notas

- Las imágenes originales de ambos libros se incluyeron, incluso los archivos PNG de gran tamaño del primero; por eso el ZIP es relativamente grande.
- Los dos proyectos están aislados en carpetas distintas para conservar su diseño y funcionamiento.
- La captura del término «Anatema» queda guardada en `assets/referencias/` como referencia. No se incluye la captura en la interfaz, ya que el glosario presenta texto limpio y consultable.

## Actualización: capítulos 6 y 7 y tercer libro

- `libros/pecados-respetables/` incorpora los capítulos 6 y 7, sus infografías originales, resúmenes, 10 ideas, preguntas de reflexión y una propuesta práctica para el capítulo 6. Los capítulos 1-5 mantienen su contenido.
- `libros/la-oracion-del-senor/` presenta diez capítulos y un apéndice con las 23 páginas del material proporcionado, en el mismo orden que los PDF. Incluye una portada recortada de la fotografía facilitada, índice, navegación, ampliación de imágenes y lectura íntegra de las páginas en imágenes optimizadas. No se inventaron preguntas.
- El sitio se puede abrir sin conexión a internet, directamente desde `index.html`, ya que todos sus recursos están dentro del proyecto.
- Para publicar, **extrae el ZIP** y sube el **contenido de la carpeta `Libros-main`** a la raíz de tu repositorio, preservando la estructura de subcarpetas.

Esta versión ligera omite los archivos PDF originales para facilitar la publicación en GitHub Pages; **sí contiene todas las páginas de los resúmenes como imágenes**. Para conservar descargas PDF, utiliza el paquete completo.
