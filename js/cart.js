/**
 * Cart Management System with Session Storage
 */

class Cart {
    constructor() {
        this.items = [];
        this.listeners = [];
        this.loadFromSession();
    }

    /**
     * Load cart from session storage
     */
    loadFromSession() {
        try {
            const savedCart = sessionStorage.getItem('foodhub_cart');
            if (savedCart) {
                this.items = JSON.parse(savedCart);
                this.notifyListeners();
            }
        } catch (error) {
            console.error('Error loading cart from session:', error);
            this.items = [];
        }
    }

    /**
     * Save cart to session storage
     */
    saveToSession() {
        try {
            sessionStorage.setItem('foodhub_cart', JSON.stringify(this.items));
        } catch (error) {
            console.error('Error saving cart to session:', error);
        }
    }

    /**
     * Add item to cart or update quantity if exists
     */
    addItem(dish, quantity = 1) {
        const existingItem = this.items.find(item => item.id === dish.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: dish.id,
                name: dish.name,
                price: dish.price,
                image: dish.image,
                restaurantId: dish.restaurantId,
                quantity: quantity
            });
        }
        
        this.saveToSession();
        this.notifyListeners();
        return true;
    }

    /**
     * Remove item from cart
     */
    removeItem(itemId) {
        const index = this.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.saveToSession();
            this.notifyListeners();
            return true;
        }
        return false;
    }

    /**
     * Update item quantity
     */
    updateQuantity(itemId, quantity) {
        const item = this.items.find(item => item.id === itemId);
        if (item) {
            if (quantity <= 0) {
                return this.removeItem(itemId);
            }
            item.quantity = quantity;
            this.saveToSession();
            this.notifyListeners();
            return true;
        }
        return false;
    }

    /**
     * Get all cart items
     */
    getItems() {
        return [...this.items];
    }

    /**
     * Get total number of items in cart
     */
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    /**
     * Get subtotal (before tax and delivery)
     */
    getSubtotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    /**
     * Get tax amount (8%)
     */
    getTax() {
        return this.getSubtotal() * 0.08;
    }

    /**
     * Get delivery fee
     */
    getDeliveryFee() {
        const subtotal = this.getSubtotal();
        return subtotal === 0 ? 0 : 2.99;
    }

    /**
     * Get total price (subtotal + tax + delivery)
     */
    getTotalPrice() {
        return this.getSubtotal() + this.getTax() + this.getDeliveryFee();
    }

    /**
     * Clear all items from cart
     */
    clearCart() {
        this.items = [];
        this.saveToSession();
        this.notifyListeners();
    }

    /**
     * Check if item is in cart
     */
    hasItem(itemId) {
        return this.items.some(item => item.id === itemId);
    }

    /**
     * Get item quantity in cart
     */
    getItemQuantity(itemId) {
        const item = this.items.find(item => item.id === itemId);
        return item ? item.quantity : 0;
    }

    /**
     * Subscribe to cart changes
     */
    subscribe(listener) {
        this.listeners.push(listener);
    }

    /**
     * Unsubscribe from cart changes
     */
    unsubscribe(listener) {
        const index = this.listeners.indexOf(listener);
        if (index !== -1) {
            this.listeners.splice(index, 1);
        }
    }

    /**
     * Notify all listeners of cart changes
     */
    notifyListeners() {
        this.listeners.forEach(listener => {
            try {
                listener(this);
            } catch (error) {
                console.error('Error in cart listener:', error);
            }
        });
    }
}

// Create and export cart instance
const cart = new Cart();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Cart, cart };
}
