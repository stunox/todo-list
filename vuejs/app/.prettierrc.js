module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  printWidth: 100,
  tabWidth: 4,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'avoid',
  importOrder: ['<THIRD_PARTY_MODULES>', '@/(.*)', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  endOfLine: 'auto',
  htmlWhitespaceSensitivity: "ignore",
  vueIndentScriptAndStyle: true,
  overrides: [{
    files: "*.vue",
    options: {
      parser: "vue"
    }
  }]
}