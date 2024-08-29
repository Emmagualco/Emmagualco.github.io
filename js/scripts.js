document.addEventListener('DOMContentLoaded', () => {
    // Obtener el botón de alternancia del menú y el contenedor de enlaces
    const menuToggle = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('.navbar-collapse');

    // Asegurarse de que los elementos existen
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Alternar la clase 'show' para mostrar u ocultar el menú en pantallas móviles
            navLinks.classList.toggle('show');
        });
    }
});

