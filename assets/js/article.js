 document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const articles = {
    "eco-shopping": {
      title: "Eco-Friendly Shopping Tips",
     intro: `Grocery shopping may seem like a routine task, but it has a powerful impact on our environment, health, and economy. By making small, thoughtful choices during each grocery trip, we can significantly reduce our ecological footprint and promote sustainable living. From carrying reusable bags to avoiding overpackaged products, the way we shop directly influences waste production and resource usage.Shopping locally and seasonally not only supports nearby farmers but also minimizes the carbon emissions caused by long-distance transport. Organic and eco-labeled goods, while sometimes slightly more expensive, promote farming practices that are kinder to the earth and safer for our bodies.The rise in awareness about climate change and plastic pollution has encouraged many consumers to reconsider their purchasing habits. Even small steps, such as bringing your own containers or avoiding single-use plastics, can compound into meaningful environmental benefits over time.By integrating eco-conscious principles into your grocery routine, you also become more mindful of your consumption and cooking patterns. This often results in healthier eating, less food waste, and even financial savings in the long run.Moreover, sustainable grocery shopping isn’t just about the environment — it’s also a way to align your lifestyle with your values, promoting fairness, community well-being, and long-term resilience.Through this guide, we’ll explore why sustainable grocery shopping matters and provide practical steps you can apply in your everyday life to make a difference.`,
      image: "assets/images/blog header image.png",
      section1: {
        title: "Why shopping tip for groceries is important?",
        text: `Being intentional with your grocery shopping helps cut down on plastic, packaging, and food waste. It encourages planning meals in advance, which reduces excess buying and spoilage. Sustainable shopping also supports ethical brands and environmentally friendly farms. You’ll likely eat healthier by choosing fresher, seasonal products. Overall, smart shopping habits lead to long-term environmental and economic benefits.`
      },
      section2: {
        title: "Essential grocery lists?",
       text: `1. Carry reusable shopping bags and cloth produce bags instead of plastic ones.
2. Choose seasonal fruits and vegetables that are grown locally to reduce transportation impact.
3. Avoid individually packaged items — buy in bulk whenever possible.
4. Shop with a list to reduce impulse buying and food waste.
5. Prefer glass, metal, or compostable packaging over plastic.
6. Support stores and brands that prioritize eco-labeling and sustainable sourcing.
7. Bring your own containers for grains, snacks, and spices at zero-waste stores.
8. Store groceries properly to extend their life and reduce spoilage.
9. Cook at home more often to reduce dependence on takeout packaging.
10. Educate others in your household to build a shared eco-conscious mindset.`
      }
    },
    "budget": {
      title: "Budget-Friendly Grocery",
     intro: `Budget grocery shopping isn’t just about spending less — it’s about maximizing value from every rupee spent. With rising food costs and unpredictable price spikes, managing your grocery bill has become more important than ever. The key lies in being strategic and informed, not necessarily cutting back. Simple habits like meal planning, buying in bulk, and choosing local produce can stretch your budget while keeping your meals nutritious and diverse.

Another powerful tool in your hands is awareness: knowing prices, tracking discounts, and understanding seasonal patterns all contribute to better spending. While impulse purchases and branded items drain your wallet quickly, smart substitutes can lower expenses significantly. It’s also crucial to avoid food waste — using what you already have before buying more is an easy win.

Grocery budgeting helps reduce financial stress and improves overall household efficiency. It fosters discipline and gives you more control over your monthly expenses. Contrary to popular belief, you don’t need to give up quality or variety — you just need to be intentional with every purchase. Even small changes like skipping convenience foods or shopping with a list can lead to significant savings over time.

In this guide, we’ll show you why grocery budgeting matters and share easy-to-follow techniques to make smarter, cost-effective grocery decisions every week.`,
     image: "assets/images/blog header image.png",
      section1: {
        title: "Why budget planning is essential?",
        text: `Without a plan, grocery expenses can add up quickly due to impulse buys and waste. Budgeting helps track your food spending and avoids unnecessary duplication. It ensures that every purchase contributes to a complete, healthy meal. Planning also saves time during shopping and reduces stress. Long term, it promotes financial discipline in your household.`
      },
      section2: {
        title: "Best budget grocery tips?",
       text: `Managing your grocery budget requires both planning and self-awareness. By changing a few everyday habits, you can reduce your spending without compromising on quality or variety. The key is consistency and mindfulness.

1. Always shop with a list and stick to it — it limits impulse purchases.
2. Buy generic or store-brand alternatives instead of high-cost branded items.
3. Choose whole ingredients (like raw veggies and grains) over processed or pre-packed meals.
4. Shop in-season and local produce, which are cheaper and fresher.
5. Compare price per unit when buying — larger packs may not always be cheaper.`
      }
    },
    "meal-plan": {
      title: "Meal Planning for the Week",
     intro: `Meal planning is more than just a timesaver — it's a lifestyle tool that brings structure, reduces waste, and improves nutrition. By knowing what you'll eat in advance, you avoid the stress of last-minute decisions and impulsive takeout orders. It also ensures you buy exactly what you need, making your shopping efficient and cost-effective.

Weekly meal planning helps you maintain consistency with dietary goals, whether you're eating more greens, cutting carbs, or just trying to reduce processed foods. With a plan in place, you're more likely to cook at home, which often means healthier meals and more controlled ingredients.

Moreover, it promotes batch cooking, ingredient prep, and reuse of leftovers — habits that save both time and energy. When done right, meal planning introduces variety into your week without overwhelming your schedule. Families especially benefit from having a visible weekly menu — it gets everyone on board and reduces food complaints.

You don't have to plan every bite — even a flexible outline for 5 dinners and a couple of lunches can make your week flow better. In the long run, these small efforts simplify your life, boost your health, and bring more intention to how you shop and eat.`,
      image: "assets/images/blog header image.png",
      section1: {
        title: "Why plan your meals?",
        text: `Planning meals in advance ensures a balanced diet and prevents last-minute unhealthy decisions. It allows you to cook smarter using shared ingredients across recipes. Meal planning reduces grocery runs and food spoilage. It saves money and makes cooking feel more organized. You’ll also reduce kitchen stress during weekdays.`
      },
      section2: {
        title: "How to start meal planning?",
         text: `Getting started with meal planning can feel overwhelming, but it becomes second nature with a simple structure. Start small, build consistency, and adapt your plan to your lifestyle.

1. Pick one day a week (like Sunday) to sit down and outline your weekly meals.
2. Choose 3–5 core dishes and use shared ingredients across recipes to reduce waste.
3. Make a grocery list based on the planned meals — don’t shop without it.
4. Prep staples like rice, lentils, or chopped vegetables in advance.
5. Store prepped food in labeled containers and keep your plan visible (fridge door or app).`
      }
    },
    "healthy-swaps": {
      title: "Healthy Grocery Swaps",
      intro: `Making your grocery cart healthier doesn't require drastic changes — it simply takes mindful swapping. You don’t need to give up the foods you love; instead, you can upgrade them with better alternatives. These small, consistent changes can help lower sugar intake, reduce unhealthy fats, and boost your daily nutrient levels.

Grocery swaps make it easier to eat clean without feeling deprived. For example, switching from refined grains to whole grains provides more fiber and energy. Replacing sugary drinks with flavored water or fresh juices can dramatically cut down on empty calories. Such changes gradually improve heart health, digestion, and blood sugar balance.

What makes healthy swaps so effective is their simplicity. You’re not restricting — you're replacing. Most options are widely available, affordable, and just as satisfying. Over time, these healthier ingredients become your new normal. Even small substitutions in everyday items like oils, snacks, or bread can significantly improve your overall health.

Grocery stores today offer an impressive range of nutritious alternatives to common products. Whether it’s swapping chips for nuts or soda for coconut water, there’s always a better choice on the shelf. Learning to recognize and choose them is the first step toward sustainable healthy eating.`,
       image: "assets/images/blog header image.png",
      section1: {
        title: "Why are swaps effective?",
        
        text: `You don’t need to change everything overnight. Just pick 1–2 swaps per week, and soon your pantry will be filled with better choices.

1. Replace white bread with multigrain or 100% whole wheat bread.
2. Swap sugar-loaded yogurt with unsweetened Greek yogurt + fruit.
3. Choose rolled oats over sugary cereals for breakfast.
4. Replace mayonnaise with avocado or hummus in sandwiches.
5. Buy baked or air-popped snacks instead of deep-fried chips.`
      },
      section2: {
        title: "Smart healthy swaps?",
        text: `1. Choose whole wheat bread instead of white.\n2. Swap sugary cereals for oats and fruit.\n3. Use Greek yogurt instead of sour cream.\n4. Replace soda with sparkling water.\n5. Opt for dark chocolate over milk-based candy.`
      }
    },
    "kids-cooking": {
      title: "Cooking with Kids",
     intro: `Cooking with kids is more than just a fun weekend activity — it's an educational experience that builds life skills, confidence, and healthy eating habits. From measuring ingredients to stirring batter, each task helps children develop motor coordination, math skills, and patience. It creates a sense of responsibility and pride as they contribute to meals the whole family enjoys.

When kids are involved in meal prep, they become more curious about food and are more likely to try new ingredients. This helps reduce picky eating and fosters independence. It also opens up conversations about nutrition, where food comes from, and how it's prepared. You’re not just feeding their stomachs — you’re feeding their minds.

Cooking together also creates lasting memories. These shared moments promote bonding, teamwork, and communication in a screen-free, hands-on way. Over time, it helps children build a positive relationship with food and understand the value of homemade meals.

Whether they’re making their first sandwich or stirring soup, the kitchen becomes a space of creativity and joy. You don’t need fancy tools or recipes — just a little patience and willingness to involve them in simple steps.`,
      image: "assets/images/blog header image.png",
      section1: {
        title: "Why cook with kids?",
        text: `It helps kids develop motor skills, basic math, and nutrition awareness. They become curious about ingredients and more open to trying new foods. Cooking encourages teamwork and communication. It’s also a screen-free way to spend quality time together. It sets a strong foundation for lifelong healthy habits.`
      },
      section2: {
        title: "Easy kid recipes?",
       text: `Start with fun, hands-on recipes that are safe and easy. Focus on assembling, mixing, and decorating rather than complex cooking.

1. Make-your-own mini pizzas with whole wheat bases and colorful toppings.
2. Fruit kebabs with yogurt or nut butter for dipping.
3. DIY wraps with cheese, grated veggies, and mild sauces.
4. Banana-oat no-bake cookies or energy balls.
5. Layered yogurt parfaits with fresh fruits and granola.`
      }
    },
    "salad-ingredients": {
      title: "Best Grocery Ingredient for Salad",
     intro: `Salads are no longer just side dishes — they’ve evolved into vibrant, satisfying meals when crafted with the right ingredients. A good salad brings together colors, textures, flavors, and nutrients in one bowl. From crunchy greens to protein-packed toppings, the ingredients you choose define whether it’s a boring plate or a crave-worthy creation.

The beauty of salads is that they’re flexible and seasonal. You can adjust them based on what’s available, what’s fresh, and what fits your dietary goals. Fresh produce not only adds flavor but boosts your intake of vitamins, minerals, and fiber. Salads can be cooling in summer or hearty in winter with warm grains or roasted veggies.

Grocery shopping for salad ingredients is an opportunity to get creative. Think beyond lettuce — explore herbs, legumes, nuts, seeds, or exotic fruits. Even the dressing can be homemade with a few simple items like olive oil, lemon juice, or yogurt. When you stock your pantry with versatile staples, building a great salad becomes effortless.

With the right balance of greens, proteins, healthy fats, and a tasty dressing, salads can be filling and nourishing main courses. Whether you're eating light or packing in fuel for the day, the right grocery picks make all the difference.`,
      image: "assets/images/blog header image.png",
      section1: {
        title: "Why invest in good ingredients?",
        text: `Fresh ingredients mean more nutrients, better flavor, and appealing presentation. High-quality produce makes salads satisfying and less reliant on heavy dressings. Good ingredients are usually local and in season. They help create filling meals without processed additions. The better the base, the better the salad.`
      },
      section2: {
        title: "Top salad ingredients?",
       text: `Start with fresh, whole foods and build combinations that add variety in color, crunch, and flavor.

1. Leafy greens like arugula, spinach, or kale as your base.
2. Protein options like grilled tofu, chickpeas, paneer, or boiled eggs.
3. Crunchy additions such as cucumbers, bell peppers, or shredded carrots.
4. Healthy fats like avocado slices, seeds (pumpkin, sunflower), or walnuts.
5. Dressings made with olive oil, lemon, herbs, mustard, or Greek yogurt.`
      }
    },
    "seasonal-store": {
      title: "Seasonal Store Produce",
     intro: `Eating seasonally is one of the smartest ways to improve your health, support local agriculture, and reduce your carbon footprint. Seasonal produce is harvested at its peak, which means it’s fresher, tastier, and often more nutrient-dense than out-of-season imports. It hasn’t traveled across the globe, and it’s less likely to be treated with preservatives to extend shelf life.

Shopping for what’s in season also makes economic sense. These items are usually more affordable due to abundance and local availability. They help small farmers thrive and encourage biodiversity in farming. When you buy seasonal, you experience the natural rhythm of foods that align with your region’s climate and soil.

Another benefit is meal variety — every few months brings a fresh batch of fruits and vegetables to try. This encourages creative cooking and helps break the monotony of eating the same foods year-round. Your meals become more vibrant and naturally adapt to your body's seasonal needs (cooling foods in summer, warming ones in winter).

Whether it’s juicy mangoes in summer or earthy root vegetables in winter, every season has its stars. Learning what to look for and when can make grocery shopping feel more intentional and connected.`,
      image: "assets/images/blog header image.png",
      section1: {
        title: "Why seasonal is better?",
        text: `Seasonal produce is harvested at its peak, delivering maximum flavor and nutrients. It’s less expensive because it’s abundant locally. Supporting in-season food also supports community farmers. It varies your diet naturally through the year. And it aligns your meals with nature’s cycle.`
      },
      section2: {
        title: "What’s in season now?",
        text: `Knowing what’s in season helps you make smarter and more sustainable shopping choices.

1. Summer: mangoes, corn, cucumbers, and litchi.
2. Monsoon: gourds, papaya, plums, and mushrooms.
3. Winter: carrots, spinach, sweet potatoes, and citrus fruits.
4. Spring: strawberries, peas, lettuce, and radish.
5. Year-round: bananas, onions, tomatoes, and potatoes (store well with proper care).`
      }
    }
  };

  const data = articles[id];

  if (data) {
    document.getElementById("article-title").textContent = data.title;
    document.getElementById("article-intro").textContent = data.intro;
    document.getElementById("article-image").src = data.image;
    document.getElementById("article-section1-title").textContent = data.section1.title;
    document.getElementById("article-section1-text").textContent = data.section1.text;
    document.getElementById("article-section2-title").textContent = data.section2.title;
    document.getElementById("article-section2-text").textContent = data.section2.text;
  } else {
    document.body.innerHTML = "<h2>Article not found</h2>";
  }
});


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
