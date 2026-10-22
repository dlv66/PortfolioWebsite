# Denis Leeroi Villamiel — Portfolio Website

Personal portfolio showcasing education, experience, academic projects, and skills.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| UI Library | [React](https://react.dev) 19 |
| Language | [TypeScript](https://www.typescriptlang.org) / JavaScript (JSX) |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 |
| Icons | [react-icons](https://react-icons.github.io/react-icons) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) via `next/font` |
| Linting | ESLint (`eslint-config-next`) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
  components/     # Profile, About, Education, Experience, Projects, Skills, Navbar
  images/         # Profile and asset images
  page.tsx        # Single-page layout (sections scroll via navbar anchors)
  layout.tsx      # Root layout and metadata
  globals.css     # Global styles and Tailwind import
```

## Sections

The site is a single-page portfolio. The navbar scrolls to:

1. About  
2. Education  
3. Experience  
4. Projects  
5. Skills  
