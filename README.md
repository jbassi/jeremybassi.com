# Jeremy Bassi - Personal Website

A simple, elegant personal website built with modern web technologies. Features large typography, minimal design, and a focus on content and readability.

## 🚀 Tech Stack

- **Runtime**: [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- **Framework**: [React 18](https://reactjs.org/) - Component-based UI library
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Build Tool**: [Vite](https://vitejs.dev/) - Fast build tool and dev server
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

## 📦 Installation

Make sure you have [Bun](https://bun.sh/) installed on your system.

1. Clone the repository:
```bash
git clone https://github.com/jeremybassi/jeremybassi.com.git
cd jeremybassi.com
```

2. Install dependencies:
```bash
bun install
```

## 🛠️ Development

Start the development server:
```bash
bun run dev
```

The site will be available at `http://localhost:3000` and will automatically open in your browser.

## 🏗️ Build

Build for production:
```bash
bun run build
```

Preview the production build:
```bash
bun run preview
```

## 📝 Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Fix ESLint errors automatically
- `bun run format` - Format code with Prettier

## 🎨 Design Features

- **Large Typography**: Emphasis on readable, large text as the primary design element
- **Minimal Layout**: Clean, distraction-free single-page design
- **Responsive Design**: Optimized for all screen sizes
- **Accent Colors**: Strategic use of color for links and emphasis
- **Smooth Scrolling**: Enhanced user experience with smooth page navigation
- **Performance Optimized**: Fast loading times and optimized bundle size

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

The design uses a mobile-first approach with progressive enhancement for larger screens.

## 🔧 Customization

### Colors
The accent color can be customized in `tailwind.config.js`:

```javascript
colors: {
  accent: {
    // Update these values to change the accent color
    500: '#f0681a', // Primary accent
    600: '#e14f10', // Hover state
    // ... other shades
  },
}
```

### Typography
Font sizes and spacing can be adjusted in the Tailwind config or by modifying the CSS classes in `src/styles/index.css`.

### Content
Update the content in `src/components/App.tsx` to reflect your personal information, work experience, and contact details.

## 📁 Project Structure

```
jeremybassi.com/
├── public/
│   ├── favicon.svg
│   └── index.html
├── src/
│   ├── components/
│   │   └── App.tsx
│   ├── styles/
│   │   └── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Deployment

This site can be deployed to any static hosting service:

### Netlify
1. Connect your GitHub repository
2. Set build command: `bun run build`
3. Set publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `bun run build`
4. Output directory: `dist`

### GitHub Pages
1. Build the project: `bun run build`
2. Deploy the `dist` folder to GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a personal website, but if you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

---

Built with ❤️ by Jeremy Bassi