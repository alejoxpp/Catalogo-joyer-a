// Productos de ejemplo (6). Cambia rutas e textos por tus imágenes y descripciones reales.
const productos = [
  { id: "p1", nombre: "Anillo Sereno", imagen: "img/product1.jpg", descripcion: "Anillo con baño sutil y piedra facetada. Diseño atemporal y femenino." },
  { id: "p2", nombre: "Collar Aurora", imagen: "img/product2.jpg", descripcion: "Collar de cadena fina con colgante minimalista, perfecto para capas." },
  { id: "p3", nombre: "Pulsera Alba", imagen: "img/product3.jpg", descripcion: "Pulsera articulada con cierre seguro y acabado pulido." },
  { id: "p4", nombre: "Aros Bruma", imagen: "img/product4.jpg", descripcion: "Aros pequeños con textura delicada, para uso diario y ocasiones especiales." },
  { id: "p5", nombre: "Anillo Lúa", imagen: "img/product5.jpg", descripcion: "Anillo con detalle central y acabado mate, cómodo y elegante." },
  { id: "p6", nombre: "Gargantilla Nube", imagen: "img/product6.jpg", descripcion: "Gargantilla ligera con diseño curvo y cierre invisible." }
];

// DOM
const grid = document.getElementById("productosGrid");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalWhatsapp = document.getElementById("modalWhatsapp");
const modalIG = document.getElementById("modalIG");
const modalClose = document.getElementById("modalClose");
const yearSpan = document.getElementById("year");

// Año en footer
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Render productos
function renderProductos(){
  const frag = document.createDocumentFragment();
  productos.forEach(p=>{
    const article = document.createElement('article');
    article.className = 'card';
    article.innerHTML = `
      <figure class="card-figure">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy">
      </figure>
      <div>
        <h4>${p.nombre}</h4>
        <p>${p.descripcion}</p>
      </div>
      <div class="card-actions">
        <button class="btn btn-primary btn-see" data-id="${p.id}">Ver detalle</button>
        <a class="btn btn-whatsapp" href="https://wa.me/+573000000000?text=${encodeURIComponent('Hola Vlover, estoy interesado en ' + p.nombre)}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    `;
    frag.appendChild(article);
  });
  grid.appendChild(frag);

  // listeners ver detalle
  document.querySelectorAll('.btn-see').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = e.currentTarget.dataset.id;
      const producto = productos.find(x=>x.id === id);
      if(producto) abrirModal(producto);
    });
  });
}
renderProductos();

// Modal
function abrirModal(producto){
  modalImg.src = producto.imagen;
  modalImg.alt = producto.nombre;
  modalTitle.textContent = producto.nombre;
  modalDesc.textContent = producto.descripcion;
  modalWhatsapp.href = `https://wa.me/+573000000000?text=${encodeURIComponent('Hola Vlover, quisiera saber el precio y disponibilidad de: ' + producto.nombre)}`;
  modalIG.href = `https://instagram.com/vlover`;
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

function cerrarModal(){
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
  modalImg.src = '';
}

modalClose.addEventListener('click', cerrarModal);
modal.addEventListener('click', (e)=> { if(e.target === modal) cerrarModal(); });
document.addEventListener('keydown', (e)=> { if(e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') cerrarModal(); });

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});