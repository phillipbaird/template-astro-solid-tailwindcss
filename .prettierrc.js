module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 110,
  bracketSpacing: true,
  endOfLine: 'lf',
  plugins: ['./node_modules/prettier-plugin-astro'],
  astroAllowShorthand: true,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
