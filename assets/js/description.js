document.addEventListener("DOMContentLoaded", () => {
            const params = new URLSearchParams(window.location.search);
            const productName = params.get("product");
            const product = productList.find(p => p.name.toLowerCase() === productName?.toLowerCase());
            const container = document.getElementById("product-detail");

            if (!product) {
                container.innerHTML = "<p>Product not found.</p>";
                return;
            }

            let selectedWeight = "250g";
            let selectedQuantity = 1;

            function renderProduct() {
                container.innerHTML = `
      <div class="product-top">
        <div class="image-column">
          <img id="main-image" src="${product.images[0]}" alt="${product.name}" class="main-img" />
          <div class="thumbs">
            ${product.images.map(img => `<img src="${img}" class="thumb-img" onclick="document.getElementById('main-image').src='${img}'">`).join('')}
          </div>
        </div>

        <div class="info-column">
          <h1>${product.name}</h1>
          <p class="tagline">Each of our products are hand-selected from local farmers and helps you improve good health .</p>
          <p class="price">₹ ${product.price}</p>
          <p class="tax-note">Tax included | Shipping calculated at checkout.</p>

         

          <div class="qty-control">
            <button onclick="changeQty(-1)">-</button>
            <span id="qty-display">${selectedQuantity}</span>
            <button onclick="changeQty(1)">+</button>
          </div>
          <div class="weight-selection">
  <label class="quantity-label">Quantity: <span class="selected-weight">${selectedWeight}</span></label>
  <div class="checkbox-group">
    ${["250g", "500g", "1kg"].map(weight => `
      <label class="checkbox-btn">
        <input type="radio" name="weight" value="${weight}" ${selectedWeight === weight ? "checked" : ""} onchange="setWeight('${weight}')">
        <span class="custom-checkbox"></span> ${weight}
      </label>
    `).join('')}
  </div>
</div>

          <div class="selection-info">
            Selected: <strong>${selectedQuantity} × ${selectedWeight}</strong>
          </div>

          <button class="add-cart-btn" onclick="addToCart('${product.name}')">Add to Cart</button>

          <div class="static-policy">
            <p> <img src="assets/images/free ship.PNG"><strong> Free shipping on all orders over 450 rupees</strong></p>
            <p> <img src="assets/images/clock.PNG"><strong> Delivery in 3-4 working days shipping & return</strong></p>
          </div>
         
        </div>
      </div>

      <div class="product-bottom">
        <h2 style="margin-top:30px;">Description</h2>
        <p class="description-text">${product.description}</p>

        <div class="details-section">
          <h3>Product Details</h3>
          <h4>Appearance</h4>
          <ul>
            <li><strong>Color:</strong> ${product.details.appearance.color}</li>
            <li><strong>Shape:</strong> ${product.details.appearance.shape}</li>
            <li><strong>Seeds:</strong> ${product.details.appearance.seeds}</li>
            <li><strong>Freshness:</strong> ${product.details.appearance.freshness}</li>
          </ul>
          <h4>Taste & Aroma</h4>
          <ul>
            <li><strong>Flavor:</strong> ${product.details.tasteAndAroma.flavor}</li>
            <li><strong>Aroma:</strong> ${product.details.tasteAndAroma.aroma}</li>
          </ul>
          <h4>Nutrition</h4>
          <ul>
            <li><strong>Vitamin C:</strong> ${product.details.nutrition.vitaminC}</li>
            <li><strong>Fiber:</strong> ${product.details.nutrition.fiber}</li>
            <li><strong>Other Nutrients:</strong> ${product.details.nutrition.otherNutrients}</li>
            <li><strong>Calories:</strong> ${product.details.nutrition.calories}</li>
          </ul>
          <h4>Uses</h4>
          <ul>
            <li><strong>Fresh:</strong> ${product.details.uses.fresh}</li>
            <li><strong>Culinary:</strong> ${product.details.uses.culinary}</li>
          </ul>
          <h4>Storage</h4>
          <ul>
            <li><strong>Refrigeration:</strong> ${product.details.storage.refrigeration}</li>
            <li><strong>Humidity:</strong> ${product.details.storage.humidity}</li>
          </ul>
        </div>
      </div>
    `;

                document.getElementById("qty-display").textContent = selectedQuantity;
            }

            window.setWeight = (weight) => {
                selectedWeight = weight;
                document.querySelector(".selected-weight").textContent = selectedWeight;
                renderProduct();
            };

            window.changeQty = (delta) => {
                selectedQuantity = Math.max(1, selectedQuantity + delta);
                document.getElementById("qty-display").textContent = selectedQuantity;
                document.querySelector(".selection-info").innerHTML = `Selected: <strong>${selectedQuantity} × ${selectedWeight}</strong>`;
            };

            // window.addToCart = (productName) => {
            //     const item = {
            //         product: productName,
            //         quantity: selectedQuantity,
            //         weight: selectedWeight
            //     };
            //     alert(`Added to cart: ${JSON.stringify(item)}`);
            // };

            renderProduct();
        });
        // function addToCart(productName) {
        //   const 
        //     const cart = JSON.parse(localStorage.getItem("cart")) || [];
        //     const index = cart.findIndex(item => item.name === productName);
        //     if (index !== -1) {
        //         cart[index].quantity += 1;
        //     } else {
        //         cart.push({ name: productName, quantity: 1 });
        //     }
        //     localStorage.setItem("cart", JSON.stringify(cart));
        //      alert(`Added to cart: ${JSON.stringify(productName)}`);
        //     // window.location.href = "cart.html";
        // }

         function addToCart(productName) {
          const quantitySelected = parseInt(document.getElementById("qty-display").textContent.trim(), 10) || 1;

            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const index = cart.findIndex(item => item.name === productName);
            if (index !== -1) {
                cart[index].quantity += 1;
            } else {
                cart.push({ name: productName, quantity:quantitySelected });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`Added to carts: ${productName}`)
            window.location.reload();
        }
        document.addEventListener("DOMContentLoaded", updateCartCount);

        function updateCartCount() {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const count = cart.reduce((acc, item) => acc + item.quantity, 0);
            const counter = document.getElementById("cart-count");
            if (counter) counter.textContent = count;
        }

        function goToCart() {
            window.location.href = "cart.html";
        }

         function toggleMenu() {
          document.getElementById('nav-links').classList.toggle('active');}
//    
// document.addEventListener("DOMContentLoaded", () => {
//     const params = new URLSearchParams(window.location.search);
//     const productName = params.get("product");
//     const product = productList.find(p => p.name.toLowerCase() === productName?.toLowerCase());
//     const container = document.getElementById("product-detail");

//     if (!product) {
//         container.innerHTML = "<p>Product not found.</p>";
//         return;
//     }

//     let selectedWeight = "250g";
//     let selectedQuantity = 1;

//     function renderProduct() {
//         container.innerHTML = `
//         <div class="product-top">
//             <div class="image-column">
//                 <img id="main-image" src="${product.images[0]}" alt="${product.name}" class="main-img" />
//                 <div class="thumbs">
//                     ${product.images.map(img => `<img src="${img}" class="thumb-img" onclick="document.getElementById('main-image').src='${img}'">`).join('')}
//                 </div>
//             </div>

//             <div class="info-column">
//                 <h1>${product.name}</h1>
//                 <p class="tagline">Each of our products are hand-selected from local farmers and helps you improve good health.</p>
//                 <p class="price">₹ ${product.price}</p>
//                 <p class="tax-note">Tax included | Shipping calculated at checkout.</p>

//                 <div class="qty-control">
//                     <button onclick="changeQty(-1)">-</button>
//                     <span id="qty-display">${selectedQuantity}</span>
//                     <button onclick="changeQty(1)">+</button>
//                 </div>

//                 <div class="weight-selection">
//                     <label class="quantity-label">Quantity: <span class="selected-weight">${selectedWeight}</span></label>
//                     <div class="checkbox-group">
//                         ${["250g", "500g", "1kg"].map(weight => `
//                             <label class="checkbox-btn">
//                                 <input type="radio" name="weight" value="${weight}" ${selectedWeight === weight ? "checked" : ""} onchange="setWeight('${weight}')">
//                                 <span class="custom-checkbox"></span> ${weight}
//                             </label>
//                         `).join('')}
//                     </div>
//                 </div>

//                 <div class="selection-info">
//                     Selected: <strong>${selectedQuantity} × ${selectedWeight}</strong>
//                 </div>

//                 <button class="add-cart-btn" onclick="addToCart('${product.name}')">Add to Cart</button>

//                 <div class="static-policy">
//                     <p><img src="assets/images/free ship.PNG"><strong> Free shipping on all orders over 450 rupees</strong></p>
//                     <p><img src="assets/images/clock.PNG"><strong> Delivery in 3-4 working days shipping & return</strong></p>
//                 </div>
//             </div>
//         </div>

//         <div class="product-bottom">
//             <h2 style="margin-top:30px;">Description</h2>
//             <p class="description-text">${product.description}</p>

//             <div class="details-section">
//                 <h3>Product Details</h3>
//                 <h4>Appearance</h4>
//                 <ul>
//                     <li><strong>Color:</strong> ${product.details.appearance.color}</li>
//                     <li><strong>Shape:</strong> ${product.details.appearance.shape}</li>
//                     <li><strong>Seeds:</strong> ${product.details.appearance.seeds}</li>
//                     <li><strong>Freshness:</strong> ${product.details.appearance.freshness}</li>
//                 </ul>
//                 <h4>Taste & Aroma</h4>
//                 <ul>
//                     <li><strong>Flavor:</strong> ${product.details.tasteAndAroma.flavor}</li>
//                     <li><strong>Aroma:</strong> ${product.details.tasteAndAroma.aroma}</li>
//                 </ul>
//                 <h4>Nutrition</h4>
//                 <ul>
//                     <li><strong>Vitamin C:</strong> ${product.details.nutrition.vitaminC}</li>
//                     <li><strong>Fiber:</strong> ${product.details.nutrition.fiber}</li>
//                     <li><strong>Other Nutrients:</strong> ${product.details.nutrition.otherNutrients}</li>
//                     <li><strong>Calories:</strong> ${product.details.nutrition.calories}</li>
//                 </ul>
//                 <h4>Uses</h4>
//                 <ul>
//                     <li><strong>Fresh:</strong> ${product.details.uses.fresh}</li>
//                     <li><strong>Culinary:</strong> ${product.details.uses.culinary}</li>
//                 </ul>
//                 <h4>Storage</h4>
//                 <ul>
//                     <li><strong>Refrigeration:</strong> ${product.details.storage.refrigeration}</li>
//                     <li><strong>Humidity:</strong> ${product.details.storage.humidity}</li>
//                 </ul>
//             </div>
//         </div>
//         `;

//         document.getElementById("qty-display").textContent = selectedQuantity;
//     }

//     // update weight
//     window.setWeight = (weight) => {
//         selectedWeight = weight;
//         document.querySelector(".selected-weight").textContent = selectedWeight;
//         renderProduct();
//     };

//     // update quantity
//     window.changeQty = (delta) => {
//         selectedQuantity = Math.max(1, selectedQuantity + delta);
//         document.getElementById("qty-display").textContent = selectedQuantity;
//         document.querySelector(".selection-info").innerHTML = `Selected: <strong>${selectedQuantity} × ${selectedWeight}</strong>`;
//     };

//     // ✅ FINAL addToCart function with localStorage + redirect
//     window.addToCart = (productName) => {
//         const item = {
//             product: productName,
//             quantity: selectedQuantity,
//             weight: selectedWeight
//         };

//         const cart = JSON.parse(localStorage.getItem("cart")) || [];
//         const index = cart.findIndex(c => c.product === productName && c.weight === selectedWeight);
//         if (index !== -1) {
//             cart[index].quantity += selectedQuantity;
//         } else {
//             cart.push(item);
//         }

//         localStorage.setItem("cart", JSON.stringify(cart));
//         window.location.href = "cart.html";
//     };

//     renderProduct();
// });

// // cart count updater
// document.addEventListener("DOMContentLoaded", updateCartCount);

// function updateCartCount() {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const count = cart.reduce((acc, item) => acc + item.quantity, 0);
//     const counter = document.getElementById("cart-count");
//     if (counter) counter.textContent = count;
// }

// function goToCart() {
//     window.location.href = "cart.html";
// }

// function toggleMenu() {
//     document.getElementById('nav-links').classList.toggle('active');
// }

