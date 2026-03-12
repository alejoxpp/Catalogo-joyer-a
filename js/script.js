document.addEventListener("DOMContentLoaded", function () {

  // ── DATA ────────────────────────────────────────────────────────────────
  var productos = [
    { id: "p1", icon: "\uD83D\uDC8D", tag: "Anillos",  nombre: "Anillo Sereno",    descripcion: "Dise\u00F1o atemporal con piedra facetada y ba\u00F1o delicado. Elegancia silenciosa para el uso diario." },
    { id: "p2", icon: "\uD83D\uDCFF", tag: "Collares", nombre: "Collar Aurora",    descripcion: "Cadena fina con colgante minimalista. Perfecto en capas o como pieza \u00FAnica que centra la mirada." },
    { id: "p3", icon: "\u231A",        tag: "Pulseras", nombre: "Pulsera Alba",     descripcion: "Articulada, cierre seguro y acabado pulido. Discreta de d\u00EDa, protagonista de noche." },
    { id: "p4", icon: "\u2728",        tag: "Aretes",   nombre: "Aros Bruma",       descripcion: "Textura delicada en formato peque\u00F1o. Vers\u00E1tiles para el d\u00EDa a d\u00EDa y las ocasiones especiales." },
    { id: "p5", icon: "\uD83D\uDC8D", tag: "Anillos",  nombre: "Anillo L\u00FAa",  descripcion: "Detalle central con acabado mate. C\u00F3modo y con una presencia que no pasa desapercibida." },
    { id: "p6", icon: "\uD83D\uDCFF", tag: "Collares", nombre: "Gargantilla Nube", descripcion: "Dise\u00F1o curvo de l\u00EDneas suaves y cierre invisible. Ligera y sofisticada." }
  ];

  // ── REFS ─────────────────────────────────────────────────────────────────
  var grid       = document.getElementById("productosGrid");
  var modal      = document.getElementById("modal");
  var modalIcon  = document.getElementById("modalIcon");
  var modalTitle = document.getElementById("modalTitle");
  var modalDesc  = document.getElementById("modalDesc");
  var modalWa    = document.getElementById("modalWhatsapp");
  var yearSpan   = document.getElementById("year");

  // Catálogo completo (overlay)
  var catalogoPage    = document.getElementById("catalogoPage");
  var openCatalogBtn  = document.getElementById("openCatalogBtn");
  var openCatalogBtn2 = document.getElementById("openCatalogBtnSecondary");
  var catalogoBack    = document.getElementById("catalogoBack");
  var catalogoGrid    = document.getElementById("catalogoGrid");
  var filterChips     = document.querySelectorAll(".filter-chip");

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // ── RENDER CARDS ──────────────────────────────────────────────────────────
  function renderProductos() {
    if (!grid) return;
    productos.forEach(function (p, i) {
      var art = document.createElement("article");
      art.className = "card reveal";
      art.style.transitionDelay = (i * 65) + "ms";

      var figure = document.createElement("div");
      figure.className = "card-figure";
      var iconSpan = document.createElement("span");
      iconSpan.className = "card-icon";
      iconSpan.textContent = p.icon;
      figure.appendChild(iconSpan);

      var body = document.createElement("div");
      body.className = "card-body";
      var tag = document.createElement("span");
      tag.className = "card-tag";
      tag.textContent = p.tag;
      var h4 = document.createElement("h4");
      h4.textContent = p.nombre;
      var desc = document.createElement("p");
      desc.textContent = p.descripcion;
      body.appendChild(tag);
      body.appendChild(h4);
      body.appendChild(desc);

      var footer = document.createElement("div");
      footer.className = "card-footer";

      var btnDetail = document.createElement("button");
      btnDetail.className = "card-btn-detail";
      btnDetail.textContent = "Ver detalle";
      btnDetail.addEventListener("click", function () { abrirModal(p); });

      var btnWa = document.createElement("a");
      btnWa.className = "card-btn-wa";
      btnWa.href = "https://wa.me/+573000000000?text=" + encodeURIComponent("Hola Vlover, me interesa: " + p.nombre);
      btnWa.target = "_blank";
      btnWa.rel = "noopener noreferrer";
      btnWa.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.857L0 24l6.337-1.508A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.503-5.24-1.382l-.376-.221-3.763.895.952-3.652-.243-.386A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path></svg> WA';

      footer.appendChild(btnDetail);
      footer.appendChild(btnWa);

      art.appendChild(figure);
      art.appendChild(body);
      art.appendChild(footer);
      grid.appendChild(art);
    });
    triggerReveal();
  }

  // ── RENDER CATÁLOGO COMPLETO ────────────────────────────────────────────────
  function renderCatalogoVista() {
    if (!catalogoGrid) return;
    catalogoGrid.innerHTML = "";
    productos.forEach(function (p) {
      var art = document.createElement("article");
      art.className = "card catalog-card reveal";
      art.dataset.tag = p.tag;

      var figure = document.createElement("div");
      figure.className = "card-figure";
      var iconSpan = document.createElement("span");
      iconSpan.className = "card-icon";
      iconSpan.textContent = p.icon;
      figure.appendChild(iconSpan);

      var body = document.createElement("div");
      body.className = "card-body";
      var tag = document.createElement("span");
      tag.className = "card-tag";
      tag.textContent = p.tag;
      var h4 = document.createElement("h4");
      h4.textContent = p.nombre;
      var desc = document.createElement("p");
      desc.textContent = p.descripcion;
      body.appendChild(tag);
      body.appendChild(h4);
      body.appendChild(desc);

      var footer = document.createElement("div");
      footer.className = "card-footer";

      var btnWa = document.createElement("a");
      btnWa.className = "card-btn-wa";
      btnWa.href = "https://wa.me/+573000000000?text=" + encodeURIComponent("Hola Vlover, me interesa: " + p.nombre);
      btnWa.target = "_blank";
      btnWa.rel = "noopener noreferrer";
      btnWa.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.857L0 24l6.337-1.508A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"></path></svg> Consultar por WhatsApp';

      footer.appendChild(btnWa);

      art.appendChild(figure);
      art.appendChild(body);
      art.appendChild(footer);
      catalogoGrid.appendChild(art);
    });
  }

  // ── MODAL ─────────────────────────────────────────────────────────────────
  function abrirModal(p) {
    if (!modal) return;
    modalIcon.textContent  = p.icon;
    modalTitle.textContent = p.nombre;
    modalDesc.textContent  = p.descripcion;
    modalWa.href = "https://wa.me/+573000000000?text=" + encodeURIComponent("Hola Vlover, quisiera precio y disponibilidad de: " + p.nombre);
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
  if (modal)    modal.addEventListener("click", function (e) { if (e.target === modal) cerrarModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") cerrarModal(); });

  // ── CATÁLOGO OVERLAY: ABRIR / CERRAR ────────────────────────────────────────
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
    openCatalogBtn.addEventListener("click", function (e) {
      e.preventDefault();
      abrirCatalogo();
    });
  }
  if (openCatalogBtn2) {
    openCatalogBtn2.addEventListener("click", function (e) {
      e.preventDefault();
      abrirCatalogo();
    });
  }
  if (catalogoBack) {
    catalogoBack.addEventListener("click", cerrarCatalogo);
  }

  if (catalogoPage) {
    catalogoPage.addEventListener("animationend", function (e) {
      if (!catalogoPage.classList.contains("catalogo-closing")) return;
      if (e.target !== catalogoPage) return;
      catalogoPage.setAttribute("aria-hidden", "true");
      document.body.classList.remove("catalogo-open");
      catalogoPage.classList.remove("catalogo-closing");
    });
  }

  // ── FILTROS CATÁLOGO ───────────────────────────────────────────────────────
  function filtrarCatalogo(tag) {
    if (!catalogoGrid) return;
    var cards = catalogoGrid.querySelectorAll(".catalog-card");
    cards.forEach(function (card) {
      var cardTag = card.dataset.tag;
      var mostrar = tag === "all" || cardTag === tag;
      card.style.display = mostrar ? "" : "none";
    });
  }

  filterChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      filterChips.forEach(function (c) { c.classList.remove("is-active"); });
      this.classList.add("is-active");
      filtrarCatalogo(this.dataset.filter);
    });
  });

  // ── NAVBAR SCROLL ─────────────────────────────────────────────────────────
  var navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", function () {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }, { passive: true });
  }

  // ── SMOOTH SCROLL ─────────────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });
  });

  // ── REVEAL ON SCROLL ──────────────────────────────────────────────────────
  function triggerReveal() {
    var items = document.querySelectorAll(".reveal:not(.visible)");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    items.forEach(function (el) { obs.observe(el); });
  }

  // ── INIT ──────────────────────────────────────────────────────────────────
  renderProductos();
  renderCatalogoVista();
  triggerReveal();

});