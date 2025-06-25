document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-list");

  productList.slice(0, 4).forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" onclick="goToDetails('${product.name}')" />
      <h3>${product.name}</h3>
      <div class="price">₹ ${product.price}</div>
      <div class="stars">${generateStars(product.rating)}</div>
      <button onclick="addToCart('${product.name}')">Add to cart</button>
    `;

    container.appendChild(card);
  });
});

function generateStars(rating) {
  const filled = "★".repeat(rating);
  const empty = "☆".repeat(5 - rating);
  return filled + empty;
}

function goToDetails(productName) {
  window.location.href = `product_description.html?product=${encodeURIComponent(productName)}`;
}

function addToCart(productName) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    alert("Please login first to add items to cart.");
    window.location.href = "register.html"; // redirect to login/register page
    return;
  }
  window.location.href = `cart.html?add=${encodeURIComponent(productName)}`;
}

//  product tab script 

const newArrivals = productList.slice(50, 53);
const trending = productList.slice(54, 57);
const bestSellings = productList.slice(57, 60);

  // ⬇ Register them into global productList (if available)
  if (typeof productList !== "undefined") {
    [...newArrivals, ...trending, ...bestSellings].forEach(p => {
      if (!productList.some(existing => existing.name === p.name)) {
        productList.push({
          name: p.name,
          price: p.price,
          images: [p.image], // cart.html uses images[0]
          rating: p.rating,
          category: p.category,
          description: `${p.name} is one of our quality items.`,
          details: {
            appearance: {
              color: "Fresh", shape: "Natural", seeds: "N/A", freshness: "Very Fresh"
            },
            tasteAndAroma: {
              flavor: "Delicious", aroma: "Mild"
            },
            nutrition: {
              vitaminC: "High", fiber: "Good", otherNutrients: "Rich", calories: "Medium"
            },
            uses: {
              fresh: "Can be eaten raw", culinary: "Used in many dishes"
            },
            storage: {
              refrigeration: "Yes", humidity: "Low"
            }
          }
        });
      }
    });
  }

  // Render tab products
  function showTab(tab) {
    document.querySelectorAll(".tab-buttons button").forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.querySelector(`.tab-buttons button[onclick*="${tab}"]`);
    if (activeBtn) activeBtn.classList.add("active");

    const container = document.getElementById("tab-products");
    container.innerHTML = "";

    const products = tab === "new" ? newArrivals : tab === "trending" ? trending : bestSellings;

    products.forEach(p => {
      const div = document.createElement("div");
      div.className = "product-item";
      div.innerHTML = `
        <img src="${p.images[0]}" alt="${p.name}" />
        <div class="product-info">
          <h4>${p.name}</h4>
          <div class="price">₹ ${p.price}</div>
          <div class="stars">${"★".repeat(p.rating)}${"☆".repeat(5 - p.rating)}</div>
          <button class="trend-btn"onclick="addToCart('${p.name}')">Add to cart</button>
        </div>
      `;
      container.appendChild(div);
    });
  }

  showTab("new"); // Show New Arrivals by default

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-bestlist");

  productList.slice(4, 8).forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.images[0]}" alt="${product.name}" onclick="goToDetails('${product.name}')" />
      <h3>${product.name}</h3>
      <div class="price">₹ ${product.price}</div>
      <div class="stars">${generateStars(product.rating)}</div>
      <button onclick="addToCart('${product.name}')">Add to cart</button>
    `;

    container.appendChild(card);
  });

});

