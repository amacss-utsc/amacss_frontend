[![Netlify Status](https://api.netlify.com/api/v1/badges/43899d1f-3188-48f3-a9f7-441a1de4686f/deploy-status)](https://app.netlify.com/sites/amacss-frontend/deploys)
# AMACSS Frontend

Based on Gatsby and React, this website will serve as the frontend of AMACSS
[Live Demo](https://beta.amacss.org)

## Installation

Install the dependencies:

### `yarn install`

Run the development server:

### `yarn dev`

Production build to `/public`:

### `yarn build`

Cleanup cache (often fixes misc errors when run before `yarn dev`):

### `yarn clean`

## Content

Each of the sections in the site are placed in `src/sections`. Data is usually separated out into objects/arrays to be rendered in the component.

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## Styling

This project uses [styled-components]() to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.
