  document.addEventListener("DOMContentLoaded", () => {
      const cartItemsContainer = document.getElementById("cart-items");
      const cartSummaryContainer = document.getElementById("cart-summary");

      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      if (cartItemsContainer && cartSummaryContainer) {
        renderCart(); // Only run render if on cart.html
      }

      updateCartCount();
    });

    function renderCart() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cartItemsContainer = document.getElementById("cart-items");
      const cartSummaryContainer = document.getElementById("cart-summary");
      let subtotal = 0;

      cartItemsContainer.innerHTML = cart.map((item, index) => {
        const product = productList.find(p => p.name === item.name);
        const totalPrice = product.price * item.quantity;
        subtotal += totalPrice;

        return `
        <div class="cart-item">
          <img src="${product.images[0]}" alt="${product.name}" />
          <div class="cart-info">
            <p class="cat">${product.category || 'Vegetables'}</p>
            <p class="name"><strong>${product.name.toUpperCase()}</strong></p>
            <p class="price">₹ ${product.price}</p>
          </div>
          <div class="qty-control">
            <button onclick="updateQty(${index}, -1)">-</button>
            <span>${item.quantity}</span>
            <button onclick="updateQty(${index}, 1)">+</button>
          </div>
        </div>
      `;
      }).join("");

      const discount = Math.round(subtotal * 0.05);
      const delivery = 0;
      const total = subtotal - discount + delivery;

      cartSummaryContainer.innerHTML = `
      <div class="summary-box">
        <p><span>Subtotal</span><span>₹ ${subtotal}</span></p>
        <p><span>Delivery Charges</span><span>₹ ${delivery}</span></p>
        <p><span>Discount</span><span>- ₹ ${discount}</span></p>
        <hr />
        <p class="total"><span>TOTAL</span><span>₹ ${total}</span></p>
        <button class="checkout-btn" onclick="goToAddress()">CHECKOUT</button>
        <p class="secure-note">✅ 100% Secure Payments</p>
      </div>
    `;

      updateCartCount();
    }

    function updateQty(index, change) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart[index].quantity + change < 1) return;
      cart[index].quantity += change;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }

    function updateCartCount() {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cart.reduce((acc, item) => acc + item.quantity, 0);
      const counter = document.getElementById("cart-count");
      if (counter) counter.textContent = count;
    }

    function goToCart() {
      window.location.href = "cart.html";
    }

    // ✅ Add this globally for all Add to Cart buttons
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


    function goToAddress() {
      document.querySelector(".cart-container").style.display = "none";
      document.getElementById("address-form").style.display = "block";
      document.getElementById("payment-wrapper").style.display = "none";
      document.getElementById("success-section").style.display = "none";

      const steps = document.querySelectorAll(".cart-steps .step");
      steps[0].classList.remove("active");
      steps[1].classList.add("active");
      localStorage.setItem("currentStep", "address");
    }

    function submitAddress() {
      const name = document.getElementById("name").value.trim();
      const mobile = document.getElementById("mobile").value.trim();
      const address = document.getElementById("address").value.trim();
      const city = document.getElementById("city").value.trim();
      const state = document.getElementById("state").value.trim();

      if (!name || !mobile || !address || !city || !state) {
        return alert("Please fill all fields.");
      }

      alert("Address added successfully!");

      document.getElementById("address-form").style.display = "none";
      document.getElementById("payment-wrapper").style.display = "flex";
      document.getElementById("success-section").style.display = "none";

      // Update step indicator
      const steps = document.querySelectorAll(".cart-steps .step");
      steps[1].classList.remove("active");
      steps[2].classList.add("active");

      // Copy summary
      const originalSummary = document.querySelector("#cart-summary .summary-box");
      const paymentSummary = document.getElementById("payment-summary");
      if (originalSummary && paymentSummary) {
        paymentSummary.innerHTML = originalSummary.outerHTML;

        // Change button
        const btn = paymentSummary.querySelector("button");
        if (btn) {
          btn.textContent = "PROCEED TO PAY";
          btn.classList.remove("checkout-btn");
          btn.classList.add("pay-btn");

          // Inline styles
          btn.style.padding = "14px 28px";
          btn.style.backgroundColor = "#3cb831";
          btn.style.color = "#fff";
          btn.style.fontSize = "13px";
          btn.style.fontWeight = "bold";
          btn.style.border = "none";
          btn.style.borderRadius = "6px";
          btn.style.cursor = "pointer";

          // Click handler
          btn.onclick = submitPayment;
        }
      }
      localStorage.setItem("currentStep", "payment");
    }
    function submitPayment() {
      const card = document.getElementById("card-number").value.trim();
      const cvv = document.getElementById("cvv").value.trim();
      const expiry = document.getElementById("expiry").value.trim();
      const cname = document.getElementById("card-name").value.trim();

      if (!card || !cvv || !expiry || !cname) {
        alert("Please enter all payment fields.");
        return;
      }

      // ✅ Clear cart from localStorage
      localStorage.removeItem("cart");
      localStorage.setItem("currentStep", "success");
      localStorage.removeItem("currentStep");

      // ✅ Hide payment section and summary box
      document.getElementById("payment-section").style.display = "none";
      const paymentSummaryBox = document.getElementById("payment-summary");
      if (paymentSummaryBox && paymentSummaryBox.parentElement) {
        paymentSummaryBox.parentElement.style.display = "none";
      }

      // ✅ Hide cart steps (bag > address > payment)
      const cartSteps = document.querySelector(".cart-header");
      if (cartSteps) {
        cartSteps.style.display = "none";
      }

      // ✅ Show success message only
      document.getElementById("success-section").style.display = "block";
      document.getElementById("success-section").scrollIntoView({ behavior: "smooth" });

      // ✅ Update cart count to 0
      updateCartCount();
    }
    function toggleMenu() {
      document.getElementById('nav-links').classList.toggle('active');
    }
