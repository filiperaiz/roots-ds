module.exports = {
  stories: [
    "../src/storydocs/**/*.stories.mdx",
    "../src/**/stories.@(ts|tsx|js|jsx|mdx)",
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  features: {
    postcss: false,
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
};
  