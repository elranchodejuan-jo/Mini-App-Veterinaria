// microorganismo.js
// -----------------------------------------------------------------------------
// Módulo de MICROORGANISMOS (atlas bacteriano) de SUITE VET
// Tarjetas con Gram, morfología, sistema afectado, pruebas y enlaces hacia
// agares, caldos y antibióticos.
// -----------------------------------------------------------------------------

// 1) BASE DE DATOS DE MICROORGANISMOS
// Campos:
//
// id                     → id interno (para links entre módulos)
// nombreCientifico       → nombre en cursiva en la interfaz
// gramKey                → "grampositivo" | "gramnegativo"
// gramTexto              → texto visible
// morfologiaKey          → "coco" | "bacilo"
// familia                → familia bacteriana
// sistemasClave          → array: ["digestivo","urinario","respiratorio","sistemico"]
// reservorio             → dónde vive normalmente
// importancia            → resumen clínico
// patotipo               → para E. coli, etc. (opcional)
// mecanismoPatogenicidad → toxinas, invasión, adherencia, etc.
// agaresIds              → IDs de agares que lo cultivan / seleccionan
// caldosIds              → IDs de caldos de enriquecimiento
// pruebasIds             → IDs de pruebas bioquímicas clave
// antibioticosIds        → IDs de antibióticos útiles (coinciden con antibio.js)
// notasLab               → observaciones de laboratorio

const microorganismos = [
  {
    id: "escherichia-coli",
    nombreCientifico: "Escherichia coli",
    gramKey: "gramnegativo",
    gramTexto: "Gram negativo",
    morfologiaKey: "bacilo",
    familia: "Enterobacteriaceae",
    sistemasClave: ["digestivo", "urinario", "sistemico"],
    reservorio: "Microbiota intestinal normal de muchas especies domésticas.",
    importancia:
      "Oportunista frecuente. Causa diarreas neonatales, infecciones urinarias, mastitis y septicemias.",
    patotipo:
      "Incluye patotipos entéricos (EPEC, ETEC, EHEC, EIEC) y uropatógenos (UPEC) según factores de virulencia.",
    mecanismoPatogenicidad:
      "Adhesión mediante fimbrias, producción de toxinas (enterotoxinas, shiga-toxina) e invasión de mucosa según el patotipo.",
    agaresIds: ["macconkey-agar", "emb-agar", "mueller-hinton-agar"],
    caldosIds: ["caldo-lactosado", "caldo-broth-nutriente"],
    pruebasIds: ["tsi", "sim", "citrato-simmons", "ureasa"],
    antibioticosIds: [
      "enrofloxacina",
      "amoxicilina-clavulanato",
      "gentamicina",
      "oxitetraciclina",
      "ceftiofur"
    ],
    notasLab:
      "En agar MacConkey produce colonias rosadas (fermenta lactosa). En TSI suele ser ácido/ácido con gas, sin H₂S."
  },
  {
    id: "salmonella-enterica",
    nombreCientifico: "Salmonella enterica",
    gramKey: "gramnegativo",
    gramTexto: "Gram negativo",
    morfologiaKey: "bacilo",
    familia: "Enterobacteriaceae",
    sistemasClave: ["digestivo", "sistemico"],
    reservorio:
      "Intestino de aves, reptiles y mamíferos; frecuente en alimentos de origen animal contaminados.",
    importancia:
      "Causa gastroenteritis, septicemias y abortos en distintas especies; relevante también en salud pública.",
    patotipo: "Numerosos serovares con diferente tropismo hospedero.",
    mecanismoPatogenicidad:
      "Invasión de enterocitos y placas de Peyer; supervivencia intracelular en macrófagos.",
    agaresIds: [
      "bismuth-sulphite-agar",
      "xld-agar",
      "ss-agar",
      "mueller-hinton-agar"
    ],
    caldosIds: ["caldo-selenito", "caldo-tetrationato"],
    pruebasIds: ["tsi", "lia", "ureasa", "citrato-simmons"],
    antibioticosIds: ["enrofloxacina", "oxitetraciclina", "ceftiofur"],
    notasLab:
      "Colonias negras en medios con indicadores de H₂S (TSI, XLD, SS). Siempre confirmar con pruebas bioquímicas completas y, si procede, serotipificación."
  },
  {
    id: "salmonella-spp",
    nombreCientifico: "Salmonella spp.",
    gramKey: "gramnegativo",
    gramTexto: "Gram negativo",
    morfologiaKey: "bacilo",
    familia: "Enterobacteriaceae",
    sistemasClave: ["digestivo", "sistemico"],
    reservorio: "Enterotrópica en múltiples especies domésticas y silvestres.",
    importancia:
      "Agrupa serovares zoonóticos y adaptados a especie; cuadros entéricos, septicémicos y reproductivos.",
    patotipo: "",
    mecanismoPatogenicidad:
      "Invasión intestinal, translocación y diseminación sistémica.",
    agaresIds: [
      "bismuth-sulphite-agar",
      "xld-agar",
      "ss-agar",
      "mueller-hinton-agar"
    ],
    caldosIds: ["caldo-selenito"],
    pruebasIds: ["tsi", "lia", "ureasa", "citrato-simmons"],
    antibioticosIds: ["enrofloxacina", "oxitetraciclina", "ceftiofur"],
    notasLab:
      "Tratamiento antibiótico se valora caso a caso por riesgo de portadores crónicos y presión de selección."
  },
  {
    id: "staphylococcus-spp",
    nombreCientifico: "Staphylococcus spp.",
    gramKey: "grampositivo",
    gramTexto: "Gram positivo",
    morfologiaKey: "coco",
    familia: "Staphylococcaceae",
    sistemasClave: ["piel", "sistemico"],
    reservorio:
      "Piel y mucosas de animales domésticos; algunos especies son comensales, otros patógenos.",
    importancia:
      "Causa dermatitis, otitis, infecciones de heridas y mastitis; algunos presentan resistencia a múltiples fármacos.",
    patotipo:
      "Incluye el grupo <em>Staphylococcus intermedius</em> en perros y <em>S. aureus</em> en bovinos.",
    mecanismoPatogenicidad:
      "Producción de enzimas (coagulasa, hemolisinas) y toxinas; formación de biopelículas.",
    agaresIds: ["agar-sangre", "manitol-sal-agar", "mueller-hinton-agar"],
    caldosIds: ["caldo-nutriente"],
    pruebasIds: ["coagulasa", "catalasa"],
    antibioticosIds: ["amoxicilina-clavulanato", "ceftiofur", "enrofloxacina"],
    notasLab:
      "Valorar producción de β-lactamasa. En manitol salado, algunas cepas fermentan manitol (colonias amarillas)."
  },
  {
    id: "pasteurella-multocida",
    nombreCientifico: "Pasteurella multocida",
    gramKey: "gramnegativo",
    gramTexto: "Gram negativo",
    morfologiaKey: "bacilo",
    familia: "Pasteurellaceae",
    sistemasClave: ["respiratorio", "sistemico"],
    reservorio:
      "Vías respiratorias de animales domésticos; también en cavidad bucal de perros y gatos.",
    importancia:
      "Agente de neumonías, rinitis atrófica en porcinos y septicemias; infecciones de mordedura en humanos.",
    patotipo: "",
    mecanismoPatogenicidad:
      "Cápsula y toxinas que dañan epitelio respiratorio y hueso nasal.",
    agaresIds: ["agar-sangre", "chocolate-agar"],
    caldosIds: ["caldo-bhi"],
    pruebasIds: ["oxidasa", "indol"],
    antibioticosIds: ["oxitetraciclina", "ceftiofur", "enrofloxacina"],
    notasLab:
      "Requiere atmósfera enriquecida con CO₂ en algunos casos. Colonias pequeñas, lisas, grisáceas en agar sangre."
  },
  {
    id: "pseudomonas-aeruginosa",
    nombreCientifico: "Pseudomonas aeruginosa",
    gramKey: "gramnegativo",
    gramTexto: "Gram negativo",
    morfologiaKey: "bacilo",
    familia: "Pseudomonadaceae",
    sistemasClave: ["respiratorio", "urinario", "piel"],
    reservorio:
      "Ambiente (agua, suelos húmedos) y superficies hospitalarias; coloniza heridas y mucosas.",
    importancia:
      "Oportunista multirresistente en infecciones de heridas, otitis, urinarias y respiratorias.",
    patotipo: "",
    mecanismoPatogenicidad:
      "Biofilm, múltiples bombas de expulsión y producción de pigmentos (piocianina) y toxinas.",
    agaresIds: ["agar-sangre", "cetrimide-agar", "mueller-hinton-agar"],
    caldosIds: ["caldo-bhi"],
    pruebasIds: ["oxidasa", "tsi", "citrato-simmons"],
    antibioticosIds: ["gentamicina", "enrofloxacina"],
    notasLab:
      "Olor característico y pigmentación verdosa/azulada; frecuente resistencia a múltiples β-lactámicos."
  }
];

// 2) INICIALIZACIÓN DE LA UI

document.addEventListener("DOMContentLoaded", () => {
  initMicroorganismosUI();
});

function initMicroorganismosUI() {
  const contenedor = document.getElementById("microorgCards");
  if (!contenedor) return; // Si aún no existe el HTML, no hacemos nada.

  const searchInput = document.getElementById("searchMicroorg");
  const filtroGram = document.getElementById("filtroGramMicroorg");
  const filtroMorf = document.getElementById("filtroMorfologiaMicroorg");
  const filtroSistema = document.getElementById("filtroSistemaMicroorg");

  const filtros = {
    texto: "",
    gramKey: "",
    morfoKey: "",
    sistemaKey: ""
  };

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      filtros.texto = e.target.value.toLowerCase();
      renderMicroorganismos(contenedor, filtros);
    });
  }

  if (filtroGram) {
    filtroGram.addEventListener("change", (e) => {
      filtros.gramKey = e.target.value;
      renderMicroorganismos(contenedor, filtros);
    });
  }

  if (filtroMorf) {
    filtroMorf.addEventListener("change", (e) => {
      filtros.morfoKey = e.target.value;
      renderMicroorganismos(contenedor, filtros);
    });
  }

  if (filtroSistema) {
    filtroSistema.addEventListener("change", (e) => {
      filtros.sistemaKey = e.target.value;
      renderMicroorganismos(contenedor, filtros);
    });
  }

  // Render inicial
  renderMicroorganismos(contenedor, filtros);
}

// 3) RENDER DE TARJETAS

function renderMicroorganismos(contenedor, filtros) {
  contenedor.innerHTML = "";

  const filtrados = microorganismos.filter((m) => {
    // Filtro de texto libre
    if (filtros.texto) {
      const blob =
        (m.nombreCientifico +
          " " +
          m.familia +
          " " +
          m.importancia +
          " " +
          m.reservorio +
          " " +
          (m.patotipo || "")).toLowerCase();

      if (!blob.includes(filtros.texto)) return false;
    }

    // Filtro por Gram
    if (filtros.gramKey && m.gramKey !== filtros.gramKey) {
      return false;
    }

    // Filtro por morfología
    if (filtros.morfoKey && m.morfologiaKey !== filtros.morfoKey) {
      return false;
    }

    // Filtro por sistema
    if (
      filtros.sistemaKey &&
      !m.sistemasClave.includes(filtros.sistemaKey)
    ) {
      return false;
    }

    return true;
  });

  if (!filtrados.length) {
    const vacio = document.createElement("p");
    vacio.className = "cards-empty";
    vacio.textContent =
      "No hay microorganismos que coincidan con los filtros aplicados.";
    contenedor.appendChild(vacio);
    return;
  }

  filtrados.forEach((m) => {
    const card = document.createElement("article");
    card.className = `card card-microorg card-microorg-${m.gramKey}`;

    // Encabezado: nombre científico (cursiva)
    const header = document.createElement("header");
    header.className = "card-header";

    const title = document.createElement("h3");
    title.className = "card-title";
    title.innerHTML = italicizeSpecies(m.nombreCientifico);

    const gramBadge = document.createElement("span");
    gramBadge.className = "pill pill-gram";
    gramBadge.textContent = m.gramTexto;

    header.appendChild(title);
    header.appendChild(gramBadge);

    // Subtítulo: morfología + familia
    const subtitulo = document.createElement("p");
    subtitulo.className = "card-subtitle";
    subtitulo.textContent = `${capitalizar(
      m.morfologiaKey
    )} • Familia ${m.familia}`;

    // Sistemas afectado en chips
    const sistemasRow = document.createElement("div");
    sistemasRow.className = "card-sistemas";

    m.sistemasClave.forEach((s) => {
      const chip = document.createElement("span");
      chip.className = "pill pill-sistema";
      chip.textContent = etiquetaSistema(s);
      sistemasRow.appendChild(chip);
    });

    // Body con info clínica/lab
    const body = document.createElement("div");
    body.className = "card-body";

    const pReservorio = document.createElement("p");
    pReservorio.innerHTML = `<strong>Reservorio:</strong> ${m.reservorio}`;

    const pImportancia = document.createElement("p");
    pImportancia.innerHTML = `<strong>Importancia clínica:</strong> ${m.importancia}`;

    if (m.patotipo) {
      const pPatotipo = document.createElement("p");
      pPatotipo.innerHTML = `<strong>Patotipos / variantes:</strong> ${m.patotipo}`;
      body.appendChild(pPatotipo);
    }

    const pMecanismo = document.createElement("p");
    pMecanismo.innerHTML = `<strong>Mecanismo de patogenicidad:</strong> ${m.mecanismoPatogenicidad}`;

    const pNotas = document.createElement("p");
    pNotas.className = "card-notas";
    pNotas.innerHTML = `<strong>Notas de laboratorio:</strong> ${m.notasLab}`;

    body.appendChild(pReservorio);
    body.appendChild(pImportancia);
    body.appendChild(pMecanismo);
    body.appendChild(pNotas);

    // Footer con botones de interconexión
    const footer = document.createElement("div");
    footer.className = "card-footer card-footer-actions";

    const btnAgares = document.createElement("button");
    btnAgares.type = "button";
    btnAgares.className = "btn btn-apple-secondary";
    btnAgares.textContent = "Ver agares / caldos";
    btnAgares.dataset.agaresIds = (m.agaresIds || []).join(",");
    btnAgares.dataset.caldosIds = (m.caldosIds || []).join(",");

    const btnPruebas = document.createElement("button");
    btnPruebas.type = "button";
    btnPruebas.className = "btn btn-apple-secondary";
    btnPruebas.textContent = "Ver pruebas clave";
    btnPruebas.dataset.pruebasIds = (m.pruebasIds || []).join(",");

    const btnAntibios = document.createElement("button");
    btnAntibios.type = "button";
    btnAntibios.className = "btn btn-apple";
    btnAntibios.textContent = "Ver antibióticos útiles";
    btnAntibios.dataset.antibioticosIds = (m.antibioticosIds || []).join(",");

    const btnPasaporte = document.createElement("button");
    btnPasaporte.type = "button";
    btnPasaporte.className = "btn btn-apple-light";
    btnPasaporte.textContent = "Pasaporte del microorganismo";

    btnPasaporte.addEventListener("click", () => {
      imprimirPasaporteMicroorganismo(m);
    });

    

    btnAgares.addEventListener("click", () => {
      if (window.SuiteVet && window.SuiteVet.microNav) {
        window.SuiteVet.microNav.irAgaresPorMicroorganismo(m);
      }
    });

    btnPruebas.addEventListener("click", () => {
      if (window.SuiteVet && window.SuiteVet.microNav) {
        window.SuiteVet.microNav.irPruebasPorMicroorganismo(m);
      }
    });

    btnAntibios.addEventListener("click", () => {
      if (window.SuiteVet && window.SuiteVet.microNav) {
        window.SuiteVet.microNav.irAntibiosPorMicroorganismo(m);
      }
    });


    footer.appendChild(btnAgares);
    footer.appendChild(btnPruebas);
    footer.appendChild(btnAntibios);
    footer.appendChild(btnPasaporte);


    // Ensamblar tarjeta
    card.appendChild(header);
    card.appendChild(subtitulo);
    card.appendChild(sistemasRow);
    card.appendChild(body);
    card.appendChild(footer);

    contenedor.appendChild(card);
  });
}

// 4) HELPERS

// Poner en cursiva nombres tipo "Escherichia coli"
function italicizeSpecies(texto) {
  if (!texto) return "";
  // Si ya viene con <em>, devolvemos tal cual
  if (texto.includes("<em>")) return texto;
  return `<em>${texto}</em>`;
}

function capitalizar(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function etiquetaSistema(key) {
  switch (key) {
    case "digestivo":
      return "Digestivo";
    case "urinario":
      return "Urinario";
    case "respiratorio":
      return "Respiratorio";
    case "sistemico":
      return "Sistémico";
    case "piel":
      return "Piel / tegumentario";
    default:
      return capitalizar(key);
  }
}

// PASAPORTE DEL MICROORGANISMO (impresión PDF)
function imprimirPasaporteMicroorganismo(m) {
  const contPrint = document.getElementById("printPrep");
  if (!contPrint || !m) return;

  // Sistemas afectados en texto legible
  const sistemas = (m.sistemasClave || [])
    .map((s) => etiquetaSistema(s))
    .join(", ") || "—";

  const formatearId = (id) =>
    id
      .replace(/-/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const agares = (m.agaresIds || []).length
    ? m.agaresIds.map(formatearId).join(", ")
    : "—";

  const caldos = (m.caldosIds || []).length
    ? m.caldosIds.map(formatearId).join(", ")
    : "—";

  const pruebas = (m.pruebasIds || []).length
    ? m.pruebasIds.map(formatearId).join(", ")
    : "—";

  const antibios = (m.antibioticosIds || []).length
    ? m.antibioticosIds.map(formatearId).join(", ")
    : "—";

  contPrint.innerHTML = `
    <div class="pasaporte pasaporte-micro">
      <header class="pasaporte-header">
        <div>
          <h2>Pasaporte del microorganismo</h2>
          <p>SUITE VET • Módulo de Microbiología</p>
        </div>
        <div class="pasaporte-meta">
          <p><strong>Gram:</strong> ${m.gramTexto || "—"}</p>
          <p><strong>Morfología:</strong> ${capitalizar(m.morfologiaKey || "")}</p>
        </div>
      </header>

      <p style="font-size:9pt; margin: 0 0 6px 0;">
        <strong>Laboratorio:</strong> ________________________
        &nbsp;&nbsp; <strong>Fecha:</strong> ____ / ____ / ______
        &nbsp;&nbsp; <strong>Estudiante:</strong> ________________________
      </p>

      <section class="pasaporte-main">
        <div class="pasaporte-col pasaporte-identidad">
          <h3>Identidad</h3>
          <p><strong>Nombre científico:</strong> <em>${m.nombreCientifico}</em></p>
          <p><strong>Familia:</strong> ${m.familia || "—"}</p>
          <p><strong>Sistemas afectados:</strong> ${sistemas}</p>
          <p><strong>Reservorio:</strong> ${m.reservorio || "—"}</p>
          <p><strong>Importancia clínica:</strong> ${m.importancia || "—"}</p>
          <p><strong>Patotipo / serovar relevante:</strong> ${m.patotipo || "—"}</p>
          <p><strong>Mecanismo de patogenicidad:</strong> ${
            m.mecanismoPatogenicidad || "—"
          }</p>
        </div>

        <div class="pasaporte-col pasaporte-foto">
          <h3>Imágenes de referencia</h3>
          <div class="foto-placeholder">
            <span>Colonia en agar (foto no añadida aún)</span>
          </div>
          <div class="foto-placeholder">
            <span>Tinción de Gram (foto no añadida aún)</span>
          </div>
          <p class="foto-nota">
            Adjunta aquí las fotografías reales de la colonia y de la tinción de Gram
            obtenidas en tu práctica de laboratorio.
          </p>
        </div>
      </section>

      <section class="pasaporte-extra">
        <div class="pasaporte-col">
          <h3>Cultivo y pruebas</h3>
          <p><strong>Agar(es) recomendados:</strong> ${agares}</p>
          <p><strong>Caldos de enriquecimiento:</strong> ${caldos}</p>
          <p><strong>Pruebas bioquímicas clave:</strong> ${pruebas}</p>
          <p><strong>Antibióticos de elección (discos):</strong> ${antibios}</p>
          <p><strong>Notas de laboratorio:</strong> ${m.notasLab || "—"}</p>
        </div>

        <div class="pasaporte-col">
          <h3>Zoonosis y notas clínicas</h3>
          <p><strong>Zoonosis / riesgo para humanos:</strong> ____________________________</p>
          <p><strong>Cuadro clínico típico:</strong> _________________________________</p>
          <p><strong>Especie / paciente:</strong> _____________________________________</p>
          <p><strong>Observaciones del caso:</strong> ________________________________</p>
        </div>
      </section>
    </div>
  `;

  window.print();
}
