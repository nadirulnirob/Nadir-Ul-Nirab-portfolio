# Nadirul Nirab — Personal Portfolio

A responsive React portfolio built with Vite. It includes all required assignment sections and five additional interactions.

## Features
- Responsive navigation with active-section highlighting
- Home, About, Skills, Projects, Contact and Footer sections
- Project cards generated from an array with `.map()`
- Project filtering (All, React, Django, API)
- Dark / light theme toggle (saved in local storage)
- Contact form with React state, `onSubmit`, required-field and email validation
- Scroll-to-top button
- Downloadable CV file

## Run locally
1. Install **Node.js LTS**.
2. Extract the ZIP and open this folder in VS Code.
3. Open the terminal in VS Code.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Build for deployment
```bash
npm run build
npm run preview
```
The production website is generated in the `dist` folder.

## Publish on GitHub
Create a new empty GitHub repository, then run these commands in this project folder:

```bash
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own repository URL.

## Deploy on Vercel
1. Push the project to GitHub.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the portfolio repository.
4. Keep the default Vite settings (Build Command: `npm run build`, Output Directory: `dist`).
5. Click **Deploy**.

## Personalize before submission
- Check your name, education and project descriptions in `src/App.jsx` and `src/data/projects.js`.
- Replace the placeholder LinkedIn/Facebook links and `hello@nadirul.dev` with your real contact details.
- The contact form currently validates locally and displays a success message; it does **not** send an email. Connect Formspree, EmailJS or a backend if you need actual message delivery.
- Project cards use custom CSS artwork as preview images. Replace these with your own screenshots if available.
- Update `public/cv.pdf` with your final CV before submitting.
- Add real live-demo URLs in `src/data/projects.js` when your projects are deployed.
