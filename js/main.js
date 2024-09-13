document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.querySelector('.navbar-nav .badge');
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');

    // Inicializar el carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Función para actualizar el número de productos en el carrito
    function updateCartCount() {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        localStorage.setItem('cartCount', totalCount); // Actualizar el contador en localStorage
        if (cartCountElement) {
            cartCountElement.textContent = totalCount;
        }
    }

    // Manejar clic en el botón de agregar al carrito
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar comportamiento predeterminado del botón

            const productId = button.dataset.productId;
            const productName = button.dataset.productName;
            const productPrice = parseFloat(button.dataset.productPrice);

            if (!productId || !productName || isNaN(productPrice)) {
                console.error('Faltan datos en el botón de agregar al carrito.');
                return;
            }

            // Verificar si el producto ya está en el carrito
            const existingProductIndex = cart.findIndex(item => item.id === productId);
            if (existingProductIndex === -1) {
                // Agregar producto al carrito si no existe
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            } else {
                // Incrementar la cantidad si el producto ya está en el carrito
                cart[existingProductIndex].quantity += 1;
            }

            // Actualizar carrito en localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
        });
    });

    // Mostrar contenido del carrito al cargar la página
    updateCartCount();
});




