/**
 * Mock Data for Food Ordering Website
 * All data is inline and uses placeholder image services
 */

// Food Categories
const categories = [
    { id: 1, name: 'Pizza', icon: '🍕', description: 'Hot & Cheesy' },
    { id: 2, name: 'Burgers', icon: '🍔', description: 'Juicy & Tasty' },
    { id: 3, name: 'Sushi', icon: '🍣', description: 'Fresh & Authentic' },
    { id: 4, name: 'Desserts', icon: '🍰', description: 'Sweet Treats' },
    { id: 5, name: 'Drinks', icon: '🥤', description: 'Refreshing' },
    { id: 6, name: 'Salads', icon: '🥗', description: 'Healthy & Fresh' },
    { id: 7, name: 'Pasta', icon: '🍝', description: 'Italian Classics' },
    { id: 8, name: 'Chicken', icon: '🍗', description: 'Crispy & Golden' }
];

// Restaurants
const restaurants = [
    {
        id: 1,
        name: 'Pizza Paradise',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
        rating: 4.8,
        deliveryTime: '25-35 min',
        minOrder: 15,
        cuisineType: 'Italian, Pizza',
        popularDishes: [1, 2, 7]
    },
    {
        id: 2,
        name: 'Burger Bliss',
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=300&fit=crop',
        rating: 4.6,
        deliveryTime: '20-30 min',
        minOrder: 10,
        cuisineType: 'American, Burgers',
        popularDishes: [3, 4]
    },
    {
        id: 3,
        name: 'Sushi Station',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
        rating: 4.9,
        deliveryTime: '30-40 min',
        minOrder: 20,
        cuisineType: 'Japanese, Sushi',
        popularDishes: [5, 6]
    },
    {
        id: 4,
        name: 'Sweet Delights',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
        rating: 4.7,
        deliveryTime: '15-25 min',
        minOrder: 8,
        cuisineType: 'Desserts, Bakery',
        popularDishes: [9, 10]
    },
    {
        id: 5,
        name: 'Green Garden',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
        rating: 4.5,
        deliveryTime: '20-30 min',
        minOrder: 12,
        cuisineType: 'Healthy, Salads',
        popularDishes: [11, 12]
    },
    {
        id: 6,
        name: 'Pasta Palace',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
        rating: 4.8,
        deliveryTime: '25-35 min',
        minOrder: 15,
        cuisineType: 'Italian, Pasta',
        popularDishes: [7, 8]
    },
    {
        id: 7,
        name: 'Chicken Corner',
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
        rating: 4.6,
        deliveryTime: '20-30 min',
        minOrder: 10,
        cuisineType: 'American, Chicken',
        popularDishes: [13, 14]
    },
    {
        id: 8,
        name: 'Beverage Bar',
        image: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=400&h=300&fit=crop',
        rating: 4.4,
        deliveryTime: '10-20 min',
        minOrder: 5,
        cuisineType: 'Drinks, Beverages',
        popularDishes: [15, 16]
    }
];

// Popular Dishes
const dishes = [
    {
        id: 1,
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh mozzarella, tomatoes, and basil',
        price: 12.99,
        category: 'Pizza',
        restaurantId: 1,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
        rating: 4.7,
        isPopular: true
    },
    {
        id: 2,
        name: 'Pepperoni Supreme',
        description: 'Loaded with pepperoni and extra cheese',
        price: 15.99,
        category: 'Pizza',
        restaurantId: 1,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
        rating: 4.9,
        isPopular: true
    },
    {
        id: 3,
        name: 'Classic Cheeseburger',
        description: 'Juicy beef patty with cheese, lettuce, and special sauce',
        price: 9.99,
        category: 'Burgers',
        restaurantId: 2,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
        rating: 4.6,
        isPopular: true
    },
    {
        id: 4,
        name: 'BBQ Bacon Burger',
        description: 'Smoky BBQ sauce, crispy bacon, and cheddar cheese',
        price: 12.99,
        category: 'Burgers',
        restaurantId: 2,
        image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop',
        rating: 4.8,
        isPopular: true
    },
    {
        id: 5,
        name: 'California Roll',
        description: 'Crab, avocado, and cucumber wrapped in seaweed',
        price: 8.99,
        category: 'Sushi',
        restaurantId: 3,
        image: 'https://images.unsplash.com/photo-1617196035092-b11473e0b4eb?w=400&h=300&fit=crop',
        rating: 4.8,
        isPopular: true
    },
    {
        id: 6,
        name: 'Spicy Tuna Roll',
        description: 'Fresh tuna with spicy mayo and sesame seeds',
        price: 11.99,
        category: 'Sushi',
        restaurantId: 3,
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
        rating: 4.9,
        isPopular: true
    },
    {
        id: 7,
        name: 'Fettuccine Alfredo',
        description: 'Creamy parmesan sauce with fettuccine pasta',
        price: 13.99,
        category: 'Pasta',
        restaurantId: 6,
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop',
        rating: 4.7,
        isPopular: true
    },
    {
        id: 8,
        name: 'Spaghetti Bolognese',
        description: 'Rich meat sauce over spaghetti with parmesan',
        price: 14.99,
        category: 'Pasta',
        restaurantId: 6,
        image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=400&h=300&fit=crop',
        rating: 4.8,
        isPopular: true
    },
    {
        id: 9,
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center',
        price: 6.99,
        category: 'Desserts',
        restaurantId: 4,
        image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
        rating: 4.9,
        isPopular: true
    },
    {
        id: 10,
        name: 'New York Cheesecake',
        description: 'Creamy cheesecake with graham cracker crust',
        price: 7.99,
        category: 'Desserts',
        restaurantId: 4,
        image: 'https://images.unsplash.com/photo-1533134242443-d4b2e2b9aaf4?w=400&h=300&fit=crop',
        rating: 4.8,
        isPopular: true
    },
    {
        id: 11,
        name: 'Caesar Salad',
        description: 'Crisp romaine, parmesan, croutons, and Caesar dressing',
        price: 8.99,
        category: 'Salads',
        restaurantId: 5,
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
        rating: 4.5,
        isPopular: true
    },
    {
        id: 12,
        name: 'Greek Salad',
        description: 'Fresh vegetables with feta cheese and olives',
        price: 9.99,
        category: 'Salads',
        restaurantId: 5,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
        rating: 4.6,
        isPopular: false
    },
    {
        id: 13,
        name: 'Fried Chicken Bucket',
        description: 'Crispy fried chicken pieces with signature spices',
        price: 16.99,
        category: 'Chicken',
        restaurantId: 7,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
        rating: 4.7,
        isPopular: true
    },
    {
        id: 14,
        name: 'Chicken Wings',
        description: 'Spicy buffalo wings with ranch dressing',
        price: 11.99,
        category: 'Chicken',
        restaurantId: 7,
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop',
        rating: 4.6,
        isPopular: false
    },
    {
        id: 15,
        name: 'Fresh Smoothie',
        description: 'Mixed berry smoothie with yogurt',
        price: 5.99,
        category: 'Drinks',
        restaurantId: 8,
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop',
        rating: 4.5,
        isPopular: false
    },
    {
        id: 16,
        name: 'Iced Coffee',
        description: 'Cold brew coffee with ice and cream',
        price: 4.99,
        category: 'Drinks',
        restaurantId: 8,
        image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=300&fit=crop',
        rating: 4.4,
        isPopular: false
    }
];

// Special Offers
const offers = [
    {
        id: 1,
        title: '50% OFF First Order',
        description: 'Get 50% off on your first order above $20',
        discount: 50,
        code: 'FIRST50',
        expiryDate: '2024-12-31',
        minOrder: 20
    },
    {
        id: 2,
        title: 'Free Delivery',
        description: 'Free delivery on orders above $30',
        discount: 0,
        code: 'FREEDEL',
        expiryDate: '2024-12-31',
        minOrder: 30
    },
    {
        id: 3,
        title: 'Weekend Special',
        description: 'Buy 2 Get 1 Free on selected items',
        discount: 33,
        code: 'WEEKEND',
        expiryDate: '2024-12-31',
        minOrder: 25
    },
    {
        id: 4,
        title: 'Happy Hours',
        description: '30% off on all beverages from 2-5 PM',
        discount: 30,
        code: 'HAPPY30',
        expiryDate: '2024-12-31',
        minOrder: 10
    },
    {
        id: 5,
        title: 'Family Feast',
        description: '40% off on orders above $50',
        discount: 40,
        code: 'FAMILY40',
        expiryDate: '2024-12-31',
        minOrder: 50
    }
];

// Customer Reviews
const reviews = [
    {
        id: 1,
        customerName: 'Sarah Johnson',
        rating: 5,
        review: 'Amazing food and super fast delivery! The pizza was still hot when it arrived. Highly recommend!',
        date: '2024-01-15',
        avatar: '👩'
    },
    {
        id: 2,
        customerName: 'Mike Chen',
        rating: 5,
        review: 'Best burger I\'ve had in a long time. Great quality ingredients and the app is so easy to use.',
        date: '2024-01-14',
        avatar: '👨'
    },
    {
        id: 3,
        customerName: 'Emily Rodriguez',
        rating: 4,
        review: 'Love the variety of restaurants available. Quick delivery and food always arrives fresh.',
        date: '2024-01-13',
        avatar: '👩‍🦰'
    },
    {
        id: 4,
        customerName: 'David Lee',
        rating: 5,
        review: 'The sushi from Sushi Station was incredible! Fresh ingredients and beautifully presented.',
        date: '2024-01-12',
        avatar: '👨‍💼'
    },
    {
        id: 5,
        customerName: 'Jessica Brown',
        rating: 5,
        review: 'Customer service is excellent and the food quality is consistently great. My go-to app for ordering!',
        date: '2024-01-11',
        avatar: '👩‍🎓'
    },
    {
        id: 6,
        customerName: 'Tom Wilson',
        rating: 4,
        review: 'Great selection of restaurants and dishes. The filters make it easy to find exactly what I want.',
        date: '2024-01-10',
        avatar: '👨‍🔧'
    }
];

// Export all data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { categories, restaurants, dishes, offers, reviews };
}
