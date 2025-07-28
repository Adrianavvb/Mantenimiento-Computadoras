// Desplazamiento suave al botón "Contáctanos"
document.querySelector('.btn-primary').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
});

// Animación al pasar el mouse por el botón
const contactoBtn = document.querySelector('.btn-primary');
contactoBtn.addEventListener('mouseenter', () => {
  contactoBtn.style.transform = 'scale(1.05)';
});
contactoBtn.addEventListener('mouseleave', () => {
  contactoBtn.style.transform = 'scale(1)';
});

// Alternar visibilidad del menú hamburguesa
const toggleBtn = document.querySelector('.navbar-toggler');
const menuNav = document.querySelector('#menuNav');
toggleBtn.addEventListener('click', () => {
  menuNav.classList.toggle('show'); // Si no usas Bootstrap Collapse
});

// Cerrar menú al hacer clic en un enlace (Bootstrap)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const bsCollapse = new bootstrap.Collapse(menuNav, { toggle: false });
    bsCollapse.hide();
  });
});
