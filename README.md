# Astro + Solid-JS + TailwindCSS Template

An [Astro](https://astro.build) project template with the following additions:

- Solid
- TailwindCSS
- Prettier with Astro plug-in. NOTE: We were going to use the Tailwind Prettier plug-in but it currently has issues working with other plug-ins (see [this issue](https://github.com/tailwindlabs/prettier-plugin-tailwindcss/issues/31)). There is also a couple of [other](https://github.com/withastro/prettier-plugin-astro/issues/272) [issues](https://github.com/withastro/prettier-plugin-astro/issues/260) in the Astro plugin at the time of writing.  Thus Layout.astro is currently excluded from Prettier processing (see .prettierignore).
- ESLint with Typescript and eslint-plugin-tailwindcss plugins.  The Tailwind ESLint plugin is being used as a workaround for the current problems in the Prettier Tailwind plugin.

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

## 👀 Want to learn more?

Check out the [Astro documentation](https://docs.astro.build).
