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



 window.addEventListener("DOMContentLoaded", function () {
    const registerBtn = document.getElementById("register-btn");
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Update button label
    if (registerBtn) {
      registerBtn.textContent = isLoggedIn === "true" ? "Log Out" : "Register Now";

      // Set click behavior
      registerBtn.addEventListener("click", function () {
        if (localStorage.getItem("isLoggedIn") === "true") {
          // Log out
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("currentUser");
          alert("Logged out successfully.");
          registerBtn.textContent = "Register Now";
          location.reload(); // refresh page to reflect logout
        } else {
          // Go to registration/login page
          window.location.href = "register.html"; // change if your file is different
        }
      });
    }
  });

    function toggleMenu() {
      document.getElementById('nav-links').classList.toggle('active');
    }