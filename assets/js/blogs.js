 function toggleMenu() {
      document.getElementById('nav-links').classList.toggle('active');
    }

     document.addEventListener("DOMContentLoaded", () => {
      updateCartCount();
    });

    // Add item to cart
    function addToCart(productName) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const index = cart.findIndex(item => item.name === productName);
      if (index !== -1) {
        cart[index].quantity += 1;
      } else {
        cart.push({ name: productName, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      alert("Added to cart");
    }

    // Update count badge
    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cart.reduce((acc, item) => acc + item.quantity, 0);
      const countSpan = document.getElementById("cart-count");
      if (countSpan) {
        countSpan.textContent = count;
      }
    }

    // Navigate to cart page
    function goToCart() {
      window.location.href = "cart.html";
    }