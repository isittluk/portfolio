# Portfolio
This is the source code for my UI/UX and front-end development portfolio. This portfolio utilizes [SCSS](https://github.com/sass/sass) and [Handlebars.js](https://handlebarsjs.com/) for increased efficiency for development and release phases.

## Purpose
This directory displays all of the code used for unique assets. Because of the simplicity of this project, there is a lot of room for visual design, where I will be using JavaScript to create complex motion graphics for specific elements. 

## How to use it
Most dependencies are requested via APIs, so little is required to download. Installed dev dependencies are visible in `package.json`. This does assume that the user has [npm](https://www.npmjs.com/) and [live-server](https://www.npmjs.com/package/live-server) installed. To view this project locally, follow these steps:

1. download project files (omit node_modules)
2. `npm init`
3. `npm install node-sass --save-dev`

To edit the files, follow these steps:
1. `npm run watch:scss`
2. `live-server`

## Customize
You may want to customize or use the project as a template. Here is an overview of notable files:
- `index.html` contains all text-related content for the landing page.
- `display.html` uses handlebars.js to create a template for all written content for each portfolio page. The text can be edited in `portfolio_template.js`.
- `portfolio_template.js` contains all the written content that is referenced in `display.html`. To keep the template as it is, only edit the text content in this file. 
