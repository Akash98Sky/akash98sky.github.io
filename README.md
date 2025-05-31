# Persona Portfolio (Built with Firebase Studio)

This is a personal portfolio website template created and modified using Firebase Studio. It's built with Next.js, React, ShadCN UI components, and Tailwind CSS, designed for easy customization and deployment as a static site.

## Core Features:

*   **Experience Showcase**: Displays a summary of professional experience, highlighting key roles, responsibilities, and company details. Includes a profile picture.
*   **Skills Gallery**: Showcases technical skills with icons in a visually appealing, uniformly-sized card grid.
*   **Project Gallery**: Presents personal projects with descriptions, images, relevant tags (tech stack), and optional links to live demos or GitHub repositories.
*   **Publications Section**: Lists academic or professional publications in a clear timeline format with links to the source.
*   **Achievement Highlights**: Highlights key achievements and recognitions.
*   **Responsive Design**: Adapts to various screen sizes, ensuring a good user experience on desktops, tablets, and mobile devices.
    *   Header navigation buttons are hidden on smaller screens.
    *   Profile picture is displayed above "About Me" text on smaller screens for better layout.
*   **Smooth Scrolling Navigation**: Provides easy navigation between sections via header links.
*   **Dynamic Header**: The header conveniently hides on scroll down and reappears on scroll up for better content visibility.
*   **Static Site Generation**: Optimized for static export (`output: 'export'` in `next.config.ts`), making it easy to deploy on platforms like GitHub Pages, Vercel, or Netlify.
*   **Theming**: Utilizes CSS variables for easy customization of the color scheme (defined in `src/app/globals.css`). Sections have alternating background colors for visual distinction.
*   **GitHub Actions for Deployment**: Includes a pre-configured workflow (`.github/workflows/deploy-gh-pages.yml`) to automatically build and deploy the static site to GitHub Pages.

## Getting Started

To get started with this template:

1.  **Clone the repository (if you haven't already).**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Customize Portfolio Data:**
    Edit `src/config/portfolio-data.ts` to update your personal information, experience, skills, projects, publications, and achievements.
4.  **Customize Styling (Optional):**
    Modify `src/app/globals.css` to change the color theme (background, foreground, accent colors, etc.) by adjusting the HSL CSS variables.
    Tailwind CSS classes are used throughout the components for styling.
5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:9002](http://localhost:9002) (or the port specified in your `package.json`) with your browser to see the result.

6.  **Build for production (static export):**
    ```bash
    npm run build
    ```
    This will create a static version of your site in the `out` directory.

## Deployment to GitHub Pages

This project is configured for static export and includes a GitHub Actions workflow (`.github/workflows/deploy-gh-pages.yml`) to automatically build and deploy the site to GitHub Pages when changes are pushed to the `main` branch.

To use this workflow:
1.  Ensure your repository is on GitHub.
2.  In your GitHub repository settings, navigate to `Settings` > `Pages`.
3.  Under "Build and deployment", set the `Source` to `GitHub Actions`.

The workflow will handle the build and deployment process. Your site will typically be available at `https://<your-username>.github.io/<your-repository-name>/`.

---

This project was initiated and iterated upon in Firebase Studio.
