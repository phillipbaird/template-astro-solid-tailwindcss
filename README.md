# Astro + Solid-JS + TailwindCSS Template

An [Astro](https://astro.build) project template with the following additions:

- [SolidJS](https://www.solidjs.com)
- [TailwindCSS](https://tailwindcss.com)
- [Prettier](https://prettier.io) with [Astro plug-in](https://github.com/withastro/prettier-plugin-astro).
  We were going to use the [Tailwind Prettier plug-in](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) but it currently has issues working with other plug-ins (see [this issue](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31)). There is also a couple of [other](https://github.com/withastro/prettier-plugin-astro/issues/272) [issues](https://github.com/withastro/prettier-plugin-astro/issues/260) in the Astro plugin at the time of writing.  For the time being, be cautious using Prettier if you project contains `<style>` or `<script>` sections in your `.astro` files.
- [ESLint](https://eslint.org) with Typescript and [TailwindCSS plugins](https://github.com/francoismassart/eslint-plugin-tailwindcss). The Tailwind ESLint plugin is being used as a workaround for the current problems in the Prettier TailwindCSS plugin.

## Usage

```shell
$ pnpx degit phillipbaird/template-astro-solid-tailwindcss my-astro-project
$ cd my-astro-project
$ pnpm install # or npm install or yarn install
```

This templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.  This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `pnpm install`      | Installs dependencies                              |
| `pnpm dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm start`        | Same as pnpm dev                                   |
| `pnpm build`        | Build your production site to `./dist/`            |
| `pnpm preview`      | Preview your build locally, before deploying       |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm astro --help` | Get help using the Astro CLI                       |

## TailwindCSS Notes

The TailwindCSS integration has been configured with an explicit `tailwind.css` file (found in `./src/styles`) instead of the default implicit `base.css` inserted by the integration. You therefore need to explicity import `styles/tailwind.css` into any layouts/pages that need to use TailwindCSS. In most cases this means importing the file into your top level layout(s).  See `./src/layouts.Layout.astro` as an example.

## 👀 Want to learn more?

Check out the [Astro documentation](https://docs.astro.build).
