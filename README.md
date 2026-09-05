# ShopEase E-Commerce Store

A modern, fully-functional e-commerce web application built with **React**, **Vite**, and **React Router**. Perfect for learning full-stack web development and deployment.

![ShopEase](https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80)

## 🌟 Features

- **Home Page**: Hero section with featured products and category showcase
- **Products Page**: Browse all products with advanced search and category filtering
- **Product Details**: View full product information with images and descriptions
- **Shopping Cart**: Add/remove items, adjust quantities, and view order summary
- **About Page**: Learn more about ShopEase
- **Responsive Design**: Fully mobile-optimized for all screen sizes
- **React Router**: Client-side routing with no page reloads
- **Modern UI**: Clean, professional design with smooth interactions
- **Optimized Performance**: Minified bundle with lazy-loaded images

## 📁 Project Structure

```
shopease-ecommerce/
├── src/
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Footer.jsx          # Footer component
│   │   └── ProductCard.jsx     # Product card component
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Products.jsx        # Products listing page
│   │   ├── ProductDetails.jsx  # Single product page
│   │   ├── Cart.jsx            # Shopping cart page
│   │   └── About.jsx           # About page
│   └── data/
│       └── products.js         # Product data
├── index.html                  # HTML entry file
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── vercel.json                 # Vercel routing configuration
└── .gitignore                  # Git ignore file
```

## 🚀 Live Demo

Visit the live application: [ShopEase on Vercel](https://shopease-ecommerce.vercel.app)

## 🔧 Installation & Setup

### Prerequisites
- Node.js 16+ and npm installed
- Git installed

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/shopease-ecommerce.git
cd shopease-ecommerce
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

## 📦 Build & Production

### Create production build
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```
Preview available at `http://localhost:4173`

## 🌐 Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with heroes and featured products |
| `/products` | Browse all products with search and filters |
| `/products/:id` | Individual product details page |
| `/cart` | Shopping cart with order summary |
| `/about` | About ShopEase page |
| `*` | 404 page |

## 💻 Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Routing**: React Router 7
- **Styling**: CSS3 (Responsive Grid & Flexbox)
- **State Management**: React Hooks (useState)
- **Deployment**: Vercel

## 📊 Performance Metrics

Production build sizes (gzip compressed):
- **CSS**: 1.96 KB
- **JavaScript**: 77.56 KB
- **Total**: ~79 KB

All assets are optimized and minified by Vite.

## ✨ Key Features Implementation

### Shopping Cart
- Add products to cart
- Remove items from cart
- Increase/decrease quantity
- Real-time total calculation
- Persists in session state

### Product Filtering
- Search by product name (real-time)
- Filter by category (Electronics, Fashion, Accessories)
- All/Electronics/Fashion/Accessories options
- Shows "No products found" when no matches

### Responsive Design
- Mobile-first approach
- Breakpoints: 650px and 900px
- Touch-friendly buttons and interactions
- Flexible grid layouts

### Image Optimization
- Lazy loading on all product images
- External images from Unsplash (high quality)
- Optimized sizes: 800px width for consistency

## 🎨 Customization

### Add More Products
Edit `src/data/products.js`:
```javascript
{
    id: 9,
    name: "Product Name",
    price: 9999,
    category: "Electronics",
    rating: 4.8,
    description: "Product description here",
    image: "https://image-url.jpg"
}
```

### Change Colors
Edit `src/index.css` to modify the main color from `#2563eb` (blue) to your preferred color.

### Add Categories
Update categories array in `src/pages/Products.jsx`:
```javascript
const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Accessories",
    "Your New Category"
];
```

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Launch ShopEase"
git push -u origin main
```

2. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with GitHub
   - Click "Add New" → "Project"
   - Select your repository
   - Click "Import"

3. **Configure Build Settings**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your live URL will appear

**Important**: Make sure `vercel.json` is in your project root for React Router to work correctly!

## 🐛 Troubleshooting

### Routes return 404 on Vercel
Ensure `vercel.json` contains:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Images not loading
Check that image URLs are HTTPS and accessible from Vercel.

### Build fails
- Check console for error messages
- Verify all imports are correct
- Make sure node_modules is in .gitignore

## 📚 Learning Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 📝 Future Enhancements

- [ ] User authentication and accounts
- [ ] Payment gateway integration (Stripe, Razorpay)
- [ ] Backend API with Node.js/Express
- [ ] Database integration (MongoDB, PostgreSQL)
- [ ] Order history and user dashboard
- [ ] Product reviews and ratings
- [ ] Wishlist feature
- [ ] Admin panel for product management
- [ ] Email notifications
- [ ] Real-time inventory management

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a capstone project for learning React, Vite, and full-stack development.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Happy Coding! 🎉**

For questions or issues, please open a GitHub issue in the repository.
