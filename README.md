# Arch Studio

A modern, responsive architecture studio website built with React, Vite, and Tailwind CSS featuring smooth animations and mobile-first design.

## 🚀 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Framer Motion powered interactions
- **Modern UI/UX** - Clean, professional architecture showcase
- **Mobile Navigation** - Hamburger menu with smooth transitions
- **Portfolio Gallery** - Responsive image grid with hover effects
- **Contact Forms** - Interactive forms with validation
- **Performance Optimized** - Fast loading with optimized assets

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Modern icon library

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design Features

- **Mobile-first approach** with progressive enhancement
- **Touch-friendly interfaces** with proper button sizing
- **Smooth scroll animations** triggered on viewport entry
- **Hover effects** and micro-interactions
- **Responsive typography** that scales across devices
- **Optimized images** for different screen sizes

## 📁 Project Structure

```
src/
├── components/
│   ├── About/          # About page components
│   ├── Contact/        # Contact page components
│   ├── Home/           # Home page components
│   ├── Portfolio/      # Portfolio components
│   └── Shared/         # Reusable components
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── assets/             # Images and static files
└── styles/             # CSS files
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd arch-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Navigation
- **Header** - Responsive navigation with mobile menu
- **Footer** - Site links and contact information

### Pages
- **Home** - Hero carousel, featured projects, about section
- **Portfolio** - Project gallery with filtering
- **About** - Team information and company details
- **Contact** - Contact form and office locations

### Shared Components
- **FeatureCard** - Project showcase cards
- **LinkPage** - Animated call-to-action buttons
- **TitlePage** - Vertical page titles

## 🎨 Animation Features

- **Scroll-triggered animations** using Framer Motion
- **Staggered entrance effects** for lists and grids
- **Hover and tap animations** for interactive elements
- **Smooth page transitions** and loading states
- **Mobile-optimized gestures** and touch interactions

## 📱 Mobile Features

- **Hamburger menu** with smooth slide animations
- **Touch-friendly buttons** (minimum 44px touch targets)
- **Swipe gestures** for image carousels
- **Optimized images** for mobile bandwidth
- **Responsive forms** with mobile keyboards in mind

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
```js
colors: {
  neutral: { 950: "#000000", 200: "#E1E1E1", 0: "#FFFFFF" },
  slate: { 500: "#7D829F", 200: "#C8CCD8", 100: "#EDEFF4" },
  // Add your custom colors
}
```

### Animations
Customize animations in `tailwind.config.js`:
```js
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',
  'slide-up': 'slideUp 0.6s ease-out',
  // Add your custom animations
}
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness across devices
5. Submit a pull request

## 📞 Support

For questions or support, please contact the development team or create an issue in the repository.