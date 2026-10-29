# Denis Leeroi Villamiel — Portfolio Website

My personal portfolio that showcases my education, experience, academic projects, and skills. This is mostly used to present my previous projects as someone who has worked on UI/UX and frontend roles in university.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) (App Router) |
| UI Library | [React](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) / JavaScript (JSX) |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 |
| Icons | [react-icons](https://react-icons.github.io/react-icons) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) via `next/font` |
| Linting | ESLint (`eslint-config-next`) |

## Running The Portfolio

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your browser.

## Project Structure

```
app/
  components/     # Profile, About, Education, Experience, Projects, Skills, Navbar
  images/         # Profile and asset images
  projects/       # Information and details on my projects
  page.tsx        # Single-page layout (sections scroll via navbar anchors)
  layout.tsx      # Root layout and metadata
  globals.css     # Global styles and Tailwind import
```

## Sections

The site is a single-page scrolling portfolio. The navbar (and its buttons) scrolls to:

1. About  
2. Education  
3. Experience  
4. Projects
5. Skills  
