/**
 * Main Application Controller
 * Initializes the app and handles all event listeners
 */

// Global state
let currentFilters = {
    searchText: '',
    category: '',
    priceRange: ''
};

/**
 * Initialize the application
 */
function initApp() {
    console.log('🚀 Initializing FoodHub App...');
    
    // Render all sections with initial data
    renderInitialData();
    
    // Set up event listeners
    setupEventListeners();
    
    // Subscribe to cart changes
    cart.subscribe(updateCartUI);
    
    // Initial cart UI update
    updateCartUI();
    
    // Populate category filter
    populateCategoryFilter(categories);
    
    console.log('✅ FoodHub App initialized successfully!');
}

/**
 * Render initial data to all sections
 */
function renderInitialData() {
    renderCategories(categories);
    renderRestaurants(restaurants);
    renderOffers(offers);
    renderDishes(getPopularDishes(dishes)); // Show popular dishes initially
    renderReviews(reviews);
}

/**
 * Set up all event listeners
 */
function setupEventListeners() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
    
    // Cart button - open modal
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCartModal);
    }
    
    // Cart modal close buttons
    const cartModalClose = document.getElementById('cartModalClose');
    const cartModalOverlay = document.getElementById('cartModalOverlay');
    
    if (cartModalClose) {
        cartModalClose.addEventListener('click', closeCartModal);
    }
    
    if (cartModalOverlay) {
        cartModalOverlay.addEventListener('click', closeCartModal);
    }
    
    // Hero search button
    const heroSearchBtn = document.getElementById('heroSearchBtn');
    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', handleHeroSearch);
    }
    
    // Hero search input - enter key
    const heroSearchInput = document.getElementById('heroSearchInput');
    if (heroSearchInput) {
        heroSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleHeroSearch();
            }
        });
    }
    
    // Filter change listeners
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleFilterChange);
    }
    
    if (priceFilter) {
        priceFilter.addEventListener('change', handleFilterChange);
    }
    
    // Category cards click
    document.addEventListener('click', (e) => {
        const categoryCard = e.target.closest('.category-card');
        if (categoryCard) {
            const category = categoryCard.dataset.category;
            handleCategoryClick(category);
        }
    });
    
    // Add to cart buttons (event delegation)
    document.addEventListener('click', (e) => {
        const addCartBtn = e.target.closest('.btn-add-cart');
        if (addCartBtn) {
            const dishId = parseInt(addCartBtn.dataset.dishId);
            handleAddToCart(dishId);
        }
    });
    
    // Cart item controls (event delegation)
    document.addEventListener('click', (e) => {
        // Increase quantity
        if (e.target.closest('.btn-quantity[data-action="increase"]')) {
            const btn = e.target.closest('.btn-quantity');
            const itemId = parseInt(btn.dataset.itemId);
            const currentQty = cart.getItemQuantity(itemId);
            cart.updateQuantity(itemId, currentQty + 1);
            showNotification('Quantity updated');
        }
        
        // Decrease quantity
        if (e.target.closest('.btn-quantity[data-action="decrease"]')) {
            const btn = e.target.closest('.btn-quantity');
            const itemId = parseInt(btn.dataset.itemId);
            const currentQty = cart.getItemQuantity(itemId);
            if (currentQty > 1) {
                cart.updateQuantity(itemId, currentQty - 1);
                showNotification('Quantity updated');
            } else {
                cart.removeItem(itemId);
                showNotification('Item removed from cart');
            }
        }
        
        // Remove item
        if (e.target.closest('.btn-remove')) {
            const btn = e.target.closest('.btn-remove');
            const itemId = parseInt(btn.dataset.itemId);
            cart.removeItem(itemId);
            showNotification('Item removed from cart');
        }
    });
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu if open
                if (mainNav) {
                    mainNav.classList.remove('active');
                }
            }
        });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Thank you for subscribing! 🎉');
            newsletterForm.reset();
        });
    }
}

/**
 * Handle hero search
 */
function handleHeroSearch() {
    const searchInput = document.getElementById('heroSearchInput');
    if (searchInput) {
        currentFilters.searchText = searchInput.value;
        applyCurrentFilters();
        
        // Scroll to dishes section
        const dishesSection = document.getElementById('dishes');
        if (dishesSection) {
            dishesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

/**
 * Handle filter changes
 */
function handleFilterChange() {
    const searchInput = document.getElementById('heroSearchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    currentFilters.searchText = searchInput ? searchInput.value : '';
    currentFilters.category = categoryFilter ? categoryFilter.value : '';
    currentFilters.priceRange = priceFilter ? priceFilter.value : '';
    
    applyCurrentFilters();
}

/**
 * Handle category card click
 */
function handleCategoryClick(category) {
    // Update filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.value = category;
    }
    
    currentFilters.category = category;
    applyCurrentFilters();
    
    // Scroll to dishes section
    const dishesSection = document.getElementById('dishes');
    if (dishesSection) {
        dishesSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Highlight active category
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelector(`.category-card[data-category="${category}"]`)?.classList.add('active');
}

/**
 * Apply current filters and update dishes display
 */
function applyCurrentFilters() {
    const filteredDishes = applyFilters(dishes, currentFilters);
    renderDishes(filteredDishes);
}

/**
 * Handle add to cart
 */
function handleAddToCart(dishId) {
    const dish = dishes.find(d => d.id === dishId);
    if (dish) {
        cart.addItem(dish);
        showNotification(`${dish.name} added to cart! 🎉`);
        
        // Re-render dishes to update button states
        applyCurrentFilters();
    }
}

/**
 * Open cart modal
 */
function openCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

/**
 * Close cart modal
 */
function closeCartModal() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Handle checkout
 */
function handleCheckout() {
    const items = cart.getItems();
    if (items.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }
    
    // Simulate checkout process
    showNotification('Proceeding to checkout... 🚀');
    
    // In a real app, this would redirect to checkout page
    setTimeout(() => {
        alert('🎉 Order placed successfully!\n\nThis is a demo. In a real app, you would be redirected to a payment page.');
        cart.clearCart();
        closeCartModal();
        showNotification('Thank you for your order! 🙏');
    }, 1000);
}

/**
 * Clear filters (called from UI)
 */
window.clearFilters = function() {
    currentFilters = {
        searchText: '',
        category: '',
        priceRange: ''
    };
    
    const searchInput = document.getElementById('heroSearchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    
    // Remove active state from category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    
    applyCurrentFilters();
    showNotification('Filters cleared');
};

// Make functions available globally for UI module
window.closeCartModal = closeCartModal;
window.openCartModal = openCartModal;
window.applyCurrentFilters = applyCurrentFilters;

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
