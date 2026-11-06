# Denis Leeroi Villamiel — Portfolio Website

My personal portfolio that showcases my education, experience, academic projects, and skills. This is mostly used to present my previous projects as someone who has worked on UI/UX and frontend roles in university.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) (App Router) |
| UI Library | [React](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) / JavaScript (JSX) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
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

The site's navbar (and its buttons) scrolls to:

1. About  
2. Projects
3. Experience  
4. Education
5. Skills  
6. Contact

Upon pressing the "View All Projects" button in the "Projects" section of the home page, the site leads to my project archive, which is divided into 3 sections:
1. Featured Project
2. Academic Projects
3. Personal Projects