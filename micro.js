// micro.js
// Datos base de microbiología: agares, caldos y pruebas bioquímicas.

// AGARES (medios sólidos para placas)
// AGARES (medios sólidos para placas)
const mediosAgar = [
  {
    id: 'chromogenic-vibrio',
    nombre: 'Chromogenic Vibrio Agar',
    marca: 'TM Media',
    estado: 'solido', // agar
    tipos: ['selectivo', 'diferencial', 'cromogenico'],
    gramosPorLitro: 67.5,
    phFinal: '8.5 ± 0.2 (25 °C)',
    presentacion: 'Frasco 500 g',
    objetivo:
      'Aislamiento selectivo y diferenciación de especies de Vibrio (V. parahaemolyticus, V. vulnificus, V. cholerae, etc.).',
    composicion: [
      { componente: 'Sodium chloride', gL: 25.0 },
      { componente: 'Agar', gL: 15.0 },
      { componente: 'Peptic digest of animal tissue', gL: 10.0 },
      { componente: 'Sodium citrate', gL: 6.0 },
      { componente: 'Chromogenic mixture', gL: 5.5 },
      { componente: 'Sodium thiosulphate', gL: 5.0 },
      { componente: 'Sodium cholate', gL: 1.0 }
    ],
    almacenamiento:
      'Polvo deshidratado higroscópico. Conservar entre 2–8 °C, bien cerrado y protegido de la luz.',
    certificaciones: 'ISO 11133:2014 · ISO 9001:2015 · ISO 13485:2016 · IVD · GMP.',
    observaciones:
      'No autoclavar ni sobrecalentar. Enfriar a 45–50 °C antes de verter en placas estériles.'
  },
  {
    id: 'nutrient-agar',
    nombre: 'Nutrient Agar',
    marca: 'TM Media',
    estado: 'solido',
    tipos: ['basico'],
    gramosPorLitro: 28.0,
    phFinal: '7.4 ± 0.2 (25 °C)',
    presentacion: 'Frasco 500 g',
    objetivo:
      'Cultivo general y mantenimiento de microorganismos no exigentes; base para medios enriquecidos con sangre o suero.',
    composicion: [
      { componente: 'Agar', gL: 15.0 },
      { componente: 'Sodium chloride', gL: 5.0 },
      { componente: 'Peptone', gL: 5.0 },
      { componente: 'Yeast extract', gL: 1.5 },
      { componente: 'Beef extract', gL: 1.5 }
    ],
    almacenamiento:
      'Conservar el polvo deshidratado en lugar seco, bien cerrado, por debajo de 25 °C y protegido de la luz.',
    certificaciones: '',
    observaciones:
      'Puede enriquecerse con 5–10 % de sangre u otros fluidos biológicos para cultivar microorganismos más exigentes.'
  },
  {
    id: 'mannitol-salt-agar',
    nombre: 'Mannitol Salt Agar Base',
    marca: 'TM Media',
    estado: 'solido',
    tipos: ['selectivo', 'diferencial'],
    gramosPorLitro: 111.0,
    phFinal: '7.4 ± 0.2 (25 °C)',
    presentacion: 'Frasco 500 g',
    objetivo:
      'Aislamiento selectivo y diferenciación de estafilococos, especialmente Staphylococcus aureus, por fermentación de manitol y tolerancia a alta sal.',
    composicion: [
      { componente: 'Sodium chloride', gL: 75.0 },
      { componente: 'Agar', gL: 15.0 },
      { componente: 'Proteose peptone', gL: 10.0 },
      { componente: 'D-Mannitol', gL: 10.0 },
      { componente: 'Peptone', gL: 1.0 },
      { componente: 'Phenol red', gL: 0.025 }
    ],
    almacenamiento:
      'Polvo deshidratado higroscópico. Conservar en lugar seco, en envase bien cerrado, entre 10–25 °C y protegido de la luz.',
    certificaciones: '',
    observaciones:
      'La alta concentración de NaCl inhibe la mayoría de bacterias distintas de estafilococos. El viraje a amarillo indica fermentación de manitol.'
  },
  {
    id: 'potato-dextrose-agar',
    nombre: 'Potato Dextrose Agar',
    marca: 'TM Media',
    estado: 'solido',
    tipos: ['basico'],
    gramosPorLitro: 39.0,
    phFinal: '5.6 ± 0.2 (25 °C)',
    presentacion: 'Frasco 500 g',
    objetivo:
      'Aislamiento, recuento y mantenimiento de levaduras y mohos a partir de alimentos y otros materiales.',
    composicion: [
      { componente: 'Potato extract', gL: 4.0 },
      { componente: 'Dextrose', gL: 20.0 },
      { componente: 'Agar', gL: 15.0 }
    ],
    almacenamiento:
      'Conservar el polvo deshidratado entre 10–25 °C, bien cerrado y protegido de la luz (higroscópico).',
    certificaciones: '',
    observaciones:
      'Para recuentos de hongos suele acidificarse hasta pH ≈ 3.5 con ácido láctico o tartárico estéril después de la esterilización.'
  },
  {
    id: 'mueller-hinton-agar',
    nombre: 'Mueller Hinton Agar',
    marca: 'TM Media',
    estado: 'solido',
    tipos: ['basico'],
    gramosPorLitro: 38.0,
    phFinal: '7.3 ± 0.2 (25 °C)',
    presentacion: 'Frasco 500 g',
    objetivo:
      'Medio estándar para pruebas de sensibilidad a antimicrobianos (método de difusión en disco) y cultivo de bacterias no exigentes.',
    composicion: [
      { componente: 'Casein acid hydrolysate', gL: 17.5 },
      { componente: 'Agar', gL: 17.0 },
      { componente: 'Beef infusion from 300 g', gL: 2.0 },
      { componente: 'Starch', gL: 1.5 }
    ],
    almacenamiento:
      'Polvo deshidratado higroscópico. Conservar en lugar seco, en envase bien cerrado, por debajo de 25 °C y protegido de la luz.',
    certificaciones: '',
    observaciones:
      'Seguir las recomendaciones CLSI/WHO para la profundidad del agar (4 ± 0.5 mm), inóculo y lectura de halos en pruebas de sensibilidad.'
  }
];


// CALDOS (medios líquidos)
const mediosCaldo = [
  {
    id: 'caldo-nutriente',
    nombre: 'Caldo Nutriente',
    marca: 'Genérico',
    estado: 'liquido', // caldo
    tipos: ['basico'],
    gramosPorLitro: 13.0,
    phFinal: '7.4 ± 0.2 (25 °C)',
    presentacion: 'Frasco 500 g',
    objetivo: 'Caldo general para cultivo de bacterias no exigentes.',
    composicion: [],
    almacenamiento:
      'Conservar en lugar fresco y seco, envase bien cerrado.',
    certificaciones: '',
    observaciones:
      'Caldo estándar para mantener o multiplicar bacterias poco exigentes.'
  }
];

// PRUEBAS BIOQUÍMICAS (TSI, Citrato, LIA)
const pruebasBioquimicas = [
  {
    id: 'tsi',
    nombre: 'TSI (Triple Sugar Iron Agar)',
    sigla: 'TSI',
    categoria: 'fermentacion',
    tipo: 'Diferencial',
    gramosPorLitro: null, // la llenaremos con la marca que uses
    phFinal: null,
    presentacion: '',
    finalidad:
      'Evalúa fermentación de glucosa, lactosa/sacarosa, producción de gas y de H₂S en bacilos Gram negativos entéricos.',
    medioBase: 'Agar TSI en tubo inclinado con fondo profundo.',
    coloresClave:
      'Pico rojo/amarillo, fondo rojo/amarillo, zonas negras por H₂S, burbujas o grietas por gas.',
    interpretacionResumida:
      'Ejemplo clásico: Salmonella suele dar pico rojo / fondo amarillo con ennegrecimiento por H₂S.',
    detalles:
      'Contiene tres azúcares (glucosa, lactosa y sacarosa) y fuente de hierro. El cambio de color se debe a la producción de ácido (amarillo) o la alcalinización (rojo). La producción de H₂S se observa como precipitado negro.',
    almacenamiento:
      'Conservar el deshidratado en lugar fresco y seco. Preparar y esterilizar según fabricante.',
    certificaciones: '',
    observaciones:
      'Interpretar siempre junto al cuadro de reacciones bioquímicas de enterobacterias.'
  },
  {
    id: 'citrato-simmons',
    nombre: 'Citrato de Simmons',
    sigla: 'Citrato',
    categoria: 'citrato',
    tipo: 'Diferencial',
    gramosPorLitro: null,
    phFinal: null,
    presentacion: '',
    finalidad:
      'Detecta la capacidad de una bacteria para utilizar el citrato como única fuente de carbono.',
    medioBase: 'Medio Citrato de Simmons en tubo inclinado.',
    coloresClave:
      'Verde (negativo) → azul intenso (positivo).',
    interpretacionResumida:
      'Enterobacter y Klebsiella suelen ser positivos; Escherichia coli suele ser negativa.',
    detalles:
      'El medio contiene citrato de sodio, sales de amonio y azul de bromotimol como indicador. El uso de citrato alcaliniza el medio provocando el viraje a azul.',
    almacenamiento:
      'Conservar el deshidratado en lugar fresco y seco. Preparar y esterilizar según fabricante.',
    certificaciones: '',
    observaciones:
      'No sembrar demasiado cargado; un inóculo muy denso puede dar falsos positivos.'
  },
  {
    id: 'lia',
    nombre: 'LIA (Lysine Iron Agar)',
    sigla: 'LIA',
    categoria: 'lisina',
    tipo: 'Diferencial',
    gramosPorLitro: null,
    phFinal: null,
    presentacion: '',
    finalidad:
      'Evalúa descarboxilación de lisina y producción de H₂S en bacilos Gram negativos entéricos.',
    medioBase: 'Lysine Iron Agar en tubo inclinado con fondo profundo.',
    coloresClave:
      'Morado/púrpura vs. amarillo en fondo y pico; ennegrecimiento por H₂S.',
    interpretacionResumida:
      'Permite diferenciar Salmonella spp. entre sí y frente a otras enterobacterias según descarboxilación de lisina y H₂S.',
    detalles:
      'Contiene lisina, glucosa, tiosulfato y un indicador de pH. La descarboxilación de lisina regenera el color púrpura en el fondo tras fermentación inicial de glucosa.',
    almacenamiento:
      'Conservar el deshidratado en lugar fresco y seco. Preparar y esterilizar según fabricante.',
    certificaciones: '',
    observaciones:
      'La lectura debe hacerse en el tiempo indicado; lecturas tardías pueden confundir la interpretación.'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const printArea = document.getElementById('printPrep');
  const microTabs = document.querySelectorAll('.micro-tab');
  const microPanes = document.querySelectorAll('.micro-pane');

  // --- AGARES ---
  const contAgares = document.getElementById('agarCards');
  const inputBuscarAgar = document.getElementById('searchMedio');
  const selectTipoAgar = document.getElementById('filtroTipoMedio');

  const selectCalcAgar = document.getElementById('calcMedio');
  const selectTamPlaca = document.getElementById('tamPlaca');
  const inputNumPlacas = document.getElementById('numPlacas');
  const btnCalcularAgar = document.getElementById('btnCalcularMedio');
  const btnImprimirAgar = document.getElementById('btnImprimirPreparacion');
  const divResultadoAgar = document.getElementById('resultadoCalcMedio');

  // --- CALDOS ---
  const contCaldos = document.getElementById('caldoCards');
  const inputBuscarCaldo = document.getElementById('searchCaldo');
  const selectTipoCaldo = document.getElementById('filtroTipoCaldo');

  const selectCalcCaldo = document.getElementById('calcCaldoMedio');
  const inputVolCaldo = document.getElementById('volCaldoTotal');
  const btnCalcularCaldo = document.getElementById('btnCalcularCaldo');
  const btnImprimirCaldo = document.getElementById('btnImprimirCaldo');
  const divResultadoCaldo = document.getElementById('resultadoCalcCaldo');

  // --- PRUEBAS BIOQUÍMICAS ---
  const contPruebas = document.getElementById('pruebasCards');
  const inputBuscarPrueba = document.getElementById('searchPrueba');
  const selectTipoPrueba = document.getElementById('filtroTipoPrueba');

  const selectCalcPrueba = document.getElementById('calcPruebaMedio');
  const inputVolPrueba = document.getElementById('volPruebaTotal');
  const btnCalcularPrueba = document.getElementById('btnCalcularPrueba');
  const btnImprimirPrueba = document.getElementById('btnImprimirPrueba');
  const divResultadoPrueba = document.getElementById('resultadoCalcPrueba');

  // Estado de la última preparación calculada
  let ultimaPreparacionAgar = null;
  let ultimaPreparacionCaldo = null;
  let ultimaPreparacionPrueba = null;

  // ===== Utilidades =====

  function normalizar(texto) {
    return (texto || '').toString().toLowerCase();
  }

  function etiquetaTipoMedio(tipo) {
    switch (tipo) {
      case 'selectivo':
        return 'Selectivo';
      case 'diferencial':
        return 'Diferencial';
      case 'enriquecido':
        return 'Enriquecido';
      case 'cromogenico':
        return 'Cromogénico';
      case 'transporte':
        return 'Transporte';
      case 'basico':
        return 'Básico';
      default:
        return tipo.charAt(0).toUpperCase() + tipo.slice(1);
    }
  }

  function claseEstadoMedio(estado) {
    return estado === 'liquido' ? 'card-medio-liquido' : 'card-medio-solido';
  }

  // ===== Render de tarjetas de medios (Agares + Caldos) =====

  function medioCardHTML(medio, etiqueta) {
    const tiposHtml = (medio.tipos || [])
      .map(
        (t) =>
          `<span class="badge-tipo">${etiquetaTipoMedio(t)}</span>`
      )
      .join('');

    const detalleComposicion =
      medio.composicion && medio.composicion.length
        ? `<h4>Composición (g/L)</h4>
           <ul>
             ${medio.composicion
               .map(
                 (c) =>
                   `<li>${c.componente} – ${c.gL}</li>`
               )
               .join('')}
           </ul>`
        : '';

    const detalleAlmacenamiento = medio.almacenamiento
      ? `<h4>Almacenamiento</h4><p>${medio.almacenamiento}</p>`
      : '';

    const detalleCertificaciones = medio.certificaciones
      ? `<h4>Certificaciones</h4><p>${medio.certificaciones}</p>`
      : '';

    const detalleObservaciones = medio.observaciones
      ? `<h4>Observaciones</h4><p>${medio.observaciones}</p>`
      : '';

    return `
      <article class="card-agar ${claseEstadoMedio(medio.estado)}">
        <header class="card-agar-header">
          <div>
            <h3 class="card-agar-nombre">${medio.nombre}</h3>
            <p class="card-agar-marca">${medio.marca}</p>
          </div>
          <span class="badge-medio">
            ${etiqueta}
          </span>
        </header>

        <div class="card-agar-tags">
          ${tiposHtml}
        </div>

        <div class="card-agar-main">
          <div>
            <div class="agar-item-label">Dosis estándar</div>
            <div class="agar-item-value">
              ${medio.gramosPorLitro} g / L
            </div>
          </div>
          <div>
            <div class="agar-item-label">pH final</div>
            <div class="agar-item-value">
              ${medio.phFinal || '—'}
            </div>
          </div>
          <div>
            <div class="agar-item-label">Uso principal</div>
            <div class="agar-item-value">
              ${medio.objetivo || '—'}
            </div>
          </div>
        </div>

        <div class="agar-footer-buttons">
          <button
            type="button"
            class="btn-ficha"
            data-id="${medio.id}"
          >
            Ficha técnica
          </button>
          <button
            type="button"
            class="btn-calcular-agar"
            data-id="${medio.id}"
          >
            Calcular medio
          </button>
        </div>

        <div
          class="card-agar-detalles"
          id="detalles-${medio.id}"
        >
          ${detalleComposicion}
          ${detalleAlmacenamiento}
          ${detalleCertificaciones}
          ${detalleObservaciones}
        </div>
      </article>
    `;
  }

  function renderMediosAgar() {
    if (!contAgares) return;

    const texto = normalizar(inputBuscarAgar ? inputBuscarAgar.value : '');
    const tipo = selectTipoAgar ? selectTipoAgar.value : '';

    const filtrados = mediosAgar.filter((medio) => {
      if (tipo && !medio.tipos.includes(tipo)) return false;

      if (!texto) return true;

      const campo = [
        medio.nombre,
        medio.marca,
        medio.objetivo,
        medio.tipos.join(' ')
      ]
        .join(' ')
        .toLowerCase();

      return campo.includes(texto);
    });

    if (!filtrados.length) {
      contAgares.innerHTML =
        '<p class="micro-empty">No se encontraron agares con esos filtros.</p>';
      return;
    }

    contAgares.innerHTML = filtrados
      .map((medio) => medioCardHTML(medio, 'Agar'))
      .join('');
  }

  function renderMediosCaldo() {
    if (!contCaldos) return;

    const texto = normalizar(inputBuscarCaldo ? inputBuscarCaldo.value : '');
    const tipo = selectTipoCaldo ? selectTipoCaldo.value : '';

    const filtrados = mediosCaldo.filter((medio) => {
      if (tipo && !medio.tipos.includes(tipo)) return false;

      if (!texto) return true;

      const campo = [
        medio.nombre,
        medio.marca,
        medio.objetivo,
        medio.tipos.join(' ')
      ]
        .join(' ')
        .toLowerCase();

      return campo.includes(texto);
    });

    if (!filtrados.length) {
      contCaldos.innerHTML =
        '<p class="micro-empty">No se encontraron caldos con esos filtros.</p>';
      return;
    }

    contCaldos.innerHTML = filtrados
      .map((medio) => medioCardHTML(medio, 'Caldo'))
      .join('');
  }

  // ===== Tarjetas de pruebas bioquímicas =====

  function renderPruebas() {
    if (!contPruebas) return;

    const texto = normalizar(inputBuscarPrueba ? inputBuscarPrueba.value : '');
    const tipo = selectTipoPrueba ? selectTipoPrueba.value : '';

    const filtradas = pruebasBioquimicas.filter((p) => {
      if (tipo && p.categoria !== tipo) return false;

      if (!texto) return true;

      const campo = [
        p.nombre,
        p.sigla,
        p.finalidad,
        p.medioBase,
        p.coloresClave
      ]
        .join(' ')
        .toLowerCase();

      return campo.includes(texto);
    });

    if (!filtradas.length) {
      contPruebas.innerHTML =
        '<p class="micro-empty">No se encontraron pruebas con esos filtros.</p>';
      return;
    }

    contPruebas.innerHTML = filtradas
      .map((p) => {
        const dosisTexto = p.gramosPorLitro
          ? `${p.gramosPorLitro} g / L`
          : 'Dosis estándar pendiente (g/L)';

        return `
        <article class="card-agar card-prueba">
          <header class="card-agar-header">
            <div>
              <h3 class="card-agar-nombre">${p.nombre}</h3>
              <p class="card-agar-marca">Prueba bioquímica · ${p.sigla}</p>
            </div>
            <span class="badge-medio">
              Prueba
            </span>
          </header>

          <div class="card-agar-tags">
            <span class="badge-tipo">${p.tipo}</span>
          </div>

          <div class="card-agar-main">
            <div>
              <div class="agar-item-label">Finalidad</div>
              <div class="agar-item-value">
                ${p.finalidad}
              </div>
            </div>
            <div>
              <div class="agar-item-label">Medio</div>
              <div class="agar-item-value">
                ${p.medioBase}
              </div>
            </div>
            <div>
              <div class="agar-item-label">Dosis estándar</div>
              <div class="agar-item-value">
                ${dosisTexto}
              </div>
            </div>
          </div>

          <div class="agar-footer-buttons">
            <button
              type="button"
              class="btn-ficha-prueba"
              data-id="${p.id}"
            >
              Ficha técnica
            </button>
            <button
              type="button"
              class="btn-calcular-prueba"
              data-id="${p.id}"
            >
              Calcular medio
            </button>
          </div>

          <div
            class="card-agar-detalles"
            id="detalles-prueba-${p.id}"
          >
            <h4>Colores clave</h4>
            <p>${p.coloresClave}</p>

            <h4>Principio e interpretación resumida</h4>
            <p>${p.interpretacionResumida}</p>
            <p>${p.detalles}</p>

            ${
              p.observaciones
                ? `<h4>Observaciones</h4><p>${p.observaciones}</p>`
                : ''
            }
          </div>
        </article>
      `;
      })
      .join('');
  }

  // ===== Calculadora de agares (placas) =====

  function poblarSelectAgar() {
    if (!selectCalcAgar) return;
    selectCalcAgar.innerHTML = mediosAgar
      .map(
        (medio) =>
          `<option value="${medio.id}">${medio.nombre}</option>`
      )
      .join('');
  }

  function calcularAgar() {
    if (!selectCalcAgar || !divResultadoAgar) return;

    const id = selectCalcAgar.value;
    const medio = mediosAgar.find((m) => m.id === id);
    if (!medio) {
      divResultadoAgar.textContent =
        'Selecciona un agar válido en la calculadora.';
      return;
    }

    const gramosPorLitro = Number(medio.gramosPorLitro);
    if (!gramosPorLitro || Number.isNaN(gramosPorLitro)) {
      divResultadoAgar.textContent =
        'Este agar aún no tiene definida la dosis estándar (g/L).';
      return;
    }

    const mlPorPlaca = Number(selectTamPlaca ? selectTamPlaca.value : 25);
    const numPlacas = Number(inputNumPlacas ? inputNumPlacas.value : 0);

    if (!numPlacas || numPlacas <= 0) {
      divResultadoAgar.textContent =
        'Ingresa un número de placas mayor a cero.';
      return;
    }

    const volumenTotalMl = mlPorPlaca * numPlacas;
    const volumenLitros = volumenTotalMl / 1000;
    const gramosNecesarios = gramosPorLitro * volumenLitros;

    const volumenMostrar = volumenTotalMl.toFixed(0);
    const gramosMostrar = gramosNecesarios.toFixed(2);

    divResultadoAgar.innerHTML = `
      <p>
        Para preparar <strong>${volumenMostrar} mL</strong> de
        <strong>${medio.nombre}</strong> necesitas:
      </p>
      <ul>
        <li><strong>${gramosMostrar} g</strong> de medio en polvo.</li>
        <li><strong>${volumenMostrar} mL</strong> de agua destilada.</li>
      </ul>
      <p class="micro-calc-note">
        Placas: ${numPlacas} × ${mlPorPlaca} mL por placa.
        Ajusta pH, calentamiento y esterilización según la ficha técnica
        del fabricante.
      </p>
    `;

    ultimaPreparacionAgar = {
      medioId: medio.id,
      volumenMl: volumenTotalMl,
      gramos: gramosNecesarios,
      numPlacas,
      mlPorPlaca
    };

    if (btnImprimirAgar) btnImprimirAgar.disabled = false;
  }

  function imprimirAgar() {
    if (!ultimaPreparacionAgar || !printArea) {
      alert('Primero calcula una preparación de agar.');
      return;
    }

    const medio = mediosAgar.find((m) => m.id === ultimaPreparacionAgar.medioId);
    if (!medio) return;

    const fecha = new Date();
    const fechaStr = fecha.toLocaleDateString('es-EC', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const horaStr = fecha.toLocaleTimeString('es-EC', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const ml = ultimaPreparacionAgar.volumenMl.toFixed(0);
    const g = ultimaPreparacionAgar.gramos.toFixed(2);
    const tipoPrep = 'Placas (medio sólido)';
    const detallePlacas = `
      Placas: ${ultimaPreparacionAgar.numPlacas} × ${ultimaPreparacionAgar.mlPorPlaca} mL/placa.
    `;

    const compoHtml =
      medio.composicion && medio.composicion.length
        ? `<h3>Composición (g/L)</h3>
           <ul>
             ${medio.composicion
               .map(
                 (c) =>
                   `<li>${c.componente} – ${c.gL}</li>`
               )
               .join('')}
           </ul>`
        : '';

    const almacenamientoHtml = medio.almacenamiento
      ? `<h3>Almacenamiento</h3><p>${medio.almacenamiento}</p>`
      : '';

    const observacionesHtml = medio.observaciones
      ? `<h3>Observaciones</h3><p>${medio.observaciones}</p>`
      : '';

    const certificacionesHtml = medio.certificaciones
      ? `<h3>Certificaciones</h3><p>${medio.certificaciones}</p>`
      : '';

    printArea.innerHTML = `
      <section class="print-label">
        <h1>${medio.nombre}</h1>
        <p><strong>Tipo de preparación:</strong> ${tipoPrep}</p>
        <p><strong>Volumen preparado:</strong> ${ml} mL</p>
        <p><strong>Cantidad de medio en polvo:</strong> ${g} g</p>
        <p><strong>pH final (referencia):</strong> ${medio.phFinal || '—'}</p>
        <p>${detallePlacas}</p>
        <p><strong>Fecha:</strong> ${fechaStr} &nbsp;&nbsp; <strong>Hora:</strong> ${horaStr}</p>
        <p><strong>Preparado por:</strong> ______________________________</p>
      </section>

      <section class="print-info">
        <h2>Ficha de preparación para informe</h2>
        <p><strong>Medio:</strong> ${medio.nombre}</p>
        <p><strong>Marca:</strong> ${medio.marca}</p>
        <p><strong>Dosis estándar:</strong> ${medio.gramosPorLitro} g / L</p>
        <p><strong>Uso principal:</strong> ${medio.objetivo || '—'}</p>

        <h3>Instrucciones de preparación para este volumen</h3>
        <ol>
          <li>Pesar <strong>${g} g</strong> de ${medio.nombre} en polvo.</li>
          <li>Transferir a un matraz y añadir
              <strong>${ml} mL</strong> de agua destilada.</li>
          <li>Disolver completamente con agitación y calentamiento suave.</li>
          <li>Ajustar pH y esterilizar siguiendo la ficha técnica
              del fabricante.</li>
        </ol>

        ${compoHtml}
        ${almacenamientoHtml}
        ${certificacionesHtml}
        ${observacionesHtml}

        <h3>Notas de la práctica</h3>
        <p style="min-height: 30mm; border-top: 1px solid #000; margin-top: 3mm; padding-top: 2mm;"></p>
      </section>
    `;

    window.print();
  }

  // ===== Calculadora de caldos (volumen en mL) =====

  function poblarSelectCaldo() {
    if (!selectCalcCaldo) return;
    selectCalcCaldo.innerHTML = mediosCaldo
      .map(
        (medio) =>
          `<option value="${medio.id}">${medio.nombre}</option>`
      )
      .join('');
  }

  function calcularCaldo() {
    if (!selectCalcCaldo || !divResultadoCaldo) return;

    const id = selectCalcCaldo.value;
    const medio = mediosCaldo.find((m) => m.id === id);
    if (!medio) {
      divResultadoCaldo.textContent =
        'Selecciona un caldo válido en la calculadora.';
      return;
    }

    const gramosPorLitro = Number(medio.gramosPorLitro);
    if (!gramosPorLitro || Number.isNaN(gramosPorLitro)) {
      divResultadoCaldo.textContent =
        'Este caldo aún no tiene definida la dosis estándar (g/L).';
      return;
    }

    const volumenMl = Number(inputVolCaldo ? inputVolCaldo.value : 0);
    if (!volumenMl || volumenMl <= 0) {
      divResultadoCaldo.textContent =
        'Ingresa un volumen en mL mayor a cero.';
      return;
    }

    const volumenLitros = volumenMl / 1000;
    const gramosNecesarios = gramosPorLitro * volumenLitros;

    const gramosMostrar = gramosNecesarios.toFixed(2);
    const volumenMostrar = volumenMl.toFixed(0);

    divResultadoCaldo.innerHTML = `
      <p>
        Para preparar <strong>${volumenMostrar} mL</strong> de
        <strong>${medio.nombre}</strong> necesitas:
      </p>
      <ul>
        <li><strong>${gramosMostrar} g</strong> de medio en polvo.</li>
        <li><strong>${volumenMostrar} mL</strong> de agua destilada.</li>
      </ul>
      <p class="micro-calc-note">
        Ajusta pH, calentamiento y esterilización según la ficha técnica
        del fabricante.
      </p>
    `;

    ultimaPreparacionCaldo = {
      medioId: medio.id,
      volumenMl,
      gramos: gramosNecesarios
    };

    if (btnImprimirCaldo) btnImprimirCaldo.disabled = false;
  }

  function imprimirCaldo() {
    if (!ultimaPreparacionCaldo || !printArea) {
      alert('Primero calcula una preparación de caldo.');
      return;
    }

    const medio = mediosCaldo.find((m) => m.id === ultimaPreparacionCaldo.medioId);
    if (!medio) return;

    const fecha = new Date();
    const fechaStr = fecha.toLocaleDateString('es-EC', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const horaStr = fecha.toLocaleTimeString('es-EC', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const ml = ultimaPreparacionCaldo.volumenMl.toFixed(0);
    const g = ultimaPreparacionCaldo.gramos.toFixed(2);
    const tipoPrep = 'Caldo (medio líquido)';

    const compoHtml =
      medio.composicion && medio.composicion.length
        ? `<h3>Composición (g/L)</h3>
           <ul>
             ${medio.composicion
               .map(
                 (c) =>
                   `<li>${c.componente} – ${c.gL}</li>`
               )
               .join('')}
           </ul>`
        : '';

    const almacenamientoHtml = medio.almacenamiento
      ? `<h3>Almacenamiento</h3><p>${medio.almacenamiento}</p>`
      : '';

    const observacionesHtml = medio.observaciones
      ? `<h3>Observaciones</h3><p>${medio.observaciones}</p>`
      : '';

    const certificacionesHtml = medio.certificaciones
      ? `<h3>Certificaciones</h3><p>${medio.certificaciones}</p>`
      : '';

    printArea.innerHTML = `
      <section class="print-label">
        <h1>${medio.nombre}</h1>
        <p><strong>Tipo de preparación:</strong> ${tipoPrep}</p>
        <p><strong>Volumen preparado:</strong> ${ml} mL</p>
        <p><strong>Cantidad de medio en polvo:</strong> ${g} g</p>
        <p><strong>pH final (referencia):</strong> ${medio.phFinal || '—'}</p>
        <p><strong>Fecha:</strong> ${fechaStr} &nbsp;&nbsp; <strong>Hora:</strong> ${horaStr}</p>
        <p><strong>Preparado por:</strong> ______________________________</p>
      </section>

      <section class="print-info">
        <h2>Ficha de preparación para informe</h2>
        <p><strong>Medio:</strong> ${medio.nombre}</p>
        <p><strong>Marca:</strong> ${medio.marca}</p>
        <p><strong>Dosis estándar:</strong> ${medio.gramosPorLitro} g / L</p>
        <p><strong>Uso principal:</strong> ${medio.objetivo || '—'}</p>

        <h3>Instrucciones de preparación para este volumen</h3>
        <ol>
          <li>Pesar <strong>${g} g</strong> de ${medio.nombre} en polvo.</li>
          <li>Transferir a un matraz y añadir
              <strong>${ml} mL</strong> de agua destilada.</li>
          <li>Disolver completamente con agitación y calentamiento suave.</li>
          <li>Ajustar pH y esterilizar siguiendo la ficha técnica
              del fabricante.</li>
        </ol>

        ${compoHtml}
        ${almacenamientoHtml}
        ${certificacionesHtml}
        ${observacionesHtml}

        <h3>Notas de la práctica</h3>
        <p style="min-height: 30mm; border-top: 1px solid #000; margin-top: 3mm; padding-top: 2mm;"></p>
      </section>
    `;

    window.print();
  }

  // ===== Calculadora de pruebas (volumen en mL) =====

  function poblarSelectPrueba() {
    if (!selectCalcPrueba) return;
    selectCalcPrueba.innerHTML = pruebasBioquimicas
      .map(
        (p) =>
          `<option value="${p.id}">${p.nombre}</option>`
      )
      .join('');
  }

  function calcularPrueba() {
    if (!selectCalcPrueba || !divResultadoPrueba) return;

    const id = selectCalcPrueba.value;
    const prueba = pruebasBioquimicas.find((p) => p.id === id);
    if (!prueba) {
      divResultadoPrueba.textContent =
        'Selecciona una prueba válida en la calculadora.';
      return;
    }

    const gramosPorLitro = Number(prueba.gramosPorLitro);
    if (!gramosPorLitro || Number.isNaN(gramosPorLitro)) {
      divResultadoPrueba.innerHTML =
        'Esta prueba aún no tiene definida la dosis estándar (g/L).<br>' +
        'Cuando llenemos la base de datos con los g/L de tu marca, la calculadora se activará.';
      return;
    }

    const volumenMl = Number(inputVolPrueba ? inputVolPrueba.value : 0);
    if (!volumenMl || volumenMl <= 0) {
      divResultadoPrueba.textContent =
        'Ingresa un volumen en mL mayor a cero.';
      return;
    }

    const volumenLitros = volumenMl / 1000;
    const gramosNecesarios = gramosPorLitro * volumenLitros;

    const gramosMostrar = gramosNecesarios.toFixed(2);
    const volumenMostrar = volumenMl.toFixed(0);

    divResultadoPrueba.innerHTML = `
      <p>
        Para preparar <strong>${volumenMostrar} mL</strong> del medio para
        <strong>${prueba.nombre}</strong> necesitas:
      </p>
      <ul>
        <li><strong>${gramosMostrar} g</strong> de medio en polvo.</li>
        <li><strong>${volumenMostrar} mL</strong> de agua destilada.</li>
      </ul>
      <p class="micro-calc-note">
        Ajusta pH, calentamiento y esterilización según las indicaciones
        del fabricante del medio para ${prueba.sigla}.
      </p>
    `;

    ultimaPreparacionPrueba = {
      pruebaId: prueba.id,
      volumenMl,
      gramos: gramosNecesarios
    };

    if (btnImprimirPrueba) btnImprimirPrueba.disabled = false;
  }

  function imprimirPrueba() {
    if (!ultimaPreparacionPrueba || !printArea) {
      alert('Primero calcula una preparación para la prueba.');
      return;
    }

    const prueba = pruebasBioquimicas.find(
      (p) => p.id === ultimaPreparacionPrueba.pruebaId
    );
    if (!prueba) return;

    const fecha = new Date();
    const fechaStr = fecha.toLocaleDateString('es-EC', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const horaStr = fecha.toLocaleTimeString('es-EC', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const ml = ultimaPreparacionPrueba.volumenMl.toFixed(0);
    const g = ultimaPreparacionPrueba.gramos.toFixed(2);
    const tipoPrep = 'Medio para prueba bioquímica';

    const dosisTexto = prueba.gramosPorLitro
      ? `${prueba.gramosPorLitro} g / L`
      : 'Dosis estándar pendiente (g/L)';

    const almacenamientoHtml = prueba.almacenamiento
      ? `<h3>Almacenamiento</h3><p>${prueba.almacenamiento}</p>`
      : '';

    const observacionesHtml = prueba.observaciones
      ? `<h3>Observaciones</h3><p>${prueba.observaciones}</p>`
      : '';

    const certificacionesHtml = prueba.certificaciones
      ? `<h3>Certificaciones</h3><p>${prueba.certificaciones}</p>`
      : '';

    printArea.innerHTML = `
      <section class="print-label">
        <h1>${prueba.nombre}</h1>
        <p><strong>Tipo de preparación:</strong> ${tipoPrep}</p>
        <p><strong>Volumen preparado:</strong> ${ml} mL</p>
        <p><strong>Cantidad de medio en polvo:</strong> ${g} g</p>
        <p><strong>Dosis estándar (referencia):</strong> ${dosisTexto}</p>
        <p><strong>Fecha:</strong> ${fechaStr} &nbsp;&nbsp; <strong>Hora:</strong> ${horaStr}</p>
        <p><strong>Preparado por:</strong> ______________________________</p>
      </section>

      <section class="print-info">
        <h2>Ficha de preparación para informe</h2>
        <p><strong>Prueba:</strong> ${prueba.nombre} (${prueba.sigla})</p>
        <p><strong>Medio base:</strong> ${prueba.medioBase}</p>
        <p><strong>Dosis estándar:</strong> ${dosisTexto}</p>
        <p><strong>Finalidad:</strong> ${prueba.finalidad}</p>

        <h3>Instrucciones de preparación para este volumen</h3>
        <ol>
          <li>Pesar <strong>${g} g</strong> del medio deshidratado indicado para ${prueba.sigla}.</li>
          <li>Transferir a un matraz y añadir
              <strong>${ml} mL</strong> de agua destilada.</li>
          <li>Disolver completamente con agitación y calentamiento suave.</li>
          <li>Ajustar pH y esterilizar según la ficha técnica del fabricante.</li>
        </ol>

        <h3>Colores clave</h3>
        <p>${prueba.coloresClave}</p>

        <h3>Principio e interpretación resumida</h3>
        <p>${prueba.interpretacionResumida}</p>
        <p>${prueba.detalles}</p>

        ${almacenamientoHtml}
        ${certificacionesHtml}
        ${observacionesHtml}

        <h3>Notas de la práctica</h3>
        <p style="min-height: 30mm; border-top: 1px solid #000; margin-top: 3mm; padding-top: 2mm;"></p>
      </section>
    `;

    window.print();
  }

  // ===== Eventos globales =====

  // Búsqueda / filtros
  if (inputBuscarAgar) inputBuscarAgar.addEventListener('input', renderMediosAgar);
  if (selectTipoAgar) selectTipoAgar.addEventListener('change', renderMediosAgar);

  if (inputBuscarCaldo) inputBuscarCaldo.addEventListener('input', renderMediosCaldo);
  if (selectTipoCaldo) selectTipoCaldo.addEventListener('change', renderMediosCaldo);

  if (inputBuscarPrueba) inputBuscarPrueba.addEventListener('input', renderPruebas);
  if (selectTipoPrueba) selectTipoPrueba.addEventListener('change', renderPruebas);

  // Calculadoras
  if (btnCalcularAgar) btnCalcularAgar.addEventListener('click', calcularAgar);
  if (btnImprimirAgar) {
    btnImprimirAgar.disabled = true;
    btnImprimirAgar.addEventListener('click', imprimirAgar);
  }

  if (btnCalcularCaldo) btnCalcularCaldo.addEventListener('click', calcularCaldo);
  if (btnImprimirCaldo) {
    btnImprimirCaldo.disabled = true;
    btnImprimirCaldo.addEventListener('click', imprimirCaldo);
  }

  if (btnCalcularPrueba) btnCalcularPrueba.addEventListener('click', calcularPrueba);
  if (btnImprimirPrueba) {
    btnImprimirPrueba.disabled = true;
    btnImprimirPrueba.addEventListener('click', imprimirPrueba);
  }

  // Clicks en tarjetas
  document.addEventListener('click', (event) => {
    const target = event.target;

    // Ficha técnica (agar/caldo)
    if (target.classList.contains('btn-ficha')) {
      const id = target.getAttribute('data-id');
      const detalles = document.getElementById(`detalles-${id}`);
      if (!detalles) return;

      detalles.classList.toggle('activo');
      target.textContent = detalles.classList.contains('activo')
        ? 'Ocultar ficha'
        : 'Ficha técnica';
    }

    // Ficha de prueba bioquímica
    if (target.classList.contains('btn-ficha-prueba')) {
      const id = target.getAttribute('data-id');
      const detalles = document.getElementById(`detalles-prueba-${id}`);
      if (!detalles) return;

      detalles.classList.toggle('activo');
      target.textContent = detalles.classList.contains('activo')
        ? 'Ocultar ficha'
        : 'Ficha técnica';
    }

    // Calcular medio desde tarjeta (agar o caldo)
    if (target.classList.contains('btn-calcular-agar')) {
      const id = target.getAttribute('data-id');
      let medio = mediosAgar.find((m) => m.id === id);
      let tipo = 'agar';

      if (!medio) {
        medio = mediosCaldo.find((m) => m.id === id);
        tipo = 'caldo';
      }
      if (!medio) return;

      if (tipo === 'agar' && selectCalcAgar) {
        selectCalcAgar.value = medio.id;
        const calcSection = document.getElementById('microCalc');
        if (calcSection) {
          calcSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else if (tipo === 'caldo' && selectCalcCaldo) {
        selectCalcCaldo.value = medio.id;
        const calcSection = document.getElementById('microCalcCaldo');
        if (calcSection) {
          calcSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    // Calcular medio desde tarjeta de prueba
    if (target.classList.contains('btn-calcular-prueba')) {
      const id = target.getAttribute('data-id');
      const prueba = pruebasBioquimicas.find((p) => p.id === id);
      if (!prueba || !selectCalcPrueba) return;

      selectCalcPrueba.value = prueba.id;
      const calcSection = document.getElementById('microCalcPrueba');
      if (calcSection) {
        calcSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });

  // Tabs de Microbiología
  if (microTabs.length && microPanes.length) {
    microTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const destino = tab.dataset.micro;

        microTabs.forEach((t) => t.classList.remove('micro-tab-active'));
        microPanes.forEach((p) => p.classList.remove('micro-pane-active'));

        const pane = document.getElementById(`micro-${destino}`);
        if (pane) pane.classList.add('micro-pane-active');
        tab.classList.add('micro-tab-active');
      });
    });
  }

  // Inicialización
  poblarSelectAgar();
  poblarSelectCaldo();
  poblarSelectPrueba();
  renderMediosAgar();
  renderMediosCaldo();
  renderPruebas();
});
