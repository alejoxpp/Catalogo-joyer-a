// ── PRODUCTOS ──────────────────────────────────────────────────────────────
const productos = [
  { id: "p1", icon: "💍", tag: "Anillos",  nombre: "Anillo Sereno",    descripcion: "Diseño atemporal con piedra facetada y baño delicado. Elegancia silenciosa para el uso diario." },
  { id: "p2", icon: "📿", tag: "Collares", nombre: "Collar Aurora",    descripcion: "Cadena fina con colgante minimalista. Perfecto en capas o como pieza única que centra la mirada." },
  { id: "p3", icon: "⌚", tag: "Pulseras", nombre: "Pulsera Alba",     descripcion: "Articulada, cierre seguro y acabado pulido. Discreta de día, protagonista de noche." },
  { id: "p4", icon: "✨", tag: "Aretes",   nombre: "Aros Bruma",       descripcion: "Textura delicada en formato pequeño. Versátiles para el día a día y las ocasiones especiales." },
  { id: "p5", icon: "💍", tag: "Anillos",  nombre: "Anillo Lúa",       descripcion: "Detalle central con acabado mate. Cómodo y con una presencia que no pasa desapercibida." },
  { id: "p6", icon: "📿", tag: "Collares", nombre: "Gargantilla Nube", descripcion: "Diseño curvo de líneas suaves y cierre invisible. Ligera y sofisticada." }
];

// ── REFS ───────────────────────────────────────────────────────────────────
const grid       = document.getElementById("productosGrid");
const modal      = document.getElementById("modal");
const modalIcon  = document.getElementById("modalIcon");
const modalTitle = document.getElementById("modalTitle");
const modalDesc  = document.getElementById("modalDesc");
const modalWa    = document.getElementById("modalWhatsapp");

document.getElementById("year").textContent = new Date().getFullYear();

// ── RENDER CARDS ───────────────────────────────────────────────────────────
function renderProductos() {
  const frag = document.createDocumentFragment();
  productos.forEach((p, i) => {
    const art = document.createElement("article");
    art.className = "card reveal";
    art.style.transitionDelay = (i * 65) + "ms";
    art.innerHTML = `
      <div class="card-figure">
        <span class="card-icon">${p.icon}</span>
      </div>
      <div class="card-body">
        <span class="card-tag">${p.tag}</span>
        <h4>${p.nombre}</h4>
        <p>${p.descripcion}</p>
      </div>
      <div class="card-footer">
        <button class="card-btn-detail" data-id="${p.id}">Ver detalle</button>
        <a class="card-btn-wa"
           href="https://wa.me/+573000000000?text=${encodeURIComponent("Hola Vlover, me interesa: " + p.nombre)}"
           target="_blank" rel="noopener noreferrer">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.122 1.528 5.857L0 24l6.337-1.508A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.503-5.24-1.382l-.376-.221-3.763.895.952-3.652-.243-.386A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          WA
        </a>
      </div>`;
    art.querySelector(".card-btn-detail").addEventListener("click", () => abrirModal(p));
    frag.appendChild(art);
  });
  grid.appendChild(frag);
  triggerReveal();
}

// ── MODAL ──────────────────────────────────────────────────────────────────
function abrirModal(p) {
  modalIcon.textContent  = p.icon;
  modalTitle.textContent = p.nombre;
  modalDesc.textContent  = p.descripcion;
  modalWa.href = `https://wa.me/+573000000000?text=${encodeURIComponent("Hola Vlover, quisiera precio y disponibilidad de: " + p.nombre)}`;
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function cerrarModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", cerrarModal);
modal.addEventListener("click", e => { if (e.target === modal) cerrarModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarModal(); });

// ── NAVBAR SCROLL ──────────────────────────────────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

// ── SMOOTH SCROLL ──────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
});

// ── INTERSECTION REVEAL ────────────────────────────────────────────────────
function triggerReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(el => {
      if (el.isIntersecting) { el.target.classList.add("visible"); obs.unobserve(el.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
}

// ── INIT ───────────────────────────────────────────────────────────────────
renderProductos();
triggerReveal();
