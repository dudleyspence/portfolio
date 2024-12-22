# **Dudley Spence's Portfolio**

Welcome to my personal portfolio, showcasing my skills, projects, and professional background. Built with **Next.js**, this portfolio includes multilingual support, dynamic rendering, and theme toggling for an enhanced user experience.

---

## **Table of Contents**

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Pages Overview](#pages-overview)
- [Screenshots](#screenshots)
- [Contact](#contact)

---

## **About the Project**

This portfolio is designed to:
- Showcase my skills, education, and projects.
- Provide a seamless, responsive, and accessible user experience.
- Support English and French with **next-intl** for content translations.
- Allow dynamic rendering of projects using data from `projects.js`.
- Enable easy communication through a contact form powered by **Web3Forms**.

The portfolio uses modern web technologies and techniques like server components, static rendering, and theme toggling to deliver optimal performance.

---

## **Features**

- **Multilingual Support**:
  - Powered by `next-intl`, with JSON dictionaries for English (`en.json`) and French (`fr.json`).
- **Light and Dark Mode**:
  - Includes a theme toggle implemented via a `ThemeProvider` in `contexts/ThemeProvider.js`.
  - Icons for light and dark mode are located in the `public/Theme` folder.
- **Dynamic Projects Page**:
  - Dynamically renders projects using content from `projects.js`, allowing easy updates.
- **Static Rendering**:
  - Components that don’t change often are rendered statically for optimal performance.
- **Server Components**:
  - Server-side rendering is used for better SEO and faster load times.
- **Contact Form**:
  - Integrated with **Web3Forms** for reliable form submissions without a backend setup.

---

## **Tech Stack**

- **Frontend**:
  - **Next.js**: Framework for React with server-side rendering and dynamic routing.
  - **TailwindCSS**: For styling.
  - **next-intl**: For internationalisation.

- **Contact Form**:
  - **Web3Forms**: For handling form submissions.

- **Hosting**:
  - **Vercel**: Deployment and hosting.

---

## **Installation**

To run this portfolio locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/dudleyspence/portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## **Usage**

### Live Demo:
Access the portfolio at [www.dudleyspence.com](https://www.dudleyspence.com).

### Navigation:
- **Home**: A welcoming introduction and quick navigation links.
- **About**: Learn about my education, technical stack, and skills.
- **Projects**: Explore the dynamically rendered projects.
- **Contact**: Use the form (powered by Web3Forms) or follow my social media links to connect.

---

## **File Structure**

Here's a simplified file tree:

```
.
├── app
│   ├── [locale]
│   │   ├── about
│   │   │   └── page.js
│   │   ├── contact
│   │   │   └── page.js
│   │   ├── projects
│   │   │   ├── page.js
│   │   │   └── projects.js
│   │   ├── layout.js
│   │   ├── globals.css
│   │   ├── page.js
│   │   └── template.jsx
├── components
│   ├── About
│   ├── Contact
│   ├── Footer
│   ├── Header
│   ├── Hero
│   ├── Home
│   ├── Projects
│   ├── UI
│   └── contexts
├── messages
│   ├── en.json
│   └── fr.json
├── public
│   ├── Projects
│   ├── Skills
│   └── Theme
└── utils
    └── BlurImageURL.js
```

---

## **Pages Overview**

1. **Home Page**:
   - A welcoming introduction with navigation to other sections.

2. **About Page**:
   - Details about my professional background, skills, and education.

3. **Projects Page**:
   - Dynamically renders project cards using content from `projects.js`.
   - Includes project images, descriptions, and links to repositories or live demos.

4. **Contact Page**:
   - A contact form powered by **Web3Forms**.
   - Links to social media profiles for additional connection points.

---

## **Internationalisation**

- **next-intl** is used for multilingual support.
- Translation files (`en.json`, `fr.json`) are stored in the `messages` directory.
- Example structure of `en.json`:
  ```json
  {
    "home.title": "Welcome to my Portfolio",
    "about.title": "About Me",
    "projects.title": "Projects",
    "contact.title": "Contact"
  }
  ```

---

## **Contact**

Dudley Spence  
**Email**: [dudley@dudleyspence.com](mailto:dudley@dudleyspence.com)  
**LinkedIn**: [linkedin.com/in/dudleyspence](https://linkedin.com/in/dudleyspence)  

