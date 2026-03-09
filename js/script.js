// Datos de ejemplo: reemplaza rutas e información por tus productos reales.
// Importante: no incluimos precios según tu solicitud.
const productos = [
  { id: "p1", nombre: "Anillo Sereno", imagen: "img/anillo.jpg", descripcion: "Anillo en baño dorado con piedra facetada y diseño minimalista." },
  { id: "p2", nombre: "Collar Aurora", imagen: "img/collar.jpg", descripcion: "Collar de cadena fina y colgante de diseño exclusivo." },
  { id: "p3", nombre: "Pulsera Alba", imagen: "img/pulsera.jpg", descripcion: "Pulsera articulada con acabado pulido y cierre seguro." },
  // agrega más objetos según necesites
];

// Referencias DOM
const grid = document.getElementById("productosGrid");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalWhatsapp = document.getElementById("modalWhatsapp");
const modalClose = document.getElementById("modalClose");
const yearSpan = document.getElementById("year");

// Rellenar año en footer
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Renderizar tarjetas
function renderProductos(){
  const fragment = document.createDocumentFragment();

  productos.forEach(p => {
    const card = document.createElement("article");
    card.className = "card";
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <figure class="card-figure">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
      </figure>
      <div>
        <h4>${p.nombre}</h4>
        <p>${p.descripcion}</p>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary btn-see" data-id="${p.id}">Ver detalle</button>
        <a class="btn btn-whatsapp" href="https://wa.me/573000000000?text=Hola%20%F0%9F%92%8E%20Estoy%20interesado%20en%20${encodeURIComponent(p.nombre)}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    `;
    fragment.appendChild(card);
  });

  grid.appendChild(fragment);

  // Agregar listeners a botones "Ver detalle"
  document.querySelectorAll(".btn-see").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
      const id = e.currentTarget.dataset.id;
      const producto = productos.find(x=>x.id === id);
      if(producto) abrirModal(producto);
    });
  });
}
renderProductos();

// Modal: abrir / cerrar
function abrirModal(producto){
  modalImg.src = producto.imagen;
  modalImg.alt = producto.nombre;
  modalTitle.textContent = producto.nombre;
  modalDesc.textContent = producto.descripcion;
  modalWhatsapp.href = `https://wa.me/573000000000?text=Hola%20%F0%9F%92%8E%20Quisiera%20informaci%C3%B3n%20sobre%20${encodeURIComponent(producto.nombre)}`;
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function cerrarModal(){
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
  // limpiar src para liberar memoria
  modalImg.src = "";
}

modalClose.addEventListener("click", cerrarModal);
modal.addEventListener("click", (e)=>{
  if(e.target === modal) cerrarModal();
});
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape" && modal.getAttribute("aria-hidden")==="false") cerrarModal();
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", function(e){
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:"smooth", block:"start"});
    }
  });
});