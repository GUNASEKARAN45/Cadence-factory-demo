# 🍔 FoodHub - Food Ordering Website

A modern, responsive food ordering homepage built with vanilla HTML, CSS, and JavaScript.

## 🎯 Project Overview

This project implements a complete food ordering website homepage featuring:
- Advanced search and filtering
- Full-featured shopping cart with session persistence
- 8 food categories, 8 restaurants, 16 dishes
- Special offers and customer reviews
- Fully responsive design for all devices

## 🚀 Quick Start

### View the Application
Simply open `index.html` in any modern web browser. No server or build process required!

### Run Tests
Open `test.html` in a browser to see automated test results for all core functionality.

## ✨ Features

### 🔍 Search & Filter
- **Text Search**: Find dishes by name or description
- **Category Filter**: Filter by Pizza, Burgers, Sushi, and more
- **Price Range**: Budget ($0-10), Medium ($10-20), Premium ($20+)
- **Combined Filters**: All filters work together seamlessly

### 🛒 Shopping Cart
- **Session Persistence**: Cart saves during browser session
- **Quantity Management**: Increase/decrease item quantities
- **Price Calculations**: Subtotal, 8% tax, delivery fee, and total
- **Real-time Updates**: Badge counter and modal update instantly
- **Notifications**: Toast messages for all cart actions

### 📱 Responsive Design
- **Mobile-First**: Optimized for small screens
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1023px
  - Desktop: 1024px+
- **Touch-Friendly**: Large tap targets for mobile users
- **Adaptive Layouts**: Single to multi-column grids

### 🎨 Modern UI
- **Clean Design**: Minimalist interface with focus on content
- **Smooth Animations**: Hover effects and transitions
- **High-Quality Images**: Food photography from Unsplash
- **Consistent Styling**: CSS custom properties for theming

## 📁 Project Structure

```
/
├── index.html              # Main homepage
├── test.html               # Test suite
├── css/
│   ├── style.css          # Global styles & variables
│   ├── header.css         # Header & cart modal
│   ├── hero.css           # Hero section
│   ├── categories.css     # Food categories
│   ├── restaurants.css    # Restaurant cards
│   ├── offers.css         # Special offers
│   ├── dishes.css         # Popular dishes
│   ├── reviews.css        # Customer reviews
│   ├── footer.css         # Footer component
│   └── responsive.css     # Media queries
├── js/
│   ├── data.js            # Mock data
│   ├── cart.js            # Cart management
│   ├── search.js          # Search & filter logic
│   ├── ui.js              # UI rendering
│   └── main.js            # Application controller
└── images/
    └── .gitkeep           # Placeholder directory
```

## 💻 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties
- **JavaScript (ES6+)**: Modular, vanilla JS
- **Session Storage**: Client-side data persistence
- **No Dependencies**: Zero external libraries or frameworks

## 📊 Mock Data

### Categories (8)
Pizza, Burgers, Sushi, Desserts, Drinks, Salads, Pasta, Chicken

### Restaurants (8)
Pizza Paradise, Burger Bliss, Sushi Station, Sweet Delights, 
Green Garden, Pasta Palace, Chicken Corner, Beverage Bar

### Dishes (16)
Wide variety across all categories with realistic pricing

### Offers (5)
Promotional discounts and special deals

### Reviews (6)
Customer testimonials with 4-5 star ratings

## 🎨 Design System

### Colors
- **Primary**: #FF6B6B (Coral Red)
- **Secondary**: #4ECDC4 (Turquoise)
- **Accent**: #FFE66D (Yellow)
- **Text**: #2C3E50 (Dark Blue-Gray)

### Typography
- **Font**: System font stack for performance
- **Scale**: 0.75rem to 2.5rem

### Spacing
- **Scale**: 0.5rem to 4rem increments

## 🧪 Testing

All features have been tested:
- ✅ Data loading and rendering
- ✅ Cart operations (add, remove, update)
- ✅ Search and filtering
- ✅ Session storage persistence
- ✅ Price calculations
- ✅ Responsive layouts
- ✅ User interactions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Features

- Hamburger menu navigation
- Full-width search bar
- Stacked layouts
- Touch-optimized controls
- Lazy loading images
- Optimized performance

## 🔧 How It Works

### Cart System
1. User clicks "Add to Cart" on a dish
2. Cart module adds/updates item
3. Data saved to sessionStorage
4. UI updates automatically (badge, modal)
5. Notification shown to user

### Search & Filter
1. User enters search term or selects filters
2. Filter functions process the criteria
3. Dishes array filtered by all active filters
4. UI re-renders with filtered results
5. "No results" shown if no matches

### Session Persistence
1. Cart data saved to sessionStorage on every change
2. On page load, cart reads from sessionStorage
3. Data persists until browser/tab closes
4. No backend required

## 🎯 Use Cases

1. **Browse Menu**: Explore categories and restaurants
2. **Search Food**: Find specific dishes quickly
3. **Filter by Price**: Find dishes in your budget
4. **Add to Cart**: Build your order
5. **Manage Cart**: Adjust quantities, remove items
6. **View Offers**: Check current promotions
7. **Read Reviews**: See what customers say
8. **Mobile Shopping**: Order on the go

## 🚀 Deployment

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service
- Any web server (Apache, Nginx)

Simply upload all files maintaining the directory structure.

## 📝 Code Quality

- **Modular**: Separated concerns (data, UI, logic)
- **Documented**: Comments explain complex logic
- **Semantic**: Meaningful names and structure
- **Accessible**: ARIA labels and keyboard navigation
- **Maintainable**: Easy to understand and extend

## 🎓 Learning Resources

This project demonstrates:
- Vanilla JavaScript application architecture
- CSS custom properties (CSS variables)
- Responsive web design techniques
- Event-driven programming
- Client-side data persistence
- Modular CSS organization

## 🔮 Future Enhancements

Potential additions (not currently implemented):
- Backend API integration
- User authentication
- Real payment processing
- Order tracking system
- User reviews and ratings
- Favorites/wishlist feature
- Restaurant detail pages
- Dish customization options

## 📄 License

This project is created for demonstration purposes.

## 👨‍💻 Development

### File Sizes
- Total: ~3,500 lines of code
- HTML: 251 lines
- CSS: 1,775 lines
- JavaScript: 1,364 lines

### Performance
- Lazy loading images
- Efficient event delegation
- Minimal DOM manipulation
- Optimized CSS selectors

## 🎉 Summary

FoodHub is a complete, production-ready food ordering homepage that showcases modern web development best practices. It's responsive, interactive, and ready for deployment or further development.

---

**Built with ❤️ using Vanilla JavaScript**
