# Expenova - Professional Financial Insights Platform

## Project Overview
The **Expenova** is a professional, responsive web application designed to help users track their expenses, analyze spending trends, and receive personalized financial advice through an AI-powered chat interface. Built with a focus on UI/UX excellence, it features a premium glassmorphism aesthetic, animated backgrounds, dark/light mode toggle, and intuitive interactions.

---

## Scenario Chosen
**Personal Finance Management & AI Advisory**

Users can:
- Track daily expenses with categorization
- Visualize spending patterns through interactive charts
- Receive AI-powered financial insights and recommendations
- Chat with an AI advisor for personalized financial guidance
- Switch between dark and light themes for comfortable viewing

---

## Color Palette

### Primary Colors
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Primary (Indigo)** | `#6366f1` | Main buttons, links, brand identity, gradients |
| **Primary Hover** | `#4f46e5` | Button hover states, interactive elements |
| **Secondary (Pink)** | `#ec4899` | Accent elements, gradients, highlights |
| **Accent (Purple)** | `#8b5cf6` | Special features, badges, decorative elements |

### Neutral Shades
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Dark Background** | `#0f172a` | Dark mode background base |
| **Dark Surface** | `#1e293b` | Dark mode cards, surfaces |
| **Light Background** | `#f8fafc` | Light mode background base |
| **Light Surface** | `#ffffff` | Light mode cards, surfaces |
| **Text Dark** | `#334155` | Light mode text |
| **Text Light** | `#f1f5f9` | Dark mode text |
| **Text Muted** | `#94a3b8` | Secondary text, labels |

### Gradients
- **Main Gradient**: `linear-gradient(135deg, #6366f1 0%, #ec4899 100%)`
- **Hover Gradient**: `linear-gradient(135deg, #4f46e5 0%, #db2777 100%)`
- **Background Gradient**: Animated multi-color gradient for depth

### Color Usage Explanation
- **Primary Indigo** creates a professional, trustworthy feel perfect for financial applications
- **Secondary Pink** adds energy and modern appeal, breaking the traditional finance stereotype
- **Glassmorphism** uses translucent backgrounds with blur effects for a premium, layered UI
- **Dark/Light modes** provide user choice and reduce eye strain in different lighting conditions

---

## Typography / Font Selection

### Heading Font: **Space Grotesk**
- **Font Family**: `'Space Grotesk', sans-serif`
- **Weights Used**: 600 (Semi-Bold), 700 (Bold)
- **Usage**: All headings (h1-h6), navbar brand, section titles
- **Characteristics**: Modern, geometric, tech-forward appearance

### Body Font: **Outfit**
- **Font Family**: `'Outfit', sans-serif`
- **Weights Used**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold)
- **Usage**: Paragraph text, buttons, labels, form inputs
- **Characteristics**: Clean, highly readable, friendly

### Font Usage Mapping
```
h1, h2, h3, h4, h5, h6 → Space Grotesk (700)
.navbar-brand → Space Grotesk (800)
body, p, span → Outfit (400)
buttons → Outfit (600)
labels → Outfit (500)
small text → Outfit (300)
```

---

## Features List

✅ **Expense Tracking**
- Add, edit, and delete daily expenses
- Automatic categorization (Food, Transport, Entertainment, etc.)
- Date-based expense logging

✅ **Visual Analysis**
- Interactive pie charts for category breakdown
- Real-time spending statistics
- Daily spending history with status indicators

✅ **AI Insights**
- Real-time feedback on financial health
- Personalized spending recommendations
- Budget limit warnings

✅ **AI Chat Advisor**
- Natural language chat interface
- Voice input support
- Financial advice and Q&A

✅ **Professional UI/UX**
- Advanced glassmorphism design
- Animated gradient backgrounds
- Smooth scroll animations (`fade-in-up`)
- Hover effects and micro-interactions

✅ **Dark/Light Mode Toggle**
- Persistent theme preference (localStorage)
- Smooth theme transitions
- Optimized colors for both modes

✅ **Fully Responsive**
- Mobile-first design approach
- Collapsible navbar with hamburger menu
- Touch-friendly interfaces
- Optimized for all screen sizes

---

## Tech Stack

- **HTML5**: Semantic structure, accessibility
- **CSS3**: Custom properties, Flexbox, Grid, Animations, Media Queries
- **Bootstrap 5**: Responsive layout, components, utilities
- **JavaScript (Vanilla)**: Core logic, DOM manipulation, localStorage, theme toggle
- **Chart.js**: Data visualization for expense analytics
- **Google Fonts**: Space Grotesk & Outfit typography

---

## Component Checklist Confirmation

- [x] **Responsive Navbar** - Glassmorphism style with collapsible mobile menu
- [x] **Fixed Footer** - Consistent across all pages with glassmorphism
- [x] **Hero Section** - Animated entrance with stats and CTAs
- [x] **Glassmorphism Cards** - Translucent cards with blur effects and hover animations
- [x] **Modals** - Feature explanation modals with glass styling
- [x] **Input Forms & Validation** - Styled forms with icons and validation
- [x] **Charts (Chart.js)** - Interactive pie charts for data visualization
- [x] **Chat Interface** - Real-time chat UI with typing indicators
- [x] **Dark/Light Mode Toggle** - Theme switcher with persistence
- [x] **Scroll Animations** - Fade-in-up effects on page load
- [x] **Mobile Responsive** - Optimized for all devices

---

## Folder Structure

```
AI-Analyzer/
│
├── index.html              # Home Page - Hero, Features, Modals
├── login.html              # Login Page - Authentication UI
├── about.html              # About Page - Mission, Values
├── analyze.html            # Analyze Page - Expense Dashboard
├── speak.html              # Chat Page - AI Advisor Interface
│
├── assets/
│   ├── css/
│   │   └── style.css       # Global Styles (Glassmorphism, Themes, Responsive)
│   │
│   ├── js/
│   │   ├── main.js         # Theme Toggle Logic
│   │   ├── analyze.js      # Expense Analysis & Chart Logic
│   │   └── chat.js         # Chat Interface Logic
│   │
│   └── images/             # Image Assets (if any)
│
└── README.md               # Project Documentation
```

---

## Screenshots

### Desktop Views

#### Home Page (Dark Mode)
*Professional hero section with glassmorphism cards and feature showcase*

#### Analyze Dashboard (Dark Mode)
*Expense tracking interface with charts and AI insights*

#### Chat Interface (Dark Mode)
*AI advisor chat with modern messaging UI*

#### Login Page (Light Mode)
*Clean authentication form with glassmorphism*

### Mobile Views

#### Mobile Navigation
*Responsive hamburger menu with collapsible navigation*

#### Mobile Dashboard
*Touch-optimized expense tracking on mobile devices*

> **Note**: Add actual screenshots here after deployment

---

## Setup & Deployment

### Local Setup
1. Clone the repository
   ```bash
   git clone <repository-url>
   cd AI-Analyzer
   ```

2. Open `index.html` in your browser
   - No build step required (Vanilla JS)
   - Works offline after first load

### GitHub Pages Deployment
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch (main/master)
4. Set folder to root `/`
5. Save and wait for deployment

---

## Live Demo

**GitHub Pages Link**: [Insert Your Live Link Here]

---

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Credits

**Developed by**: [Your Name/Team Name]  
**Course**: [Course Name]  
**Institution**: [Institution Name]  
**Year**: 2025

---

## License

This project is created for educational purposes.

---

**© 2025 Expenova. All rights reserved.**
