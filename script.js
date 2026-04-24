/**
 * FastIt — Frontend Logic
 * Handles: products, cart, checkout, order tracking, admin panel
 */

// ─── Config ───────────────────────────────────────────────────────────────────
const API_BASE = window.location.origin; // Use same server or change to your backend URL
const WHATSAPP_NUMBER = '1234567890'; // Replace with your WhatsApp number (no +)

// ─── State ────────────────────────────────────────────────────────────────────
let cart = {};           // { productId: { ...product, qty } }
let productsData = [];   // All products from JSON
let categoriesData = [];

// All categories from JSON




















const data = {
  "categories": [
    {
      "id": "fruits",
      "name": "Fruits & Veggies",
      "emoji": "🥦",
      "image": "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&q=80"
    },
    {
      "id": "dairy",
      "name": "Dairy & Eggs",
      "emoji": "🥛",
      "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&q=80"
    },
    {
      "id": "bakery",
      "name": "Bakery",
      "emoji": "🥖",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&q=80"
    },
    {
      "id": "snacks",
      "name": "Snacks",
      "emoji": "🍿",
      "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200&q=80"
    },
    {
      "id": "soda",
      "name": "Soda",
      "emoji": "🥤",
      "image": "https://i.pinimg.com/1200x/2b/d1/b9/2bd1b99ae997b97d8578baa00be69a5d.jpg"
    },
    {
      "id": "snicker",
      "name": "Snickers",
      "emoji": "😋",
      "image": "https://i.pinimg.com/736x/c2/63/46/c263467d743cb8c8df178326d01fb830.jpg",
    },
    {
      "id": "beverages",
      "name": "Beverages",
      "emoji": "🧃",
      "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&q=80"
    },
    {
      "id": "meat",
      "name": "Meat & Fish",
      "emoji": "🥩",
      "image": "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&q=80"
    },
    {
      "id": "frozen",
      "name": "Frozen Foods",
      "emoji": "🧊",
      "image": "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=200&q=80"
    },
    {
      "id": "household",
      "name": "Household",
      "emoji": "🧹",
      "image": "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&q=80"
    }
  ],
  "products": [
    {
      "id": "p1",
      "name": "Fresh Bananas",
      "category": "fruits",
      "price": 700,
      "unit": "bunch",
      "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80",
      "badge": "Popular",
      "badgeColor": "#22c55e"
    },
    {
      "id": "p2",
      "name": "Organic Tomatoes",
      "category": "fruits",
      "price": 500,
      "unit": "500g",
      "image": "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=400&q=80",
      "badge": "Organic",
      "badgeColor": "#22c55e"
    },
    {
      "id": "p3",
      "name": "Green Spinach",
      "category": "fruits",
      "price": 179,
      "unit": "250g",
      "image": "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80",
      "badge": null,
      "badgeColor": null
    },
    {
      "id": "p4",
      "name": "Red Apples",
      "category": "fruits",
      "price": 309,
      "unit": "1kg",
      "image": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80",
      "badge": "Fresh",
      "badgeColor": "#f97316"
    },
    {
      "id": "p5",
      "name": "Full Cream Milk",
      "category": "dairy",
      "price": 489,
      "unit": "1L",
      "image": "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
      "badge": "Popular",
      "badgeColor": "#22c55e"
    },
    {
      "id": "p6",
      "name": "Farm Eggs",
      "category": "dairy",
      "price": 1200,
      "unit": "12 pcs",
      "image": "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?w=400&q=80",
      "badge": null,
      "badgeColor": null
    },
    {
      "id": "p7",
      "name": "Greek Yogurt",
      "category": "dairy",
      "price": 340,
      "unit": "400g",
      "image": "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
      "badge": "New",
      "badgeColor": "#8b5cf6"
    },
    {
      "id": "p8",
      "name": "Cheddar Cheese",
      "category": "dairy",
      "price": 600,
      "unit": "200g",
      "image": "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?w=400&q=80",
      "badge": null,
      "badgeColor": null
    },
    {
      "id": "p9",
      "name": "Sourdough Bread",
      "category": "bakery",
      "price": 300,
      "unit": "loaf",
      "image": "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=400&q=80",
      "badge": "Artisan",
      "badgeColor": "#f97316"
    },
    {
      "id": "p10",
      "name": "Croissants",
      "category": "bakery",
      "price": 350,
      "unit": "4 pcs",
      "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
      "badge": "Popular",
      "badgeColor": "#22c55e"
    },
    {
      "id": "p11",
      "name": "Potato Chips",
      "category": "snacks",
      "price": 500,
      "unit": "150g",
      "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&q=80",
      "badge": null,
      "badgeColor": null
    },
    {
      "id": "p12",
      "name": "Trail Mix",
      "category": "snacks",
      "price": 500,
      "unit": "200g",
      "image": "https://images.unsplash.com/photo-1583277793374-b8e96e75d1dc?w=400&q=80",
      "badge": "Healthy",
      "badgeColor": "#22c55e"
    },
    {
      "id": "p13",
      "name": "Orange Juice",
      "category": "beverages",
      "price": 350,
      "unit": "1L",
      "image": "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&q=80",
      "badge": "Fresh",
      "badgeColor": "#f97316"
    },
    {
      "id": "p14",
      "name": "Sparkling Water",
      "category": "beverages",
      "price": 200,
      "unit": "500ml",
      "image": "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400&q=80",
      "badge": null,
      "badgeColor": null
    },
    {
      "id": "p15",
      "name": "Chicken Breast",
      "category": "meat",
      "price": 750,
      "unit": "500g",
      "image": "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80",
      "badge": "Fresh",
      "badgeColor": "#f97316"
    },
    {
      "id": "p16",
      "name": "Salmon Fillet",
      "category": "meat",
      "price": 1000,
      "unit": "300g",
      "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80",
      "badge": "Premium",
      "badgeColor": "#8b5cf6"
    },
    {
      "id": "p17",
      "name": "Soda- Coca-Cola soft drink",
      "category": "soda",
      "price": 450,
      "unit": "400ml",
      "image": "https://i.pinimg.com/1200x/39/3a/e4/393ae43107a4439d17d05243361cf863.jpg",
      "badge": "Popular",
      "badgeColor": "#861d0d"
    },
    {
      "id":"p18",
      "name":"snikers",
      "category":"snicker",
      "price":650,
      "unit": 2,
      "image":"https://i.pinimg.com/736x/23/62/b8/2362b809ee7a69076b9e2950c426eded.jpg",
      "badge":"Premium",
      "badgeColor":"#343030"
    }
  ]
};































let lastOrderId = null;  // Most recent order ID
let bannerInterval;      // Auto-slide interval
let currentBanner = 0;

// ─── DOM References ───────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// ═══════════════════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', async () => {
  await loadProducts();
  initBanner();
  initSearch();
  initCart();
  initCheckout();
  initTracking();
  initAdmin();
  initBottomNav();
  loadCartFromStorage();
  initAdmin();
  showWelcomeUser();
});

//==================================================================================
//Welcome user
//================================================================================
function showWelcomeUser() {
  const name = localStorage.getItem('user_name');
  const el = document.getElementById('welcomeUser');

  if (name && el) {
    el.innerHTML = `
      <span class="user-badge">
        👤 ${name} <span class="status-dot"></span>
      </span>
    `;
  }
}

//==================================================================================


// ═══════════════════════════════════════════════════════════════════════════════
// LOAD PRODUCTS FROM SERVER / JSON
// ═══════════════════════════════════════════════════════════════════════════════
async function loadProducts() {
  productsData = data.products;
  categoriesData = data.categories;

  renderCategories(categoriesData);
  renderProducts(productsData);
}

// ═══════════════════════════════════════════════════════════════════════════════
// RENDER CATEGORIES
// ═══════════════════════════════════════════════════════════════════════════════
function renderCategories(categories) {
  const container = $('categoriesContainer');

  // "All" category
  const allEl = document.createElement('div');
  allEl.className = 'cat-card active';
  allEl.dataset.id = 'all';
  allEl.innerHTML = `
    <div class="cat-img-wrap" style="background: linear-gradient(135deg, #16a34a, #22c55e); display:flex; align-items:center; justify-content:center;">
      <span style="font-size:28px;">🛒</span>
    </div>
    <span class="cat-name">All</span>
  `;
  allEl.addEventListener('click', () => {
    filterByCategory('all');
    setActiveCategory(allEl);
  });
  container.appendChild(allEl);

  categories.forEach(cat => {
    const el = document.createElement('div');
    el.className = 'cat-card';
    el.dataset.id = cat.id;
    el.innerHTML = `
      <div class="cat-img-wrap">
        <img src="${cat.image}" alt="${cat.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=font-size:28px>${cat.emoji}</span>';" />
      </div>
      <span class="cat-name">${cat.name}</span>
    `;
    el.addEventListener('click', () => {
      filterByCategory(cat.id);
      setActiveCategory(el);
    });
    container.appendChild(el);
  });
}

function setActiveCategory(el) {
  $$('.cat-card').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function filterByCategory(catId) {
  if (catId === 'all') {
    loadAllProducts();
  } else {
    const filtered = productsData.filter(p => p.category === catId);
    const cat = categoriesData.find(c => c.id === catId);
    $('productsTitle').textContent = cat ? `${cat.emoji} ${cat.name}` : 'Products';
    $('clearFilterBtn').style.display = 'inline-flex';
    renderProducts(filtered);
  }
  $('productsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ═══════════════════════════════════════════════════════════════════════════════
// RENDER PRODUCTS
// ═══════════════════════════════════════════════════════════════════════════════
function renderProducts(products) {
  const grid = $('productsGrid');
  const empty = $('emptyState');
  grid.innerHTML = '';

  if (!products || products.length === 0) {
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';

  products.forEach((product, index) => {
    const card = createProductCard(product, index);
    grid.appendChild(card);
  });
}

function createProductCard(product, index) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.style.animationDelay = `${index * 0.05}s`;
  card.dataset.id = product.id;

  const inCart = cart[product.id];
  const qty = inCart ? inCart.qty : 0;

  card.innerHTML = `
    <div class="product-img-wrap">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80'" />
      ${product.badge ? `<span class="product-badge" style="background:${product.badgeColor || '#22c55e'}">${product.badge}</span>` : ''}
    </div>
    <div class="product-info">
      <div class="product-name">${product.name}</div>
      <div class="product-unit">${product.unit}</div>
      <div class="product-footer">
<span class="product-price">${product.price.toFixed(2)} FCFA</span>
        ${qty > 0
          ? `<div class="qty-controls">
               <button class="qty-btn" onclick="changeQty('${product.id}', -1)">−</button>
               <span class="qty-num">${qty}</span>
               <button class="qty-btn" onclick="changeQty('${product.id}', 1)">+</button>
             </div>`
          : `<button class="add-btn" onclick="addToCart('${product.id}')">+</button>`
        }
      </div>
    </div>
  `;
  return card;
}

function loadAllProducts() {
  $('productsTitle').textContent = 'All Products';
  $('clearFilterBtn').style.display = 'none';
  renderProducts(productsData);
  // Re-set active cat card to "all"
  $$('.cat-card').forEach(c => c.classList.remove('active'));
  const allCard = document.querySelector('.cat-card[data-id="all"]');
  if (allCard) allCard.classList.add('active');
}

// ═══════════════════════════════════════════════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════════════════════════════════════════════
function initSearch() {
  const input = $('searchInput');
  const clearBtn = $('searchClear');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    clearBtn.style.display = q ? 'block' : 'none';

    if (!q) {
      loadAllProducts();
      return;
    }

    const results = productsData.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );

    $('productsTitle').textContent = `Results for "${input.value.trim()}"`;
    $('clearFilterBtn').style.display = 'none';
    renderProducts(results);
    $('productsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.style.display = 'none';
    input.focus();
    loadAllProducts();
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// CART
// ═══════════════════════════════════════════════════════════════════════════════
function initCart() {
  // Open cart
  $('cartBtn').addEventListener('click', openCart);
  $('stickyCartBtn').addEventListener('click', openCart);
  $('bnCart').addEventListener('click', openCart);

  // Close cart
  $('closeCart').addEventListener('click', closeCart);
  $('drawerOverlay').addEventListener('click', closeCart);

  // Checkout
  $('checkoutBtn').addEventListener('click', () => {
    closeCart();
    openCheckout();
  });
}

function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  if (cart[productId]) {
    cart[productId].qty++;
  } else {
    cart[productId] = { ...product, qty: 1 };
  }

  saveCartToStorage();
  updateCartUI();
  updateProductCard(productId);
  showToast(`✅ ${product.name} added to cart`);
  bumpCartBadge();
}

function changeQty(productId, delta) {
  if (!cart[productId]) return;

  cart[productId].qty += delta;

  if (cart[productId].qty <= 0) {
    delete cart[productId];
  }

  saveCartToStorage();
  updateCartUI();
  updateProductCard(productId);
}

function removeFromCart(productId) {
  delete cart[productId];
  saveCartToStorage();
  updateCartUI();
  updateProductCard(productId);
}





function calculateFees(cartTotal) {
    let deliveryFee = 0;
    let logisticsFee = 0;
    const tax = 75;

    if (cartTotal < 2000) {
        deliveryFee = 1000;
        logisticsFee = 300;
    } else if (cartTotal <= 5000) {
        deliveryFee = 700;
        logisticsFee = 200;
    } else {
        deliveryFee = 500;
        logisticsFee = 100;
    }

    return {
        deliveryFee,
        logisticsFee,
        tax
    };
}




function updateCartUI() {
  const items = Object.values(cart);
  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);
 const fees = calculateFees(totalPrice);

const finalTotal = totalPrice 
  + fees.deliveryFee 
  + fees.logisticsFee 
  + fees.tax;

  // Update badges
  $('cartBadge').textContent = totalQty;
  $('scBadge').textContent = totalQty;
  $('scTotal').textContent = `${totalPrice.toFixed(2)} FCFA`;
  $('cartItemCount').textContent = `${totalQty} item${totalQty !== 1 ? 's' : ''}`;
 $('subtotalAmt').textContent = `${totalPrice.toFixed(2)} FCFA`;
$('totalAmt').textContent = `${finalTotal.toFixed(2)} FCFA`;

  // Sticky cart
  $('stickyCart').style.display = totalQty > 0 ? 'block' : 'none';

  // Cart items list
  const cartItemsEl = $('cartItems');
  const cartEmptyEl = $('cartEmpty');
  const cartFooterEl = $('cartFooter');

  if (items.length === 0) {
    cartEmptyEl.style.display = 'block';
    cartFooterEl.style.display = 'none';
    cartItemsEl.innerHTML = '';
    cartItemsEl.appendChild(cartEmptyEl);
    return;
  }

  cartEmptyEl.style.display = 'none';
  cartFooterEl.style.display = 'block';

  cartItemsEl.innerHTML = '';
  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&q=80'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price.toFixed(2)} FCFA × ${item.qty} = <strong>${(item.price * item.qty).toFixed(2)} FCFA</strong></div>
      </div>
      <div class="cart-item-controls">
        <button class="cart-qty-btn minus" onclick="changeQty('${item.id}', -1)">−</button>
        <span class="cart-item-qty">${item.qty}</span>
        <button class="cart-qty-btn plus" onclick="changeQty('${item.id}', 1)">+</button>
      </div>
    `;
    cartItemsEl.appendChild(el);
  });






$('tax').textContent = `${fees.tax.toFixed(2)} FCFA`;
$('logistics').textContent = `${fees.logisticsFee.toFixed(2)} FCFA`;
$('delivery').textContent = `${fees.deliveryFee.toFixed(2)} FCFA`;




}

function updateProductCard(productId) {
  const card = document.querySelector(`.product-card[data-id="${productId}"]`);
  if (!card) return;

  const qty = cart[productId] ? cart[productId].qty : 0;
  const footer = card.querySelector('.product-footer');
  const priceEl = footer.querySelector('.product-price');

  footer.innerHTML = `
    <span class="product-price">${priceEl ? priceEl.outerHTML : ''}</span>
    ${qty > 0
      ? `<div class="qty-controls">
           <button class="qty-btn" onclick="changeQty('${productId}', -1)">−</button>
           <span class="qty-num">${qty}</span>
           <button class="qty-btn" onclick="changeQty('${productId}', 1)">+</button>
         </div>`
      : `<button class="add-btn" onclick="addToCart('${productId}')">+</button>`
    }
  `;

  // Re-render the price element
  const product = productsData.find(p => p.id === productId);
  if (product) {
    footer.innerHTML = `
<span class="product-price">${product.price.toFixed(2)} FCFA</span>
${qty > 0
        ? `<div class="qty-controls">
             <button class="qty-btn" onclick="changeQty('${productId}', -1)">−</button>
             <span class="qty-num">${qty}</span>
             <button class="qty-btn" onclick="changeQty('${productId}', 1)">+</button>
           </div>`
        : `<button class="add-btn" onclick="addToCart('${productId}')">+</button>`
      }
    `;
  }
}

function bumpCartBadge() {
  const badge = $('cartBadge');
  badge.classList.remove('bump');
  void badge.offsetWidth;
  badge.classList.add('bump');
}

function openCart() {
  $('cartDrawer').classList.add('open');
  $('drawerOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('cartDrawer').classList.remove('open');
  $('drawerOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ── Cart Persistence ─────────────────────────────────────────────────────────
function saveCartToStorage() {
  try { localStorage.setItem('fastit_cart', JSON.stringify(cart)); } catch(e) {}
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('fastit_cart');
    if (saved) {
      cart = JSON.parse(saved);
      updateCartUI();
    }
  } catch(e) { cart = {}; }
}

// ═══════════════════════════════════════════════════════════════════════════════
// CHECKOUT
// ═══════════════════════════════════════════════════════════════════════════════
function initCheckout() {
  $('closeCheckout').addEventListener('click', closeCheckout);
  $('checkoutOverlay').addEventListener('click', e => {
    if (e.target === $('checkoutOverlay')) closeCheckout();
  });

  // Payment method toggle
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', () => {
      const isMM = radio.value === 'mobile_money';
      $('txnIdGroup').style.display = isMM ? 'block' : 'none';
    });
  });

  // Place order
  $('placeOrderBtn').addEventListener('click', placeOrder);
}

function openCheckout() {
  if (Object.keys(cart).length === 0) {
    showToast('🛒 Your cart is empty!');
    return;
  }

  // Populate summary
  const items = Object.values(cart);
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  let summaryHTML = `<div class="checkout-summary-title">Order Summary</div>`;
  items.forEach(item => {
    summaryHTML += `
      <div class="summary-item">
        <span>${item.name} × ${item.qty}</span>
<span>${(item.price * item.qty).toFixed(2)} FCFA</span>
      </div>
    `;
  });
  summaryHTML += `
    <div class="summary-total">
      <strong>Total</strong>
      <strong>${total.toFixed(2)} FCFA</strong>
    </div>
  `;
  $('checkoutSummary').innerHTML = summaryHTML;

  $('checkoutOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  $('checkoutOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

async function placeOrder() {
  const name = $('custName').value.trim();
  const address = $('custAddress').value.trim();
  const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value;
  const transactionId = $('txnId').value.trim();

  // Validation
  if (!name) { showToast('⚠️ Please enter your name'); $('custName').focus(); return; }
  if (!address) { showToast('⚠️ Please enter your address'); $('custAddress').focus(); return; }
  if (paymentMethod === 'mobile_money' && !transactionId) {
    showToast('⚠️ Please enter your Transaction ID');
    $('txnId').focus();
    return;
  }

  const items = Object.values(cart).map(i => ({
    id: i.id,
    name: i.name,
    price: i.price,
    qty: i.qty,
    total: parseFloat((i.price * i.qty).toFixed(2))
  }));
  const total = items.reduce((sum, i) => sum + i.total, 0).toFixed(2);

  const btn = $('placeOrderBtn');
  btn.classList.add('loading');
  btn.innerHTML = '<span>⏳ Placing Order...</span>';

  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, address, paymentMethod, transactionId, items, total: parseFloat(total) })
    });

    const data = await res.json();

    if (data.success) {
      lastOrderId = data.orderId;
      closeCheckout();
      showSuccessModal(data.orderId, name, items, total, address, paymentMethod, transactionId);
      cart = {};
      saveCartToStorage();
      updateCartUI();
      loadAllProducts();
    } else {
      throw new Error(data.error || 'Failed to place order');
    }
  } catch (err) {
    // Demo mode: simulate order placement when backend is not running
    const fakeId = `FST-${1001 + Math.floor(Math.random() * 999)}`;
    lastOrderId = fakeId;
    closeCheckout();
    showSuccessModal(fakeId, name, items, total, address, paymentMethod, transactionId);
    cart = {};
    saveCartToStorage();
    updateCartUI();
    loadAllProducts();
  } finally {
    btn.classList.remove('loading');
    btn.innerHTML = '<span>🚀 Place Order</span>';
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// SUCCESS MODAL + WHATSAPP
// ═══════════════════════════════════════════════════════════════════════════════
function showSuccessModal(orderId, name, items, total, address, paymentMethod, txnId) {
  $('displayOrderId').textContent = orderId;
  $('successOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  // WhatsApp button
  $('whatsappBtn').onclick = () => {
    const msg = buildWhatsAppMessage(orderId, name, items, total, address, paymentMethod, txnId);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  // Track button
  $('trackOrderLink').onclick = () => {
    closeSuccessModal();
    openTrackModal(orderId);
  };

  // Continue shopping
  $('continueShopping').onclick = closeSuccessModal;
}

function buildWhatsAppMessage(orderId, name, items, total, address, paymentMethod, txnId) {
  const payLabel = paymentMethod === 'mobile_money' ? 'Mobile Money' : 'Cash on Delivery';
  let msg = `🛒 *New Order — FastIt*\n\n`;
  msg += `📋 *Order ID:* ${orderId}\n`;
  msg += `👤 *Name:* ${name}\n`;
  msg += `📍 *Address:* ${address}\n\n`;
  msg += `🧾 *Items:*\n`;
  items.forEach(i => {
msg += `  • ${i.name} × ${i.qty} = ${i.total.toFixed(2)} FCFA\n`;
  });
msg += `💰 *Total:* ${parseFloat(total).toFixed(2)} FCFA\n`;  msg += `💳 *Payment:* ${payLabel}\n`;
  if (paymentMethod === 'mobile_money' && txnId) {
    msg += `🔑 *Transaction ID:* ${txnId}\n`;
  }
  msg += `\n⏰ *Time:* ${new Date().toLocaleString()}\n`;
  msg += `\n_Thank you for ordering with FastIt! ⚡_`;
  return msg;
}

function closeSuccessModal() {
  $('successOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════════════════════════════════════════════
// ORDER TRACKING
// ═══════════════════════════════════════════════════════════════════════════════
function initTracking() {
  $('closeTrack').addEventListener('click', closeTrackModal);
  $('trackOverlay').addEventListener('click', e => {
    if (e.target === $('trackOverlay')) closeTrackModal();
  });

  $('trackSearchBtn').addEventListener('click', doTrackSearch);
  $('trackOrderId').addEventListener('keydown', e => {
    if (e.key === 'Enter') doTrackSearch();
  });

  $('trackNavBtn').addEventListener('click', () => openTrackModal());
  $('bnTrack').addEventListener('click', () => openTrackModal());
}

function openTrackModal(prefillId = '') {
  if (prefillId) $('trackOrderId').value = prefillId;
  $('trackOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  if (prefillId) doTrackSearch();
}

function closeTrackModal() {
  $('trackOverlay').classList.remove('active');
  document.body.style.overflow = '';
  $('trackResult').style.display = 'none';
  $('trackError').style.display = 'none';
}

async function doTrackSearch() {
  const id = $('trackOrderId').value.trim().toUpperCase();
  if (!id) { showToast('⚠️ Enter an Order ID'); return; }

  $('trackResult').style.display = 'none';
  $('trackError').style.display = 'none';
  $('trackSearchBtn').textContent = '...';

  try {
    const res = await fetch(`${API_BASE}/orders/${id}`);
    const data = await res.json();

    if (data.error) throw new Error(data.error);

    renderTrackStatus(data);
    $('trackResult').style.display = 'block';
  } catch (err) {
    $('trackError').style.display = 'block';
  } finally {
    $('trackSearchBtn').textContent = 'Track';
  }
}

function renderTrackStatus(order) {
  $('trackOrderName').textContent = `👤 ${order.name}`;
$('trackOrderTotal').textContent = `💰 ${parseFloat(order.total).toFixed(2)} FCFA`;
  const statuses = ['Processing', 'On the way', 'Delivered'];
  const currentIdx = statuses.indexOf(order.status);

  statuses.forEach((status, i) => {
    const stepEl = $(`step-${status.replace(' ', '').toLowerCase()}`);
    if (!stepEl) return;
    stepEl.classList.remove('completed', 'active');
    if (i < currentIdx) stepEl.classList.add('completed');
    if (i === currentIdx) stepEl.classList.add('active');
  });

  // Fix step IDs
  const stepIds = ['step-processing', 'step-onway', 'step-delivered'];
  statuses.forEach((status, i) => {
    const el = $(stepIds[i]);
    if (!el) return;
    el.classList.remove('completed', 'active');
    if (i < currentIdx) el.classList.add('completed');
    if (i === currentIdx) el.classList.add('active');
  });

  // Lines
  if ($('line-1')) $('line-1').classList.toggle('completed', currentIdx >= 1);
  if ($('line-2')) $('line-2').classList.toggle('completed', currentIdx >= 2);

  const statusEmoji = { 'Processing': '⏳', 'On the way': '🚴', 'Delivered': '✅' };
  $('trackStatusText').textContent = `${statusEmoji[order.status] || '📦'} ${order.status}`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// BANNER AUTO-SLIDE
// ═══════════════════════════════════════════════════════════════════════════════
function initBanner() {
  const track = $('bannerTrack');
  const dots = $$('.dot');
  const total = 3;

  function goTo(i) {
    currentBanner = i;
    track.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach((d, idx) => d.classList.toggle('active', idx === i));
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => {
    clearInterval(bannerInterval);
    goTo(i);
    startAutoSlide();
  }));

  function startAutoSlide() {
    bannerInterval = setInterval(() => {
      goTo((currentBanner + 1) % total);
    }, 3500);
  }

  startAutoSlide();
}

// ═══════════════════════════════════════════════════════════════════════════════
// ADMIN PANEL
// ═══════════════════════════════════════════════════════════════════════════════




function initAdmin() {
  $('bnAdmin').addEventListener('click', openAdmin);
  $('closeAdmin').addEventListener('click', closeAdmin);

  $('adminOverlay').addEventListener('click', e => {
    if (e.target === $('adminOverlay')) closeAdmin();
  });
}

function openAdmin() {
  $('adminOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
  renderProfile();
}

function closeAdmin() {
  $('adminOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function renderProfile() {
  const container = $('adminOrdersList');

  const name = localStorage.getItem('user_name') || '';
  const address = localStorage.getItem('user_address') || '';

  container.innerHTML = `
    <div class="form-group">
      <label>Full Name</label>
      <input type="text" id="profileName" value="${name}" placeholder="Enter your name">
    </div>

    <div class="form-group">
      <label>Address</label>
      <textarea id="profileAddress" rows="2">${address}</textarea>
    </div>

    <button class="checkout-btn" onclick="saveProfile()">
      💾 Save Profile
    </button>
  `;
}

function saveProfile() {
  const name = $('profileName').value.trim();
  const address = $('profileAddress').value.trim();

  if (!name || !address) {
    showToast('⚠️ Fill all fields');
    return;
  }

  localStorage.setItem('user_name', name);
  localStorage.setItem('user_address', address);

  showToast('✅ Profile saved');
  showWelcomeUser();
}


















// ═══════════════════════════════════════════════════════════════════════════════
// BOTTOM NAV
// ═══════════════════════════════════════════════════════════════════════════════
function initBottomNav() {
  $('bnHome').addEventListener('click', () => {
    setActiveNav('bnHome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function setActiveNav(activeId) {
  ['bnHome','bnTrack','bnCart','bnAdmin'].forEach(id => {
    $(id).classList.toggle('active', id === activeId);
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════════════════════════════════════════
let toastTimeout;
function showToast(msg) {
  const toast = $('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 2500);
}
