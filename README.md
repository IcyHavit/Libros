# Biblioteca Digital

Sitio web estático para GitHub Pages que reúne **La búsqueda de la santidad** y **Pecados respetables**, de Jerry Bridges. También incluye un glosario de lectura con filtro instantáneo.

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
