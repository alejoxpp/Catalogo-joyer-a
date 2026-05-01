document.addEventListener("DOMContentLoaded", function () {
  var instagramUrl = "https://www.instagram.com/entreglobosyflorestauramena/";
  var whatsappBase = "https://wa.me/+573173822722?text=";

  var productos = [

    // ── COLLARES ──────────────────────────────────────────────────────
    {
      id: "p2",
      tag: "Collares",
      nombre: "Collar Aurora",
      descripcion: "Cadena fina con colgante minimalista. Perfecto en capas o como pieza unica que centra la mirada.",
      imagen: "img/catalogo/DTD-452PQ_Collar.jpg",
      alt: "Collar Aurora de Vlover"
    },
    {
      id: "p5",
      tag: "Collares",
      nombre: "Gargantilla Nube",
      descripcion: "Diseno curvo de lineas suaves y cierre invisible. Ligera y sofisticada.",
      imagen: "img/catalogo/DTD-415_Collar.jpg",
      alt: "Gargantilla Nube de Vlover"
    },
    { id: "p11", tag: "Collares", nombre: "Collar 9KdQh",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/9KdQh_collar.jpg",       alt: "Collar 9KdQh de Vlover" },
    { id: "p13", tag: "Collares", nombre: "Collar 18b72",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/18b72_collar.jpg",       alt: "Collar 18b72 de Vlover" },
    { id: "p14", tag: "Collares", nombre: "Collar 20ZRe",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/20ZRe_collar.jpg",       alt: "Collar 20ZRe de Vlover" },
    { id: "p15", tag: "Collares", nombre: "Collar 156 414E",descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/156 414E_collar.png",    alt: "Collar 156 414E de Vlover" },
    { id: "p16", tag: "Collares", nombre: "Collar a6NG1",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/a6NG1_collar.jpg",       alt: "Collar a6NG1 de Vlover" },
    { id: "p17", tag: "Collares", nombre: "Collar AfW72",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/AfW72_collar.jpg",       alt: "Collar AfW72 de Vlover" },
    { id: "p18", tag: "Collares", nombre: "Collar aJjZh",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aJjZh_collar.jpg",       alt: "Collar aJjZh de Vlover" },
    { id: "p21", tag: "Collares", nombre: "Collar BbhZH",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/BbhZH_collar.jpg",       alt: "Collar BbhZH de Vlover" },
    { id: "p28", tag: "Collares", nombre: "Collar dJKHo",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/dJKHo_collar.jpg",       alt: "Collar dJKHo de Vlover" },
    { id: "p31", tag: "Collares", nombre: "Collar eN3dG",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/eN3dG_collar.jpg",       alt: "Collar eN3dG de Vlover" },
    { id: "p33", tag: "Collares", nombre: "Collar gFvCv",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/gFvCv_collar.jpg",       alt: "Collar gFvCv de Vlover" },
    { id: "p34", tag: "Collares", nombre: "Collar glKpb",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/glKpb_collar.jpg",       alt: "Collar glKpb de Vlover" },
    { id: "p35", tag: "Collares", nombre: "Collar GxcUE",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/GxcUE_collar.jpg",       alt: "Collar GxcUE de Vlover" },
    { id: "p36", tag: "Collares", nombre: "Collar HHCRq",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/HHCRq_collar.jpg",       alt: "Collar HHCRq de Vlover" },
    { id: "p37", tag: "Collares", nombre: "Collar HMkyW",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/HMkyW_collar.jpg",       alt: "Collar HMkyW de Vlover" },
    { id: "p38", tag: "Collares", nombre: "Collar hy5fn",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/hy5fn_collar.jpg",       alt: "Collar hy5fn de Vlover" },
    { id: "p46", tag: "Collares", nombre: "Collar lol2n",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/Iol2n_collar.jpg",       alt: "Collar lol2n de Vlover" },
    { id: "p47", tag: "Collares", nombre: "Collar mHkgi",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/mHkgi_collar.jpg",       alt: "Collar mHkgi de Vlover" },
    { id: "p50", tag: "Collares", nombre: "Collar PgsW2",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/PgsW2_collar.jpg",       alt: "Collar PgsW2 de Vlover" },
    { id: "p53", tag: "Collares", nombre: "Collar rO1nd",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/rO1nd_collar.jpg",       alt: "Collar rO1nd de Vlover" },
    { id: "p58", tag: "Collares", nombre: "Collar WjmBe",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/WjmBe_collar.jpg",       alt: "Collar WjmBe de Vlover" },
    { id: "p60", tag: "Collares", nombre: "Collar XbYUQ",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/XbYUQ_collar.jpg",       alt: "Collar XbYUQ de Vlover" },
    { id: "p61", tag: "Collares", nombre: "Collar xt5nl",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/xt5nl_collar.jpg",       alt: "Collar xt5nl de Vlover" },
    { id: "p62", tag: "Collares", nombre: "Collar yA1ee",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/yA1ee_collar.jpg",       alt: "Collar yA1ee de Vlover" },
    { id: "p63", tag: "Collares", nombre: "Collar YNATv",   descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/YNATv_collar.jpg",       alt: "Collar YNATv de Vlover" },

    // ── ARETES ───────────────────────────────────────────────────────
    {
      id: "p4",
      tag: "Aretes",
      nombre: "Aros Bruma",
      descripcion: "Textura delicada en formato pequeno. Versatiles para el dia a dia y las ocasiones especiales.",
      imagen: "img/catalogo/DTA-415_Aretes.jpg",
      alt: "Aros Bruma de Vlover"
    },
    { id: "p7",  tag: "Aretes", nombre: "Aretes 0g01N",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/0g01N_aretes.jpg",   alt: "Aretes 0g01N de Vlover" },
    { id: "p9",  tag: "Aretes", nombre: "Aretes 5GgDW",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/5GgDW_aretes.jpg",   alt: "Aretes 5GgDW de Vlover" },
    { id: "p19", tag: "Aretes", nombre: "Aretes aLNo1",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/aLNo1_aretes.jpg",   alt: "Aretes aLNo1 de Vlover" },
    { id: "p24", tag: "Aretes", nombre: "Aretes CBrAd",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/CBrAd_aretes.jpg",   alt: "Aretes CBrAd de Vlover" },
    { id: "p27", tag: "Aretes", nombre: "Aretes dEFvG",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/dEFvG_aretes.jpg",   alt: "Aretes dEFvG de Vlover" },
    { id: "p29", tag: "Aretes", nombre: "Aretes DK5Ki",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/DK5Ki_aretes.jpg",   alt: "Aretes DK5Ki de Vlover" },
    { id: "p30", tag: "Aretes", nombre: "Aretes ebHsF",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/ebHsF_aretes.jpg",   alt: "Aretes ebHsF de Vlover" },
    { id: "p32", tag: "Aretes", nombre: "Aretes Fv9fx",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/Fv9fx_aretes.jpg",   alt: "Aretes Fv9fx de Vlover" },
    { id: "p41", tag: "Aretes", nombre: "Aretes j8sZf",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/j8sZf_aretes.jpg",   alt: "Aretes j8sZf de Vlover" },
    { id: "p42", tag: "Aretes", nombre: "Aretes kP6AP",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/kP6AP_aretes.jpg",   alt: "Aretes kP6AP de Vlover" },
    { id: "p43", tag: "Aretes", nombre: "Aretes l5gdG",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/I5gdG_aretes.jpg",   alt: "Aretes l5gdG de Vlover" },
    { id: "p44", tag: "Aretes", nombre: "Aretes lcezK",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/IcezK_aretes.jpg",   alt: "Aretes lcezK de Vlover" },
    { id: "p49", tag: "Aretes", nombre: "Aretes nVQ79",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/nVQ79_aretes.jpg",   alt: "Aretes nVQ79 de Vlover" },
    { id: "p51", tag: "Aretes", nombre: "Aretes qekOt",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/qekOt_aretes.jpg",   alt: "Aretes qekOt de Vlover" },
    { id: "p52", tag: "Aretes", nombre: "Aretes QXdYs",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/QXdYs_aretes.jpg",   alt: "Aretes QXdYs de Vlover" },
    { id: "p54", tag: "Aretes", nombre: "Aretes rzThg",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/rzThg_aretes.jpg",   alt: "Aretes rzThg de Vlover" },
    { id: "p57", tag: "Aretes", nombre: "Aretes uf3Xa",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/uf3Xa_aretes.jpg",   alt: "Aretes uf3Xa de Vlover" },
    { id: "p59", tag: "Aretes", nombre: "Aretes X4BgY",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/X4BgY_aretes.jpg",   alt: "Aretes X4BgY de Vlover" },
    { id: "p64", tag: "Aretes", nombre: "Aretes YpaS8",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/YpaS8_aretes.jpg",   alt: "Aretes YpaS8 de Vlover" },

    // ── ANILLOS ───────────────────────────────────────────────────────
    {
      id: "p1",
      tag: "Anillos",
      nombre: "Anillo",
      descripcion: "Diseno atemporal con piedra facetada y bano delicado. Elegancia silenciosa para el uso diario.",
      imagen: "img/catalogo/DtE-415_Anillo.jpg",
      alt: "Anillo Sereno de Vlover"
    },
    { id: "p8",
      tag: "Anillos", 
      nombre: "Anillo 4lCzH",  
      descripcion: "Descripcion breve del producto.", 
      imagen: "img/catalogo/4lCzH_ anillo.jpg", 
      alt: "Anillo 4lCzH de Vlover" 
    },
    { id: "p10", tag: "Anillos", nombre: "Anillo 7V72d",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/7V72da_anillo.jpg",    alt: "Anillo 7V72d de Vlover" },
    { id: "p12", tag: "Anillos", nombre: "Anillo 9KJ2j",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/9KJ2j_anillo.jpg",     alt: "Anillo 9KJ2j de Vlover" },
    { id: "p22", tag: "Anillos", nombre: "Anillo bNEBO",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/bNEBO_anillo.jpg",     alt: "Anillo bNEBO de Vlover" },
    { id: "p23", tag: "Anillos", nombre: "Anillo BsmBA",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/BsmBA_anillo.jpg",     alt: "Anillo BsmBA de Vlover" },
    { id: "p39", tag: "Anillos", nombre: "Anillo ie59M",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/ie59M_anillo.jpg",     alt: "Anillo ie59M de Vlover" },
    { id: "p45", tag: "Anillos", nombre: "Anillo ljlkD",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/IjlkD_anillo.jpg",     alt: "Anillo ljlkD de Vlover" },
    { id: "p55", tag: "Anillos", nombre: "Anillo Ttaxp",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/Ttaxp_anillo.jpg",     alt: "Anillo Ttaxp de Vlover" },

    // ── DIJES ─────────────────────────────────────────────────────────
    {
      id: "p3",
      tag: "Dijes",
      nombre: "Dije Oro Blanco",
      descripcion: "Dije en forma de estrella, acabado brillante y diseño delicado. Ideal para personalizar cadenas o pulseras.",
      imagen: "img/catalogo/DTD-326_Dije.jpg",
      alt: "Dije Oro Blanco de Vlover"
    },
    {
      id: "p6",
      tag: "Dijes",
      nombre: "Dije de oro",
      descripcion: "Descripcion breve del producto.",
      imagen: "img/catalogo/Xqa5V_dije.jpg",
      alt: "Dije de oro de Vlover"
    },
    { id: "p20", tag: "Dijes", nombre: "Dije baQ8l",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/baQ8l_dije.jpg",  alt: "Dije baQ8l de Vlover" },
    { id: "p25", tag: "Dijes", nombre: "Dije CSYZD",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/CSYZD_dije.jpg",  alt: "Dije CSYZD de Vlover" },
    { id: "p26", tag: "Dijes", nombre: "Dije CttKN",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/CttKN_dije.jpg",  alt: "Dije CttKN de Vlover" },
    { id: "p40", tag: "Dijes", nombre: "Dije iqGqh",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/iqGqh_dije.jpg",  alt: "Dije iqGqh de Vlover" },
    { id: "p48", tag: "Dijes", nombre: "Dije MPasJ",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/MPasJ_dije.jpg",  alt: "Dije MPasJ de Vlover" },
    { id: "p56", tag: "Dijes", nombre: "Dije UBMME",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/UBMME_dije.jpg",  alt: "Dije UBMME de Vlover" },
    { id: "p65", tag: "Dijes", nombre: "Dije zjDiO",  descripcion: "Descripcion breve del producto.", imagen: "img/catalogo/zjDiO_dije.jpg",  alt: "Dije zjDiO de Vlover" }
  ];

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
    img.alt = producto.alt || producto.nombre;
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
    h4.textContent = producto.nombre;

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
      modalImage.alt = producto.alt || producto.nombre;
    }

    if (modalTag) modalTag.textContent = producto.tag;
    if (modalTitle) modalTitle.textContent = producto.nombre;
    if (modalDesc) modalDesc.textContent = producto.descripcion;
    if (modalIg) modalIg.href = instagramUrl;
    if (modalWa) modalWa.href = getWhatsappHref(producto.nombre);

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
