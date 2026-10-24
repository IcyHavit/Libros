(() => {
  "use strict";

  const vistas = {
    inicio: document.getElementById("vista-inicio"),
    glosario: document.getElementById("vista-glosario")
  };
  const botones = document.querySelectorAll("[data-navigate]");
  const entrada = document.getElementById("buscar-termino");
  const contenedor = document.getElementById("glossary-results");
  const contador = document.getElementById("glossary-counter");
  const vacio = document.getElementById("no-results");

  const normalizar = texto => String(texto ?? "")
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  // Usamos createElement + textContent, nunca innerHTML con datos del glosario.
  function crear(tag, clase, texto) {
    const elemento = document.createElement(tag);
    if (clase) elemento.className = clase;
    if (texto !== undefined) elemento.textContent = texto;
    return elemento;
  }

  function crearTarjeta(definicion) {
    const tarjeta = crear("article", "definition-card");
    const cabecera = crear("div", "definition-card-header");
    const icono = crear("span", "definition-card-icon");
    icono.setAttribute("aria-hidden", "true");
    icono.textContent = "✦";
    cabecera.append(icono, crear("h2", "", definicion.termino));
    tarjeta.append(cabecera);
    tarjeta.append(
      crear("span", "definition-label", "Significado"),
      crear("p", "definition-text", definicion.significado)
    );
    if (definicion.ejemplo) {
      tarjeta.append(
        crear("span", "definition-label", "Ejemplo"),
        crear("blockquote", "definition-example", `“${definicion.ejemplo}”`)
      );
    }
    return tarjeta;
  }

  function actualizarGlosario() {
    const palabras = normalizar(entrada.value).split(" ").filter(Boolean);
    const coincidencias = DEFINICIONES_GLOSARIO.filter(item => {
      const contenido = normalizar([item.termino, item.significado, item.ejemplo].join(" "));
      return palabras.every(palabra => contenido.includes(palabra));
    });
    contenedor.replaceChildren(...coincidencias.map(crearTarjeta));
    contador.textContent = `${coincidencias.length} ${coincidencias.length === 1 ? "definición encontrada" : "definiciones encontradas"}`;
    vacio.hidden = coincidencias.length !== 0;
  }

  function cambiarVista() {
    const destino = location.hash.toLowerCase() === "#glosario" ? "glosario" : "inicio";
    Object.entries(vistas).forEach(([nombre, vista]) => { vista.hidden = nombre !== destino; });
    botones.forEach(boton => {
      const activo = boton.dataset.navigate === destino;
      boton.classList.toggle("active", activo);
      if (boton.classList.contains("nav-link")) {
        if (activo) boton.setAttribute("aria-current", "page");
        else boton.removeAttribute("aria-current");
      }
    });
    document.title = destino === "glosario" ? "Glosario | Biblioteca Digital" : "Biblioteca Digital | Inicio";
    window.scrollTo({top:0,behavior:"instant"});
  }

  entrada.addEventListener("input", actualizarGlosario);
  window.addEventListener("hashchange", cambiarVista);
  cambiarVista();
  actualizarGlosario();
})();
