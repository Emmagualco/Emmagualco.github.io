document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const addProductButton = document.getElementById('add-product');
    const clearCartButton = document.getElementById('clear-cart');

    // Función para actualizar el carrito en la vista
    function updateCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.innerHTML = '';
        let total = 0;
        let count = 0;

        cart.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;"></td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${(item.price * item.quantity).toFixed(2)}</td>
                <td><button class="btn btn-danger btn-remove" data-product-id="${item.id}">Eliminar</button></td>
            `;
            cartItems.appendChild(row);
            total += item.price * item.quantity;
            count += item.quantity;
        });

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
        cartCount.textContent = count;

        // Actualizar localStorage con los datos modificados
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('cartCount', count.toString());
    }

    // Función para vaciar el carrito
    function clearCart() {
        localStorage.removeItem('cart');
        localStorage.setItem('cartCount', '0');
        updateCart();
    }

    // Inicializar carrito
    updateCart();

    // Manejar eliminación de productos
    cartItems.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-remove')) {
            const productId = parseInt(event.target.getAttribute('data-product-id'), 10);
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Filtrar el producto a eliminar
            cart = cart.filter(item => item.id !== productId);

            // Actualizar el carrito en localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    });

    // Manejar adición de productos (para prueba)
    if (addProductButton) {
        addProductButton.addEventListener('click', () => {
            const sampleProduct = {
                id: Date.now(), // Usar un ID único
                name: 'Producto de Ejemplo',
                price: 100.00,
                quantity: 1,
                image: '../multimedia/sample-product.jpg' // Cambia la ruta de la imagen según sea necesario
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProductIndex = cart.findIndex(item => item.id === sampleProduct.id);

            if (existingProductIndex !== -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push(sampleProduct);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        });
    }

    // Manejar vaciado del carrito
    if (clearCartButton) {
        clearCartButton.addEventListener('click', clearCart);
    }
});










