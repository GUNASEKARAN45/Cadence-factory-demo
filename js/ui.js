/**
 * UI Rendering Module
 * Handles all DOM rendering and UI updates
 */

/**
 * Render food categories
 */
function renderCategories(categories, containerId = 'categoriesGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = categories.map(category => `
        <div class="category-card" data-category="${category.name}">
            <div class="category-icon">${category.icon}</div>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-description">${category.description}</p>
        </div>
    `).join('');
}

/**
 * Render restaurant cards
 */
function renderRestaurants(restaurants, containerId = 'restaurantsGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = restaurants.map(restaurant => `
        <div class="restaurant-card" data-restaurant-id="${restaurant.id}">
            <div class="restaurant-image">
                <img src="${restaurant.image}" alt="${restaurant.name}" loading="lazy">
                <div class="restaurant-badge">⭐ ${restaurant.rating}</div>
            </div>
            <div class="restaurant-info">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <p class="restaurant-cuisine">${restaurant.cuisineType}</p>
                <div class="restaurant-meta">
                    <span class="meta-item">🕐 ${restaurant.deliveryTime}</span>
                    <span class="meta-item">💵 Min $${restaurant.minOrder}</span>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Render dish cards
 */
function renderDishes(dishes, containerId = 'dishesGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (dishes.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <p>😕 No dishes found matching your criteria</p>
                <button class="btn-secondary" onclick="clearFilters()">Clear Filters</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = dishes.map(dish => {
        const restaurantName = restaurants.find(r => r.id === dish.restaurantId)?.name || 'Unknown';
        const inCart = cart.hasItem(dish.id);
        const quantity = cart.getItemQuantity(dish.id);
        
        return `
            <div class="dish-card" data-dish-id="${dish.id}">
                <div class="dish-image">
                    <img src="${dish.image}" alt="${dish.name}" loading="lazy">
                    ${dish.isPopular ? '<span class="dish-badge popular">🔥 Popular</span>' : ''}
                    <span class="dish-badge rating">⭐ ${dish.rating}</span>
                </div>
                <div class="dish-info">
                    <h3 class="dish-name">${dish.name}</h3>
                    <p class="dish-restaurant">📍 ${restaurantName}</p>
                    <p class="dish-description">${dish.description}</p>
                    <div class="dish-footer">
                        <span class="dish-price">$${dish.price.toFixed(2)}</span>
                        <button class="btn-add-cart" data-dish-id="${dish.id}">
                            ${inCart ? `🛒 In Cart (${quantity})` : '➕ Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Render special offers
 */
function renderOffers(offers, containerId = 'offersGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = offers.map(offer => `
        <div class="offer-card">
            <div class="offer-badge">${offer.discount}% OFF</div>
            <h3 class="offer-title">${offer.title}</h3>
            <p class="offer-description">${offer.description}</p>
            <div class="offer-footer">
                <div class="offer-code">
                    <span class="code-label">Code:</span>
                    <span class="code-value">${offer.code}</span>
                </div>
                <span class="offer-min">Min. order $${offer.minOrder}</span>
            </div>
        </div>
    `).join('');
}

/**
 * Render customer reviews
 */
function renderReviews(reviews, containerId = 'reviewsGrid') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = reviews.map(review => {
        const stars = '⭐'.repeat(review.rating);
        const date = new Date(review.date).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
        
        return `
            <div class="review-card">
                <div class="review-header">
                    <div class="review-avatar">${review.avatar}</div>
                    <div class="review-meta">
                        <h4 class="review-name">${review.customerName}</h4>
                        <div class="review-rating">${stars}</div>
                    </div>
                    <span class="review-date">${date}</span>
                </div>
                <p class="review-text">"${review.review}"</p>
            </div>
        `;
    }).join('');
}

/**
 * Update cart UI (badge and modal)
 */
function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.getTotalItems();
    
    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // Update cart modal
    updateCartModal();
}

/**
 * Update cart modal content
 */
function updateCartModal() {
    const modalBody = document.getElementById('cartModalBody');
    const items = cart.getItems();
    
    if (!modalBody) return;
    
    if (items.length === 0) {
        modalBody.innerHTML = `
            <div class="cart-empty">
                <p class="cart-empty-icon">🛒</p>
                <p class="cart-empty-text">Your cart is empty</p>
                <button class="btn-primary" onclick="closeCartModal()">Start Shopping</button>
            </div>
        `;
    } else {
        modalBody.innerHTML = items.map(item => `
            <div class="cart-item" data-item-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="btn-quantity" data-action="decrease" data-item-id="${item.id}">−</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="btn-quantity" data-action="increase" data-item-id="${item.id}">+</button>
                </div>
                <button class="btn-remove" data-item-id="${item.id}">🗑️</button>
            </div>
        `).join('');
    }
    
    // Update totals
    const subtotal = cart.getSubtotal();
    const tax = cart.getTax();
    const delivery = cart.getDeliveryFee();
    const total = cart.getTotalPrice();
    
    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cartTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cartDelivery').textContent = delivery > 0 ? `$${delivery.toFixed(2)}` : 'FREE';
    document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

/**
 * Show notification toast
 */
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

/**
 * Populate category filter dropdown
 */
function populateCategoryFilter(categories) {
    const filter = document.getElementById('categoryFilter');
    if (!filter) return;
    
    // Keep the "All Categories" option and add categories
    const options = categories.map(cat => 
        `<option value="${cat.name}">${cat.name}</option>`
    ).join('');
    
    filter.innerHTML = '<option value="">All Categories</option>' + options;
}

/**
 * Clear all filters
 */
function clearFilters() {
    const searchInput = document.getElementById('heroSearchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    
    // Trigger filter update
    applyCurrentFilters();
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        renderCategories,
        renderRestaurants,
        renderDishes,
        renderOffers,
        renderReviews,
        updateCartUI,
        updateCartModal,
        showNotification,
        populateCategoryFilter,
        clearFilters
    };
}
