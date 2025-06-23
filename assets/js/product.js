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
  window.location.href = `cart.html?add=${encodeURIComponent(productName)}`;
}

//  product tab script 

  const newArrivals = [
    { name: "European Zesty Lemon", price: 80, image: "https://via.placeholder.com/70x70.png?text=Lemon", rating: 4, category: "Fruits" },
    { name: "Apple from Kashmir", price: 240, image: "https://via.placeholder.com/70x70.png?text=Apple", rating: 5, category: "Fruits" },
    { name: "Coconuts", price: 320, image: "https://via.placeholder.com/70x70.png?text=Coconut", rating: 4, category: "Fruits" },
  ];

  const trending = [
    { name: "Organic Garlic", price: 150, image: "https://via.placeholder.com/70x70.png?text=Garlic", rating: 4, category: "Vegetables" },
    { name: "Strawberries", price: 240, image: "https://via.placeholder.com/70x70.png?text=Strawberries", rating: 5, category: "Fruits" },
    { name: "Spinach", price: 25, image: "https://via.placeholder.com/70x70.png?text=Spinach", rating: 3, category: "Leafy Greens" },
  ];

  const bestSellings = [
    { name: "Raddish", price: 80, image: "https://via.placeholder.com/70x70.png?text=Raddish", rating: 4, category: "Vegetables" },
    { name: "Sardines in Fish", price: 100, image: "https://via.placeholder.com/70x70.png?text=Sardines", rating: 5, category: "Seafood" },
    { name: "Coriander Leaves", price: 15, image: "https://via.placeholder.com/70x70.png?text=Coriander", rating: 4, category: "Herbs" },
  ];

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
        <img src="${p.image}" alt="${p.name}" />
        <div class="product-info">
          <h4>${p.name}</h4>
          <div class="price">₹ ${p.price}</div>
          <div class="stars">${"★".repeat(p.rating)}${"☆".repeat(5 - p.rating)}</div>
          <button onclick="addToCart('${p.name}')">Add to cart</button>
        </div>
      `;
      container.appendChild(div);
    });
  }

  showTab("new"); // Show New Arrivals by default

