const iconoMenu = document.querySelector('#nav-icono'),
menu = document.querySelector('#nav-option');

iconoMenu.addEventListener('click', (e) => {

// Alternamos estilos para el menu y body
menu.classList.toggle('active');
document.body.classList.toggle('opacity');

// Alternamos su atributo 'src' para el ícono del menú
const rutaActual = e.target.getAttribute('src');

if(rutaActual == '/image/menu 1.svg'){
  e.target.setAttribute('src','/image/menu 2.svg');
}else{
  e.target.setAttribute('src','/image/menu 1.svg');
}
});
