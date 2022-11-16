[![Netlify Status](https://api.netlify.com/api/v1/badges/43899d1f-3188-48f3-a9f7-441a1de4686f/deploy-status)](https://app.netlify.com/sites/amacss-frontend/deploys)
# AMACSS Frontend

Based on Gatsby and React, this website will serve as the frontend of AMACSS
[Live Demo](https://beta.amacss.org)

## Installation

Upgrade dependencies:

### `yarn upgrade`

Install the dependencies:

### `yarn install`

Cleanup cache (often fixes misc errors when run before `yarn dev`):

### `yarn clean`

Run the development server:

### `yarn dev`

Production build to `/public`:

### `yarn build`

## Content

Each of the sections in the site are placed in `src/sections`. Data is usually separated out into objects/arrays to be rendered in the component.

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## Styling

This project uses [styled-components]() to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.

## Common Problems

### If you get `digital envelop routines::unsupported` error:
#### Windows
run `set NODE_OPTIONS=--openssl-legacy-provider` in your terminal.
#### Mac OS
run `export NODE_OPTIONS=--openssl-legacy-provider` in your terminal.

If these don't work, look at [Stack Overflow](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported).

### If you get a `ERR_REQUIRE_ESM` error, change the require to import('remark-mdx);

### If you get `node: --openssl-legacy-provider is not allowed in NODE_OPTIONS` error:
#### Windows
run `set NODE_OPTIONS=` or `SETX NODE_OPTIONS ""` in your terminal.

If these don't work, look at [Stack Overflow](https://stackoverflow.com/questions/72866798/node-openssl-legacy-provider-is-not-allowed-in-node-options).

### If you get `building static HTML failed for path "/<page>/"`, review [Stack Overflow](https://stackoverflow.com/questions/70962885/building-static-html-failed-for-path-styles-gatsby-fontawesome)

## Upgrade all `package.json` dependencies

run `yarn upgrade @fullcalendar/core@latest @fullcalendar/google-calendar@latest @fullcalendar/react@latest @svgr/webpack@latest gatsby-plugin-image@latest gatsby-plugin-alias-imports@latest gatsby-plugin-alias-imports@latest gatsby-plugin-google-fonts@latest gatsby-plugin-manifest@latest gatsby-plugin-offline@latest gatsby-plugin-react-helmet@latest gatsby-plugin-sass@latest gatsby-plugin-sharp@latest gatsby-plugin-styled-components@latest gatsby-plugin-svgr@latest gatsby-source-filesystem@latest gatsby-transformer-sharp@latest google-maps-react@latest node@latest node-sass@latest prop-types@latest react@latest react-anchor-link-smooth-scroll@latest react-collapsible@latest react-dom@latest react-google-maps@latest react-helmet@latest react-loadable@latest react-scripts@latest react-scrollspy@latest remark-mdx@latest styled-components@latest @fullcalendar/daygrid@latest @fullcalendar/interaction@latest @fullcalendar/timegrid@latest prettier@latest`

## Upgrade from gatsby-image to gatsby-plugin-image docs

[Gatsby Documentation](https://www.gatsbyjs.com/docs/reference/release-notes/image-migration-guide/)

## Documentation

### Navigation

- About (includes team)
- Events
- Resources
- Team
- Contact
- FAQs
- Constitution