# 11ty Starter

The goal of this project is to bring together what I believe are most pragmatic and performant frontend frameworks and tools into a cohesive template for making web development wonderful.

## Getting Started

- `yarn` to grab dependencies
- `yarn dev` to fire up dev server
- `yarn build` to build static site

## Templating

### 11ty

This project uses [11ty](https://www.11ty.dev/docs/) for templating and static generation. All templating takes place inside the `src` directory.

Refer to the [11ty docs](https://www.11ty.dev/docs/) for more information on how to customize 11ty to your liking, it is an incredibly powerful tool!

### Assets

All static assets, like images and fonts, should be placed in `public`, as it is copied as-is into the `dist` directory.

## Scripting

This project uses a combination of tools to make developing dynamic data-driven scripting simple and pleasant.

### Rollup

For bundling, this project uses [Rollup](https://rollupjs.org/guide/en/). This is a fantastic bundler that makes complex bundling simple and highly configurable. See `rollup.config.js` to see what is going on under the hood.

### Svelte

For complex functionality that doesn't require SEO, such as pulling data from an API client side or sending post requests, this project utilitizes [Svelte](https://svelte.dev). Svelte is an exceptional JS framework that makes reactivity simple and predictable.

**Note:** See `src/index.njk` and `src/_bundle/scripts/svelte.js` to see how Svelte can be initialized on pages.

## Styling

This project uses [TailwindCSS](https://tailwindcss.com/) for styling. This allows us to generate a giant list of utility classes that can be shared across differing templating languages and frameworks. The configuration file is located at `tailwind.config.js`, and all imports are located in `src/_bundle/styles`.

### Tailwind

I am using the default configuration for ease-of-use, and so that people can use great tools like Tailwind UI to quickly bootstrap a site!

## Knock Yourself Out!

Thank you for taking the time to check out this repo and read through the docs. I hope this tool is useful and pleasant to work with. Have a great day!
