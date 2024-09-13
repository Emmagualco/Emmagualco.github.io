document.addEventListener('DOMContentLoaded', () => {
    // Obtener el botón de alternancia del menú
    const menuToggle = document.querySelector('.navbar-toggler');

    // Asegurarse de que el elemento existe
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Alternar la visibilidad del menú en pantallas móviles usando Bootstrap
            const navLinks = document.querySelector('#collapsibleNavbar');
            if (navLinks) {
                navLinks.classList.toggle('show');
            }
        });
    }
});


