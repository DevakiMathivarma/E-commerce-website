   function toggleMenu() {
      document.getElementById('nav-links').classList.toggle('active');
    }

    document.addEventListener("DOMContentLoaded", () => {
      updateCartCount();
    });
        document.addEventListener("DOMContentLoaded", () => {
            const container = document.getElementById("productGrid");
            const range = document.getElementById("priceRange");
            const priceLabel = document.getElementById("priceValue");
            const sortSelect = document.getElementById("sortSelect");

            const products = productList.filter(p => p.category?.toLowerCase() === "fruits");

            function displayProducts(list) {
                container.innerHTML = "";
                list.forEach(product => {
                    const card = document.createElement("div");
                    card.className = "product-card";
                    card.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}" onclick="goToDetails('${product.name}')" />
            <h3>${product.name}</h3>
            <div class="price">₹ ${product.price}</div>
            <div class="stars">${"★".repeat(product.rating)}${"☆".repeat(5 - product.rating)}</div>
            <button onclick="addToCart('${product.name}')">Add to cart</button>
          `;
                    container.appendChild(card);
                });
            }

            function sortAndFilter() {
                let filtered = products.filter(p => p.price <= parseInt(range.value));
                const sort = sortSelect.value;
                if (sort === "priceLowHigh") filtered.sort((a, b) => a.price - b.price);
                if (sort === "priceHighLow") filtered.sort((a, b) => b.price - a.price);
                if (sort === "ratingHighLow") filtered.sort((a, b) => b.rating - a.rating);
                displayProducts(filtered);
            }

            range.addEventListener("input", () => {
                priceLabel.textContent = range.value;
                sortAndFilter();
            });

            sortSelect.addEventListener("change", sortAndFilter);

            displayProducts(products);
            updateCartCount();
        });

        // function addToCart(productName) {
        //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
        //     const index = cart.findIndex(item => item.name === productName);
        //     if (index !== -1) {
        //         cart[index].quantity += 1;
        //     } else {
        //         cart.push({ name: productName, quantity: 1 });
        //     }
        //     localStorage.setItem("cart", JSON.stringify(cart));
        //     updateCartCount();
        //     alert("Added to cart");
        // }
         // Add item to cart
    function addToCart(productName) {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    alert("Please login first to add items to cart.");
    window.location.href = "register.html"; // redirect to login/register page
    return;
  }
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


        function updateCartCount() {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const count = cart.reduce((acc, item) => acc + item.quantity, 0);
            const countSpan = document.getElementById("cart-count");
            if (countSpan) countSpan.textContent = count;
        }

        function goToCart() {
            window.location.href = "cart.html";
        }

        function goToDetails(name) {
            window.location.href = `product_description.html?product=${encodeURIComponent(name)}`;
        }

  const searchBtn = document.querySelector(".search-btn");
  const searchInput = document.querySelector(".search-box");

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return alert("Please enter a product name");

    // Save the searched product name in localStorage
    localStorage.setItem("selectedProduct", query);
    window.location.href = "product_description.html";
  });