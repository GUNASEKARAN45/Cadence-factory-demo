/**
 * Search and Filter Module
 * Handles text search, category filtering, and price range filtering
 */

/**
 * Filter dishes by search text
 */
function filterByText(dishes, searchText) {
    if (!searchText || searchText.trim() === '') {
        return dishes;
    }
    
    const text = searchText.toLowerCase().trim();
    return dishes.filter(dish => {
        return dish.name.toLowerCase().includes(text) ||
               dish.description.toLowerCase().includes(text) ||
               dish.category.toLowerCase().includes(text);
    });
}

/**
 * Filter dishes by category
 */
function filterByCategory(dishes, category) {
    if (!category || category === '') {
        return dishes;
    }
    
    return dishes.filter(dish => dish.category === category);
}

/**
 * Filter dishes by price range
 */
function filterByPriceRange(dishes, priceRange) {
    if (!priceRange || priceRange === '') {
        return dishes;
    }
    
    switch (priceRange) {
        case 'budget':
            return dishes.filter(dish => dish.price <= 10);
        case 'medium':
            return dishes.filter(dish => dish.price > 10 && dish.price <= 20);
        case 'premium':
            return dishes.filter(dish => dish.price > 20);
        default:
            return dishes;
    }
}

/**
 * Apply all filters combined
 */
function applyFilters(dishes, filters = {}) {
    let filtered = [...dishes];
    
    // Apply text search
    if (filters.searchText) {
        filtered = filterByText(filtered, filters.searchText);
    }
    
    // Apply category filter
    if (filters.category) {
        filtered = filterByCategory(filtered, filters.category);
    }
    
    // Apply price range filter
    if (filters.priceRange) {
        filtered = filterByPriceRange(filtered, filters.priceRange);
    }
    
    return filtered;
}

/**
 * Search restaurants by name or cuisine
 */
function searchRestaurants(restaurants, searchText) {
    if (!searchText || searchText.trim() === '') {
        return restaurants;
    }
    
    const text = searchText.toLowerCase().trim();
    return restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(text) ||
               restaurant.cuisineType.toLowerCase().includes(text);
    });
}

/**
 * Filter restaurants by rating
 */
function filterRestaurantsByRating(restaurants, minRating) {
    if (!minRating || minRating <= 0) {
        return restaurants;
    }
    
    return restaurants.filter(restaurant => restaurant.rating >= minRating);
}

/**
 * Sort dishes by different criteria
 */
function sortDishes(dishes, sortBy) {
    const sorted = [...dishes];
    
    switch (sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sorted;
    }
}

/**
 * Get popular dishes (isPopular = true)
 */
function getPopularDishes(dishes) {
    return dishes.filter(dish => dish.isPopular);
}

/**
 * Get dishes by restaurant
 */
function getDishesByRestaurant(dishes, restaurantId) {
    return dishes.filter(dish => dish.restaurantId === restaurantId);
}

/**
 * Get unique categories from dishes
 */
function getUniqueCategories(dishes) {
    const categorySet = new Set(dishes.map(dish => dish.category));
    return Array.from(categorySet).sort();
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterByText,
        filterByCategory,
        filterByPriceRange,
        applyFilters,
        searchRestaurants,
        filterRestaurantsByRating,
        sortDishes,
        getPopularDishes,
        getDishesByRestaurant,
        getUniqueCategories
    };
}
