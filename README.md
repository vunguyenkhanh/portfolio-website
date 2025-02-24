# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, and Tailwind CSS.

## Features

- 🎨 Modern UI/UX with Tailwind CSS and Shadcn UI
- 📱 Fully responsive design
- ⚡ Fast page loads with Next.js 14 App Router
- 📝 Blog integration with Dev.to API
- 🔍 SEO optimized with Next.js Metadata
- 📊 Project showcase with filtering
- 📬 Contact form
- 🎯 Infinite scroll and search functionality
- 🔄 Smooth animations with Framer Motion
- 📜 Custom styled scrollbar with native browser support

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **Fonts:** [Geist Font](https://vercel.com/font)
- **Form Handling:** [React Hook Form](https://react-hook-form.com/)
- **Form Validation:** [Zod](https://zod.dev/)
- **Blog Integration:** [Dev.to API](https://dev.to/api)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory and add your environment variables:

```env
NEXT_PUBLIC_BASE_URL=your_website_url
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                   # Next.js 14 app directory
│   ├── (routes)/         # App routes
│   ├── api/              # API routes
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── layout/          # Layout components
│   ├── sections/        # Page sections
│   ├── shared/          # Shared components
│   └── ui/              # UI components
├── lib/                 # Utility functions
│   ├── config/         # Configuration
│   ├── services/       # API services
│   └── utils/          # Helper functions
├── public/             # Static files
│   └── images/         # Images
└── styles/            # Global styles
```

## Deployment

The website is deployed on GitHub Pages. Every push to the main branch triggers an automatic build and deployment through GitHub Actions.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **Vũ Nguyễn Khánh**
- Website: [vunguyenkhanh.com](https://vunguyenkhanh.com)
- GitHub: [@vunguyenkhanh](https://github.com/vunguyenkhanh)
- LinkedIn: [Vũ Nguyễn Khánh](https://linkedin.com/in/kain6599)

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
