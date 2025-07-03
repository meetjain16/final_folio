# My Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a beautiful user interface.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **TypeScript**: Full TypeScript support for better development experience
- **Animations**: Smooth scroll animations using Framer Motion
- **Contact Form**: Functional contact form for easy communication
- **Project Showcase**: Beautiful project cards with filtering options
- **Skills Section**: Interactive skills display with progress bars
- **SEO Optimized**: Meta tags and proper HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd My_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information
Update the following files with your information:

- **Hero Section**: Edit `src/components/Hero.tsx` to change your name, title, and description
- **About Section**: Modify `src/components/About.tsx` with your personal story and experience
- **Skills**: Update `src/components/Skills.tsx` with your actual skills and proficiency levels
- **Projects**: Add your projects in `src/components/Projects.tsx`
- **Contact**: Update contact information in `src/components/Contact.tsx`

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Change fonts in the Tailwind config or import new ones in `index.html`
- **Animations**: Adjust animation settings in the component files

### Content
- **Images**: Replace placeholder images with your own
- **Links**: Update social media links and project URLs
- **Text**: Customize all text content to match your personal brand

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Explained

### Dark Mode Toggle
The website includes a dark mode toggle that persists user preference and automatically detects system preference.

### Smooth Scrolling
All navigation links use smooth scrolling to provide a better user experience.

### Responsive Design
The website is fully responsive with mobile-first design principles.

### Animation System
Uses Framer Motion for smooth, performant animations that enhance the user experience.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Unsplash](https://unsplash.com/) for placeholder images

## 📞 Contact

If you have any questions or suggestions, feel free to reach out:

- Email: hello@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Made with ❤️ using React, TypeScript, and Tailwind CSS 