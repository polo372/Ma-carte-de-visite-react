# Frontend Mentor - Meet landing page solution

This is a solution to the [Meet landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/meet-landing-page-rbTDS6OUR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Links

- Solution URL: [solution URL](https://github.com/polo372/meet-landing-page)
- Live Site URL: [live site URL](https://meetpolo.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I spend a long time on this problem, how give to my footer a background image with a filtre.

```css
footer{
    position: relative;
    z-index: 1;
    padding: 64px 32px;
    width: 100%;
    background-image: url("/assets/mobile/image-footer.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 0 200px rgba(77, 150, 169,0.8) inset;
    height: 374px;
}
```

### Continued development

I have to work on the margin and use the spacing variable.


### AI Collaboration

I use claude to help me, it was a really hard challenge to me

## Author

- Website - [Polo372](https://github.com/polo372)
- Frontend Mentor - [@polo372](https://www.frontendmentor.io/profile/polo372)
- Twitter - [@plbd372](https://x.com/plbd372)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
