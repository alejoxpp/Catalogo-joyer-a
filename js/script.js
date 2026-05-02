document.addEventListener("DOMContentLoaded", function () {
  var instagramUrl = "https://www.instagram.com/entreglobosyflorestauramena/";
  var whatsappBase = "https://wa.me/+573173822722?text=";

  function getDescripcion(producto) {
    var categoria = producto.tag || "";
    switch (categoria) {
      case "Collares":
        return "Cadena delicada con diseño elegante, perfecta para realzar el escote con un brillo sutil.";
      case "Aretes":
        return "Aretes ligeros y sofisticados, ideales para acompañar el día a día con estilo.";
      case "Anillos":
        return "Anillo cómodo con un acabado refinado que aporta elegancia discreta a cualquier look.";
      case "Dijes":
        return "Dije delicado pensado para personalizar tu cadena con un toque luminoso y femenino.";
      default:
        return "Pieza artesanal con detalles cuidados y diseño atemporal.";
    }
  }

  var productos = [

    // ── COLLARES ──────────────────────────────────────────────────────
    {
      id: "p2",
      tag: "Collares",
      referencia: "Collar DTD_452PQ",
      descripcion: "Cadena fina con colgante minimalista. Perfecto en capas o como pieza unica que centra la mirada.",
      imagen: "img/catalogo/collares/DTD_452PQ_Collar.jpg",
      alt: "Collar Aurora de Vlover"
    },
    {
      id: "p5",
      tag: "Collares",
      referencia: "Collar DTD_415",
      descripcion: "Diseno curvo de lineas suaves y cierre invisible. Ligera y sofisticada.",
      imagen: "img/catalogo/collares/DTD_415_Collar.jpg",
      alt: "Collar DTD_415 de Vlover"
    },
    { id: "p11", tag: "Collares", referencia: "Collar DTD_577E",   descripcion: "Elegante collar en oro amarillo con una esmeralda central talla oval rodeada por una orla de diamantes brillantes.", imagen: "img/catalogo/collares/DTD_577E_Collar.jpg",       alt: "Collar DTD_577E de Vlover" },
    { id: "p13", tag: "Collares", referencia: "Collar DTD_462E",   descripcion: "Refinado colgante en oro amarillo con diseño floral de esmeraldas (0,13 ct) en el centro, realzado por una orla circular de diamantes (0,08 ct). Una pieza delicada que combina tradición y brillo.", imagen: "img/catalogo/collares/DTD_462E_collar.jpg",       alt: "Collar DTD_462E de Vlover" },
    { id: "p14", tag: "Collares", referencia: "Collar 156_427E",   descripcion: "Gargantilla de diseño contemporáneo en oro amarillo con un aro central adornado por una delicada hilera de esmeraldas (0,16 ct).", imagen: "img/catalogo/collares/156_427E_Collar.jpg",      alt: "Collar 156_427E de Vlover" },
    { id: "p15", tag: "Collares", referencia: "Collar 156_414E", descripcion: "Gargantilla en oro amarillo con un diseño lineal curvo en degradé, engastada con esmeraldas (0,68 ct) que aportan un brillo vibrante y sofisticado.", imagen: "img/catalogo/collares/156_414E_Collar.png",    alt: "Collar 156_414E de Vlover" },
    { id: "p16", tag: "Collares", referencia: "Collar DTD_015E",   descripcion: "Gargantilla circular en oro amarillo con centro de esmeraldas (0,40 ct) y halo de diamantes (0,21 ct). Diseño de brillo intenso y perfil bajo.", imagen: "img/catalogo/collares/DTD_015E_Collar.jpg",       alt: "Collar DTD_015E de Vlover" },
    { id: "p17", tag: "Collares", referencia: "Collar DTD_450P",   descripcion: "Elegante gargantilla de diseño lineal en oro blanco, protagonizada por una barra curva meticulosamente engastada con diamantes brillantes.", imagen: "img/catalogo/collares/DTD_450P_Collar.jpg",       alt: "Collar DTD_450P de Vlover" },
    { id: "p18", tag: "Collares", referencia: "Collar DTD_540",   descripcion: "Colgante circular de perfil pulido en oro blanco, con un diamante solitario central engastado a nivel para un acabado moderno y sutil.", imagen: "img/catalogo/collares/DTD_540_Collar.jpg",       alt: "Collar DTD_540 de Vlover" },
    { id: "p21", tag: "Collares", referencia: "Collar DTD_425EB",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_425EB_Collar.jpg",       alt: "Collar DTD_425EB de Vlover" },
    { id: "p28", tag: "Collares", referencia: "Collar DTD_425E",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_425E_Collar.jpg",       alt: "Collar DTD_425E de Vlover" },
    { id: "p31", tag: "Collares", referencia: "Collar DTD_547E",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_547E_Collar.jpg",       alt: "Collar DTD_547E de Vlover" },
    { id: "p33", tag: "Collares", referencia: "Collar DTD_303E",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_303E_Collar.jpg",       alt: "Collar DTD_303E de Vlover" },
    { id: "p34", tag: "Collares", referencia: "Collar DTD_491",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_491_Collar.jpg",       alt: "Collar DTD_491 de Vlover" },
    { id: "p35", tag: "Collares", referencia: "Collar DTD_416",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_416_Collar.jpg",       alt: "Collar DTD_416 de Vlover" },
    { id: "p36", tag: "Collares", referencia: "Collar 156_233E",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/156_233E_Collar.jpg",       alt: "Collar 156_233E de Vlover" },
    { id: "p37", tag: "Collares", referencia: "Collar DTD_487E",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_487E_Collar.jpg",       alt: "Collar DTD_487E de Vlover" },
    { id: "p38", tag: "Collares", referencia: "Collar DTD_475",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_475_Collar.jpg",       alt: "Collar DTD_475 de Vlover" },
    { id: "p46", tag: "Collares", referencia: "Collar DTD_580E",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_580E_Collar.jpg",       alt: "Collar DTD_580E de Vlover" },
    { id: "p47", tag: "Collares", referencia: "Collar DTD_417",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_417_Collar.jpg",       alt: "Collar DTD_417 de Vlover" },
    { id: "p50", tag: "Collares", referencia: "Collar 156_226E",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/156_226E_Collar.jpg",       alt: "Collar 156_226E de Vlover" },
    { id: "p53", tag: "Collares", referencia: "Collar DTD_485GE",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_485GE_Collar.jpg",       alt: "Collar DTD_485GE de Vlover" },
    { id: "p58", tag: "Collares", referencia: "Collar DTD_473E",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_473E_Collar.jpg",       alt: "Collar DTD_473E de Vlover" },
    { id: "p60", tag: "Collares", referencia: "Collar DTD_570E",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_570E_Collar.jpg",       alt: "Collar DTD_570E_Collar de Vlover" },
    { id: "p61", tag: "Collares", referencia: "Collar DTD_180PE",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTA_180PE_Collar.jpg",       alt: "Collar DTD_180PE de Vlover" },
    { id: "p62", tag: "Collares", referencia: "Collar DTD_426EP",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_426EP_Collar.jpg",       alt: "Collar DTD_426EP de Vlover" },
    { id: "p63", tag: "Collares", referencia: "Collar DTD_470E",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/collares/DTD_470E_Collar.jpg",       alt: "Collar DTD_470E de Vlover" },

    // ── ARETES ───────────────────────────────────────────────────────
    {
      id: "p4",
      tag: "Aretes",
      referencia: "DTA_415",
      descripcion: "Textura delicada en formato pequeno. Versatiles para el dia a dia y las ocasiones especiales.",
      imagen: "img/catalogo/aretes/DTA_415_aretes.jpg",
      alt: "Aros DTA_415 de Vlover"
    },
    { id: "p9",  tag: "Aretes", referencia: "Aretes DTA_487E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_487E_aretes.jpg",   alt: "Aretes DTA_487E de Vlover" },
    { id: "p19", tag: "Aretes", referencia: "Aretes DTA_473E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_473E_aretes.jpg",   alt: "Aretes DTA_473E de Vlover" },
    { id: "p24", tag: "Aretes", referencia: "Aretes 256_233E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/256_233E_aretes.jpg",   alt: "Aretes 256_233E de Vlover" },
    { id: "p27", tag: "Aretes", referencia: "Aretes 256_233E1",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/256_233E1_aretes.jpg",   alt: "Aretes 256_233E1 de Vlover" },
    { id: "p29", tag: "Aretes", referencia: "Aretes DTA_547E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_547E_aretes.jpg",   alt: "Aretes DTA_547E de Vlover" },
    { id: "p30", tag: "Aretes", referencia: "Aretes DTA_425",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_425_aretes.jpg",   alt: "Aretes DTA_425 de Vlover" },
    { id: "p32", tag: "Aretes", referencia: "Aretes DTA_491",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_491_aretes.jpg",   alt: "Aretes DTA_491 de Vlover" },
    { id: "p41", tag: "Aretes", referencia: "Aretes DTA_485GE",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_485GE_aretes.jpg",   alt: "Aretes DTA_485GE de Vlover" },
    { id: "p42", tag: "Aretes", referencia: "Aretes 256_186E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/256_186E_aretes.jpg",   alt: "Aretes 256_186E de Vlover" },
    { id: "p43", tag: "Aretes", referencia: "Aretes DTA_426DEP",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_426DEP_aretes.jpg",   alt: "Aretes DTA_426DEP de Vlover" },
    { id: "p44", tag: "Aretes", referencia: "Aretes DTA_540",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_540_aretes.jpg",   alt: "Aretes DTA_540 de Vlover" },
    { id: "p49", tag: "Aretes", referencia: "Aretes DTA_470E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_470E_aretes.jpg",   alt: "Aretes DTA_470E de Vlover" },
    { id: "p51", tag: "Aretes", referencia: "Aretes 256_226E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/256_226E_aretes.jpg",   alt: "Aretes 256_226E de Vlover" },
    { id: "p52", tag: "Aretes", referencia: "Aretes DTA_462E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_462E_aretes.jpg",   alt: "Aretes DTA_462E de Vlover" },
    { id: "p54", tag: "Aretes", referencia: "Aretes DTA_303E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_303E_aretes.jpg",   alt: "Aretes DTA_303E de Vlover" },
    { id: "p57", tag: "Aretes", referencia: "Aretes DTA_577E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_577E_aretes.jpg",   alt: "Aretes DTA_577E de Vlover" },
    { id: "p59", tag: "Aretes", referencia: "Aretes DTA_180PE",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_180PE_aretes.jpg",   alt: "Aretes DTA_180PE de Vlover" },
    { id: "p64", tag: "Aretes", referencia: "Aretes DTA_425E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aretes/DTA_425E_aretes.jpg",   alt: "Aretes DTA_425E de Vlover" },

    // ── ANILLOS ───────────────────────────────────────────────────────
    {
      id: "p1",
      tag: "Anillos",
      referencia: "DTE_415",
      descripcion: "Diseno atemporal con piedra facetada y bano delicado. Elegancia silenciosa para el uso diario.",
      imagen: "img/catalogo/anillos/DTE_415_anillo.jpg",
      alt: "Anillo Sereno de Vlover"
    },
    { id: "p8",
      tag: "Anillos", 
      referencia: "356_233E",  
      descripcion: "Descripcion breve del producto.", 
      imagen: "img/catalogo/anillos/356_233E_anillo.jpg", 
      alt: "Anillo 356_233E de Vlover" 
    },
    { id: "p10", tag: "Anillos", referencia: "Anillo DTA_570E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/anillos/DTA_570E_anillo.jpg",    alt: "Anillo DTA_570E de Vlover" },
    { id: "p12", tag: "Anillos", referencia: "Anillo DTE_443E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/anillos/DTE_443E_anillo.jpg",     alt: "Anillo DTE_443E de Vlover" },
    { id: "p22", tag: "Anillos", referencia: "Anillo 356_186E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/anillos/356_186E_anillo.jpg",     alt: "Anillo 356_186E de Vlover" },
    { id: "p23", tag: "Anillos", referencia: "Anillo DTE_111E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/anillos/DTE_111E_anillo.jpg",     alt: "Anillo DTE_111E de Vlover" },
    { id: "p39", tag: "Anillos", referencia: "Anillo DTE_485GE",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/anillos/DTE_485GE_anillo.jpg",     alt: "Anillo DTE_485GE de Vlover" },
    { id: "p45", tag: "Anillos", referencia: "Anillo DTE_440G",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/anillos/DTE_440G_anillo.jpg",     alt: "Anillo DTE_440G de Vlover" },
    { id: "p55", tag: "Anillos", referencia: "Anillo 3356_214E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/anillos/3356_214E_anillo.jpg",     alt: "Anillo 3356_214E de Vlover" },
    { id: "p66", tag: "Anillos", referencia: "Anillo DTE_473E",  descripcion: "Anillo elegante con acabado brillante, diseñado para uso diario y ocasiones especiales.", imagen: "img/catalogo/anillos/DTE_473E_anillo.jpg",     alt: "Anillo DTE_473E de Vlover" },

    // ── DIJES ─────────────────────────────────────────────────────────
    {
      id: "p3",
      tag: "Dijes",
      referencia: "DTD_326",
      descripcion: "Dije en forma de estrella, acabado brillante y diseño delicado. Ideal para personalizar cadenas o pulseras.",
      imagen: "img/catalogo/dijes/DTD_326_dije.jpg",
      alt: "Dije DTD_326 de Vlover"
    },
    {
      id: "p6",
      tag: "Dijes",
      referencia: "DTD_326A",
      descripcion: "Descripcion breve del producto.",
      imagen: "img/catalogo/dijes/DTD_326A.jpg",
      alt: "Dije DTD_326A de Vlover"
    },
    { id: "p20", tag: "Dijes", referencia: "Dije 265_366",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/dijes/265_366_dije.jpg",  alt: "Dije 265_366 de Vlover" },
    { id: "p25", tag: "Dijes", referencia: "Dije DTD_344P",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/dijes/DTD_344P_dije.jpg",  alt: "Dije DTD_344P de Vlover" },
    { id: "p26", tag: "Dijes", referencia: "Dije DTD_364P",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/dijes/DTD_364P_dije.jpg",  alt: "Dije DTD_364P de Vlover" },
    { id: "p40", tag: "Dijes", referencia: "Dije DTD_571",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/dijes/DTD_571_dije.jpg",  alt: "Dije DTD_571 de Vlover" },
    { id: "p48", tag: "Dijes", referencia: "Dije DTD_567E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/dijes/DTD_567E_dije.jpg",  alt: "Dije DTD_567E de Vlover" },
    { id: "p56", tag: "Dijes", referencia: "Dije 156_365E",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/dijes/156_365E_dije.jpg",  alt: "Dije 156_365E de Vlover" },
    { id: "p65", tag: "Dijes", referencia: "Dije DTD_344PA",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/dijes/DTD_344PA_dije.jpg",  alt: "Dije DTD_344PA de Vlover" }
  ];

  productos.forEach(function (producto) {
    if (producto.descripcion === "Descripcion breve del producto.") {
      producto.descripcion = getDescripcion(producto);
    }
  });

  var grid = document.getElementById("productosGrid");
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modalImage");
  var modalTag = document.getElementById("modalTag");
  var modalTitle = document.getElementById("modalTitle");
  var modalDesc = document.getElementById("modalDesc");
  var modalIg = document.getElementById("modalInstagram");
  var modalWa = document.getElementById("modalWhatsapp");
  var yearSpan = document.getElementById("year");

  var catalogoPage = document.getElementById("catalogoPage");
  var openCatalogBtn = document.getElementById("openCatalogBtn");
  var openCatalogBtn2 = document.getElementById("openCatalogBtnSecondary");
  var catalogoBack = document.getElementById("catalogoBack");
  var catalogoGrid = document.getElementById("catalogoGrid");
  var filterChips = document.querySelectorAll(".filter-chip");

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  function getWhatsappHref(nombreProducto) {
    return whatsappBase + encodeURIComponent("Hola Vlover, quisiera precio y disponibilidad de: " + nombreProducto);
  }

  function createProductImage(producto, className) {
    var img = document.createElement("img");
    img.className = className;
    img.src = producto.imagen;
    img.alt = producto.alt || producto.referencia || "";
    img.loading = "lazy";
    return img;
  }

  function createDetailButton(producto) {
    var btnDetail = document.createElement("button");
    btnDetail.type = "button";
    btnDetail.className = "card-btn-detail";
    btnDetail.textContent = "Ver detalles";
    btnDetail.addEventListener("click", function (event) {
      event.stopPropagation();
      abrirModal(producto);
    });
    return btnDetail;
  }

  function appendCardBody(art, producto) {
    var body = document.createElement("div");
    body.className = "card-body";

    var tag = document.createElement("span");
    tag.className = "card-tag";
    tag.textContent = producto.tag;

    var h4 = document.createElement("h4");
    h4.textContent = producto.referencia || "";

    var desc = document.createElement("p");
    desc.textContent = producto.descripcion;

    body.appendChild(tag);
    body.appendChild(h4);
    body.appendChild(desc);
    art.appendChild(body);
  }

  function appendCardFooter(art, producto) {
    var footer = document.createElement("div");
    footer.className = "card-footer";
    footer.appendChild(createDetailButton(producto));
    art.appendChild(footer);
  }

  function renderProductos() {
    if (!grid) return;

    productos.forEach(function (producto, index) {
      var art = document.createElement("article");
      art.className = "card reveal";
      art.style.transitionDelay = index * 65 + "ms";

      var figure = document.createElement("div");
      figure.className = "card-figure";
      figure.appendChild(createProductImage(producto, "card-image"));

      art.appendChild(figure);
      appendCardBody(art, producto);
      appendCardFooter(art, producto);
      grid.appendChild(art);
    });

    triggerReveal();
  }

  function renderCatalogoVista() {
    if (!catalogoGrid) return;

    catalogoGrid.innerHTML = "";

    productos.forEach(function (producto) {
      var art = document.createElement("article");
      art.className = "card catalog-card reveal";
      art.dataset.tag = producto.tag;

      var figure = document.createElement("div");
      figure.className = "card-figure";
      figure.appendChild(createProductImage(producto, "card-image"));

      art.appendChild(figure);
      appendCardBody(art, producto);
      appendCardFooter(art, producto);

      catalogoGrid.appendChild(art);
    });

    triggerReveal();
  }

  function abrirModal(producto) {
    if (!modal) return;

    if (modalImage) {
      modalImage.src = producto.imagen;
      modalImage.alt = producto.alt || producto.referencia || "";
    }

    if (modalTag) modalTag.textContent = producto.tag;
    if (modalTitle) modalTitle.textContent = producto.referencia || "";
    if (modalDesc) modalDesc.textContent = producto.descripcion;
    if (modalIg) modalIg.href = instagramUrl;
    if (modalWa) modalWa.href = getWhatsappHref(producto.referencia || "");

    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function cerrarModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  var btnClose = document.getElementById("modalClose");
  if (btnClose) btnClose.addEventListener("click", cerrarModal);
  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target === modal) cerrarModal();
    });
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") cerrarModal();
  });

  function abrirCatalogo() {
    if (!catalogoPage) return;
    catalogoPage.classList.remove("catalogo-closing");
    catalogoPage.setAttribute("aria-hidden", "false");
    document.body.classList.add("catalogo-open");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cerrarCatalogo() {
    if (!catalogoPage) return;
    catalogoPage.classList.add("catalogo-closing");
  }

  if (openCatalogBtn) {
    openCatalogBtn.addEventListener("click", function (event) {
      event.preventDefault();
      abrirCatalogo();
    });
  }

  if (openCatalogBtn2) {
    openCatalogBtn2.addEventListener("click", function (event) {
      event.preventDefault();
      abrirCatalogo();
    });
  }

  if (catalogoBack) {
    catalogoBack.addEventListener("click", cerrarCatalogo);
  }

  if (catalogoPage) {
    catalogoPage.addEventListener("animationend", function (event) {
      if (!catalogoPage.classList.contains("catalogo-closing")) return;
      if (event.target !== catalogoPage) return;
      catalogoPage.setAttribute("aria-hidden", "true");
      document.body.classList.remove("catalogo-open");
      catalogoPage.classList.remove("catalogo-closing");
    });
  }

  function filtrarCatalogo(tag) {
    if (!catalogoGrid) return;

    var cards = catalogoGrid.querySelectorAll(".catalog-card");
    cards.forEach(function (card) {
      var cardTag = card.dataset.tag;
      var mostrar = tag === "all" || (cardTag && cardTag.toLowerCase() === tag.toLowerCase());
      card.style.display = mostrar ? "" : "none";
    });
  }

  filterChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      filterChips.forEach(function (currentChip) {
        currentChip.classList.remove("is-active");
      });
      chip.classList.add("is-active");
      filtrarCatalogo(chip.dataset.filter);
    });
  });

  var navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener(
      "scroll",
      function () {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
      },
      { passive: true }
    );
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      var target = document.querySelector(href);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  function triggerReveal() {
    var items = document.querySelectorAll(".reveal:not(.visible)");

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("visible");
      });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    items.forEach(function (el) {
      obs.observe(el);
    });
  }

  renderProductos();
  renderCatalogoVista();
  triggerReveal();
});